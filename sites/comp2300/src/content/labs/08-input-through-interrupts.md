---
title: "Week 8: input through interrupts"
summary: "Taking input from the world (finally!)"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-lab-8
---

:::info
Now that we're getting towards the end of the course the content is ramping up
in difficulty. Interrupts can take a bit of time to get your head around at
first, so it's really important that you work through this lab in full and make
sure you understand what's going on. If you don't, you'll probably have a hard
time with assignment 3.  
If you get stuck, **make sure you read the lab content**---there are lots of hints
in there to help you out if you get stuck.
:::

## Outline

Before you attend this week's lab, make sure:

1. you understand *control flow*---what factors influence the order in which
   instructions get executed in your program (we have been talking about this
   since week 2!)

2. you have attended (or watched) the [lectures](/_lectures/index/) on the basics of interrupts

3. you're able to browse around and understand new assembly code (e.g. provided
   in a library) with the help of the [assembler
   documentation](https://sourceware.org/binutils/docs/as/)

In this week's lab you will:

1. configure a timer interrupt to periodically "hijack" the control flow of your
   program

2. configure the GPIO pins connected to the joystick on your discoboard (the
   little blue diamond thingy) so that pressing down on the joystick triggers an
   interrupt

3. write an interrupt handler function to *do something useful* when you press the
   joystick button

4. use interrupt priorities to control what happens when different interrupts
   come in at the same time

## Introduction

:::tip
Discuss with your neighbour---what does it mean for your program to have a "main
loop"? On your discoboard, does your main loop have to *do* anything for the
program to be useful?
:::

So far, following the control flow through your program has been easy. In most
cases, the execution (which you can track through the `pc` register) just flows
from one assembly instruction (i.e. a line of assembly code) to the next.
Sometimes you jump around with branch instructions (e.g. `b` and `bl`), and in
certain cases you even make *conditional* branches using the condition flags in
the status register (e.g. `beq`, `bgt` or `bmi`).

In today's lab, this all changes. You're going to configure a **timer
interrupt** which will periodically "interrupt" the flow of your program,
execute a special interrupt handler function, and then return back to where your
"main" program was executing. Then you'll go further by showing how the
discoboard can handle *multiple* interrupts, each with their own handler
function, and how each interrupt has a **priority** so that *interrupts can
interrupt one another*. It *sounds* confusing... but it's not, really. You'll
get the hang of it :)

Plug in your discoboard, fork & clone the [lab 8
template]() and let's get started.

## Exercise 1: enabling the SysTick timer {#exercise-1}

A timer is a hardware component which holds a value (like a register) which
counts down (or up) over time. Timers come in various shapes and sizes; some are
simple and don't have much potential for configuration, while others are
*extremely* configurable, e.g. counting down to zero vs counting up from zero,
counting at different rates, etc. Any given microcontroller can include many
different timers, all with different names and configuration options, and
multiple timers can be used simultaneously.

Your discoboard has a timer called the **SysTick** timer, described in the [ARM
reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf/) in *Section B3.3*.
As with all things on your discoboard, you configure the SysTick timer by
reading and writing to special hardware registers. To configure and use the
SysTick timer your program needs to:

1. enable the timer using the *SysTick Control and Status Register* (`SYST_CSR`),
    (also set the `CLKSOURCE` bit to use the processor clock);

2. set the *SysTick Reload Value Register* (`SYST_RVR`)---this is the value
   which gets loaded into the register when it is "reloaded", i.e. after it runs
   down to zero;

3. read the current value of the timer register using the *SysTick Current Value
   Register* (`SYST_CVR`).

For example, if the SysTick timer is enabled (in `SYST_CSR`) and the value of
`SYST_RVR` is `0x4000` then the timer will take 16384 cycles to count down to
zero. How long this takes in wall-clock time depends on the CPU frequency
(cycles per second) of the board.

