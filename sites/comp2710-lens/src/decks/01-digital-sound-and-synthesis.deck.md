---
title: "Digital Sound and Synthesis"
description: "First steps in making sound with computers."
---

<!-- _class: banner -->

# COMP2710 LENS

---

<!-- _class: centered -->

We acknowledge and celebrate the First Australians on whose traditional lands we meet, and pay our respect to the elders past, present and emerging.

# Sound

![](/assets/lectures/sound-diagram.png)

# Digital Sound

![](/assets/lectures/diagram-digital-sound.png)

## Why does digital sound work?


Q: How do we get the dots from a regular sound wave (voltage on a wire)


A: An ADC---analogue digital converter---reads the voltage at regular time intervals (sampling rate)


Q: How does the space between the dots get filled in?


A: smoothed out by a DAC---digital analogue converter. Simple way: one part holds the dot value for the sampling rate, next part reacts to changes slowly.


Q: How does the DAC know the _right_ waveform?


A: sampling only works for a _limited_ frequency range. There's only one right answer up to a certain frequency.

## How do we know?

Nyquist-Shannon Theorem:

> A signal containing only frequencies lower than _B_ Hz can be (perfectly) reconstructed from samples taken at _2B_ Hz.

We hear sound up to ~20KHz, therefore most DACs operate a bit above 40Khz: 44.1KHz (standard) or 48KHz (video).

## Does this _really_ work?

Yep. Check out these demonstrations:

![](/assets/digital-synthesis/digital-sound.png)

