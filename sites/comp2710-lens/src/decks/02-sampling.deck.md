---
title: "Audio files and sampling"
---



---

<!-- _class: banner -->

# COMP2710 LENS

---

![bg](./assets/radigue.jpg)

## so far: synthesisers


creating sound from scratch with basic waveforms/shapes

---

<div class="image-credit">Éliane Radigue (b. 1932) --- *Éliane Radigue in her studio, Paris*</div>

---

![bg](./assets/steven-weeks-NNGyAvsmAnk-unsplash.jpg)

## now: recordings


finding sounds from the real world, recording and manipulating


first explored in the analogue era, e.g., [Études de bruits (1948)](https://youtu.be/CTf0yE15zzI)

---

<div class="image-credit">Photo by Steven Weeks on Unsplash</div>


# Musique Concrète

![](/assets/lectures/phonogene-manning-2003.jpg)

- Musique Concrète was an artistic movement focussed on using recorded sounds.
- Pierre Schaeffer (and team) in France, Post WW2 (1945-1960)
- First using 78RPM records
- Then manipulation of tape
- GRM (Groupe de Recherches Musicales) [still exists!](https://inagrm.com/en)


Source: Manning, P. (2003). The Influence of Recording Technologies on the Early Development of Electroacoustic Music. Leonardo Music Journal 13, 5-10. <https://www.muse.jhu.edu/article/50703>

## Why make _Musique Concrète_?

recordings are a _rich_ sound material

recordings relate to the _real world_

recordings are _flexible_ and _interesting_ at different scales

---

![bg](./assets/workshops/recorder-charles-martin.jpg)

## getting some sound

Why does sampling work?

What information is there in the sound file?

How do _we_ get some sounds?

# Sampling Theory

![](/assets/lectures/example-bouncing-ball.png)

What is the possible path that the ball can take?

## There's only one solution!

As long as the ball doesn't bounce too fast.

remember the Nyquist-Shannon Theorem:

> A signal containing only frequencies lower than _B_ Hz can be (perfectly) reconstructed from samples taken at _2B_ Hz.

## What does it mean for a sound to have frequencies in it?

![](/assets/lectures/spectrogram.png)

- We can think of complex sounds as combinations of basic sounds.

- The _most_ basic sound is the sine wave (or sinusoid) that we played last week.

- _All sound_ can be represented as a combination of sinusoids with different frequencies, amplitudes (and phases).

- _Sounds change over time_, which means the amplitudes move up and down.

## Defining a sinusoid: the _most basic sound_

![](/assets/lectures/diagram-phasor.png)

Imagine fixing a point on a spoke of a bicycle wheel as it spins. The _height_ of the moving point from the centre follows a sine wave.

We can write down the height as a function: `h(t) = sin(2 * pi * t)`

## Changing the sinusoid

There's three parameters we can modify in the sinusoid:

- frequency (how fast the wheel spins in cycles per second) 
- amplitude (radius of the wheel)
- phase (the point where we started spinning)

We can extend the function: `h(t) = A * sin(v * 2pi t + phi)`

This formulation is called a _phasor_.

## Changing sinusoids

![](/assets/lectures/diagram-sinusoids.png)

`h(t) = A * sin(v * 2pi t + phi)`

What would the perceptual effect of these changes be on a sound wave?

## Fourier Transform

- In around ~1800, Jean Baptiste Fourier figured out that any "periodic" function can be expressed as the sum of a series of sine and cosine terms (i.e., a series of sinusoids).

- A consequence of this is that you can find out the amplitude and phase of the sinusoidal component at a _certain frequency_.

You can do this with the "Fourier Transform" formulas.

- **Warning:** maths notation incoming: if you haven't done 1st year university maths, this will look _very_ confusing.
- The good news is it's the _concept_ that is important, the maths is presented for completeness

## Fourier Transform Formulas

 Given a function `f(t)` and a frequency `omega`

- The sine amplitude is: `R(omega) = integral f(t)cos(omega*t)dt`
- and cosine amplitude is: `X(omega) = -integral f(t)sin(omega*t)dt`

The above give us _two_ amplitudes, for out-of-phase sine and cosine waves. These can be rewritten to the amplitude and phase for a sine wave:

- Amplitude: `A(omega) = sqrt(R(omega)^2 + X(omega)^2)`
- Phase: `theta(omega) = arctan(X(omega) / W(omega))`

These equations integrate over all _t_ values (time)---so information about _time_ is lost!

## Fourier Takeaways

- All sounds can be deconstructed into sinusoids

- Sinusoids have three parameters: amplitude, frequency, and phase

- We can use maths to find the amplitude and phase for a given frequency in an audio signal

- The (big) tradeoff is that information about _time_ is lost.

Everything said above relates to infinitely long continuous signals, not sampled signals. We will come later to details about how to do this with time-limited digital signals.

See Dannenberg Chapter 3 for reference.

## Sampling and the Frequency Domain

![](/assets/lectures/diagram-sampling.png)

You can look at sampling as a time domain operation.

Create a series of impulses and multiply with the signal to be sampled.

The result is the sampled information.

_We hope_ that in the frequency domain the spectrum of our sound has been preserved.

## Spectrum of a sampled signal

![](/assets/lectures/diagram-sampling-spectrum-overlap.png)

The frequency domain of the sampled signal is _really weird_.

It turns out the spectrum of the signal copied at each multiple of the sampling rate. This is _bad_ because the copied frequencies interfere with spectrum that we want.

## Solution:

- Recorded sound contains _all kinds_ of frequencies that we can and can't hear.

- Analogue-digital converters _filter_ the sound to make sure that only frequencies below the Nyquist frequency (half the sample rate) are sampled.

- This avoids aliasing in the sampled signal messing up frequencies that we want.

## Quantisation Noise

Sampling also involves "rounding" the analogue signal to a digital number.

Digital numbers have a concept of "precision" (how many possible values can be represented).

- An 8-bit number (a byte) can only represent `2^8` or 256 values
- a 16-bit number can represent `2^16` or 65536 values.

The effect of rounding our samples is to introduce **noise** into the signal. 

- We can measure the difference between the potential amplitude of a signal and the (always present) noise as a _signal-to-noise ratio_ (SNR) in decibels (dB).
- Roughly 6dB per bit.

## CD Quality Audio:

Now you know why digital audio is often recorded at 44.1kHz sample rate and 16bit sample depth:

- 44.1kHz: more than double 20kHz which is the maximum frequency humans can perceive to avoid audible aliasing.

- 16-bit sample depth: gives ~98dB SNR so that we can't hear noise in a well-prepared signal.

These values are often called "CD quality" audio as they were specified for the [CD digital format](https://en.wikipedia.org/wiki/Compact_Disc_Digital_Audio) (in 1982). They give _extremely_ high-quality audio.

---

![bg](./assets/workshops/recorder-charles-martin.jpg)

## let's go do it

time to make some Musique Concrète with soundfiles in Pd

we need a sound in WAV format...

let's find one: <https://freesound.org/browse/random/>

other options: record a sound on your phone

## Simply playing back sound files

You can use `readsf~` to open and play back a sound file. Is that enough??

![pd-soundfile-open](//assets/digital-synthesis/pd-soundfile-open.png)

- `readsf~` is easy and convenient, but limited

- reads from your hard drive

- can't change speed or playback position (crucial for Musique Concrète)

## More sophistication and fun: reading a sound file array

Best way to make music with sound files:

1. load the data into an array variable using the `soundfiler` object
   - Make a graphical array from the "Put" menu
   - Make an array with no GUI with the `array` object: `[array define &#123;array-name&#125;]`
2. use the `tabread4~` (table read) to play audio data from any point in the array

`tabread4~` is like the read head of a tape machine: it just accesses the data, it doesn't move the tape

need to use other objects (e.g., `phasor~` or `line~`) to "move" `tabread4~` up and down the tape.

## Musique Conrète with `tabread4~`

![](//assets/digital-synthesis/pd-soundfile-perform.png)

1. load file into an _array_ with `soundfiler`
2. set up a `tabread4~` object to access the table
3. use a `phasor~`, or any other audio rate object to playback bits of the file.
4. you can even just scribble around in the file with `line~`

## Wavetable-lookup synthesis 

making an _oscillator_ from a soundfile

![](/assets/digital-synthesis/pd-wavetable.png)

- `tabosc4~` scrolls through a (whole) array at a certain frequency.
- this is a _basic_ way of doing [wavetable synthesis](https://en.wikipedia.org/wiki/Wavetable_synthesis) which includes the idea of _evolving_ the array over time (in some way)
- read up on [classic wavetable synthesis](https://web.archive.org/web/20150606061932/http:/www.soundonsound.com/sos/apr98/articles/synthschool.html) if you want.

## Looping Grains of Audio

![](/assets/lectures/diagram-granular-synthesis.png)

## Granular Synthesis in Pd

![](/assets/digital-synthesis/pd-grains.png)

- Loop a _bit_ of a soundfile over and over to make a continuous sound.
- Note the `cos~` bit here to avoid clicks at the start and end of the looped section.
- See `B13.sampler.overlap` in the Pd help for a better version.
- See Dannenberg Chapter 6.2 for more.

## Sampling in Genish

```
data('./resources/audiofiles/amen.wav').then( soundData => &#123;
  let sliceLength = soundData.dim / 10
  let startPoint = 6 * sliceLength
  let speed = 0.8
  let sliceCounter = counter( speed, 0, sliceLength )
  let pos = add(sliceCounter, startPoint)
  let bufferOut = peek(soundData, pos, &#123;mode:'samples'&#125;) 
  play(bufferOut)
&#125;)
```

Try this code at <http://www.charlie-roberts.com/genish/playground/>


## Sampling in Gibber

```
// create Sampler and load sound
s = Sampler('dirt/juno/09_juno_pad_c_minor_filter.wav')
s.start = 0.1 // set sample start position
s.end = 0.7 // set sample end position
s.note(0.3) // set rate and play note
```

Try this one at <https://gibber.cc/playground/>

## Granular Synthesis in Gibber

```
s = Sampler('breaks.120bpm/188553__mika55__120bpm-drum-loop.wav')
s.start = gen(0.5 + cycle(0.1) * 0.3)
s.end = gen(0.52 + cycle(0.2) * 0.3)
s.rate = gen( 0.5+ cycle(0.2) * 0.75)
s.trigger.seq( 1, 1/32 )
```

Try this one at <https://gibber.cc/playground/>

## Checklist for the day:

Have you:

- played back your own soundfile in Pd **and** Gibber?
- tried out `tabread4~` in Pd and understood how to control it with `line~` and `phasor~`?
- tried out the granular synthesis patch in Pd?
- experimented with the Sampler tutorial in Gibber?

## Links and References for the day:

- Dannenberg Chapter 3 "Sampling Theory Introduction"
- Dannenberg Chapter 6.2 "Granular Synthesis"
- Kreidler Chapter 3.4 "Sampling" (Pd examples)
- Kreidler Chapter 3.6 "Granular Synthesis" (Pd examples)
- [Sound on Sound Apr. 98. Synth School, Part 7: Transitional Synthesis](https://web.archive.org/web/20150606061932/http:/www.soundonsound.com/sos/apr98/articles/synthschool.html)
- [Seeing Circles, Sines, and Signals](https://jackschaedler.github.io/circles-sines-signals/index.html) - a primer on DSP (if you want to start knowing more about FT and sampled audio)
- **Gibber Sampler tutorial**: It's in the Gibber examples dropdown or [here](https://github.com/gibber-cc/gibber/blob/main/playground/examples/sampler.js)
