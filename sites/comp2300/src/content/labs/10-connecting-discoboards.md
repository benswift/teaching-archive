---
title: "Week 10: connecting discoboards"
summary: "using GPIOs and wires to talk to one another"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-lab-10
---

:::info
It's probably pretty obvious from the title of this lab, but it's worth saying
right at the top in bold: **this lab content will be *really* helpful for doing
assignment 3**.
:::

## Outline

Before you attend this week's lab, make sure:

1. you have completed [lab 9](/labs/08-input-through-interrupts/) and understand how signals (i.e.
   voltage changes) on your GPIO pins can trigger interrupts

In this week's lab you will:

1. configure the GPIO pins on your board for both input and output

2. connect the GPIO pins to one another with physical wires

3. configure and write interrupt handlers to *do things* when stuff happens on
   these wires

4. connect your discoboard to your lab partner's board with wires and turn their
   LEDs on from your board

## Introduction

This week you'll take a deeper dive into the GPIO & interrupt capability on your
discoboard. The **GP** in **GP**IO stands for **G**eneral **P**urpose, which
means that each pin (the pointy little gold-coloured bits of metal sticking up
in rows along the sides of your discoboard) can be used for either digital input
*or* output (or even other things). The mode (input mode, output mode, alternate
mode) of a given pin is configured (you guessed it!) by writing certain bits to
special GPIO configuration registers.

In this week's lab you'll learn more about the stuff you did in Week 8 when you
set the joystick pins to input mode, and you'll learn how to control the signals
(i.e. high and low voltages) coming out of the pins in software.