- Monty Montgomery (Xiph.org) [Youtube](https://youtu.be/cIQ9IXSUzuM)
  [Original Video](https://xiph.org/video/vid2.shtml)
- Technology Connections Nyquist-Shannon [Youtube](https://youtu.be/pWjdWCePgvA)

# Unit Generators

Computer music algorithms are usually built from a network of modules that we often call "unit generators".

![](/assets/lectures/diagram-ugens.png)

The point here is that sound and music programming involves organising modules so that a signals flow through each part. This can be done with text or graphically.

## Pure Data (Pd)

![](/assets/digital-synthesis/pd-blankscreen.png)

Free tool for making computer music

Developed by Miller Puckette, maintained by MSP and the community
([download](https://puredata.info/downloads)). 

"Old" (circa 1997).

Graphical programming environment.

---

![bg](./assets/digital-synthesis/steve-harvey-unsplash.jpg)

## patching to make sound

## Gibber

![](/assets/lectures/gibber-screen.png)

Free tool for making computer music---in your web browser.

Developed by [Charlie Roberts](https://charlie-roberts.com). "New" (circa 2013), under _active_ development.

Start using it at [gibber.cc](https://gibber.cc).

---

![bg](./assets/photos/2022-lh2.jpg)

## coding to make sound

## Let's go do it.

Let's make a Pd patch. I'll use the "Put" menu to create an object and type in the object I want: `dac~`

this is the bit that turns "dots" into sounds... let's try it.

![](/assets/digital-synthesis/pd-messing-with-dac.png)

## Making a Sound

this is the "hello world" of computer music

![](/assets/digital-synthesis/pd-hellosine.png)

`osc~` here is a ugen that outputs a cosine wave at the frequency given by its argument.

`*~ 0.1` is changing the amplitude to 10% of the maximum.

## Change volume with `*`

Multiplying a sound by a constant changes the volume (amplitude).

![](/assets/digital-synthesis/pd-hellosine-volume.png)

For making different kinds of boxes, try the "put" menu, and **try the key
combinations...**

## Pd has lots of "things"

![](/assets/lectures/pd-kinds-of-things.png)

"Objects" are the primary element of programming in Pd, you can find a list of built-in objects in "Help" menu.

Objects with a `~` in the name have audio inputs or outputs.

## Try it...

1. install Pure Data
2. recreate the sine tone patch
3. try changing volume with a `*` and a vertical slider

## Do it in code...

Ok, let's go to [gibber.cc/playground](https://gibber.cc/playground) and try the same thing:


```
def = &#123;
  name:'Example',
  type:'Ugen',
  constructor: function() &#123;
    const g = Gibberish.genish
    const graph = g.mul(
      g.cycle( 220 ),
      0.25)
    return graph
  &#125;
&#125;
ExampleSynth = Make( def )
s = ExampleSynth()

s.connect()
s.disconnect()
```

## Why is this more complicated?

"Gibber" is actually the top-level interactive environment / web application.

There are layers below it (different JavaScript libraries) for managing synth definitions and signal processing.

- [Gibberish.js](http://www.charlie-roberts.com/gibberish/): synthesis definitions and scheduling (>)

- [Genish.js](http://www.charlie-roberts.com/genish/): signal processing definitions.

Most of the code on the previous slides was to punch through the layers to get to underlying `genish` ugens like `cycle`.

The important bit is: `g.mul(g.cycle( 220 ), 0.25)`

## Try it...

1. go to <https://gibber.cc/playground>
2. clear the sample code
3. type in the example synth 
4. select all the text and use the `Ctrl` + `Enter` key combination to run it.
5. use the `Ctrl` + `.` key combination to stop the sound.

In future we will write key combinations as `Ctrl+Enter` meaning "hold the control key, then press the enter key, then release both".

## Pd vs Gibber

Pd and Gibber are good at different things (if not, I wouldn't explain both!)

**Pd**: nice graphical display of signal flow, easy to experiment with synth design, possible to connect to hardware controllers, bonus built in graphics programming

**Gibber**: works in a browser, built in collaborative editing, easy to access sequencing and scheduling components.

# Additive Synthesis

"Adding" one sound to another is the same as mixing them.

To play two notes at once, just plug both outputs into one input.

![](/assets/digital-synthesis/pd-twonotes.png)

Q: How do our brains know there are two sounds even though the waves get mixed together?

## Additive Synthesis

We can mix simple sounds to create a complex sound.

![](/assets/digital-synthesis/pd-additive.png)

## Sound/Music terminology

**Pitch**: **frequency**, or how high or low a sound appears to be.

**Loudness**: **amplitude**, or how loud or soft a sound is. We also use the term "dynamics", as in "dynamic range". In _music_, this is so important that we use special Italian words (forte, piano, fortissimo, crescendo, diminuendo, a niente, etc).

**Timbre**: **sound colour**, **klangfarbe**, _everything else_ about a sound that isn't pitch or loudness. Timbre is how you know the difference between bassoon and bagpipes even though they might play the same note.

In general acoustic music, the best way to change _timbre_ is to change instrument. In computer music, this is _not true_! In computer instruments, _timbre_ possibilities are very wide!

## Playing some "notes"

"These frequencies are just sounds. I want to play **NOTES**"

![](/assets/digital-synthesis/pd-additive-notes.png)

## Overtones and Harmonics

- Generally we call the "lowest" frequency component of a sound the _fundamental_  

- The others frequency components are _overtones_

- Integer multiple of the fundamental are _harmonic overtones_ or just "harmonics"

- Not-integer multiples are called _inharmonic overtones_

## Consonance and Dissonance in Mixing Sounds

The relationship between frequencies has an important impact on how we perceive sounds.

Adding a frequency multiplied by a simple ratio (e.g., 2, 1.5) provides a _consonant_ sound.

> for those musically inclined: x2 is an octave, x3/2 is a perfect fifth,  x4/3 is a fourth.

Complicated ratios or multiplication by non-rational numbers leads to _dissonant_ sounds.

> e.g., a tritone (augmented fourth) is x45/32

Dissonance isn't bad! 

Inharmonic overtones are a super important part of great sounds like bells, cymbals, triangles, etc (well I am a percussionist...).


# Frequency Domain

![](/assets/lectures/spectrogram.png)

So far, we have represented sounds as a waveform---this is also known as the "time domain" representation.

An alternative representation shows the frequency information (spectrum) in a sound---this is called the "frequency domain" and we can plot it as a spectrogram.

To obtain frequency domain we use a technique called Fourier analysis (more on this later).

[try out the Chrome Experiment "Spectrogram"](https://musiclab.chromeexperiments.com/Spectrogram/)

# Waveforms

![](/assets/lectures/pd-waveforms.png)

Synthesisers often have different "waveforms" or wave shapes that can provide different timbres. Here are some classics. The "harshness" of these reflects more harmonic overtones.

## How does this work?

- the `phasor~` object creates a sawtooth wave between 0 and 1 (half the full range of -1 to 1).

- `phasor~` is usually the _start_ of a signal chain, or for driving other sound making processes.

- Notice how we used `*~` and `-~` to scale and centre the waves. 

- `clip~` can be used to remove part of a wave

- if `phasor~` has a negative frequency it produces the reverse slope

- the second input of `phasor~` controls _phase_ (what does this do?)

## Exercise:

Make an additive synth with a couple of `osc~` objects. Try different
"multipliers" on the frequency to create interesting sounds!

## Reading and Links

- [Charles' ComputerMusicIntro workshop examples (Pd)](https://github.com/cpmpercussion/ComputerMusicIntro)

- Dannenberg, R. B. [Introduction to Computer Music](https://www.cs.cmu.edu/~music/icm-online/icm-text-rbd-2021.pdf): Chapters 1--2

- Kreidler, J. [Programming Electronic Music in Pd](http://www.pd-tutorial.com): Chapters 3.2, 3.5
