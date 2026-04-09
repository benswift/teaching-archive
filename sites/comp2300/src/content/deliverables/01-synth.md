---
title: "Synth"
summary: "Generate a sequence of values to make a (musical) noise"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-assignment-1
hidden: true
---

## Outline

- **Due date:** 11:59 PM, Friday 5th of April, 2019 (Friday of week 6)
- **Mark weighting:** 12 marks
- **Submission:** submit your assignment through [GitLab]()
  ([full instructions below](#submission-process))
- **Policies:** for late policies, plagiarism policies, etc. see the [policies
  page](/policies/)

This assignment has two parts: in Part 1, you need to generate a specific
(simple) signal to be output through your discoboard's headphone jack. In Part
2, you get to be creative and program your discoboard to make a more interesting
sound. Your discoboard has a standard 3.5mm headphone jack, which means that any 
3.5mm headphones will work.  

{% asset deliverables/01-synth/headphone-jack.jpg alt:'3.5mm Headphone Jack' style="width:40%;" %}

:::warning
To complete this assignment you will need to have a solid understanding of the 
course material provided in the 
[week 1](/labs/01-intro/), 
[week 2](/labs/02-first-machine-code/) and 
[week 3](/labs/03-maths-to-machine-code/) labs. 
If you have not completed these or do not understand the content then it is 
*strongly* recommended that you go and complete these labs before starting 
on the assignment.
:::

## Background

A [synthesizer](https://en.wikipedia.org/wiki/Synthesizer) (or *synth* for
short) is an electronic device which produces a musical sound. It's called a
**synth**esizer because while an acoustic instrument uses a resonating cavity or
string to produce "natural" sound waves, the synth uses digital logic to
calculate and produce a **synth**etic signal which is amplified electronically
and turned into a soundwave through a loudspeaker.

Although computers have been used for making music since they were first
invented, it was in the 70s that improvements in technology led to an explosion
of digital devices like synths in popular music---check out Kraftwerk's *The
Robots*.

<YouTubeEmbed id="okhQtoQFG5s" />

In this assignment, you're going to turn your discoboard into a synthesizer. The
maths and physics behind this aren't rocket science, it's just generating values
in simple patterns and writing them to a special register one-after-the-other.
The key part is that it involves **controlling the execution of your program in
time**. This might be a fairly new idea---you might not be used to worrying
about exactly how fast your program runs, and if you do care about it you only
care about making it run *faster*, not about making sure that the instructions
run at *specific* times.

## Getting started {#getting-started}

The initialisation sequence for the discoboard's audio hardware (i.e. the
headphone jack) is a little bit fiddly, so for this assignment we've provided
some setup code to get you up and running.

Fork & clone the [assignment 1 template repo]() and open
it up in VSCode as usual. There are two things you need to know about the setup
code:

1. The template repo contains two git branches: `part-1` and `part-2`
   (initially, they both point to the same commit). Both of these branches have
   all the setup code you need---the only difference between them will be the
   commits you make in doing your assignment. So, you should write your [Part
   1](#part-1) code on the `part-1` branch, and your [Part 2](#part-2) code on
   the `part-2` branch.

2. Although *your* code still goes in `main.S`, the template includes a couple
   of functions for you to call from your code: `init` and
   `BSP_AUDIO_OUT_Play_Sample`.
   - When you `bl` (branch with link) to the `init` function your program will
     execute the setup code to turn on your discoboard's headphone jack. Your
     code should call this function **once** at the start.
   - When you `bl` to the `BSP_AUDIO_OUT_Play_Sample` function, whatever is in
     the *lowest* (least-significant) 16 bits of `r0` will be "played" through
     the headphone jack (treated as a **signed** 16-bit number as shown in the
     picture). Your code should call this function **repeatedly** to generate 
     the audio signal. Calculating exactly what that data in `r0` should be to 
     generate the right signal is up to you!

If this is a bit confusing, head down to the [FAQ section](#faq) on this
page---there's a lot of answers which should help you understand. Furthermore, 
check out the [sitewide FAQ](/resources/01-faq/) 
for answers that apply more generally to all 3 assignments.

## Part 1 (50%) {#part-1}

In the first part of the assignment you need to write a program which produces
an audible constant-amplitude [**square
wave**](https://en.wikipedia.org/wiki/Square_wave) with a
[**frequency**](https://en.wikipedia.org/wiki/Frequency) of 440Hz (440 cycles
per second) out of the headphone jack.

All of these properties are shown in the this picture:

![Square](/images/deliverables/01-synth/square-wave.jpg)

Using the `init` function provided, the audio output is configured to use signed
16-bit values for the signal, so a value of `0x8000` represents the "bottom" of
the signal range, `0x0` represents the "middle" and `0x7FFF` is the "top". The
output sample rate (the rate at which these 16-bit values come out of the
headphone jack as "sound") is **48kHz**. This is all the info you need to put
the right sequence of values in `r0` and branch to `BSP_AUDIO_OUT_Play_Sample`
to make the music come out of the headphones.

You can see the "sample-by-sample" nature of digital audio in the picture---the
square wave signal is acually just a sequence of dots---these are the values
which you'll output through your `r0` register and `BSP_AUDIO_OUT_Play_Sample` function.
Remember that the value in `r0` *immediately* before this branch will be the one
that comes out the headphone jack.

How will you know if you're doing it right? You'll need to plug your headphones
in and listen! Your square wave should sound like a constant-pitch, slightly
"buzzy" sound. You can hear it at
[onlinetonegenerator.com](http://onlinetonegenerator.com/) if that's helpful.

Square waves (and similar waveforms) are quite popular in music
as "lead" sounds, since they cut through the accompaniment so well---just listen
to the opening square wave synth line in Van Halen's *Jump*.

<YouTubeEmbed id="SwYN7mTi6HM" />

For Part 1, marks will be awarded for:

- making a sound
- whether the sound has the correct frequency
- whether the sound has a peak-to-peak [amplitude](https://en.wikipedia.org/wiki/Amplitude) 
of at least *half* the full `0x8000`--`0x7FFF` 
[dynamic range](https://en.wikipedia.org/wiki/Dynamic_range#Electronics) 
(as depicted in the [picture](#part-1))
- how "clean" the square wave signal is (i.e. how close is it to the picture
  above)
- how close the frequency of the wave is to 440Hz (to achieve the closest frequency, 
  **and possibility of full marks for this part**, you will need to average over many periods)
- code structure & readability (including comments)

If you would like to view a plot of your output, then you can follow the instructions 
on the resources page to use the 
[sample plotter](/resources/01-faq/#sample-plotter).

:::info
Be careful generating signals with your earphones in your ears---the discoboard
can make a pretty loud signal. It's a good idea to hit "run" on your program
with your headphones *out* of your ears, and then carefully put them in your
ears afterwards.
:::

## Part 2 (50%) {#part-2}

In the second part, you need to generate a different signal (i.e. not a
constant-frequency square wave). You can pick any periodic signal you like,
but here are a few ideas, in *approximate* order of increasing difficulty:

- a different base waveform from the square wave you made in Part 1 (e.g.
  [sawtooth](https://en.wikipedia.org/wiki/Sawtooth_wave),
  [triangle](https://en.wikipedia.org/wiki/Triangle_wave))

- a simple signal with some aspect (e.g. frequency, amplitude, waveform) which
  changes over time

- the weighted sum of multiple simpler waveforms (this is
  called [additive synthesis](https://en.wikipedia.org/wiki/Additive_synthesis))

- the *n*-sample
  [moving-average filter](http://www.gaussianwaves.com/2010/11/moving-average-filter-ma-filter-2/) of
  a simple signal

- [FM synthesis](https://en.wikipedia.org/wiki/Frequency_modulation_synthesis)

- [wavetable synthesis](https://en.wikipedia.org/wiki/Wavetable_synthesis)

Marks for Part 2 will be awarded for a **design document** describing what
signal you're generating and how you implemented it in ARM assembly language.
This means that it's ok if you don't do the more complex options at the bottom
of the list above---what really matters is how you explain what you've done.
Using images/diagrams in this document to help explain what you've done is
encouraged. Your design document must be in **pdf** format (no more than 2
pages) with the filename `design-document.pdf` in top-level folder on the
`part-2` branch.

## Submission {#submission-process}

### Process

Here's the process for working on & submitting your assignment:

1. fork the [assignment 1 template
   repository]()

2. clone[^own-fork] & work on *your* fork of the major project repo

3. regularly commit & [push](/resources/01-faq/#push-all-branches) your changes to the GitLab
   server

4. the last commits on the `part-1` and `part-2` branches [on the GitLab
   server](/resources/01-faq/#is-it-pushed) (not on your local machine!) *before the submission
   deadline* will count as your submission

[^own-fork]:
    make sure you clone **your own fork** (i.e. the one with your uni ID in the
    url) to your local machine, not the template (because obviously you aren't
    able to change the template for everyone---GitLab won't let you)

### Checklist {#submission-checklist}

1. the code in my `part-1` branch generates a square wave as described in
   [Part 1](#part 1)

2. the code in my `part-2` branch generates a different signal as described in
   [Part 2](#part 2) and I've committed my `design-document.pdf` to the repo as
   well

3. my `statement-of-originality.yml` files for both Part 1 and Part 2 include
   [all the necessary references/acknowledgements](/resources/01-faq/#statement-of-originality),
   and *everything* not mentioned in there is my own work

4. [both branches](/resources/01-faq/#push-all-branches) 
of my completed project have been
   [pushed](/resources/01-faq/#is-it-pushed) 
   to the GitLab server

5. [both branches](/resources/01-faq/#push-all-branches) pass the Gitlab CI test (the pipeline does not fail)

## FAQ

You can ask a question on the [COMP2300 forum]({{ site.forum_url }}) and if it's
popular enough I'll put it up here.

:::info
Also, remember that there's lots of helpful info on the FAQ page which [applies
to all 3 assignments](/resources/01-faq/#assignments). You should check it (and the rest of that page) out---I think
it'll really help.
:::

### Troubleshooting

#### I'm totally lost, and I'm freaking out---where should I start?

Take a deep breath, it's going to be ok. The first thing you should do is **read
this page carefully**. Then read it again (including the FAQs). I've put heaps
of detail in here to help you, so if you have a question then there will almost
certainly be clues in this assignment page.

After you've done that, think through what you need your program to do to
generate a sequence like you can see in the waveform picture above. It's really
just a loop---and you know how to write a loop. The loop needs to put the right
bit patterns in the right registers and then branch to the provided "play
sample" function. Think: what are the right bit patterns? Again, look carefully
at the picture above. How can you organise your program so that it makes the
right things happen in the correct sequence?

Here's some pseudo-code to help you out:

``` arm
main:
@ do any once-off initialisation stuff first

loop:
  @ 1. calculate the next value in the square signal

  @ 2. bl to BSP_AUDIO_OUT_Play_Sample with that value in r0

  @ 3. go back to the top of the loop and do it again for the *next* value
```

You can use as many labels as you like, there can be other loops within your
"top-level" loop, but that should be the overall shape of your program.

#### I've written a program, why isn't my discoboard making a sound?

1. make sure you're correctly using the provided initialisation and playback
   functions [described above](#getting-started) properly

2. you'll only *hear* the signal if it changes over time, so you might be
   sending a sequence of zeroes (or any other constant value) to the headphone
   jack---that's a signal (a really boring one) but you won't hear it as sound!

3. sound is a vibration which happens over time, so if your program is *paused*
   (e.g. when you're stepping through your program in the debugger) it's not
   generating the thousands of successive samples required to make an audible
   sound---so make sure your program is *running*

#### How can I see exactly what signal my program is generating?

To assist debugging, we have developed a "sample plotter" in the VSCode COMP2300
extension. It collects the samples you put to `BSP_AUDIO_OUT_Play_Sample`
function and plots them. It's basically a virtual oscilloscope. See the [main
FAQ](/resources/01-faq/#sample-plotter) for more
information.

#### What's with the branch-with-link (`bl`) instruction? {#branch-with-link}

We'll cover this in week 5, but you really don't need to understand it to get
started. It's just like a regular [branch instruction](/_lectures/03-memory-operations/#labels-and-branching) (`b`) except that it
also leaves the address of the next instruction (i.e. where execution would have
continued to if the program did not branch away) somewhere so that the program
can easily "come back" when it's done.

This is exactly what you want to happen with both the `init` and
`BSP_AUDIO_OUT_Play_Sample` functions---your program goes off, does some useful
stuff, and then comes back and continues executing *your* code.

#### Should I treat the `init` and `BSP_AUDIO_OUT_Play_Sample` functions differently?

As [described above](#getting-started) the main difference (from your
perspective) is that the `init` function should only be called *once* at the
start of your program, but the `BSP_AUDIO_OUT_Play_Sample` function needs to be
called repeatedly to generate the output signal.

### Part 1

#### My program for Part 1 isn't very long---have I done enough?

If you generate a 440Hz square wave which satisfies the [criteria
above](#part-1), then yes! The first part is meant to be (relatively)
straightforward, so that you can get through it and use your creative energies
in Part 2. However, to achieve full marks for this part then you will need 
to look in to averaging as the criteria mention.

#### How close to *exactly* 440Hz does my square wave have to be?

As close as you can get it! You can probably make it *fairly* close without too
much effort, but to get that last bit of precision might require some extra
work. If you're wondering how to do this, think about the problem from the other
direction: what would the sequence of samples look like if you *recorded* a
440Hz wave into a digital audio signal at a sample rate of 48kHz?

However you manage it, make sure your assembly code is still well-organised &
understandable (comments can help a *lot*).

#### If I generate a square wave, then I get 100% for Part 1, right?

No, that's not how it works. As [described above](#part-1), code structure &
readability are part of the marking criteria as well.

#### Do I need an oscilloscope (or Audacity, etc.) to know that I've done it right? {#need-oscilloscope}

No, you don't. Part 1 is meant to be simple---if you're confident you're
generating the right signal (e.g. if it *sounds* the same to your ears) then
you've probably done enough. If you want to really be sure, set a breakpoint at
`BSP_AUDIO_OUT_Play_Sample` and manually write down a few successive values of
the signal (i.e. the value in `r0` at those times). If those values will "trace
out" the wave [described above](#part-1) then you can be sure you're doing it
right.

#### Will you mark Part 1 with an oscilloscope?

No. It's not that oscilloscopes aren't cool, it's that this is a course about
putting the right values in the registers in the right sequence---so that's what
we'll look at when we mark it.

### Part 2

#### I'm not musical---does that mean I can't get a good mark for Part 2?

No---there isn't any musical knowledge required here---you're just generating
patterns. Any repeating pattern with a frequency in the human hearing range
(roughly 20Hz to 20kHz) is a musical signal. There are a few examples above, but
you should experiment and see what's interesting to your ears.

The most important thing for Part 2 is that you clearly explain in your design
document what signal you're generating (use pictures!) and how you designed your
assembly program to generate this signal.

#### Can I play a song for Part 2? {#can-i-play-a-song}

Your job in assignment 1 is just to generate a single, continuous signal
(although it may have elements which vary over time). That's the task you've
been asked to complete, so playing a song doesn't really fit this description.
As always, you can't expect to get top marks if you don't provide what was asked
of you, even if what you've done is really cool. If there's any dispute about
this, the convenor's decision is final.

In musical terms, triggering a sequences of "notes" of different pitches isn't
really the synth's job---the synth's job is just to produce the waveform.
Creating the higher-level structure of notes which make up a song is the job of
another machine---the sequencer. You'll build a sequencer in assignment 2, so be
patient :)

#### Can I use the FPU (or some other peripheral on the discoboard we haven't covered in class)?

Your program can use *any* part of the discoboard---as long as it generates the
signal you describe in your design document. However, if you decide to use any
features we haven't yet covered (or don't cover at all) in the course (e.g. the
floating-point unit, the timers, the accelerometer, etc.) then you're on your
own to make it work.

If you're up for a challenge then doing that can be a *great* learning
experience, but you need to know what you're getting yourself in for---and you
need to give yourself plenty of time (in case things don't work out as planned).
