---
title: Networked instrument
summary: "Wire up your discoboard to build a networked instrument"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-assignment-3
hidden: true
---

## Outline

- **Due date:** 11:59 PM, Tuesday 28th of May, 2019 (Tuesday of week 12)
- **Mark weighting:** 12 marks
- **Submission:** submit your assignment through
  [GitLab]() ([full instructions
  below](#submission-process))
- **Policies:** for late policies, plagiarism policies, etc. see the [policies
  page](/policies/)

In the final assignment, you'll take the principles from the sequencer
instrument you built in [assignment 2](/deliverables/02-sequencer/) and make it network-aware, so that it can
receive messages from the outside world. That means that instead of playing a
sound with a function call in your program you do it by sending a "message" as a
change in voltage (an electrical signal) on the GPIO pins. This is a **live
wire**---it's your job to make sure these electrical signals are sent & received
to successfully play the sound. To illustrate[^acdc], here's AC/DC live in Paris
(1979) playing *Live Wire*:

[^acdc]:
    this doesn't really illustrate anything to do with the assignment, but it
    was harder to find a relevant youtube clip this time around

<YouTubeEmbed id="6tdiMdj164w" />

As you've seen in several of the labs (e.g. the [blinky lab](/labs/05-blinky/) and [lab 8](/labs/08-input-through-interrupts/)) the discoboard's GPIO pins provide a
lot of flexibility for transmitting data (`0`s and `1`s) as low and high
voltages. In those labs, the pins were connected to LEDs & joysticks, but you
might have noticed there are also a bunch of little gold-coloured pins sticking
up on your board connected to nothing in particular. Any of these which are
marked **P**XY (where X is the *port number* from A to F and Y is the *pin
number* from 0 to 15) are GPIO pins as well, and you can connect them up using
jumper wires like so:

![Discoboard](/images/deliverables/03-networked-instrument/discoboard-wires.jpg)

:::info
You have to be a little bit careful when configuring your GPIO pins as inputs
and outputs like this---it is possible to fry your board.
:::

This assignment has two parts: in Part 1, you need to implement the **P2300
communication protocol**---a specific way of sending the `1`s and `0`s over the
wire and interpreting them at the other end. In Part 2, you get to design your
own protocol for playing sounds over the wire.

The [assignment 3 template repo]() contains the usual
starter code, including the utility libraries which have been introduced in the
labs over the last few weeks. These libraries are there so that you can skip
over the stuff you've already done in the previous assignments and spend your
energy on actually implementing the P2300 protocol. It's still crucial that you
understand what this code does, though, so if you're not sure about anything
then ask a question on [the COMP2300 forum]({{ site.forum_url }}) using the `assignment3`
tag.

## Background: the P2300 protocol {#p2300-protocol}

:::info
This assignment requires a bit more explanation than the first two. Make sure
you **read this section carefully**---if you don't understand the P2300 protocol
completely then you're going to have a tough time implementing it.
:::

The purpose of P2300 is to allow two devices to work together to play music (to
generate a sound waveform). The overall goal is similar to the [sequencer you
wrote in assignment 2](/deliverables/02-sequencer/),
except that this time the "messages" to trigger a new note are sent over a wire.

To communicate over a wire (a network) it's not enough to just connect two GPIO
pins together with a jumper wire. You need a *protocol*: a way of interpreting
the signals on the wire so that the sender and the receiver can understand one
another. There are lots of protocols you could use (we'll cover some in lectures
in week 9, and you'll get to create your own in Part 2) but in Part 1 of this
assignment you need to implement the *P2300 protocol*.

### Wires {#wires}

The P2300 protocol (which from here we'll refer to as just P2300) describes the
way that a **sender** device can control the playback of a
[sequence](/deliverables/02-sequencer/) of notes on
a **receiver** device. P2300 is a simplex 2-wire protocol, which means:

- the information flows in one direction: *from* the device acting as the sender
  *to* the device acting as the receiver
- it requires two physical connections between the sender & the receiver

Here's a high-level diagram of the information flow:

![P2300](/images/deliverables/03-networked-instrument/p2300-high-level.png)

The two lines[^line] (wires) used in P2300 are:

- a **note on/off** line which the sender uses to tell the receiver to begin
  playing the sound at the current pitch (frequency); i.e. to turn the sequencer
  *on* or *off*

- a **pitch change** line which the sender uses to tell the receiver to change
  the current pitch of the note being played

:::info
Don't get confused between the terms *pitch* and *frequency*, in the context of
the P2300 protocol they mean the same thing.
:::

[^line]: wires are often called *lines* when we're talking about networking

In principle the P2300 connections can be made on any pair of GPIO pins on your
discoboard. However, so that we can test your program easily you **must** use
these specific pins:

- connect the **note on/off** line from **PE14** (sender) to **PD0** (receiver)
- connect the **pitch change** line from **PE15** (sender) to **PB3** (receiver)

### Sender {#sender}

Here is the full list of P2300 "messages" the sender may send to the receiver:

1. a *rising edge* on the **on/off line** tells the receiver to begin making a
   sound (the pitch of which is determined by the current [pitch sequence
   index](#p2300-pitch-sequence))

2. a *falling edge* on the **on/off line** tells the receiver to immediately
   stop making any sound at all (i.e. to go quiet)

3. a *rising edge* on the **pitch change** line tells the receiver to increment
   the current [pitch sequence index](#p2300-pitch-sequence) by 1 (regardless of
   whether the receiver is currently playing sound or not)
   
4. a *falling edge* on the **pitch change** line has no effect

The sender device doesn't generate the waveform itself (that's kinda the
point). It expects that there's a [receiver](#receiver) listening on the other
end which will correctly interpret the "messages" (the voltage changes on the
[on/off and pitch change lines](#wires)).

### Receiver {#receiver}

The P2300 receiver is the device which actually makes the sound. The waveform
must be a sawtooth wave (unlike in assignments [1](/deliverables/01-synth/) and [2](/deliverables/02-sequencer/) which were square waves).

As well as responding to the P2300 messages as described above, on startup the
P2300 receiver device must:

1. make no sound (as if the last **note on/off** message was an "off" message)
2. initialise the starting [pitch sequence index](#p2300-pitch-sequence) to 0
   (i.e. the first element in the P2300 pitch sequence)
     
Finally, between messages[^instantaneous] the receiver must either:

1. continue to play a sawtooth wave at the current pitch (if the last **note
   on/off** message was an "on" message)
2. remain silent (if the last **note on/off** message was an "off" message)

[^instantaneous]:
    these messages will only take a very short time anyway---the time it takes
    for the physical voltage to transition from low to high (or vice versa) so
    they are essentially instantaneous from the waveform generator's perspective

### P2300 pitch sequence {#p2300-pitch-sequence}

In P2300 a pitch change message does not specify an actual pitch (either in Hz
or as a MIDI note number). Instead, P2300 specifies that the receiver will play
a pitch from a pre-arranged sequence of pitches. Each pitch change message
increments the pitch sequence index by 1 (wrapping back to 0 when it is asked 
to increment from 7), so that the receiver will play the next pitch in the sequence.

This means that P2300 is a stateful protocol; you can't look at any particular
message and know what the receiver will do, you also need to know the current
pitch sequence index.

Here is the P2300 pitch sequence (remember that on startup the pitch sequence
index must be initialised to 0, i.e. the starting pitch is 220Hz):

| pitch sequence index | pitch (Hz) |
|---------------------:|------------|
|                    0 |     220.00 |
|                    1 |     246.94 |
|                    2 |     261.63 |
|                    3 |     293.66 |
|                    4 |     329.63 |
|                    5 |     369.99 |
|                    6 |     392.00 |
|                    7 |     440.00 |

In Part 1 you cannot change the pitch sequence---e.g. by adding new entries to
the end of the table. If you do this, you're changing the P2300 protocol, and
**you will lose marks accordingly**.

If the current pitch sequence index is the last pitch in the pitch sequence
(i.e. if the pitch sequence index is 7) and a *rising edge* is triggered on the
**pitch change** line, then the receiver should set the current pitch back to
the first entry in the table. In other words, the pitch sequence should loop
back to the beginning.

In this way, the P2300 protocol can be used to play any sequence of pitches from
the set in the above table[^dorian], e.g. to "skip" a note in the sequence the
sender should send a note off messages, then send two pitch change messages,
then send the next note on message.

[^dorian]:
    If you're curious about this sequence, they're the pitches from
    the [dorian](https://en.wikipedia.org/wiki/Dorian_mode#Modern_Dorian_mode)
    mode in the key of A. But you don't need to understand that to do this
    assignment, just use the frequencies in the table above.

### P2300 example {#p2300-example}

Here's an example of the P2300 protocol in action.

![P2300](/images/deliverables/03-networked-instrument/p2300-example-timeline.png)

The diagram shows an example "communication timeline " for the P2300 protocol.
It shows the way the voltage (either `0` or `1`) on both the **note on/off**
wire (blue) and the **pitch change** wire (green) changes over time. It also
shows the resulting "effects" of the P2300 communication; both the sound output
(in orange---not to scale!) and the current pitch sequence index (in the pink
boxes).

There are a few other things worth noting here:

- the required ["starting state"](#receiver) is satisfied
- pitch changes only happen on a *rising edge*; it doesn't matter when the
  subsequent *falling edge* happens
- between messages (i.e. when there are no voltage changes on either line) the
  receiver keeps on playing (or being silent)
   
## Part 1 (50%) {#part-1}

In this assignment, you need to program your discoboard to implement both the
**sender** and the **receiver** parts of P2300. This means that the jumper wires
will connect from your board to itself (as [described above](#wires)). If you're
confused about how this works, [see the FAQ](#sender-and-receiver).

In Part 1 you need to write an assembly program which uses
[P2300](#p2300-protocol) to play the following song (the pitch sequence
indexes that are shown come from the [table above](#p2300-pitch-sequence)) and 
indicate what the current value of the [pitch sequence index](#p2300-pitch-sequence) 
should be. As in assignment 2 a gap (silence) between notes is represented by a `-` 
in the pitch and pitch sequence index columns. The song must loop: when it gets to the end, it must
loop back to the beginning. You must stick to the P2300 protocol and pitch
sequence [exactly as described above](#p2300-pitch-sequence)---you cannot modify
the receiver's pitch sequence/table to play the sequence.

| pitch sequence index | pitch (Hz) | duration (s) |
|---------------------:|-----------:|-------------:|
|                    0 |     220.00 |         0.25 |
|                    - |          - |         0.25 |
|                    2 |     261.63 |         0.25 |
|                    - |          - |         0.25 |
|                    1 |     246.94 |         0.25 |
|                    - |          - |         0.25 |
|                    3 |     293.66 |         0.25 |
|                    - |          - |         0.25 |
|                    2 |     261.63 |         0.25 |
|                    - |          - |         0.25 |
|                    4 |     329.63 |         0.25 |
|                    - |          - |         0.25 |
|                    3 |     293.66 |         0.25 |
|                    - |          - |         0.25 |
|                    5 |     369.99 |         0.25 |
|                    - |          - |         0.25 |
|                    4 |     329.63 |         0.25 |
|                    - |          - |         0.25 |
|                    6 |     392.00 |         0.25 |
|                    - |          - |         0.25 |
|                    5 |     369.99 |         0.25 |
|                    - |          - |         0.25 |
|                    7 |     440.00 |         0.25 |
|                    - |          - |         0.25 |
|                    6 |     392.00 |         0.25 |
|                    - |          - |         0.25 |
|                    5 |     369.99 |         0.25 |
|                    - |          - |         0.25 |
|                    4 |     329.63 |         0.25 |
|                    - |          - |         0.25 |
|                    3 |     293.66 |         0.25 |
|                    - |          - |         0.25 |
|                    2 |     261.63 |         0.25 |
|                    - |          - |         0.25 |
|                    1 |     246.94 |         0.25 |
|                    - |          - |         0.25 |
|                    0 |     220.00 |         0.25 |
|                    - |          - |         0.25 |

If all goes well, it should sound like this:
<audio controls>
  <source src="/courses/comp2300/assets/deliverables/03-networked-instrument/ass3-tune.m4a" type="audio/mp4">
If you're reading this, then your browser does not support the audio element 😢
</audio>

Marks will be awarded for:

- playing the notes with the correct pitches (frequency)
- playing the notes at the correct tempo (timing)
- clean note transitions (i.e. no pitches other than those in the sequence
  above, even for a split second)
- code structure, readability & modularity (including comments & use of
  functions)
- to be eligible for full marks in part-1, you must use a hardware timer 
  to control the timing of the sender.

For Part 1, you **must** play the sequence by sending messages over the wire
using the P2300 protocol ([we will test this](#is-it-working)). If you try and
play the sequence some other way (e.g. by playing it "directly" with your
sequencer from assignment 2) you'll get zero!

:::info
To help you out, there's a bit more starter code in the [assignment 3
template]() compared to assignments 1 and 2. In
particular, have a look in `src/libcomp2300/tim7.S` for some helper functions for using
the tim7 timer (for the [sender](#sender) part), `src/libcomp2300/wave.S` for
some helper functions for playing the sawtooth wave (i.e. the
[receiver](#receiver) part).  
In addition to this there are *plenty* of useful macros and functions in the 
`src/libcomp2300/macros.S` and `src/libcomp2300/utils.S` files respectively 
(e.g. setting up gpio pins, interrupts, priorities etc.).  
Please do take the time to check them out.
:::

:::tip
There is a lot going on in this assignment, so it's understandable that this 
may seem a little overwhelming. To accommodate for this, the [FAQ](#faq) for 
this assignment is quite extensive, please do take the time to read it all.  
However, for your convenience here is a few of the points we'd like to highlight:  
 ---understand that interrupts [may not work as expected when debugging](#debugging-and-interrupts)  
 ---following from the above, you **NEED** to be resetting your board (click in the 
  black stick to the left of the joystick) before stepping through a debugging session  
 ---think about [how to traverse the table (up and down)](#how-to-decrement) 
  without [changing the pitch table in memory](#can-i-change-the-pitch-sequence-for-part-1)  
 ---ensure that there is [no implicit (or explicit) communication between 
  sender and receiver](#separation) outside of the protocol, (no shared 
  register or memory usage).  
 ---utilize the [common interrupt pitfalls](#interrupts-lmao) to check off 
  possible issues with your code 
:::

## Part 2 (50%) {#part-2}

In part 2, you get to implement a different network protocol for controlling the
music over the wire. There are a few ways to do this:

- extend the P2300 protocol in a meaningful way
- implement a serial protocol using the [shell outline below](#serial-shell) 
- design an all-new protocol
- implement an existing protocol (e.g. an industry standard)
- *some combination of the above* (e.g. modify P2300 using ideas from an
  existing industry-standard protocol)

You also no longer have to play the specific note sequence from [Part
1](#part-1), you can play whatever sequence you like---perhaps pick one which
shows off the cool features of your new protocol.

If you decide to extend the P2300 protocol, you're free to change any aspect of
it. However, there is one caveat---if you make a really superficial change (e.g.
changing only the [pitch sequence](#p2300-pitch-sequence), or only changing
rising edge triggers to falling edge triggers or vice versa) then that **will not**
be enough to pass (it'd be difficult to write a good design document with such a
superficial change anyway). If you're unsure, check with your tutor or ask on
[the COMP2300 forum]().

If your Part 2 protocol requires a different wiring configuration from [Part
1](#wires) then you should make it **really clear** in both your code and your
design document exactly how the jumper wires should be wired up. As mentioned
above, you don't *have* to use a different wiring configuration. See the [FAQ
for more details](#part-2-wires).

Here are some ideas for Part 2:

- extend P2300 to allow the sender to:
  - play multiple notes at once (i.e. [harmony](https://en.wikipedia.org/wiki/Harmony))
  - change the [timbre](https://en.wikipedia.org/wiki/Timbre) of the receiver's
    waveform (e.g. square, triangle, sine)
  - adjust the amplitude (or even [amplitude
    envelope](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_.28ADSR.29_envelope))
    of the notes played by the receiver

- design a protocol where the sender can specify any pitch (frequency) for
  playback (instead of just choosing from a pre-determined [pitch
  sequence](#p2300-pitch-sequence)), either by:
  - using a clock line or timing-based protocol to send a multi-bit "packet"
    over the wire one-bit-at-a-time (a [serial
    protocol](https://en.wikipedia.org/wiki/Serial_communication))
  - using multiple wires to send all the bits of the packet simultaneously (a
    [parallel protocol](https://en.wikipedia.org/wiki/Parallel_communication))

- implement a real-world protocol like
  [1-wire](https://en.wikipedia.org/wiki/1-Wire#Communication_protocol),
  [I2C](https://en.wikipedia.org/wiki/I2c),
  [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) or
  another pre-existing protocol (some of these are pretty hard---but they're a
  great challenge if you want to stretch yourself)

Marks for Part 2 will be awarded for a 
[**design document**](/resources/05-writing-a-design-document/) 
describing what you're doing and how you implemented it in ARM assembly language. This means
that it's ok if you don't do something *super*-complex, the more important thing
is how you explain what you've done. (although it's worth reading the
[FAQ](/resources/01-faq/#ambition) as well). 
Using images/diagrams in this document to help explain what you've done is 
encouraged*. Your design document must be in **pdf** format 
([no more than 2 pages](#can-my-design-document-be-longer-than-two-pages)) 
with the filename `design-document.pdf` in top-level folder on the `part-2` branch.

The design document for Part 2 is based on the protocol *you* implement 
(what it is, why is it like that, how is it implemented). 
That means don't write about the sequence of notes you choose to play, 
or how frequency etc. is calculated.  
For more help on writing the design document, 
[check out this page](/resources/05-writing-a-design-document/).

*Note: any diagrams you submit must be of sufficient quality for academic writing 
i.e no photos of the screen or hand drawn diagrams, with high quality screenshots as 
the minimum acceptable standard.

## Submission {#submission-process}

### Process

Here's the process for working on & submitting your assignment:

1. fork the [assignment 3 template repository]()

2. clone[^own-fork] & work on *your* fork of the major project repo

3. regularly commit & [push](#push-all-branches) your changes to the GitLab
   server

4. the last commits on the `part-1` and `part-2` branches [on the GitLab
   server](#is-it-pushed) (not on your local machine!) *before the submission
   deadline* will count as your submission

[^own-fork]:
    make sure you clone **your own fork** (i.e. the one with your uni ID in the
    url) to your local machine, not the template (because obviously you aren't
    able to change the template for everyone---GitLab won't let you)

### Checklist {#submission-checklist}

1. the code in my `part-1` branch generates the sequence of notes described in
   [Part 1](#part 1)

2. the code in my `part-2` branch generates a different sequence as described in
   [Part 2](#part 2) and I've committed my `design-document.pdf` to the repo as
   well

3. my `statement-of-originality.yml` files for both Part 1 and Part 2 include
   [all the necessary references/acknowledgements](#statement-of-originality),
   and *everything* not mentioned in there is my own work

4. [both branches](/resources/01-faq/#push-all-branches) 
   of my completed project have been
   [pushed](/resources/01-faq/#is-it-pushed) 
   to the GitLab server

5. [both branches](/resources/01-faq/#push-all-branches) 
   pass the Gitlab CI test (the pipeline does not fail)

## Serial shell {#serial-shell}
This section outlines a 3-wire, 1-way serial protocol shell to send messages of 
arbitrary length. If you're stuck on coming up with an idea for a better protocol than P2300, 
then this is a good starting point, but it's just a shell, so things like the length and 
content of the message is up to you! (You can also add / remove wires etc.)

![Serial](/images/deliverables/03-networked-instrument/2017-p2300-high-level.png)

The three lines[^line] are:

- a **control** line which the sender uses to tell the receiver that it's
  sending data (as opposed to just waiting between messages)

- a **clock** line which the sender uses to tell the receiver *when* to read
  each incoming bit from the data line

- a **data** line which is used to send the actual data one-bit-at-a-time as
  either a low (`0`) or high (`1`) voltage

### Implementation {#serial-implementation}

This is just one way to do it, rising edges / falling edges etc. are mostly interchangeable 
as long as you're consistent and say why one may be used over the other (also consider what 
happens when a wire is disconnected etc.)

#### Sender

The basic outline of sending a message follow this structure:

1. when the sender wants to send a message it will trigger a rising edge (a `0`
   to `1` transition) on the control line

2. to send a bit (i.e. `0` or `1`), the sender must:
   - first write the bit to the data line
   - then pulse (toggle) the clock line to trigger a read on the receiver's end

3. step 3 must be repeated until all n bits in the message have been sent, 
   and then finally the sender should trigger a falling edge on the control line 
   to indicate that it has finished sending data

4. when ready to send another message start again from step 1

#### Receiver

1. on startup the receiver must wait, listening for a rising edge on the control
   line

2. when a rising edge is detected on the control line, the receiver starts
   paying attention to the clock line:
   - each time the clock line is pulsed (i.e. either a rising or falling edge),
     the receiver must read a single bit off the *data line* by reading the
     appropriate input data register `GPIOx_IDR`
   - the receiver must *store* the bit somewhere for later processing, and also
     increment the count of how many bits have been received in this message

3. step 2 must be repeated while the control line remains high

4. when a falling edge is detected on the control line:
   - if exactly n bits have been sent in the current message (i.e. since the
     last rising edge on the control line) the receiver has successfully
     received the message, and can store/queue it for
     later processing
   - if more/fewer than n bits have been sent in the current message, the
     receiver must disregard the message

5. the receiver must return to step 1 and start listening for a new message

Here's an example of what a 32 bit message transmission using this will look like:

![Serial](/images/deliverables/03-networked-instrument/2017-p2300-physical-layer.png)

## FAQ

### Why isn't it working? the (non) comprehensive checklist {#interrupts-lmao}

So you're program isn't working, perhaps you're ending up in the infinite 
loop handler, perhaps not. Here is a list of common pitfalls for you to check against:

1. have you enabled the SYSCFG clock?
2. have you clocked the GPIO pins?
3. have you configured the GPIO pins as input / output pins?
4. have you configured the GPIO pins to trigger an interrupt (if applicable)?
5. have you configured the trigger for the interrupt (i.e. rising or falling edge)?
6. have you enabled the appropriate EXTI interrupt in the NVIC?
7. have you written the interrupt handler function?
8. is said handler function correctly declared?
9. is said handler function globally visible?
10. does said handler function name / label match **exactly** the characters and case 
   of the corresponding vector table entry in the `startup` file?
11. does your interrupt handler function clear it's pending register before it
   exits? (the `EXTI_PR_clear_pending` macro will probably help you out here)
12. if interacting with wires / memory, are you using `bl sync` afterwards to allow 
   some time for the operations to persist?
13. if interacting between interrupts, then have you set priorities correctly? 
   (`NVIC_IPR_set_priority` in the utils.S file will help you here)

### Timers

#### Which timer should I use?

The helper code in `src/libcomp2300/tim7.S` provides template code for Timer 7. 
You can also use the SysTick timer ([with a caveat](#using-systick)). Ultimately, it's up to you 
which one you use (or neither---you could structure your sender some other way).

#### How to use the SysTick timer {#using-systick}

If you want to use the SysTick timer then make sure you understand the 
[point below](#systick-config) and agree to the following disclaimer before continuing.

If you choose to use the SysTick interrupt and cause issues in the audio playback, then 
you will lose marks as a result, so make sure whatever code you are running in the 
interrupt is not staying in there for long.

To use SysTick, add the following code somewhere in your `src/main.S` file:
```ARM
.global SysTick_Handler
.type SysTick_Handler, %function
@ SysTick is initialised by the audio HAL library.
@ **DO NOT configure SysTick yourself!**
@ This interrupt is triggered every 1ms (0.001s).
@ See ~/.platformio/packages/framework-stm32cube/l4/Drivers/STM32L4xx_HAL_Driver/Src/stm32l4xx_hal.c:259
@ --parameters--
@ none
SysTick_Handler:
  push {lr}
  bl HAL_IncTick  @ needs to call HAL_IncTick function

  @ Your interrupt handler code goes here

  pop {lr}
  bx lr
.size SysTick_Handler, .-SysTick_Handler
```

#### What do you mean when you says "do not configure SysTick yourself"? {#systick-config}

You **cannot** change the SysTick interrupt rate (every 1ms) because the audio
playing code relies on that. So you shouldn't touch `SYST_RVR` or `SYST_CSR` or
do the configuration stuff you did in [lab 8](/labs/08-input-through-interrupts/#exercise-1).

You *can* put your own code in the `SysTick_Handler` function (at the place
indicated by the "Your interrupt handler code goes here" comment) although the
usual caveats apply (don't take too long in your handler function, etc.).

### Part 1

#### Interrupts are not working as expected when debugging {#debugging-and-interrupts}

The debugger itself uses interrupts to do it's thing, so trying to
step through interrupt code in the debugger can be a bit flaky. One
thing you can try is doing a hard reset (using the black cylindrical
reset button on the discoboard) if things aren't quite working
correctly---this can sometimes help.

If that still doesn't work, using breakpoints (the red dots in the 
left hand side of the IDE) can really help when debugging, use the 'continue' 
button to run the code, and then wait for the code to reach the break 
points, you can then step through or continue as needed.

#### I'm totally lost---where do I even *start*?

Take a deep breath, it's going to be ok. The first thing you should do is **read
this page carefully**. Then read it again. I've put heaps of detail in here to
help you, so if you have a question then there will almost certainly be clues in
this assignment page.

Then, as you should always do when you have to write a program of non-trivial
complexity, you should break it down into parts:

- can you get your receiver playing a sawtooth wave using the helper functions
  in `src/libcomp2300/wave.S`?

- can you write a program which iterates through the pitches in the [pitch
  sequence](#p2300-pitch-sequence) in a normal loop? (this [isn't
  enough](#is-it-working) for the actual submission, but it's a good starting
  point)

- can you wire up the note on/off line and write a program which just beeps a
  sawtooth wave on and off? ([lab 10](/labs/10-connecting-discoboards/) should be helpful here)

Once you've got some of these parts working, then you're in a better place to
put them together to create a program which satisfies the [Part 1
spec](#part-1). And don't forget to check that it [works
properly](#is-it-working).

#### I'm able to increment through the sequence, but how can I send the "decrement pitch index" messages? {#how-to-decrement}

The pitch change message can only tell the receiver to *increment* (i.e. add 1)
to the current pitch sequence index---it can't tell it to *decrement* the index
(i.e. subtract 1).

However, you can still play the sequence using only the P2300 protocol. You just
might have to send more than one message to get the receiver into the desired
state.

#### How can I be *sure* it's working? {#is-it-working}

Here's a simple test to convince yourself that you've implemented P2300
correctly (we will do this when we test your program):

First, upload the program using the 'upload' command (not running under debug), 
then click the black reset button (to the left of the blue joystick), then:

- it successfully plays the [required sequence](#part-1) on a loop when all the
  jumper wires are [connected properly](#wires)

- if you disconnect the **note on/off** line then the program will *either*
  remain silent forever *or* make sound forever (while still responding to any
  pitch change messages)

- if you disconnect the **pitch change** line, the program will "beep" the
  current pitch as determined by the incoming messages on the **note on/off**
  line, but never change pitches

- if you disconnect **both** lines, the program will *either* remain silent
  forever *or* play the current pitch forever 

#### If I disconnect the **pitch change** line and re-connect it, won't the sequence be out of whack? {#pitch-change-line-disconnect-reconnect}

Yes! Here's an example:

1. at startup, both sender and receiver think that the current pitch index is 0

2. the sender sends a bunch of messages which are received by the receiver,
   successfully playing the [Part 1](#part-1) sequence on a loop

3. you disconnect the **pitch change** line for a period of time---the sender is
   still sending messages (i.e. changing the voltage on the wire) but the
   receiver isn't receiving them (because the wire isn't connected up)

4. once the pitch change line is re-connected, the sender and the receiver will
   (probably) no longer agree on what the current pitch sequence index is, and
   there's no way in P2300 for the sender to tell the receiver to "reset" the
   sequence

5. as a result, the *relative* pitch steps in the sequence being played will be
   the same ([lock step up, then 7 down](#how-to-decrement)) but the
   starting point may be off (and this may cause the sequence to wrap around the
   top or bottom of the table)

This is expected behaviour, and it's an indication that P2300 is a bad protocol.
I'm sure you can think of lots of ways to make things better in [Part
2](#part-2).

#### I'm pretty sure that I've implemented the protocol correctly---why isn't it working? {#how-to-do-the-thing}

This assignment is a bit trickier than the first two (it *is* assignment 3,
after all) because your program needs to have few different parts:

1. a main loop which plays the sawtooth wave (as in previous assignments, you
   need to call it in your main loop or you won't hear a sound)

2. code which implements the [P2300 sender](#sender) to send the correct
   messages

3. code which implements the [P2300 receiver](#receiver) to receive the incoming
   messages and change the sound (the sawtooth wave) accordingly

How you implement these parts is up to you, but you'll probably want to make use
of interrupts for the *receiver* stuff (e.g. listening for rising/falling edges
on the note on/off and pitch change lines). This doesn't mean that your
interrupt handlers should be big functions, in fact if they are doing lots of
things (including delaying/waiting for extended periods) then that's probably a
bad sign. Think about how you could re-factor your program so that the interrupt
handlers just modify some memory or other state and then return to the main
loop.

You can also implement the *sender* part however you like, but we recommend that 
you use the [timer interrupts](#timers) (e.g. tim7) to do this.

#### Can I change the pitch sequence for Part 1? {#can-i-change-the-pitch-sequence-for-part-1}

No, because then it's not the P2300 protocol anymore---[see
above](#p2300-pitch-sequence).

#### Why do we have to implement both the sender *and* receiver? {#sender-and-receiver}

P2300 is a means by which two *different* devices can communicate over a pair of
wires to play music. The fact that your program for Part 1 needs to implement
*both* of these parts doesn't mean that it's not a two-device protocol, it just
means that in this specific instance the one discoboard is playing both roles.

There are a few reasons for this:

- It's actually a blessing to start with a program which is communicating with
  itself---you can step through both sides of the communication in the same
  debug session. This is much harder if the other end is running on another
  discoboard---how do you debug when you can only pause one end of the
  communication channel?

- Part of this course is about [interrupts & concurrency](/_lectures/index/#async-interrupts-concurrency), so we have to cover
  that in the assessment. The assignment doesn't require any actual parallel
  computing (there should be no shared memory/state between the sender and the
  receiver) so it's a (relatively) gentle introduction to concurrency

- If you had to implement only one side of the protocol (either the sender or
  the receiver) on your own, it'd be hard to know whether you were doing it
  right (it'd advantage students who can afford to buy a second board, or have
  friends to test with, etc.).

In future versions of COMP2300 this might be a group assignment, where you work
in pairs to implement the two halves of the protocol on two different boards. It
wouldn't necessarily be easier or harder this way, just different. Still, for
2019, it's a 1-person assignment and you need to implement both parts.

#### So how should I separate out the sender and receiver parts in my program? {#separation}

You might be worried about what the sender & receiver can/can't do---which ones
can access which interrupts, etc. It's better to think of it in terms of network
separation:

1. if we connected pins PE14 and PE15 on **another board** (the sender) to pins
   PD0 and PB3 on **your board** (the receiver), would everything still work
   (assuming the sender sent the correct p2300 messages on the note on/off and
   pitch change lines)?

2. if we connected pins PE14 and PE15 on **your board** (the sender) to pins PD0
   and PB3 on **another board** (the receiver), would everything still work
   (assuming the receiver correctly interpreted the voltage changes on the note
   on/off and pitch change lines)?

The sender & receiver can only *communicate* with each other over the wires.
There are no specific restrictions about which interrupts, etc. they can each
use---it's just up to you to make sure that all the different parts don't
interfere with each other (or the audio driver).

#### Does my sender code know if the data has been received? {#smart-sender}

Nope. It just changes the voltages on the wires, it has no idea if there's a
P2300 receiver listening on the other end (and whether it interprets the
messages correctly).

If your program relies on the receiver sending a message back to the sender, or
some other thing like that, then you're doing it wrong. Look again at
the [things you should do to see if it's working](#is-it-working).

#### How strict are the timing and frequency requirements? {#timing-requirements}

Same as for [assignment 2](/deliverables/02-sequencer/#exact-timing-frequency).

#### Networking is about communication with others, right? Can we work in pairs?

You can't write your program with another student---[the usual rules about
collaboration](https://cs.anu.edu.au/courses/comp2300/01-assessment/#academic-integrity)
apply to this assignment as well.

However, you can *test* your program with others---in fact, this is a really
good way to make sure you're actually implementing the protocol properly.

This means that you'll connect one end of each jumper wire to your board, and
one end to another board. The only extra thing you'll have to do is to connect a
third wire between one of the ground (GND) pins on each board---otherwise your
boards might not have the same idea of what constitutes a low `0` or high `1`
signal and you might get errors.

Again, remember that if you discuss your program with someone else that you must
acknowledge it in your statement of originality.

#### Can I modify the library code (e.g. the stuff in `src/libcomp2300`)?

Yes, you can modify the library code provided in the template. However, if your
changes break things, then that's on you (obviously). So my advice is not to
modify it unless you know what you're doing and have a good reason to do it.

#### Why is P2300 so complicated?

It's actually really not that complicated compared to other protocols you might
use. Have a look, for example, at the [ST SPI specification
document](http://www.st.com/content/ccc/resource/technical/document/technical_note/58/17/ad/50/fa/c9/48/07/DM00054618.pdf/files/DM00054618.pdf/jcr:content/translations/en.DM00054618.pdf).

#### Is the setup code (`init` and `BSP_AUDIO_OUT_Play_Sample`) the same as in [assignments 1 and 2](/deliverables/01-synth/)?

Yes.

### Part 2

#### Making new protocols is hard! What can I do for Part 2?

The P2300 protocol isn't very expressive, for example it only allows a limited
number of pitches, that you can't specify the loudness of the output (or any
other aspect of the waveform), and it can't play multiple pitches
simultaneously.

When you wrote the program for Part 1, were there any bits of the protocol which
you thought were dumb, or that you thought could have been done differently, or
were there things you *wanted* to do but the protocol didn't allow you to? All
those things might be useful inspiration for how to design your own protocol in
Part 2.

As always, the most important thing for Part 2 is that you explain in your
design document what you did and *why*.

#### What counts as a network protocol for Part 2? {#what-counts-as-a-network-protocol-for-part-2}

In part 2 you're tasked with creating a new network protocol. This means that it
must be some technique for **communicating information over the jumper wires**.
Whatever you do, the thing you've gotta talk about in your DD is the way you
implement and manage that network communication.

So if you do heaps of cool stuff in your program (e.g. joystick stuff) but you
don't add anything to P2300 for the network communication part (or make a really
superficial change, e.g. only changing the [pitch
sequence](#p2300-pitch-sequence)) then you won't have satisfied the requirements
for Part 2.

#### Do I have to use 2 wires for Part 2? {#part-2-wires}

No, if you want to have more/fewer wires in your protocol, then that's
fine---that's why we gave you an extra jumper cable (and if you need more than
that, then let us know). Have a think about it---what advantage do you gain from
having an extra wire? Answer that question in your design document!

As stated above, we'll need to wire up the board(s) correctly to test your Part
2 protocol, so make sure it's really clear in both your code and your DD what
the required wiring connections are.

#### If I'm going to use extra wires, which ones should I use? {#what-extra-wires}

On your discoboard, the GPIO pins aren't necessarily just sitting around doing
nothing, waiting for you to connect jumper wires. They're general purpose
(that's what the GP stands for in **GP**IO, after all) and many of them can even
serve multiple purposes depending on how they're configured.

What this means is that some of the GPIO ports/pins are already being used by
the audio hardware, etc. If you want to add another wire to your protocol you
need to be careful that the pins you use aren't already in use, or thinks will
break in unexpected ways. For example the interrupts `EXTI10` and `EXTI11` are
used by the audio driver, so if you overwrite the handlers for these interrupts
then your sawtooth wave will stop playing (you could modify the handlers to do
both the audio driver stuff and your own stuff, but this will involve a bit of
digging around in the audio code).

Here's a tip: if you want to add just one extra wire, then connecting between
**PE13** and **PH1** shouldn't break anything.

And some pins to avoid:

- PB6 (potentially used by the audio codec, avoid if possible)
- PB7 (potentially used by the audio codec, avoid if possible)
- PC14
- PC15

If you want to add a fourth (or fifth, etc.) wire, you can either:

1. read the startup code (and perhaps the [discoboard reference
   manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf/)) to see which
   pins are required by the audio output hardware, and avoid those pins

2. write some abstractions in your code which allow you to quickly and easily
   try different pin combinations, and then just try a bunch of different
   combinations until everything works

#### Can I use the FPU (or some other peripheral on the discoboard we haven't covered in class)?

Your program can use *any* part of the discoboard---as long as it implements the
network protocol you describe in your design document. However, if you decide to
use any features we haven't yet covered (or don't cover at all) in the course
(e.g. the floating-point unit, the timers, the accelerometer, etc.) then you're
on your own to make it work.

For this assignment, there are a couple of other things to mention here:

- you can use any part of the discoboard, but you need to init & configure it in
  your own [ARM assembly code](#can-i-write-my-assignment-in-c)
- whatever you build, it has to be practical to mark (i.e. can't require
  external hardware to verify that it works)
- your code must include clear instructions on how to set it up to test it
  (including how to show that it's not just calling functions in the receiver
  code to play the song)
- you'll still be marked on what *you* did (and how you write it up in your DD)
  rather than what the board does for you

If you're up for a challenge then doing that can be a *great* learning
experience, but you need to know what you're getting yourself in for---and you
need to give yourself plenty of time (in case things don't work out as planned).