To configure the SysTick timer you'll need to use the
[load-twiddle-store](/labs/05-blinky/#load-twiddle-store) pattern from lab 5 all over again. This time, the
relevant information (addresses, offsets, bits) starts at *Section B3.3.2* on
page 677 of the [ARMv7 reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf/) and includes the
next couple of sections as well.

We're in week 8 now, so you now have the tools to read the manual and figure it
out for yourself (although don't be afraid to ask your tutor for help). Here are
a few things to be mindful of:

- remember that these are memory-mapped registers, so e.g. to read the current
  value into a general-purpose CPU register (e.g. `r0`) you need to use an `ldr`
  instruction with the appropriate memory address

- you can find the memory-mapped addresses for both of these registers in the
  table in *Section B3.3.2*

- to enable the timer, you'll need to set the *enable* bit in `SYST_CSR` and also
  set the clock source to use the processor clock

- even though the timer will count down automatically (once tick per clock
  cycle) your program still needs to be running, so make sure you've got an
  infinite "run" loop in your program

- the initial clock speed of your discoboard when you first turn it on is 4MHz
  so keep that in mind when you're setting the `SYST_RVR` reload value

For exercise 1, all you need to do is enable the SysTick timer, start it
running, and watch the values from the `SYST_CVR`.

:::info
Write an assembly program which configures the SysTick timer to count down from
`4000000`, and goes into a `finished` infinite loop when the timer reaches zero.
Commit and push your program to GitLab.
:::

## Exercise 2: configuing the interrupt {#exercise-2}

You may have noticed that there's another bit in the `SYST_CSR` configuration
register which you didn't set in the last exercise, but which looks interesting:
the **TICKINT** bit. The [ARMv7 refernce manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf/) says that this
particular bit:

> indicates whether counting to 0 causes the status of the SysTick exception to
> change to pending

So what does this mean, exactly? Well, as discussed in lectures, an
interrupt/exception is "a signal to the processor emitted by hardware or
software indicating an event that needs immediate attention" (from
[Wikipedia](https://en.wikipedia.org/wiki/Interrupt)). If the **TICKINT** bit is
set in `SYST_CSR`, then the SysTick timer triggers an interrupt every time it
counts down to zero. Your CPU handles this interrupt by branching to an
[interrupt handler](https://en.wikipedia.org/wiki/Interrupt_handler) which will
(hopefully) branch back when it's finished. In words, when an interrupt comes in
then the CPU stops what it's doing and branches somewhere else.

The ARM CPU in your discoboard recognises many different types of interrupts.
Some are triggered by timers, some are triggered by external peripherals (like
the joystick), some are triggered by other chips or wires connected to the
discoboard.

All interrupts on your discoboard have:

1. an index (which is just a number for identifying the source of the interrupt)

2. a priority

3. an entry in the **vector table**, which is a region of the discoboard's
   memory where the addresses (i.e. the place to branch to) of the *handler*
   routine for each interrupt

You might be wondering---*where* does my code branch to when the interrupt comes
in? Well, that's what the **vector table** is for. It's a special part of the
[memory address space](/_lectures/03-memory-operations/#memory-address-space) (starting at `0x0`) where the addresses of the
different interrupt handler functions are stored. Think of it like a bunch of
"jump-off points"---the *code* for handling the interrupt will be stored
somewhere else, the vector table just has the address of the starting point for
that code.

You can see your program's vector table in the `src/startup_stm32l476xx.S` file
starting at around line 150

``` ARM
g_pfnVectors:
	.word	_estack
	.word	Reset_Handler
	.word	NMI_Handler
	.word	HardFault_Handler
	.word	MemManage_Handler
	.word	BusFault_Handler
	.word	UsageFault_Handler
	.word	0
	.word	0
	.word	0
	.word	0
	.word	SVC_Handler
	.word	DebugMon_Handler
	.word	0
	.word	PendSV_Handler
	.word	SysTick_Handler
    @
    @ more entries follow...
    @
```

:::tip
What does it mean if there's a `0` in a particular "slot" in the vector table?
:::

Try and find the vector table for yourself in the startup file. Look for the
`g_pfnVectors` label---can you see how it mirrors the table from *Section
B1.5.2*? You can see that there's already a `SysTick_Handler` label in there in
the 16th slot in the vector table, but my "hot tip" to you is that the
`SysTick_Handler` function isn't very interesting at the moment, it's just
defined to be equal to the `Default_Handler` (which is just an infinite loop)
down at the bottom of the file.

Your job in Exercise 2 is to build on the counter program you wrote in [Exercise
1](#exercise-1) and add a couple of things:

1. when you configure the timer, set the **TICKINT** bit as well

2. somewhere in your program, write a **function** (i.e. something which you can
   `bl` to and which does a `bx lr` at the end) called `SysTick_Handler`

If you set it up correctly, your `Systick_Handler` function will get called
every time the counter gets to zero.

Again, here are a couple of things to be careful of:

- you'll need to declare `SysTick_Handler` as a label with `.global` visibility
  so that the address of *your* `SysTick_Handler` function will get used in the
  vector table in `src/startup_stm32l476xx.S`, not the boring default one down
  the bottom of that file)

- similarly, make sure `SysTick_Handler` is declared as a function with the
  usual `.type SysTick_Handler, %function`[^interworking]

- remember that the interrupt handler (in this case `SysTick_Handler`) needs to
  be a function, and also to play nice and obey the [AAPCS](/_lectures/05-functions/#aapcs) (otherwise it might mess with other
  parts of your program)

[^interworking]:
    Again, this ensures that the thumb-mode (interworking) bits are set
    correctly and that the alignment is ok for the function to be used as an
    interrupt handler, and just generally handles the gory details about the
    ARMv7 standard for these things.

:::info
Using the `led.S` library provided, write a program which uses the
`SysTick_Handler` interrupt to toggle the red LED on and off with a frequency of
1Hz (two toggles per second). Commit and push your program to GitLab.
:::

## Exercise 3: GPIO interrupts {#exercise-3}

:::tip
Ok, so the `SysTick_Handler` looks after the SysTick timer interrupt, but what
about the other peripherals on your discoboard? Is there a `Joystick_Handler`
for handling presses on the joystick? If not, where *can* you put your code to
be executed when the joystick is pressed?
:::

The discoboard includes a Nested Vectored Interrupt Controller (NVIC), a special
bit of hardware which is responsible for watching the various bits of hardware
(and software) which can trigger interrupts in your discoboard.

A brief recap: remember that interrupts are a method of triggering an
*interruption* to the sequence of assembly instructions being executed by the
discoboard. Configuring interrupts requires (at a minimum) enabling the
interrupt and creating an **interrupt handler**---the function which gets called
when the interrupt is triggered.

![Single-interrupt](/images/labs/lab-9/single-interrupt-timeline.png)

In this exercise we're going to configure an interrupt based on the GPIO pins.
In this lab, we're going to be using our GPIO pins as **input** devices to
register a "click" on the discoboard's blue diamond-shaped joystick (pictured
below). Finally, you can give (physical) input to your discoboard!

![Discoboard](/images/labs/lab-9/disco-button.jpg)

Compared to the SysTick interrupt, there's a slightly different process in
configuring GPIO pins as sources of interrupts. This is because SysTick
interrupt is one of the 16 "built-in" ARM Cortex interrupts---it's not just
something which ST decided to put in when they designed your discoboard, it's
part of the ARM standard. The GPIO pins, on the other hand, aren't part of a
standard---each microcontroller manufacturer is free to include (or not) any
number of GPIO pins on their board, and the way that they are wired into the CPU
is up to them (although there are some conventions, so most of them do things in
pretty much the same way).

On your discoboard, the GPIO pins are managed through the Extended Interrupts
and Events Controller (EXTI), which is described in detail in **Section 12** of
the [discoboard reference manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/). From that
section:

> The extended interrupts and events controller (EXTI) manages the external and
> internal asynchronous events/interrupts and generates the event request to the
> CPU/Interrupt Controller (the NVIC) and a wake-up request to the Power
> Controller.

This means that raising a GPIO-triggered interrupt is really a two-stage process
(at least from the hardware's perspective):

- the EXTI notices the hardware event (e.g. an edge trigger on a GPIO line, or
  a timer event from one of the discoboard's many timers) and raises an
  interrupt line into the NVIC

- the NVIC deals with that interrupt, *potentially* saving the current register
  context to the stack and switching to the handler function (depending on
  whether the interrupt is currently enabled, whether any higher priority
  interrupts are already running, etc.)

So, to configure your discoboard so that when you press the central joystick
button an interrupt is triggered (which you can then write a handler for) you
need to enable & configure the interrupt in both the EXTI and the NVIC. As for
most things on your discoboard, this is done by reading & writing the right bits
in the right places to the various EXTI & NVIC configuration
registers.

:::tip
If this is still a bit confusing, you'll get another chance to work through it
(in more detail) in [next week's lab](/labs/10-connecting-discoboards/#input-with-interrupts).
:::

:::tip
There are often more things to configure (i.e. GPIO pins) than there are bits in
a 32-bit register---can you guess how the designers of the discoboard get around
this limitation?
:::

Since you're hopefully well acquainted with the load-twiddle-store process for
writing the configuration registers like this, to start this lab we've provided
some files with the initialisation code to save you some time. It's worth having
a look through, though---if you don't understand what they're doing (and you
can't figure it out from the [assembler
manual](https://sourceware.org/binutils/docs/as/)) then you need to ask for
help---it's not too late!

<!-- TODO: not sure how to do this just yet The code is divided -->
<!-- into three small libraries---`joystick.s`, `systick.s` and `led.s`, each of -->
<!-- which has an "init" function (e.g. `joystick_init`). -->

The template provides some starter code for using the joystick in `joystick.S`.
Make sure you read and understand what the functions in that library are
doing---if you don't, you'll have trouble later on. Here are a few things worth
noticing:

1. the LED library (which builds on the LED code from the last couple of labs)
   now supports the green LED as well---have a look at the functions marked
   `.global` at the top of `led.s` to get an idea of the things you can do with
   this library

2. the joystick init code sets the GPIO pins to **input mode** using the
   `GPIOA_MODER` register (this is different to the [blinky
   lab](/labs/05-blinky/), where we only used the
   pins in output mode)

3. the central joystick button is connected to **PA0** which (at least as
   configured in the setup code) will trigger the `EXTI0_IRQHandler` you'll need
   to write---don't forget to declare the handler as `.type EXTI0_IRQHandler,
   %function`

4. unlike the SysTick interrupt, the EXTI interrupts are not enabled by
   default---they must be enabled by setting the relevant bit in the interrupt
   mask register `EXTI_IMR1` 
   (described in *Section 12.5.1* of the **disco-board** reference manual,
   mapped to address `0x40010400`)

5. the EXTI controller can use either a **rising edge** (when the signal goes
   from `0` to `1`) or **falling edge** (when it goes from `1` to `0`) or
   **both** as a trigger for the interrupt---it's currently set to rising edge
   in the `joystick_init` function (think: what will the difference be if you
   set a falling edge trigger instead/as well?)

6. once the interrupt handler function has done whatever it needs to do, it
   needs to tell the EXTI controller that it's finished handling interrupt *n*
   by writing the *n*th bit in the `EXTI_PR1` "pending" register (`0x40010414`)

:::info
Write a program where pressing the central joystick button toggles the green LED
on and off. Hint: the interrupt configuration & enabling is already done in
`joystick_init`---for this Exercise you only need to write the interrupt handler
function and add it's symbol to the vector table. Commit & push your program to
GitLab.
:::

:::tip
In this exercise you've turned on the "centre" button on the joystick (PA0), but
the "directions" (up/down/left/right) don't work---they're connected to pins 1
to 5 of the same GPIO port (GPIOA). If you're keen, you can turn on the other
ones (same process as before except some of the register addresses & bit indexes
will be different).
:::

## Exercise 4: interrupt priorities {#exercise-4}

What happens when you are busy handling interrupt and another interrupt happens?
In this exercise you will construct such a scenario and see how interrupt
priorities work.

Use the following code as the `SysTick_Handler` function:

```ARM
.type SysTick_Handler, %function
SysTick_Handler:
  bl red_led_on
SysTick_Handler_infloop:
  nop
  b SysTick_Handler_infloop
.size SysTick_Handler, .-SysTick_Handler
```

This handler just turns on the red LED and then goes into an infinite loop. The
effect is that when the first SysTick interrupt happens, control flow will get
stuck in this handler code.

:::info
This is actually a **bad** idea for writing an interrupt handler. Usually you
want the interrupt handling to be quick (it's an interrupt, not the right place
to do computationally intensive work). But it's useful to do it this way to see
how interrupt priorities work.
:::

Now if you press the joystick button when the red LED is on, what happens?

Do you remember that the **N** in **N**VIC stands for *nested*? This means that
the interrupts can happen inside of one another. Here's a diagram to show what
it might look like:

![Multi-interrupt](/images/labs/lab-9/multi-interrupt-timeline.png)

This isn't the full story, though---the discoboard doesn't always "kick out" the
currently running interrupt for the new one, it depends on the priority. On the
discoboard (as in life) some things are more important than others, and each
interrupt has a priority associated with it. On your discoboard, this priority
is represented by a 4-bit number, with 0 being the highest priority and 15 being
the lowest. When an interrupt handler is running and a new interrupt is
triggered, it will only preempt (i.e. interrupt) the currently running interrupt
handler if the priority is lower. If it's the same or higher, that interrupt
handler will be run once the currently running one finishes (i.e. returns with
`bx lr`).

If your green LED doesn't turn on when you press the joystick and the
red LED is on, this means that either the SysTick interrupt has the same or
higher priority (i.e. a smaller number as the priority value) than the EXTI0
interrupt. To change the interrupt priority so that you can click the green LED
on even when the red one is blinking (i.e. when the SysTick interrupt handler is
running) you'll need to lower the priority (give a higher number) to the SysTick
interrupt.

Because the two interrupts (the SysTick timer interrupt and the EXTI0 joystick
interrupt) have some differences as mentioned earlier (one is part of the core
ARM Cortex standard, one is a discoboard-specific thing) you need to set their
interrupt priorities in slightly different places:

- for the SysTick interrupt, you can set the interrupt priority by writing bits
  28-31 of the System Handler Priority Register 3 (`SHPR3`, base address
  `0xE000ED20`) described in B3.2.12 of the [ARM architecture reference
  manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf)

- for the PA0 interrupt, you can set the interrupt priority by writing bits
  20-23 of the NVIC interrupt priority register (`NVIC_IPR1`, base address
  `=0xE000E404`)

:::info
Modify the priority of your SysTick interrupt handler so that it *does* get
preempted by the EXTI0 handler and the green light comes on when the red LED is on.
Commit and push your program to GitLab.
Experiment with different priority values---what happens if they're the same?
:::

:::tip
If you're wondering how to figure out exactly which bits to set to control the
priorities, then [here's an article which might help you
out](http://www.ocfreaks.com/interrupt-priority-grouping-arm-cortex-m-nvic/).
It's for a different ARM Cortex-M board (i.e. not your discoboard) the main
principle is the same.
:::

## Exercise 5: QuickClick {#quickclick}

In the final exercise, your job is to take your new knowledge of interrupts and
make a game called **QuickClick**. It's a simple game:

1. you blink the red LED on your discoboard for a short time every 5 seconds

2. the player's goal is then to press the joystick button when the red LED is on

3. if you get the timing right (i.e. the red LED *is* on when the button is
   pressed) the green LED comes on

4. each time you get it right, the red blink duration gets shorter (so that it's
   harder to get the timing right for the next round).

:::info
When you're clicking your joystick, try and be a *bit* gentle on your
discoboard. Make sure you're on a flat surface (and that none of the pins are
likely to get bent). Don't get too carried away and smash your fist down on the
joystick---it's not built to handle that :)
:::

For this exercise, you can take advantage of your ability to enable & disable
different interrupts in software to make it easy to implement the "is the red
light on? if so, then clicking the button will turn on the green" logic:

1. perform all the configurations steps necessary (including defining the
   handler function) to use the joystick as an input device

2. in your `SysTick_Handler`:

   - enable the joystick interrupt by setting the bit in the interrupt **set**
     enable register `NVIC_ISER0` (address: `0xE000E100`) The bit you are
     looking to set can be found in the position column of the interrupt vector
     table in section 11.3 of the [discoboard reference
     manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/)

   - You may also want to clear **both** EXTI and NVIC interrupt pending bits
     **before** enabling the EXTI interrupt.
     Otherwise the pending interrupt will trigger when you enable it,
     causing the green LED to turn on as soon as the red is on.

   - blink the red LED in a **blocking** fashion (i.e. use a delay, so that the
     red LED goes on and then off again before the `SysTick_Handler` exits)

   - before `SysTick_Handler` exits, disable the joystick interrupt by setting
     the bit in the interrupt **clear** enable register `NVIC_ICER0` (address:
     `0xE000E180`)

<div id="clear-enable-gotcha" class="info-box" markdown="1" style="margin-bottom: 20px;">

There's one more "gotcha" to be aware of when dealing with the ***clear**
enable* and ***clear** pending* NVIC control registers (e.g. `NVIC_ICER0` or
`NVIC_ICPR0`). As described above, to disable an interrupt (ICER) or clear a
pending interrupt (ICPR) you write a `1` to the corresponding bit (e.g. to
disable the interrupt in position 6 of the NVIC you write a `1` to the 7th bit
from the right in `NVIC_ICER0`).

However, you might have noticed something if you were reading Sections B3.4.5
(p684) and B3.4.7 (p685) the [ARM reference manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf/) really closely. In
the description for those registers it says:

> **1**: On reads, interrupt enabled

which means that if an interrupt is enabled, then a *read* from that
(memory-mapped) register will show the corresponding bit as `1`.

This is a problem for the [load-twiddle-store](/labs/05-blinky/#load-twiddle-store) pattern, because the point of the load
twiddle store is to leave all the bits unchanged except for the one you're
interested in. However, this means that all of the currently enabled interrupts
(whose bits will read as `1` in the *load* phase) will be disabled when you
write the bits back in the *store* phase---which (almost certainly) isn't what
you want!

Again, here's an example: say there are 3 interrupts currently enabled, then a
load from the corresponding register would have `1`s in those three positions,
and `0`s elsewhere. If you load/twiddle/store the value, then all three of those
interrupts would be *cleared* by the store operation.

This means that for the ***clear** enable/pending* registers you should just
write a `1` for the particular interrupt you're interested in, and a `0` in all
the other bits.

Next week's lab goes into more detail about how the interrupts are routed in
your discoboard, so if you're still confused/curious then [jump
ahead](/labs/10-connecting-discoboards/) and see
how it works in more detail.

</div>

Can you see how you can use this technique to temporarily enable the joystick
interrupt in the SysTick interrupt handler so that the joystick will only work
when the red LED is on?

:::info
Implement the QuickClick game following the steps above (you can use as much of
the startup code provided earlier as you like). Commit and push your program to
GitLab.
:::

## Extension ideas

<div class="extension-box" markdown="1" style="margin-bottom: 20px;">
There are *heaps* of things you can do to stretch yourself further:

- can you modify QuickClick to make it more fun? (e.g. using the direction
  buttons on the joystick as well?)

- can you re-implement the QuickClick game without interrupts?

- can you turn on the discoboard's random number generator (RNG) and use it so
  that the red LED blinks on randomly, rather than at regular intervals? Hint:
  *Section 24* of the [discoboard reference manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/) is the place to
  find the configuration steps required to get the RNG working---it's not too
  difficult.
</div>

## Summary

Congratulations! In this week's lab you learned how to

1. configure the GPIO pins connected to the joystick on your discoboard (the
   little blue diamond thingy) so that pressing down on the joystick triggers an
   interrupt

2. write an interrupt handler to *do something useful* when you press the
   joystick button

3. use interrupt priorities to control what happens when different interrupts
   come in at the same time

:::info
Make sure you logout to terminate your session, and pack up your board and USB
cable carefully.
:::
