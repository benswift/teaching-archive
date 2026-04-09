---
title: "Week 11/12: DIY operating system"
summary: "putting it all together to create a simple multi-tasking OS"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-lab-11
---

:::info
This is another two-week lab (and there's plenty of [extension stuff at the
end](#yourname-OS-v2)), and it pulls together many of the key concepts you've
learned in this course. Don't skip it!
:::

## Outline

Before you attend this week's lab, make sure:

1. you understand how stacks work

2. you can write & enable an interrupt handler function

In this week's lab you will:

1. explore (and exploit) the way the NVIC saves & restores register values when
   an interrupt handler is executed

2. construct the stack for a new *process*, then (manually) switch the stack
   pointer and watch the discoboard execute that process

3. use multiple stacks to create your own multi-tasking operating system!

## Introduction

Today you'll write your own operating system---you can call it *yournameOS*
(feel free to insert your own name in there). At the beginning of this course
the possibility of writing your own OS may have seemed pretty far away, but
you've now got all the tools to write a (basic) multitasking OS. This lab brings
together all the things you've learned in this course, especially if you have a
crack at some of the extension challenges in [Exercise 4](#exercise-4).

:::tip
Discuss with your lab neighbour: how is it that your computer can do *heaps* of
things at once (check emails, have multiple programs and browser tabs open,
check for OS updates, idle on Steam, etc.)? Is there just a giant `main` loop
which does all those things one-at-a-time? Or is there some other way to achieve
this?
:::

The basic idea of today's lab is this: instead of just using the default stack
(i.e. leaving the stack pointer `sp` pointing where it did at startup) you'll
set up and use *multiple* different stacks. As you'll see, a stack is all you
need to preserve the **context** for a [process](/_lectures/11-operating-systems/#process-definition)---an independent
sequence of execution---and switching between processes is as simple as changing
the stack pointer `sp` to point to a different process's stack. The interrupt
hardware (i.e. the NVIC which you've been [using in labs](/labs/08-input-through-interrupts/) [for the last couple of
weeks](/labs/10-connecting-discoboards/)) even does
a bunch of this work for you.

Plug in your discoboard, fork & clone the [lab 11
template]() and let's get started.

## Exercise 1: anatomy of an interrupt handler stack frame {#exercise-1}

In the first exercise it's time to have a close look at how the current
*execution context* is preserved on the stack when an interrupt is triggered.

Using a simple `delay` loop and the the usual helper functions in `led.S`,
modify your program so that after `main` it enters an infinite `redblink` loop
which blinks the red LED on and off at a frequency of *about* 1Hz. The exact
numbers aren't important in this exercise, so pick some timing values which seem
about right to you.

When the `redblink` loop is running, pause the execution using the debugger and
have a look at the various register values---`lr`, `pc`, `sp` `r0`-`r3`---you
should be starting to get a feel for the numbers you'll see in each one. These
values make up the execution *context*---the "world" that the CPU sees when your
program (i.e. your `redblink` loop) is running.

Then, enable and configure the SysTick timer to trigger an interrupt every
millisecond. There's a big comment (starting at `main.S` line 12 in the
[template repo]()) giving you some hints---you just need
to write the bits to the correct memory addresses. When figuring out the value
for the reload value register (`SYST_RVR`) remember that your board runs at 4MHz
on startup.

Once that's working, you should be able to set and trigger a breakpoint in the
"do-nothing" `SysTick_Handler` at the bottom of `main.s`[^lab-9-refresher]. When
this breakpoint is triggered, use the [memory view](/labs/02-first-machine-code/#reverse-engineering) to poke around on the
stack---remember that `sp` points to the "top" of the stack, and the rest of the
stack is at higher memory addresses than `sp` (which will appear *below* the
`sp` memory cell on the screen in the Memory Browser because the addresses are
ordered from lower addresses at the top to higher addresses at the bottom). Can
you see any values which look similar to the values you saw when you were
looking around the execution context earlier?

[^lab-9-refresher]:
    If you need a refresher on this stuff, [lab 9](/labs/08-input-through-interrupts/) is probably a good place to go.

Here's what's happening: when the SysTick interrupt is triggered, as well as
switching the currently-executing instruction to the `SysTick_Handler` function,
the NVIC also saves the context state onto the stack[^gory-details], so that the
stack before & after the interrupt looks *something* like this (obviously the
actual values in memory will be different, but it's the position of each value
on the stack that's the important part):

![Stack](/images/labs/lab-11/exeption-stack.png)

[^gory-details]:
    *Section B1.5.6: Exception entry behavior* on p587 of
    the
    [ARM reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf)

Don't be fooled by the register names (e.g. `lr` or `cpsr`) alongside the values
in the stack. While the interrupt handler (in this case `SysTick_Handler`, but
it's the same for all interrupts) is running, that context isn't in the
registers, it's "frozen" on the stack. When the handler returns (with `bx lr`,
as usual) this context is popped off the stack and back into the registers and
the CPU picks up where it left off before.

:::tip
Discuss with your neighbour---how does the program know to do all this context
save/restore stuff when it returns from the interrupt handler? Why doesn't it
just jump back to where it came from like a normal function?
:::

You might have noticed a slightly weird value in the link register `lr`:
`0xFFFFFFF9`. You might have thought "that doesn't look like any return value
I've seen before---they usually look like `0x8000cce` or `0x80002a0`". Well, the
trick is that the value `0xFFFFFFF9`[^exc-return] isn't an regular
location/label in the code part of your program, it's a special **exception
return** value. When the CPU sees this value in the target register in a `bx`
instruction then it does the whole "pop the values off the stack (including the
new `pc`) and execute from there" thing.

:::info
Commit & push your "empty SysTick handler" program to GitHub. That's all you
need to do for Exercise 1, it's just laying the groundwork for what's to come.
:::

[^exc-return]:
    The full set of *exception return* values recognised by the discoboard are
    shown in *Table B1-9* on p596 of
    the
    [ARM reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf),
    but for the moment the one you'll need is *thread mode, main stack pointer*
    which corresponds to the value `0xFFFFFFF9`.

## Exercise 2: a handcrafted context switch {#exercise-2}

:::tip
Using a carefully-prepared stack, is it possible to call your `redblink` loop
function without calling it directly using a `bl` instruction?
:::

The answer is *yes*, and that's what you're going to do in Exercise 2. Disable
(or just don't enable) your SysTick interrupt---you won't be needing it in this
exercise.

Again, the key takeaway from Exercise 1 is that the context (the "world" of the
current process's execution) can be "frozen" on the stack, and then at any time
you can "unfreeze" the process and send it on its way by popping those values
off the stack and back into the registers.

In the [last exercise](#exercise-1), the frozen context was placed on the stack
automatically by the NVIC before the interrupt handler function was called, but
in this exercise you're going to hand-craft your own context stack by writing
the appropriate values into memory near the stack pointer.

To do this, you'll need a chunk of discoboard memory which isn't being used for
anything else. There are several ways you could do this, but this time let's
just pick a high-ish address (say, `0x20008000`) in the RAM section of the
discoboard's [address space](/_lectures/03-memory-operations/#memory-address-space).

:::tip
You can get away with this since your program is the only thing running on the
discoboard, so if the other parts of your program leave that memory alone then
you'll be ok. On a multi-tasking OS, though, you have to share the memory space
with other programs (some of which you didn't write and you don't know how they
work) and so this assumption may not hold. There are a few ways to deal with
this problem---can you think of how you might do it?
:::

Once you've picked an address for your new stack pointer, you need to create the
stack frame. This can be anywhere in memory---there's nothing special about
"stack memory", it's just a bunch of addresses that you read from & write to
with `ldr` and `str` (and friends). The memory address described above
(`0x20008000`) could be any old place where there's a bit of RAM which you're
not using for some other purpose.

To create stack frame, write a `create_process` function which:

1. loads the new stack pointer address (above) into `sp`

2. decrements the stack pointer by 32 bytes (8 registers, 4 bytes per register)
   to make "room" for the things you need to put on the stack

3. writes the correct values on the stack (see the picture above) to represent a
   running `redblink` loop

   - the status register (you can use the default value of `0x01000000`) goes at
     an offset of `28` from your new stack pointer

   - the program counter `pc` should point to the next instruction (which might
     be a label) to execute when the process is restored

   - the [link register](/_lectures/05-functions/#link-register) `lr` should point to the instruction for the process to
     return to when it's "done" (this doesn't matter so much for the moment,
     because your `redblink` loop is infinite---it never `bx lr`s anywhere)

   - put whatever values you need into the slots for `r12` and then
     `r3`-`r0`---these are just the register values (arguments, basically) for
     your `redblink` process (think: do you need anything particular in here, or
     does it not matter for how your `redblink` loop runs?)

Once you've created the stack for your new process, write a `switch_context`
function to actually *make* the switch. This function takes one argument (the
new stack pointer) and does the opposite of step 3 above, loading the "context"
variables from the stack and putting them back into registers:

1. restore (i.e. put back) the flags into the `cpsr` register (since this is a
   special register you can't just `ldr` into it, you have to load into a normal
   register like `r0` first and then use the "move to special register"
   instruction[^msr-instruction] `msr apsr_nzcvq, r0`)

2. restore the rest of the registers except for `pc`

3. make sure the stack pointer `sp` points to the "new" top of the stack (i.e.
   after the `redblink` context has been popped off)

4. finally, set the `redblink` process running by restoring the `pc`.
   Make sure that you have declared `redblink` as a function, e.g.
   ```ARM
   .type redblink, %function
   redblink:
     ...
   ```

:::tip
Why can't you restore `pc` with the rest of the registers in step 2?
:::

:::info
Write a program which creates a `redblink` stack frame "by hand" in
`create_process` and then switches to this new `redblink` context using
`switch_context`. When it runs, your program should blink the red LED. Commit &
push your program to GitLab.
:::

[^msr-instruction]:
    The documentation for `msr` is in Section A7.7.82 on p323 of the [ARMv7-M
    reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf/),
    also see Table B5-2 on page 729 for the bit mask.

You may have noticed that the interrupt handling procedure only preserves
`r0`-`r3`, but not `r4`-`r11`. This won't bite you if your processes don't use
`r4`-`r11`, but how could you modify your `switch_context` function to also
preserve the state of those registers?

## Exercise 3: writing a scheduler {#exercise-3}

:::tip
What's the *minimum* amount of data (of any type) that you need to store to keep
track of a process?
:::

To turn what you've written [so far](#exercise-2) into a fully-fledged
multitasking OS, all you need is a scheduler function which runs regularly (in
the `SysTick_Handler`) and makes the context switch as appropriate.

In this exercise you'll put these pieces together to create version 1 of
*yournameOS*. *yournameOS* is pretty basic as far as OSes go, it only supports
two concurrent processes (for v1, at least). One of them blinks a red light, and
the other one blinks a green one (but with a different blink period---time
between blinks).

The bookkeeping required for keeping track of these two pointers is just three
words: two stack pointers, and a value for keeping track of which process is
currently executing. You can the whole process table in the data section like
this (note from the difference between the stack pointer values that the OS has
a maximum stack size of about 4kB):

``` ARM
.data
process_table:
.word 0 @ index of currently-operating process
.word 0x20008000 @ stack pointer 1
.word 0x20007000 @ stack pointer 2
```

The only other tricky part is to combine the "automatic" context save/restore
functionality of the interrupt handler (as you saw in Exercise 1) with the
"manual" context save/restore behaviour of your `switch_context` function from
Exercise 2. You probably don't even need a separate `switch_context` function
this time, you can just do it in the `SysTick_Handler`.

You can structure your program however you like, but here are a few bits of
functionality you'll need:

1. a `create_process` function which initialises the stack (like you did in the
   previous exercise) for each process you want to run

2. a `SysTick_Handler` (make sure you re-enable the SysTick interrupt) which
   will

  - read the first entry in the process table to find out which process is
    currently executing

  - pick the *other* process and swap *that* stack pointer into the `sp`
    register (but don't change the `pc` yet!)

  - update the `process_table` so that it shows the new process as executing

  - trigger an interrupt return to get things moving again (make sure the
    handler function still exits with a `bx` to the special value `0xFFFFFFF9`)

If you get stuck, remember to step through the program carefully to find out
exactly what's going wrong.

:::info
Write *yournameOS* version 1, including both a `redblink` and `greenblink`
processes which execute concurrently, and push it up to GitLab.
:::

## Exercise 4: pimp your OS {#exercise-4}

![xzibit](/images/labs/lab-11/xzibit.jpg)

<div id="yourname-OS-v2" class="extension-box" markdown="1" style="margin-bottom: 20px;">

Once you've got your multi-process *yournameOS* up and running, there are
several things you can try to add some polish for version 2. This exercise
provides a few ideas---some of these are fairly simple additions to what you've
got already, while others are quite advanced. Ask your tutor for help, read
[the](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf)
[manuals](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf),
and try to stretch yourself!

1. modify the scheduler to also save & restore the *other* registers
   (`r4`-`r11`) on a context switch (as mentioned [earlier](#what-about-r4-r11))
   so that the processes are fully independent (currently, *yournameOS* v1
   doesn't preserve those registers, so if your processes are using them then
   the context switch will stuff things up)

2. add support for an arbitrary number of processes (not just two)

3. add the ability for processes to *sleep*---to manually signal to the OS that
   they're ready to be switched out

4. add the ability for processes to *finish*---to call their return address (in
   `lr`) and exit

5. add process *priorities*, and a more complex scheduler which takes these
   priorities into account

6. add the ability to press the joystick and manually trigger a context switch,
   but be careful---what happens if another interrupts occurs *while* the
   scheduler function is executing?

7. **advanced**: use the synchronization instructions `ldrex` and `strex` to add
   a critical section so that each process can *share* a resource (e.g. a memory
   location) without stepping on each other's toes (for reference, look at
   the [Asynchronism](/lectures/02-contents/#Chapter_6) lecture
   slides & recordings)

8. **advanced**: use thread privileges & the Memory Protection Unit (*Section
   B3.5* in
   the
   [ARM reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf))
   to ensure that each process can only read & write to its own (independent)
   sub-region of the discoboard's memory?

9. **Pavel**[^pavel]: write a 3D graphics library and build an HDMI connector & driver
   using the GPIO pins, then port [Quake](https://github.com/id-Software/Quake)
   to the discoboard

</div>

[^pavel]:
    Pavel Zakopaylo took this course in 2017 and became something of a legend
    for his quick answers on the COMP2300 forum. The lab 11/12 super-hard-extension task is
    named after him. I wonder who from the class of 2018 it'll be named after in
    the 2019 version of the course?

:::info
Whatever you made for your extension task, push it up to GitLab with a short
note for future-you to remind yourself what you actually did. Don't forget to
also write a suitably self-congratulatory commit message. Well done, you!
:::

## Summary

In this week's lab you learned how to

1. explore (and exploit) the way the NVIC preserves register values when an
   interrupt handler is executed

2. construct the stack for a new *process*, then (manually) switch the stack
   pointer and watch the discoboard execute that process

3. use multiple stacks to create your own multi-tasking operating system!

If you got to the end of the labs in this course, you should be really proud of
yourself---I bet you didn't think you'd be capable of writing an OS when you
started the course in March. This lab material will remain online through the
exam period (and beyond) in case you want to go back over and re-do things,
perhaps doing some of the extension boxes you skipped over first time around,
and perhaps even making up your *own* extension exercises to stretch yourself.
If you come up with a cool idea for a new extension task, let me know on
[the COMP2300 forum]({site.forum_url}) and I can incorporate it into the course material.

:::info
If you didn't get to the end of this lab material during the week 11 lab
session, then don't panic---you'll have week 12 as well. You could use the week
12 lab session to finish off *yournameOS*, go over the content from previous
labs to brush up on any concepts you're still not 100% sure about, or explore a
few "going further" suggestions for more advanced things you can do with your
discoboard.
:::

:::info
Make sure you logout to terminate your session, and pack up your board and USB
cable carefully.
:::