[Exercise 1](#exercise-1) lays the groundwork (and is pretty wordy) but then
things pick up in [Exercise 2](#input-with-interrupts), and by the end of the
lab you'll get to be really creative. This lab might seem a bit similar to [last
week](/labs/08-input-through-interrupts/), but it
goes into a bit more depth about exactly what it means for you to configure,
read & write to the GPIO pins, which is going to be super-helpful for
[assignment 3](/deliverables/03-networked-instrument/).

:::tip
Today, you'll work in pairs for [Exercise 4](#exercise-4), so you need to say
g'day to your lab neighbour right now. If you normally work with a particular
partner in these labs, maybe today's a chance to work with someone else. To get
the ball rolling, ask them this question: in the context of GPIO pins, what is a
*signal*? Is there a difference between a signal which comes internally through
the discoboard (e.g. the joystick input you used in the [Week 8
lab](/labs/08-input-through-interrupts/) and the
signal which comes in through an external wire?
:::

## Exercise 1: click-to-blink recap {#exercise-1}

This first exercise will *seem* like a re-hash of [stuff
you've](/labs/05-blinky/) [done
before](/labs/08-input-through-interrupts/)---clicking the joystick and turning on an LED.

However, this time when you fork & clone the [lab 10
template]() and have a look inside there's some good news
and some bad news:

- the **bad news** is that you don't have the sweet `joystick.S` and `led.S`
  helper libraries from last time[^files]

- the **good news** is that you'll get to write it yourself and see exactly how
  it works (and there are still some helpful utility functions & macros in the
  template---you don't have to start *completely* from scratch)

[^files]:
    obviously you've still got them on your computer, or you can find them in
    the lab 9 template, but resist the temptation to just go and use them and
    you'll learn a *lot* more about how this all works

As you re-do the LED & joystick configuration using a generic GPIO config
process you'll get a better picture of how the GPIO infrastructure and NVIC/EXTI
interrupt controllers work together on your discoboard.

### GPIO **output**

To configure a pin in output mode, `src/libcomp2300/macros.S` has a handy `GPIO_configure_output_pin`
macro. For example, to declare pin `PH0` as an output pin, you could call the
macro like so:

``` ARM
GPIO_configure_output_pin H, 0
```

:::info
Most of the macros in the `macros.S` are just simple wrappers around function
calls, using the macro to set up correct parameters (remember, [macros are just
kids with scissors!](/_lectures/06-assembler-macros/#what-are-macros-for)). You still need to be aware (and careful) of which
registers the macros might touch. Before you use any macros in this lab, **make
sure you read the macro definition and understand what it is doing**.
:::

To use the GPIO pins, you need to turn them on by making sure the corresponding
GPIO port receives a clock signal. Remember from [lab 5](/labs/05-blinky/) that the discoboard's red and green LEDs are connected to
ports B and E respectively:

```ARM
GPIOx_clock_enable B
GPIOx_clock_enable E
```

Make sure you enable port `A` as well for joystick.

To send data out (i.e. to change the voltage) on the GPIO pin, you write a `0`
or `1` to the GPIO port's Output Data Register (ODR). Remember that the red LED
is connected on GPIO `PB2` and the green LED is on `PE8`. So you can turn on the
LEDs by writing a `1` to their output data registers. Most of these helper
macros have `set`, `clear` and `toggle` versions, which do what you'd expect.

``` ARM
GPIO_configure_output_pin B, 2 @ (red LED)
GPIO_configure_output_pin E, 8 @ (green LED)

GPIOx_ODR_set B, 2
GPIOx_ODR_set E, 8
```

:::tip
Once you write a signal (a `0` or `1`) to the GPIO line, how long does it "stay
there" for? How could you figure this out?
:::

### GPIO **input**

All good so far---remember that this is just a recap. Now, let's take the same
approach to the joystick, which is similar to the LEDs in that it's wired to
specific GPIO pins (`PA0`: centre, `PA1`: left, `PA5`: down, `PA2`: right,
`PA3`: up) but this time it's an **input** device. There are some macros for
this, too:

``` ARM
GPIO_configure_input_pin A, 0 @ (central joystick button)
```

Here, you've declared the pin `PA0` as an input pin. The `GPIO_configure_input_pin`
macro does a couple of things:

- sets the *input* bit pattern into the appropriate mode register (it's `0b00`
  for input, just like it was `0b01` for output)

- configures the input pin to use a [pull-down
  resistor](https://learn.sparkfun.com/tutorials/pull-up-resistors/what-is-a-pull-up-resistor)---this
  is so that it will reliably read a `0` even if it's not connected to anything
  (if you don't do this, then you might get weird results when your input isn't
  connected to anything)

To read data in from a GPIO pin, you can read the current value (high `1` or low
`0`) on any GPIO pin at any time by reading the appropriate bit from the GPIO
port's Input Data Register (IDR). There's a helper macro for this as
well---`GPIOx_IDR_read`, and it sets flags based on the result (so the **z**ero
flag will be set if the GPIO line is low, and it won't be set if the GPIO line
is high).

You can do this as often as you like---reading data from the pin with
`GPIOx_IDR_read` will always leave the current value (`0` or `1`) in `r0` and
also set the flags appropriately, and it doesn't change the signal on the pin.
You can use this to "poll" a given pin in a loop:

``` ARM
poll_gpio:
  @ read PA0, set flags based on result
  GPIOx_IDR_read A, 0
  
  @ do something based on the flags in here
  
  b poll_gpio
```

:::info
Write a program which enables the central joystick button as an input, and polls
(as in the loop above) to turn the green LED on when the button is pressed.
Commit & push your program to GitLab.
:::

## Exercise 2: let's do it again, this time using interrupts {#input-with-interrupts}

As we talked about in the week 8 lectures, polling the current value on the pin
in a loop isn't the best way to do things, because it makes it hard to do other
stuff in the meantime. There's a better way: configure the GPIO line to fire an
interrupt when the value changes.

Before you can enable and configure the interrupts, you need to enable the
System Configuration Controller (`SYSCFG`) clock so that you can modify the
system configuration (see Chaper 8 and 8.2.3 in the [discoboard reference
manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/)).

```ARM
@ enable SYSCFG clock
RCC_APB2ENR_set 0
```

This code is included in the [template](), you can see the
relevant configuration register in Section 6.4.21 on p233 of the [discoboard
reference manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/).

There's one other macro in `macros.S` which is helpful when setting up GPIO pins
as input: `GPIO_configure_input_pin_it`---note the `_it` suffix. This macro does
all the configuration of `GPIO_configure_input_pin` and additionally registers
the pin as a source for interrupts. There are two parts of the discoboard which
are working together to do this:

- the *Extended Interrupts and Events Controller* (EXTI) is the part of your
  discoboard which allows signals (either a rising or falling edge) on the GPIO
  pins to trigger an interrupt

- the *Nested Vectored Interrupt Controller*[^nvic] (NVIC) is the hardware which
  "receives" the interrupt, and (depending on the priority, what other
  interrupts are running, and a few other things) will interrupt the CPU and
  transfer control to the appropriate handler function in the vector table

[^nvic]:
    we talked about the NVIC [previously](/labs/08-input-through-interrupts/), although this lab shows in more
    detail how it all works

The `GPIO_configure_input_pin_it` sets the appropriate bits to enable the the
pin as a source of interrupts. The next step in the EXTI configuration is to
determine whether the interrupt will be triggered on a **rising edge** (`0` to
`1` transition) or a **falling edge** (`1` to `0` transition). Again, there are
helper macros for this:

``` ARM
GPIO_configure_input_pin_it A, 0
EXTI_set_rising_edge_trigger 0
EXTI_set_falling_edge_trigger 0
```

There are a couple of quirks here: firstly, the EXTI controller can only listen
to one port for a given pin number, so for example you can't have both `PA0` and
`PB0` triggering an interrupt. This is because the pins are multiplexed in the
EXTI controller (see the diagram below). This is to keep things simple---you
probably don't *need* separate interrupt triggers on all the pins. Here's an
example of what this looks like for EXTI0---pin zero from *all* ports goes in
there, and the EXTI controller can only listen to one at a time.

![GPIO](/images/labs/lab-10/GPIO-EXTI-mapping.png)

Secondly (and more confusingly) the EXTI controller only has 7 GPIO interrupt
lines into the NVIC, and since there are more than 7 pins in each GPIO port
(there are 16, in fact) this means that some of the pins have to *share* an
interrupt. The first 5 (`EXTI0` to `EXTI4`) get their own interrupts, but 5--9
have to share the `EXTI9_5` interrupt, and 10--15 have to share the `EXTI15_10`
interrupt. Here's a picture to make things clearer (the extra number in the NVIC
column is the *position* of the interrupt in the NVIC vector table):

![EXTI](/images/labs/lab-10/EXTI-NVIC-mapping.png)

This is all shown (along with the names, positions & priorities) of all the
other interrupts in your discoboard in Table 42, Section 11.3 on p321 of the
[discoboard reference manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/). Here's a
simplified version of that table which only contains the rows relevant to the
EXTI controller:

| position | interrupt   |
|----------|-------------|
|        6 | `EXTI0`     |
|        7 | `EXTI1`     |
|        8 | `EXTI2`     |
|        9 | `EXTI3`     |
|       10 | `EXTI4`     |
|       23 | `EXTI9_5`   |
|       40 | `EXTI15_10` |

For this reason, the `GPIO_configure_input_pin_it` macro doesn't enable the NVIC
interrupt---you need to enable it yourself using the `NVIC_set` macro like so:

```ARM
NVIC_set ISER 8
```

Which interrupt (in the NVIC) does the above line of assembly code enable?

ISER stands for **I**nterrupt **S**et **E**nable **R**egister; you can also use
ISPR (set pending) or other register banks there, see the macros file for
details.

Here's an example of where this gets tricky: if you want to have interrupts on
(say) pins `PE13` and `PE14` they will both trigger the same interrupt handler
function `EXTI15_10_IRQHandler`, since they're both in the 10--15 range. To deal
with this, the handler function will have to check another register (the EXTI
interrupt pending register) to see which pin number triggered the interrupt.

So, the full journey of a GPIO interrupt through your system is:

1. an edge (rising or falling) is detected on your input GPIO pin

2. the EXTI controller detects this (assuming the interrupt is enabled and it's
   watching the right port) and raises one of the `EXTIn` interrupt lines to the
   NVIC
   
3. if the `EXTIn` interrupt is enabled in the NVIC, your program is interrupted
   and the handler function (determined by the address in the vector table) is
   called

If you have trouble, here are a few questions to ask yourself:

0. have you tried pressing the reset button before debugging?
1. have you enabled the SYSCFG clock?
2. have you clocked the GPIO pins?
3. have you configured the GPIO pins as input pins?
4. have you configured the GPIO pins to trigger an interrupt?
5. have you configured the trigger for the interrupt (i.e. rising or falling edge)?
6. have you enabled the appropriate EXTI interrupt in the NVIC?
7. have you written the interrupt handler function, and is it globally visible?
8. does your interrup handler function clear it's pending register before it
   exits? (the `EXTI_PR_clear_pending` macro will probably help you out here)

:::info
Write a program where pressing the central joystick button blinks the red LED,
but pressing one of the direction buttons blinks the green LED (don't forget to
enable the correct interrupts in the NVIC, and to disable the interrupt pending
flag using the `EXTI_PR_clear_pending` macro before the handler function exits).
Commit & push your program to GitLab.
:::

<div id="disabling-interrupts" class="extension-box" markdown="1" style="margin-bottom: 20px;">

The fact that the GPIO interrupts go though both the EXTI and the NVIC *is*
complicated, and it also means there are several different ways of
enabling/disabling/triggering these interrupts. What you've done in this
exercise is to enable it in **both** places: the EXTI enabling happens in the
`GPIO_configure_input_pin_it` macro, and the NVIC enabling in the `NVIC_set`
macro. If you want to disable it in the EXTI, you disable the interrupt for pin
*n* by **clearing** (setting to `0`) the *n*th bit in the `EXTI_IMR1` register
(base address `0x40010400`).

To disable it in the NVIC, you **set** (to `1`) the correct bit (see mapping
diagram above) in the `NVIC_ICERn` register (base addresses starting at
`0xE000E180` for `NVIC_ICER0`, but there's lots of them---e.g. `EXTI15_10`
spills into `NVIC_ICER1` register because it's in slot 40). As before, you can
use the `NVIC_set` macro for this, just use `ICER` where you used `ISER` in
[Exercise 2](#input-with-interrupts). Be careful not to use the normal
load-twiddle-store approach for this, though---as discussed in the [Week 8
lab](/labs/08-input-through-interrupts/#clear-enable-gotcha).

Just to recap: to disable an interrupt in the EXTI you *clear* a bit, and to
disable it in the NVIC you *set* a bit, and it's a different bit in each case.
Don't ask me why things are so inconsistent, blame the people who designed the
discoboard. The `macros.S` file should handle some of this stuff for you, but
that's the full story if you're getting confused trying to disable/re-enable
interrupts in your program.

</div>

## Exercise 3: click-over-the-wire {#exercise-3}

So far this lab has been a bit of an information dump, and all you did was turn
on the LEDs with the joystick (which you've known how to do for ages). In this
exercise, you'll take your knowledge of general GPIO input and output and
re-implement the click-to-blink program *again*, but this time sending the
"click" signal over the wire.

Grab one of your jumper leads and connect it to your board from pin `PB7` to
`PE13`. You'll use one end as the receiver and one end as the sender---it
doesn't matter which. What you need to do in this exercise is:

- configure your output pin as a GPIO output

- configure your input pin as an interrupt-enabled GPIO input

- write your joystick `EXTI0` interrupt handler so that instead of toggling the
  LED directly, it toggles the value on the sender data pin (using the ODR
  helper macro)
  
- write another interrupt handler function (have a careful think about what
  should it be [called](#input-with-interrupts)?) and enable it in the NVIC and
  make *that* handler function toggle the LED

The info in the first two exercises will help you out---there are a few gotchas,
so read it carefully and ask for help if you get stuck. Once you're done with
that, add another wire between `PD0` and `PE14`---repeat the process so that
pressing one of the joystick direction buttons toggles the other LED over the
wire.

:::tip
If you use `PD0` you'll have to be a bit careful---since `EXTIO` is used by the
center joystick button (wired to `PA0`), it's NOT possible to set `EXTIO` as
an interrupt for `PD0`. Why can't we use the same handler for both A0 and D0
interrupts?
:::

:::info
Write a program where you can toggle the red & green LEDs using the joystick
with the signals travelling over the wires (as described above). Commit & push
your program to GitLab.
:::

:::tip
What happens if you experiment with different triggering
schemes---rising+falling edge vs rising edge only? Do the triggering schemes
have to be the same on both ends of the wire? How many different ways can you
configure the wires & interrupts in your click-over-the-wire program?
:::

## Exercise 4: multi-player QuickClick {#exercise-4}

Remember the [QuickClick game](/labs/08-input-through-interrupts/#quickclick) you made two weeks ago? In
Exercise 4 you need to pair up with your neighbour to build a multi-player
variation of QuickClick.

:::tip
Discuss with your neighbour (who is now your partner for this exercise)---how is
this possible?
:::

As you (hopefully) just figured out when chatting with your partner, the
multiplayer part of this is super-easy because you already did all the hard work
in [Exercise 3](#exercise-3). Once you're sending a signal over a wire, it
doesn't matter whether both ends of the wire are connected to the same
discoboard or *different* discoboards.

There is one caveat here: voltages, such as the "low" and "high" voltages you've
been setting and reading from your GPIO pins, are actually *relative*
measurements. Think of it like the concepts of shortness/tallness: someone might
say you're either tall or short depending on who you're standing next to. Even
though you *might* say that a person is tall (or short) what you really mean is
that that person is taller (or shorter) than the average of the heights of all
the other people you know. Well, voltage is similar---what you care about is the
voltage *difference* between two places. When your wire is connected to your
board only, there's no problem---both ends have the same common reference or
**ground**. But when two boards are connected to each other they need some way
of agreeing on what the `0` voltage level is. This is achieved by connecting
their `GND` **ground** reference pins together with a separate cable. Your
discoboard has several `GND` pins because needing to connect boards to a common
ground is so common, so you need to have plenty of pins handy to do it.

To get back to the "multiplayer QuickClick" exercise, what you'll need to do is:

1. connect one of the `GND` pins on your discoboard to one of the `GND` pins on
   your neighbour's discoboard

2. take the wire connected to the **sender** end on *your neighbour's* board and
   connect it to the **receiver** end of *your* board (you can switch your
   sender and receiver pins around if it makes your life easier)

3. figure out how the game is going to work:
   - will you play "tennis"---where you each click to "rally" the LED back to
     your opponent?
   - is the goal to keep the green LED on your board and kick the red LED onto
     your opponents board, with the different joystick directions controlling
     what happens to each LED?
   - starting with the red LED on, can you set up a countdown on one of your boards which will turn

To implement these games you'll need to work *with* with your partner---make
sure your programs work together. This is a good chance to practice your pair
debugging skills.

:::tip
If you're really adventurous, can you connect up three or more discoboards for a
disco MMORPG? Not really? Well, never mind. See how many boards you can get
working together, anyway.
:::

:::info
Submit the multiplayer QuickClick program you wrote with your partner. In your
submission, make a note of who your partner was (each person should submit their
program). Commit & push your submission to GitLab.
:::

## Summary

Congratulations! In this week's lab you learned how to

1. configure the GPIO pins on your board for both input and output---and connect
   them up with physical wires

2. configure and write interrupt handlers to *do things* when stuff happens on
   these wires

3. connect your discoboard to your neighbour's board with wires, and turn their
   LEDs on

:::info
Make sure you logout to terminate your session, and pack up your board and USB
cable carefully.
:::
