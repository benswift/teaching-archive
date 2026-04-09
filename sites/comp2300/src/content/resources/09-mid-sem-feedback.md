---
title: Mid-Semester Exam Feedback
summary: (hopefully) helpful feedback on some of the issues which came up in marking the mid-sem exams
hidden: true
---

:::info
If you didn't do as well as you'd liked in the mid-semester exam, don't panic.
It's worth *much* less than the final exam, so take the wake-up call now and
focus on doing well in the final.
:::

## Question 1

Question 1 was mostly short-answer, and in general people did pretty well.

### Be careful of word sizes

Remember, the `.word` (and `.byte` and `.hword`) directives always fill up their
full amount of space, even if it's mostly zeroes.

For example

```arm
.word 0x1, 0xbeef, 0xdeadbeef
```

will end up in memory like (the spacing isn't meaningful, I've just used it to
make the groupings clearer).

```
01 00 00 00   ef be 00 00   ef be ad de
```

## Question 2: Traffic Light Controller

### Misunderstanding of memory mapped registers

The was some confusion about what a [memory-mapped register](/labs/05-blinky/#exercise-2) is. Some answers tried to use `tlcr` as a
normal register; some used it as a memory address, and tried to do `ldr r0,
[tlcr]` from it. This is not correct. Memory mapped registers are registers
which you read & modify via loads & stores to a particular address.

Basically, this is what [lab 5](/labs/05-blinky/)
is all about.

The correct approach is:

```arm
ldr r1, =0x40002000 @ memory-mapped address of the tlcr register
ldr r0, [r1]        @ r0 now holds the current register value
```

### Memory load & store

It's tempting to try and do this to load from address `0x40002000`:

```arm
ldr r0, [0x40002000]
```

This short cut is wrong, you can only put registers within the square brackets.
So a `ldr r1, =0x40002000` is necessary.

There's also some confusion about memory offsets.

```arm
ldr r0, [r1, 8]
```

that instruction will **not** load **bit 8** from the memory address, 
but rather **32 bits from offset of 8 bytes**. Offsets are in bytes (like all
things to do with memory addresses).

It's also important to remember that `ldr` loads a 32-bit value, `ldrh` loads
half-word (16-bit), and `ldrb` loads 1 byte.

### Registers

You cannot use a register without first initialising it---for example you cannot
assume that it will be 0 to start with (or any other value).

Also, remember that large numbers (too big to be immdediates) can't be `mov`ed
into a register. The best way to do it is to do `ldr r0, =<number>` for
everything, and let the compiler to decide to use `mov` or `ldr`.

### Bit shifting and logic ops

Some answers used bit shifting to clear a register, e.g.:

```arm
@ to get bit<8> to bit<0> position,
@ and clear all other bits
lsl r0, 23
lsr r0, 31
```

It's ok, though it can be a bit confusing, and usually doesn't save any
instructions over just a bit-mask and rotate.

Some answers used this approach to check if a bit is set:

```arm
and r0, 0x100
cmp r0, 0x100
beq error
```

This is ok as long as you only care about that bit (and the rest don't matter).
For example, this is fine if you want to check if the orange bit is set, but if
you want to check if the orange light **only** is set you need to check all
three "light" bits (and the above approach won't work).

### Labels and execution order

If you want some initialisation code, you can't just do this:

```arm
@ some init code
mov r0, 0
switch_to_red:
@ code
```

This is not ok---the initialisation code is not reachable. You might need
another label.

### Other issues

Some answers showed a bit of confusion about how many bits are in a hexadecimal
number (e.g. used `0x4141` as the mask rather than `0x4010401`).

Some answers got confused about the direction to read the bit pattern, e.g.
thinking bit *8* is at offset *24* (i.e. counting from the left instead of the
right).

Another issue was the need to account for how many cycles a sequence of
instructions will take, thus using 4 000 000 as the counter for the
(approximately) 1 second delay loop. While it's hard to do cycle counting in an
exam situation, it's worth taking into account that there are multiple
instructions in any "busy wait" loop, and using a smaller counter than the
number of cycles for the delay.

## Question 3: functions

### Converting a mathematical expression into a function (in ARM assembly)

If you forget to write `bx lr` at the end, it's not a function!

When asked to write $f(x,y)$ as a function that has the parameters *passed to it
by the caller*. It was incorrect to just `mov` some random numbers to represent
$x$ and $y$ into registers inside the function `f`.

<!-- It was unnecessary to handle the case of overflow, a lot of people -->
<!-- attempted to handle this case in general, and got lost when -->
<!-- trying to square a 64-bit number. -->

`lsl r0, 2` does not compute `r0 := r0^2`, it computes `r0 := 2*r0`.

When asked to write a function with as few instructions (i.e. optimise for
speed) you should avoid passing arguments via stack, and pass by registers
instead (assuming the question doesn't ask you to use any particular calling
convention). If you used the [AAPCS](/_lectures/05-functions/#aapcs) you got this for free, but any
register-based CC would be ok.

Similarly, if the function calls an inner function (i.e. a subroutine) it's
necessary to `push {lr}` before calling the subroutine, and `pop {lr}`
afterwards, otherwise you will lose the previous value in `lr`, which tells you
where to branch back to after `f` is finished. But this isn't *necessary* if
there's no inner function call.

Not everyone noticed the critical instruction on the cheat sheet:

```arm
mla <Rd>, <Rn>, <Rm>, <Ra>
```

which computes `Rd := Ra + (Rn*Rm)` in a single instruction. Most people did
`mul` and `add` separately (which is still ok).

Some answers didn't include comments describing how parameters are passed to the
function. Read the question carefully!

`mul` cannot multiply by immediate values. As such, `mul r0, 42` is invalid.

Some answers did the computation and then moved the result into `r0` afterwards
with an extra `mov` instruction, e.g.

```arm
mul r1, r2, r3
mov r0, r1
```

It's quicker to just put the result straight into `r0`:

```arm
mul r0, r2, r3
```

You don't need to move data into another register to square it. `mul r0, r0, r0`
is perfectly valid, and will compute `r0 := r0^2`.

### Calling a function

`-1255` won't fit in an immediate value, and therefore can't be `mov`'d into a
register, you'll have to load it using `ldr r1, =-1255`.

There was some confusion as to whether to use `b f` or `bl f`:
- `b` will just jump to the label `f` and begin executing whatever is there,
  giving no hope of returning from the function (therefore it's not a proper
  function call)
- `bl f` will store the address of the next instruction into the link register,
  and then branch to the label. We need to remember the address of where we came
  from, so that we can go back again using `bx lr`.

Unless you're asked to write a complete program, you don't need to add the usual:

```arm
end:
	nop
	b end
```

to the end of the solution (although we didn't take marks off for this).

### Passing arguments in registers vs stack

As per the assignment cover sheet:

> Greater marks will be awarded for short, concrete answers than long,
> vague/rambling ones. Marks may be deducted for providing information that is
> irrelevant to a question.

So you didn't get partial marks for vaguely rambling about the general concepts
of registers/stacks. The question asked for a specific comparison of the two in
the context of passing arguments (with example scenarios), so it's crucial that
you answer that specific question.

Subjective answers like "the stack is easier than registers" were not
sufficient, especially with no justification as to *why* the stack is easier to
use.

The stack pointer `sp` itself is not a magic pit that you can toss data into, to
be pulled back out at a later time. It is just a register, that contains a
memory address pointing to where the top of the stack is in memory (or the
bottom, depending on your perspective---the stack grows backwards from the end
of memory). Every time data is added (pushed) to the stack, the stack pointer is
decremented to indicate the new top of the stack, and vice-versa for removing
data (popping off the stack).

The question asked for specific situations in which one is preferable to the
other, so make sure you read the question carefully.

Passing via registers does not keep an original copy safe somewhere. The
function called can clobber the registers, so upon returning to the caller, the
registers used to pass arguments may now contain junk. Use the stack if you need
to backup the original arguments.

Most people commented that the registers would somehow be quicker than stack (it
is) but not why the registers are quicker. A combination of "the registers have
faster access time in hardware" or "pushing and popping arguments to/from the
stack requires extra instructions" would have been sufficient.

**Many** answers contained the same canned line "the callee can access the same
bits as the caller", but no explanation of what that means or even anything
indicating if this was a good thing or a bad thing. This is from the [functions
lecture slides](/_lectures/05-functions/#calling-conventions), but it's about call-by-reference, which is not relevant
to the pass on registers/stack issue.

Some answers said that you could only ever see the top of the stack, whereas any
register can be viewed at any time. Normally we expect stack structures to have
this property, but it is untrue that we cannot read (or write!) the middle of
the stack. At the end of the day, the stack lives in read/write memory, and the
devboard can view (and edit!) any part of the stack it sees fit to do so. `ldr
r0, [sp, -4]` would read out the second thing from the top of the stack, for
instance.

There were comments about the "safety" and even the "security" of the stack, and
how any value in the stack is immune to tampering, but that's just not true. See
above.

Answers about how the stack is bad because "stack overflow" can occur, or that
it can fill up memory are irrelevant, as this is not a disadvantage of the stack
versus registers. If there is so much data it would not fit in the stack, it
certainly wouldn't fit in the registers.

As an aside, you can even modify the stack pointer directly (after all, it's
just a register). `sub sp, 1` would decrement the stack pointer by one, and
given words on the stack are 4 bytes apart, this would offset the stack pointer
so it was pointing a quarter of the way through a word, corrupting the stack. A
common hack is to save the value in `sp` to a known location in memory, and then
use the stack pointer as just another general purpose register, providing one
more register for computations (note the stack pointer isn't fully compatible
with all instructions, you can `sub`, but you can't `mul` with it, for
instance).

