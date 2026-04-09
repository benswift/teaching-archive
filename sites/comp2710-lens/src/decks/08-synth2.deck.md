---
title: "Advanced Synth Design"
description: "Getting deeper into sutractive and modulation synthesis"
---

<!-- _class: banner -->

# COMP2710 LENS

## Outline

- Filters (analogue, digital, `vcf~`, `bob~`, filter math (light)
- Subtractive Synthesis (from phasor to Moog Model-D clone))
- FM Synthesis (recall week 3, feedback, algorithms, operator-based design)
- Phase Vocoder + spectral synthesis.

---

![bg](./assets/synth-design/ismael-paramo-7LQ9b9V-Ffo-unsplash.jpg)

## Subtractive Synthesis

## Subtractive Synthesis

Let's take a complex sound and **remove** some content.

![](./assets/digital-synthesis/pd-filterfm.png)


## Popular Subtractive Synths


Subtractive synthesis is often used in analogue synth designs, particular with those associated with [Bob Moog (famous synth designer)](https://en.wikipedia.org/wiki/Robert_Moog).

E.g.,:

- Minimoog Model-D (1970)
- Moog Mother 32 (2015) _~AUD1100_
- Korg Volca Keys (2013) _~AUD250_
- Arturia Microfreak (2014) _~AUD550_

It's good for _analogue_ designs because you can get a lot of timbral variation out of few (2 or 3) basic oscillators.

## Subtractive Synth Layout

![](./assets/synth-design/diagram-subtractive-synth.png)

- Sound is produced by 1+ summed oscillators and/or noise generator, processed by filter
- Two envelope generators: output volume and to change the filter cut-off frequency
- Missing: low frequency oscillator for modulation

## Minimoog in Pd

![](./assets/synth-design/subtractive-design.png)

Here's a basic design for an analogue synthesiser with two sawtooth oscillators.

- "detune" changes the frequency of the second oscillator, try a number close to 1, e.g., 1.05 for a rich phase-y sound.
- the filter env gives the sound a nice changing timbre over a note
- for extra fun, try the `bob~` object. Similar to `vcf~` but modelled on actual Moog filter designs.

N.B.: the _synthesis_ part here is quite simple, but processing note information is tricky and requires lots of supporting objects.

---

![bg](./assets/synth-design/monika-sojcakova-ehZ9Aeu2Elo-unsplash.jpg)

## FM Synthesis

## Simple two-oscillator FM

![](./assets/synth-design/simple-fmsynth.png)

We introduced FM synthesis earlier in the course as a way to make interesting sounds with just two oscillators.

This `fmsynth.pd` patch has been used a lot!

- `$1` is harmonicity (modulation frequency divided by carrier frequency)
- `$2` is the index (modulation depth divided by modulation frequency)

This allows us to create a consistent timbre for any frequency input. Can we do more with more oscillators?

## Revision: Phase Modulation 

![](./assets/pd-phase-mod.png)

Let's just revise how "frequency modulation" works.

- FM can be implemented by modifying the _phase_ of an oscillator.
- In this patch, the phase is modified in between the `phasor~` and `cos~` objects.


## FM Operators

![](./assets/synth-design/diagram-fm-algorithm.png)

We can take the concept of a phase-modulation oscillator and abstract to a reuseable unit: an FM operator.

- An _op_ can serve as a carrier, or as a modulator.
- An _op_ can self-modulate (crazy sounds).

Combining multiple oscillators allows lots of sounds to work together. Typical FM synths will have 4 or 6 operators.

In FM lingo, the wiring diagram between operators is called an _algorithm_.

## Implementing 6-op FM

![](./assets/synth-design/fm-operator.png)

Each operator needs:

- an envelope generator
- amplitude and envelope parameters
- some pitch-ratio control 
- pitch ratio parameters

This gets complicated quickly... 

Volca FM has 23 parameters per operator, and 16 global parameters, that's 154 params for one patch!

## Operator Layout

![](./assets/synth-design/6op-synth.png)

And here's how you could wire them together...

- note that every op gets the pitch and velocity signals
- using `r` and `route` to send freq scaling and envelope parameters
- `throw~` and `catch~` for the feedback loop on operator 6.

This is a fixed configuration, could you design a way to control the FM _algorithm_ with parameters?

## Commercial FM Synths

![](./assets/synth-design/dexed.png)

Op-based FM is _very popular_. The Yamaha DX7 was the first **successful** digital synthesiser in 1983 and Yamaha's FM sound chips were found in computers and video game consoles throughout the late 80s and 90s.

- Yamaha DX7 (1983)
- Yamaha reface DX (2015) ~AUD600
- Korg Volca FM (2016) ~AUD250
- Elektron Digitone (2017) ~AUD1350
- [dexed FM Plugin](https://asb2m10.github.io/dexed/) (modeled on DX7) AUD0

See _dexed_ for free FM synth fun.

# String Synthesis

[Karplus-Strong string synthesis](https://en.wikipedia.org/wiki/Karplus–Strong_string_synthesis) is a famous algorithm for creating a string-like sound with a noise source, a delay and a filter.

It can be considered a special case of [digital waveguide synthesis](https://en.wikipedia.org/wiki/Digital_waveguide_synthesis), used for string, tube, and membrane sounds.

K-S synthesis is quite common in digital synthesisers (e.g., Arturia Microfreak) and it's fun to do in Pd.

## Pd String Synthesis

![](./assets/synth-design/pd-string-synth.png)

Here's a simple Karplus-Strong implementation.

- Noise source is some lightly filtered `noise~`
- `vline~` controls noise entering the delay loop
- the `delread~` and `delwrite~` define the delay loop
- the filter is a `lop~`, and the loop has feedback of `0.999`
- changing the length of the delay loop changes the pitch, so this is adjusted by the frequency input

## Physical Modelling Synthesis

Physical modelling synthesis is an interesting area with lots of possibilities and challenges.

Have a look at Julius O Smith's [Stanford Courses (Music 420A)](https://ccrma.stanford.edu/~jos/pasp/) to learn more.

# Fourier Resynthesis

![](./assets/synth-design/fft-resynthesis-puckette.png)

One form of synthesis that is usually limited to computers involves modifying the frequency domain of a sound and recreating new versions.

Spectral manipulation is something that Pd is quite good at doing!

We return a bit to the Fourier transform mentioned early in the course.

For the full story, see [Fourier Analysis and Resynthesis in Miller Puckette's book.](http://msp.ucsd.edu/techniques/latest/book-html/node163.html)

## Back to the frequency domain

Remember the Fourier transform? This allowed us to extract the amplitude each frequency component of a sound.

In practice, the FT can't be used as it requires an infinite input (who has time for that).

We _can_ use a similar construction called: Short-Time Discrete Fourier Transform (STDFT):

- _short-time_: operates on a finite-length signal instead of an infinite signal

- _discrete_: operates on sampled information

We often refer to SDTFT as _FFT_, or "fast Fourier transform" (e.g., the `fft~` object in Pd). 
FFT is actually a clever algorithm for accomplishing a DSTFT quickly, so it's ok to use the acronyms interchangeably.

## Short-Time Discrete Fourier Transform

For a signal with `N` samples, the STDFT equations providing the sine and cosine amplitudes at certain frequencies are:

- `R_k = sum(i=0 to N-1) x_i cos(2*pi*k*i / N)`

- `X_k = -sum(i=0 to N-1) x_i sin(2*pi*k*i / N)`

The STDFT also only focuses on `N` frequencies that we call "bins" between 0 and the sampling frequency. 

- If the sampling rate is `S` then the frequency of the `k`th bin is: `k * (S/N)`

N.B.: the frequency "resolution" is limited by the length of the signal we are analysing!

## FFT on a long signal

![](./assets/diagram-STDFT-windowing.png)

Typically we want to apply FFT to a "chunk" of a signal rather than the whole thing.

Usually we can set the length of the chunk (window length) and an envelope function.

The usual choice for envelope function is the _Hann_ function, it looks kind of like a Gaussian distribution.

The window length is flexible, but will determine the number of frequency bins that can be analysed! Usually the window length is required to be a power of 2 (e.g., 512 or 2048)

## Inverse FFT

The FFT procedure actually also works backwards! 

- From a finite sequence of frequencies we can (re-)create a sampled signal!

The exclamation mark is doing a lot of work here! _Imagine what we can do with full control over a spectrum!!_

In fact, the IFFT algorithm is almost identical to the FFT algorithm

It _is_ important when doing an FFT to cope with the sine **and** cosine elements (or the _real_ and _complex_ outputs of a frequency. These interact in a certain way to make the ouput sound "work".)

## FFT in Pd

Pure Data can perform a STDFT with the `fft~` object (yes it's that easy).

The two outputs give you the real and imaginary part of the signal. You can also do `rfft~` just to get the real output (saves CPU).

Similarly, you can do an inverse FFT with `rifft~` and `ifft~`.

In Pd, `N` is the same as the "block size" (number of samples processed at once), so Pd patches often adjust block size _just_ for the FFT patch to get the right number of FFT bins.

## Basic Resynthesis


![](./assets/synth-design/pd-fourier-resynthesis-fft.png)

Here's a fun way to modify the spectrum of "noise".


![](./assets/synth-design/pd-fourier-resynthesis.png)


## Timbre Stamp

![](./assets/synth-design/timbre-stamp-fft.png)

The "timbre stamp" algorithm modulates a signal by the spectral envelope of another sound.

see `I06.timbre.stamp.pd`

## Phase Vocoder

![](./assets/synth-design/phase-vocoder-fft.png)

The "phase vocoder" is an algorithm for stretching or compressing the time and frequency axes of a recorded sound.

see `I07.phase.vocoder.pd`
