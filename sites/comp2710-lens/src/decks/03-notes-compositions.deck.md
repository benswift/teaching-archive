---
title: "Envelopes, Notes and Compositions"
description: "Abstractions from sound to music."
---

<!-- _class: banner -->

# COMP2710 LENS

## So far:

- making sound from nothing (synthesis)
- making sound from recordings (sampling)

Is this enough?

---

![bg](./assets/poeme-electronique.jpg)

## Organising Sound

we now turn our attention to making "music", not just "sound"

in this class, we're open in terms of defining "music", it doesn't have to follow a particular style or emphasise traditional aspects such as melody and harmony.

broadly, we follow Edgard Varese's idea of music as ["organised sound"](https://doi.org/10.2307/832385).

today we look at methods for _organising_ sound in time, allowing us to start to define compositions

## Shaping a note

What defines a "note"?  A beginning, an end, and a shape over time.

![](/assets/digital-synthesis/envelope-sound.png)

The shape can be made by changing amplitude, but in computer music we can adjust other properties as well.

## _Slope_ is the key

`/` + `\` 

In programming we are used to having _static_ variables

Now we want _dynamic_ numbers that are _scheduled_ to change in specific ways.

## shapes over time

![](/assets/lectures/pd-line.png)

`line`, `line~`, and `vline~`

- `line` is a slope generator
- You provide it with a destination (a number) and a time (in ms) and it changes it's output over time.

## What does the tilde mean in `line~` vs `line`?

Pd has two kinds of "connections" between objects:

1. audio
2. messages

Audio connections are processed at the audio frame rate: fast enough to get blocks of 64 samples to the DAC at 44.1kHz.

Message processing is [interleaved with block processing](https://msp.puredata.info/Pd_documentation/x2.htm) which usually happens every 1.45ms. 

Objects with a `~` in the title, output or operate with audio connections. Those without `~` are the message variants.

## Message boxes vs Object boxes

We're starting to get serious with our Pd programming so make sure you understand the difference!

- object boxes (rectangular) set out different Pd objects. First word is the object, other words are creation arguments.

- message boxes (rectangular with a triangle cutout on the right side) define a _message_ to be sent (the text in the box) when the box is _activated_ by a mouse click or an incoming bang.

Messages boxes are actually _programmable_: they can receive arguments and incorporate them into the message string ( `$1`, `$2`...), you can set them with messages starting with `set`. Read the _help_ patch for a message box to see some examples. 

## line and `line~`

![](/assets/lectures/pd-smooth-volume.png)

- `line`: outputs numbers as _messages_ at a (default) rate of one ever 20ms (slow!)
- `line~`: outputs an audio rate signal.

If you make a volume control with `line` you will have audible clicks as the volume changes 50 times per second. You need to use `line~` for smooth sounding control over audio.

## An envelope has more than one slope!

![](/assets/lectures/adsr.png)

Note envelopes typically have:

- _A_: an attack phase (ramp up)
- _R_: a release phase (ramp down)

You can add some extra phases:

- _D_: decay (ramp down a **bit** just after attack)
- _S_: sustain (don't ramp for the note duration)

You could call the whole thing an "ADSR" envelope.

## `vline~`: deluxe `line~`

![](/assets/digital-synthesis/pd-envelope.png)

`vline~` can be programmed with a comma-separated sequence of ramps of the form `value ramp-time initial-delay`

- this lets you schedule all the phases of an envelope in one message
- `0 1000 10` means "ramp to 0 over 1000ms after 10ms"
- the ramp starts from wherever it was previously
- note that all the ramps are scheduled from the starting point
- you should combine `vline~` with `*~` to turn the sound up and down to shape a note.

## vline envelope

![](/assets/digital-synthesis/pd-using-vline.png)

Source: Puckette, M. [Theory and Technique of Electronic Music (2007).](http://msp.ucsd.edu/techniques.htm)

## Try it:

> Create an envelope generator with `vline~` in Pd with a sound source you have already created.

Make sure you know how to use get **help** about an object by right-clicking (or
control-click).

You might want to try the `metro` object to generate a sequence of "bangs" to
keep triggering your envelope generator.

# Sequencing

![](/assets/lectures/pd-sequenced-music.png)

_Sequencing_ in electronic music means scheduling events (e.g., notes) to happen in the future.

A composition represented in music notation (sheet music) is like a schedule for a musician showing them which note to play, and when in time.

In Pd, there are lots of ways to represent scheduling information (arrays, text files, long message boxes).

If you were patient enough you can use the tools you have already to organise a whole composition, just like _Poeme Electronique_
 
## `delay` and `metro`

![](/assets/lectures/pd-delay-metro.png)

- `delay` is an object that repeats whatever message it receives after a certain number of milliseconds.

N.B., `delay` is _not_ an audio delay, these work differently.

- `metro` emits a bang regularly after a certain number of milliseconds.

N.B., you have to _start_ a `metro` by sending it a 1 or connecting it to a toggle box.

---

![bg](./assets/cone-trees-wyCLULw34uQ-unsplash.jpg)

## Step Sequencers

One style of sequencer divides time into a number of equal divisions or [steps](https://en.wikipedia.org/wiki/Music_sequencer#Step_sequencers) (e.g., 16) with zero or more musical events occurring at each step.

The sequence then repeats over and over again.

This is how most _drum machines_ work; it's a convenient way to make loop-based music.

---

<div class="image-credit">*Photo by Cone Trees on Unsplash*</div>

## Counters and Select

![](/assets/lectures/pd-counter-select.png)

- We need a counter to make a step sequencer
- You can make one in pd with `metro`, `f` (a nameless float variable) and `+ 1`
- The trick: the right inlet of `f` _sets_ its value but doesn't send anything to the output.
- The left inlet of `f` can receive a bang to spiit out the output.
- `select` lets us route different actions based on a number (like `switch` in many programming languages)

(one more trick here: `s` and `r`)

## A basic step sequencer

![](/assets/lectures/pd-step-sequencer.png)

What's new here?

- `spigot`, only passes messages if right inlet is set to 1
- set "send" symbol in properties of buttons
- use subpatch (`pd ...`) to hide counter logic
- basic bass drum synth (AR envelope controls frequency _and_ amplitude of an `osc~`)

Even better: hide drum synth in sub-patch, use graph-on-parent to hide sequencer logic _except_ for toggle boxes.

# Modulation

- idea: change the parameter of a _ugen_ in time

- usually modulation means to change it "regularly", not every now and then like an envelope

- we can do this by running the output of a ugen into a different ugen.

## Modulation Effects: Vibrato and Tremolo

![](/assets/lectures/pd-vibrato-tremolo.png)

Let's make some digital effects, vibrato and tremolo.

- Connect a (slow) `osc~` to the input of another `osc~`, need to do some maths to convert the output range (-1, 1) to something useful (e.g., 437-443)

- Connect a (slow) `osc~` to the volume control, similarly change the output range.

- You could call the "sounding" osc the _carrier_ and the not-sounding osc the _modulation_ oscillator.

## Modulation Synthesis

What if the "vibrato" was **really** fast? Like in the audio range?

We actually end up changing the _timbre_ of the sound.

You can think of it as modifying the frequency domain.

We can use this to make interesting sounds _without_ lots of oscillators for additive synthesis.

## Amplitude Modulation: AM Synthesis

![](/assets/lectures/pd-am-synthesis.png)

AM synthesis results in _two tones_.

The original spectrum is shifted up and down by the modulation frequency.

This is called "ring modulation" and the metallic sound is quite striking.

## Frequency Modulation: FM Synthesis

![](/assets/lectures/pd-fm-synth.png)

- Three parameters: _C_ the carrier frequency, _M_ the modulation frequency and _D_ the depth of modulation.

- FM Synthesis results in extra frequencies appearing above and below the carrier frequency at multiples of the modulation frequency.

- All three sliders change the timbre. (could be bad - why?)

## Better FM Synthesis

![](/assets/lectures/pd-better-fm.png)

Better to have timbre separate from (fundamental) pitch. We want the shape of the spectrum to stay the same as we change carrier frequency.

- In practice, define harmonicity $H = M/C$ and index $I = D/M$

- If $H$ is rational, tend to get _harmonic_ sounds ($H = 2$ has odd harmonics and sounds kindof like a clarinet)

- If $H$ is irrational, we get dense inharmonic spectra, good for gongs or sound effects.

## Phase Modulation

![](/assets/lectures/pd-phase-mod.png)

In practice, many "FM" algorithms actually use _phase modulation_ 

Note in the patch that the carrier oscillator is split up into a `phasor~` and `cos~` operator.

...it boils down to the same effect.

_PM_ implementation works better in a multiple-operator context, e.g., Yamaha DX7 and Korg Volca FM have 6-oscillators that can be interconnected in different ways (why?)

---

![bg](./assets/yeh-che-wei-pw8i1n7Jt20-unsplash.jpg)

## Effects

We have timbre and notes, but what else can we use?

Synths can sound better with a bit of _processing_ of the output sound.

We can emulate an acoustic space (smooth out the sound), get the sound a bit _dirty_ with distortion/clipping, or modify the amplitude to help mix things together.

## Delay (the audio kind)

![](/assets/lectures/pd-delread.png)

To _delay_ some audio means to hold it back from playing for a certain amount of time.

- `delwrite~` : define a delay line (length in milliseconds), and send audio into it

- `delread~` : get audio out of the delay line at any point.

imagine rolling marbles down a pipe and cutting a hole in it to access ones you rolled down previously... (kind of).

## Delay Effect Parameters

![A typical digital delay pedal](/assets/lectures/digital-delay.jpg)

typical "delay" effects probably have controls for: 

- _effect volume_ 
- _feedback_
- _delay time_

sometimes we call the non-effected sound _dry_ and the effected sound _wet_

**Let's go do it:** make a delay effect with GUI objects for these four parameters.

## Reverb

![](/assets/digital-synthesis/pd-reverb.png)

Reverberation is (more or less) lots of little echoes in a room or space that add up to smear out a sound.

- We can simulate this with delays!

- This one is borrowed from `G08.reverb.pd`.

- There's also `rev2~` and `rev3~` included in Pd that have early reflections and other niceties.

There's a _completely different_ approach to reverb using _convolution_, but that's another story.

## Distortion

![](/assets/digital-synthesis/pd-distortion.png)

Distortion is when a signal is "clipped" resulting in _undesirable_ extra
sounds.

Are they really undesirable?

1. amplify signal---a lot! (e.g., `*~ 150`)

2. clip! Either with `clip~` (hard clipping) or the `tanh` function (soft
   clipping).

Remember to boost the input gain a LOT for sweet distorted goodness.

## Compression

![](/assets/digital-synthesis/pd-compression.png)

A compressor turns down the volume if a signal rises above a threshold.

- useful to mix sounds of different volumes 
- or to help amplify a quieter sound without getting surprised by sudden increases in volume.


## Filters


![](/assets/digital-synthesis/pd-filter.png)

Filters "remove" parts of a sound that correspond to certain frequencies.

- `lop~`: low-pass filter, `hip~`: high-pass filter, `bp~`: band-pass filter.

- `vcf~` is a low-pass filter designed to be dyanmically controlled (e.g., with an envelope)

- `bob~` is almost the same as `vcf~` but specifically modelled on filters in Moog analogue synths.

- and **many** more...

Lots of filters---Must be important. ([read (a lot) more...](http://msp.ucsd.edu/techniques/latest/book-html/node127.html))

## Shaping a sound with filters

![](/assets/digital-synthesis/pd-subtractive-chime.png)

1. Start with `noise~`
2. Add filters to remove lots of sound
3. Profit!

## Exercise:

Time to add some **effects** to your synthesiser. Here are some options:

- create a delay unit with the parameters discussed.

- add a `vcf~` filter to a sawtooth oscillator. Use a second envelope to control the filter frequency.

- create a really long reverb and use it with very short synth sounds (use a short attack-release envelope)

- create _multiple_ effects in a signal chain and use GUI objects to control how much of each one is present in the output sound.
