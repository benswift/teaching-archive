---
title: Study Event 1
summary: Questions and other content from Study Event 1
published: false
---

### Digital Logic

In the lectures, we've mentioned an equality between logical formulae, truth
tables, and simple circuits.  All have inputs and outputs, and this gives us the
foundations of hardware through digital logic.

Let's start off with a simple formula, $$(a \lor b) \land c$$.

1. Draw the truth table for this formula.  How many inputs columns will it have,
   and how many output columns will it have?
2. Draw the logical circuit for this formula.

This should be fairly straightforward.

For a more involved example, try the following truth table:

| A | B | C | Output |
|---|---|---|--------|
| 0 | 0 | 0 | 0      |
| 0 | 0 | 1 | 1      |
| 0 | 1 | 0 | 1      |
| 0 | 1 | 1 | 0      |
| 1 | 0 | 0 | 1      |
| 1 | 0 | 1 | 0      |
| 1 | 1 | 0 | 0      |
| 1 | 1 | 1 | 1      |

Derive a formula that expresses this truth table, and then draw the circuit
diagram for it.

#### 2s Complement

### Hardware and Software

#### Panic at the DISCO

Working at the ANU's embedded systems research team, you have received a
shipment of portable ARM embedded boards codenamed NIGHTCLUB from an unknown
source.  Rumours have it that they are a modernised version of the DISCO boards
used in previous years.  However you suspect that these CPUs of these boards
are of significantly lower quality, manifesting itself as random byte flipping
within certain special registers.

Since the NIGHTCLUB boards are already in the ANU inventory, you decide to press
on in using them in your work, but you need to work around the random bit
flipping first.

You identify that certain bits in the PC register become flipped occasionally.
Should you be worried if:

- The least significant bit flips?
- The most significant bit flips?
- Any other bit flips?

Are any of these detectable, and can they be worked around?

What if the bit flips happened in the status register?

### My Buffer Runneth Over

Managing memory in a more featured programming language is hard enough, but at
the assembly level there's not much stopping you from reading and writing in
memory that you really shouldn't be touching.

Consider this small snippet of code that copies the `source_buffer` to the
`string_buffer`...

```ARM
main:
    bl populate_string_buffer
    b main2

populate_string_buffer:
    ldr r0, =source_buffer    @ get a pointer to the buffer
    mov r1, #0               @ offset from that pointer
p_s_b_loop:
    ldr r1, [r0, r1]
    cmp r1, #0
    beq p_s_b_done
    b p_s_b_loop
p_s_b_done:
    bx lr

string_buffer:
    .skip 4   @ reserves 4 bytes = 1 word

main2:
    mov r1, #0x42
    ldr r2, [r1]
    mov r0, r2
    @ other code, not interesting to you
    @ ...

.data
source_buffer:
    .ascii "c0p3"
```

1. What does the `populate_string_buffer` code do?

2. When this code is run, what will actually happen?

3. Suppose you have control over the `source_buffer` block.  What would you
   populate the buffer with in order to:

   - Avoid data corruption?
   - Send the program into an infinite loop?
   - Populate `r0` with the value `0xDEADBEEF`?

4. How would you protect against this kind of attack?  What would be the
   easiest solution?

As alluded to by the title, this is known as a "buffer overrun/overflow attack".
The astute observers among you will realise that this is not limited to assembly
programming, but rather any programming language with arbitrary access to
memory, most commonly C.

### Control Structures

#### Arming the processor

We've chosen to work with ARM assembly and architecture for this particular
course, which is known for its simplicity and understandability.  In order to
demonstrate this concept, let's implement some of the other instructions from
more complex x86 architecture.

- The x86 `loop<c>` instruction family decrement the ECX register and branch to
    a particular label, unless ECX became zero or the condition "c" is fulfilled.

    Implement a `loop<c> <Rn>, <label>` "instruction" as a macro that decrements
    `Rn` and jumps to `label` unless `Rn` became zero, or the condition `c` is
    set.

-   In x86, the `cmpxchg` instruction compares the first argument with the "return
    value register", setting flags, and then swaps the first argument with the
    second argument.

    Implement a `cmpxchg <Rs>, <Rc>, <Rd>` "instruction" as a macro that compares
    the registers `Rs` and `Rc`, setting any flags, and then exchanges the values
    in `Rs` and `Rd`.

    Also implement a `cmpxchg <Rs>, <Rc>, [<Rb>{, #+/-<offset>}]` instruction that
    does the same same thing, but affects memory instead.

    - Does your "function" have any other side-effects?
    - Would this have the same effect if your CPU had some degree of
      parallelisation?

### Functions

#### Subroutines vs Functions

You should have just about figured out functions by now -- if you haven't, then
feel free to work through this content as-is, or figure it out after you've had
some time to think things through.

We've seen the `bl` "branch with link instruction, which allows you to execute
subroutines, or smaller blocks of code.  While very useful for executing small
blocks of instructions, it somewhat falls apart when dealing with any complex
control flow...

```ARM
main:
    mov r0, #5  @ y
    mov r1, #3  @ x
    bl mult     @ calculate x * y

mult:
    cmp r0, #1   @ if x = 0, then we're done
    beq mult_ret
    add r1, r0
    sub r0, #1
    bl mult      @ otherwise, recurse
mult_done:
    bx lr
```

Consider the following questions:

- What will this code do?  What do you think it was intended to do?
- What causes this code to break?

Write a version of this `mult` function that is actually a function, that is, it
places its arguments on the stack and can perform recursion.  We've provided
a template for you below.

```
mult:
    stmbd sp!, {fp, lr}
    @ your code goes here
    ldmia sp!, {fp, lr}
    bx lr
```

- What are the purposes of `fp` and `lr` in the above code snippet?
- Simulate the effects of the `mult` function on the whiteboard with your
  friends for different arguments.  For example, try 4x1, 3x5, and 5x3.  Is the
  order of the arguments important?  What happens if you use a negative number?
