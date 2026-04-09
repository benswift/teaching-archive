---
title: "Lab 16: Audio Visuals"
tagline: "synchronising visuals with your audio"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-16
image: ./images/year-11-lab-16.png
---

## Outline

In this lab you will:

1. investigate techniques for visualising your audio
2. explore other strategies for synchronising (triggering) visuals from audio
2. create your own dynamic visualisation of your compositions

## Introduction

Welcome to another week of Creative Computing This week we wil attempt to put together visuals with the audio you have been creating this term.

First, we need to explore some complicated concepts.

Putting together audio with sound through projected media has a history that goes back thousands of years (I'm thinking of shadow puppetry from India, China and [Indonesia](https://youtu.be/pfydro4X2t0)).

Originally, this was through players of puppets and music working together, knowing their stories, and responding immediately to actions.

Early motion pictures "silent films" were accompanied by a professional piano player to improve the audience experience of watching movies.
In the 20th century, sound was added to motion pictures through the addition of a sound track to the audio. 
The history of television is similar: the first experiments transmitted visuals only. Broadcast television with audio as standard was released in the 1940s.

Synchronising sound with visuals is complex and presents many challenges for different types of "physical media" and transmission systems. This has led to the development of sophisticated standards, such as [SMPTE timecode](https://en.wikipedia.org/wiki/SMPTE_timecode) ([SMPTE](https://www.smpte.org/) = The Society of Motion Picture Engineers).

In our programming context, we are also faced with challenges when synchronising audio with visuals.

Audio engineers need to see the sound visualised.  Sound and music operates in a time and frequency domain. Animated visuals operate in time, spatial and colour domains. How can we make these work together?  

## What is Audio Visualisation

In the simplest terms, [audio visualisation](https://en.wikipedia.org/wiki/Music_visualization) is the representation of aspects of audio/music signals/elements in a visual domain that is synchronised with the audio.

This concept has given rise to [Clavier à lumières](https://en.wikipedia.org/wiki/Clavier_%C3%A0_lumi%C3%A8res), [Cymatics](https://en.wikipedia.org/wiki/Cymatics), [Liquid Light Shows](https://en.wikipedia.org/wiki/Liquid_light_show), [A stack of visualisation software](https://en.wikipedia.org/wiki/Music_visualization#List_of_music_visualization_software), and [VJing](https://en.wikipedia.org/wiki/VJing).

## General Techniques

The simplest type of audio visualisation is a [meter which shows the instantaneous level of a signal](https://en.wikipedia.org/wiki/VU_meter).

Meters can show you what the signal is doing in terms of total volume/loudness. It is possible to split a signal into separate frequencies to measure the volume in a frequency range.

On a computer screen we can represent this in many ways:

- a continuous waveform moving across the screen
- a bar which moves vertically or horizontally
- the size of a shape

### Levels

We can investigate the total volume as mentioned above. We can measure the total volume/amplitude/loudness at regular time intervals.

All of our weekly labs for Tone.js have displayed a waveform based on the Tone.Master.volume. This is represented as a line which moves from right to left across our screens. Is this a natural representation to you? Does it make sense?

We can split the signal into components based on frequency range, instrument, effect, channel, to measure different aspects of the audio composition. This can be used as a tool for combining or "mixing" signals.

Splitting based on frequency through a bandpass filter can create a [spectrum analyser](https://en.wikipedia.org/wiki/Spectrum_analyzer).

### Envelopes

We have already looked at the ADSR envelopes used by Tone.js to shape the "playing" of an instrument through the rate and shapes of attack, decay and release, and the level of sustained volume between the decay and the release.

Tapping into the envelope enables us to measure and represent the audio signal as shaped by the envelope.

### Pitches / Notes / Frequencies

As well as volume/amplitude of an audio signal, we may also be interested in frequencies (aka tones, or pitches).

Volume is very important - we don't want to wreck our hearing or destroy our speakers!

Frequency can be just as important to an audio engineer or musician. Which tones are present in the signal? When are they present? How are they changing? Seeing the data as well as hearing can help us understand the structure of the music or audio signal.

How should we represent frequency (which is cycles/second) in a signal which is changing as time progresses (cycles/second/second).

Should we use:

- position?
- colour?
- a combination?
- shape, or
- texture?

### FFTs

One way of getting frequency data from a signal in which there are multiple "frequencies" combining simultaneously is to use a [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform). The name [Fourier](https://en.wikipedia.org/wiki/Joseph_Fourier) refers to Joseph Fourier, who investigated a mathematical series. In his work exploring heat and the transfer of energy, he developed a theory that "any function of a variable, whether continuous or discontinuous, can be expanded in a series of sines of multiples of the variable." While not quite correct, it was a breakthrough, and opened the field of [Fourier Analysis](https://en.wikipedia.org/wiki/Fourier_analysis), which gave rise to FFTs. FFTs are useful in science, engineering, signals processing, and in computer science. FFTs are "fast" because they change the time complexity of a "naive" approach which is $$ O(n^2) $$  to a much more efficient time complexity of $$ O(n \log n) $$.

FFTs take a signal and return an array showing the amplitude of the sine wave component at a range of frequencies from which that signal is composed.

As a side note: the inverse of an FFT uses the same algorithm with different sign and exponents, to transform a set of sine waves into a complex signal. This is the basis for some forms of additive synthesis.

## Using Tone.js to Visualise

Now we get to the action. Time to fork and clone the template repo for Lab 16.

**do:** Fork and then clone the [lab 16 template repo](), open it in VSCode and start the live server.

**do:** If you would prefer to work with a composition from a previous week - feel free to copy this into the sketch. The provided audio is from a sketch by [polyrythmatic](https://github.com/polyrhythmatic).

### Tone.Meter

First up lets create a meter for the total volume. We will use a bar meter instead of a waveform.

A bar is a simple rectangle shape. It will be updated every "draw()" cycle.

First, create a Tone.Meter object, and connect it to your Tone.Master. Do this in `function setup()`

```js
    meter = new Tone.Meter();
    Tone.Master.connect(meter);
```

Now lets use the meter to display a meter bar in `function draw()`:

```js
    background(45);
    fill(255);
    let level = meter.getValue();
    let ch1 = map(level,-100,0,0,height);
    rect(0,0,99,ch1);
```

There is much we can do with this. 

- Should it display vertically or horizontally?
- Colours?
- Borders?
- Peaking?

Could you connect a `Tone.Meter` to other outputs? Could you meter each instrument separately? Can you meter via frequency?

### Tone.Waveform

Oh hai! We've been using Tone.Waveform every week already. You know what it looks like.

Creating a Tone.Waveform

```js
  wave = new Tone.Waveform();
  Tone.Master.connect(wave);
```

Displaying a Tone.Waveform

```js
    stroke(255);
    let buffer = wave.getValue(0);

    // look a trigger point where the samples are going from
    // negative to positive
    let start = 0;
    for (let i = 1; i < buffer.length; i++) {
      if (buffer[i - 1] < 0 && buffer[i] >= 0) {
        start = i;
        break; // interrupts a for loop
      }
    }

    // calculate a new end point such that we always
    // draw the same number of samples in each frame
    let end = start + buffer.length / 2;

    // drawing the waveform
    for (let i = start; i < end; i++) {
      let x1 = map(i - 1, start, end, 0, width);
      let y1 = map(buffer[i - 1], -1, 1, 0, height);
      let x2 = map(i, start, end, 0, width);
      let y2 = map(buffer[i], -1, 1, 0, height);
      line(x1, y1, x2, y2);
    }
```

This representation explicitly looks for a point in the waveform where the values change from negative to positive - so the start of the wave will be near the "zero point". It calculates an end point to ensure the number of samples drawn is the same for each frame of the animation. Then it draws the waveform by mapping the waveform values to canvas size (width and height), and creates 2 points for a line using the values at  `buffer[i-1]` for the first point, and `buffer[i]` for the second point.

A simpler version might use points or circles to draw the line:

```js
    strokeWeight(4);
    stroke(140,60,180);
    // drawing the waveform
    for (let i = start; i < end; i++) {
      let x1 = map(i, start, end, 0, width);
      let y1 = map(buffer[i], -1, 1, 0, height);
      point(x1, y1);
    }
```

### Tone.FFT

We can use a Tone.FFT to represent our audio signal. It is important to note that the FFT does not represent the audio waveform, nor the amplitude/volume of the signal. It represents the amplitude of a sine wave component of the signal - where the wave is thought of as being composed of a number of discrete sine waves.

Creating a Tone.FFT

```js
  fft = new Tone.FFT();
  Tone.Master.connect(fft);
```

And to draw our FFT:

```js
    strokeWeight(4);
    stroke(140,60,180);
    fft_values = fft.getValue();
    let fft_width = width/fft_values.length;
    let xpos = 0;
    // drawing the fft
    for (let i = 0; i < fft_values.length; i++) {
      let ypos = map(fft_values[i], -127, masterVol, height, 0);
      line(xpos, height, xpos, ypos);
      xpos += fft_width;
    }
```

What do you see?

How might you change this?

What aspects of the FFT are useful to you?

### Alternative Representations

**do:** For this part of the lab we will use a different sketch. Edit the file `index.html` to change `sketch.js` to `sketch-funky.js` and save.

[This example by polyrythmatic](https://tonejs.github.io/examples/funkyShape) plugs into the envelope values to represent what is happening with different instruments. This has been adapted for the lesson this week. 

How should we represent:

- instrumentation
- note / frequency
- volume / envelope

What decisions would you make?

:::tip
**think:** Spend a few minutes planning how you would like to represent instrumentation. Think about shape, colour, texture, size.
:::

**do:** Change some key aspects of the representation to match your plan. Play with the code. See what works and what needs to change.

## Synchronising Visuals with Audio

we have already seen in the sketch above that we can drive visuals based on different aspects of a signal through "reading" the value of the signal when the draw loop is executed.  This is great for visualisation.

What if we want to have something else animated as a result of a musical event? We might be OK with accessing data in the draw loop, but it might be hard to know what note is playing (for example) in an instrument.

### Tone.Draw

Because Tone.js runs on a different schedule to animation frames, you MUST NOT call p5.js drawing functions from a loop, pattern, part or sequence. Instead, you can use the `Tone.Draw` object to schedule a function on the next animation frame **closest to** the audio time.

[This example from Tone.js](https://tonejs.github.io/examples/animationSync) shows how to connect sound loops/parts/patterns and visuals.

As an example, we will colour our bass notes based on the note being played.

We need to get the note being played from the loop (OK - we could possibly get it from elsewhere, but this works well).

Create a Tone.Draw schedule in our bassPart:

```js
    bassPart = new Tone.Part(((time, note) => {
        // Draw.schedule takes a callback and a time to invoke the callback
        Tone.Draw.schedule(() => {
            // the callback synced to the animation frame at the given time
            bassNotePlaying = note;
            console.log(bassNotePlaying);
            setTimeout(() => {
                bassNotePlaying += "+";
                console.log(bassNotePlaying);
            }, 100);
        }, time);        
        bass.frequency.setValueAtTime(note, time);
        bassEnvelope.triggerAttack(time);
    }), [["0:0", "A1"],
    ["0:2", "G1"],
    ["0:2:2", "C2"],
    ["0:3:2", "A1"]]).start(0);
```

We get our `bassNotePlaying` from the `note` parameter.

I have added a modifier, to say _hey, we have been playing this for a while now_, by adding a `+` character to the note.

In our `function draw()` we can use the `bassNotePlaying` to determine the colour of the bass visualisation.

```js
    const bassRadius = height/2 * log(1.0 - bassEnvelope.value) + 30;
    fill(220,30,180,90);
    switch(bassNotePlaying){
        case "A1": stroke("red"); break;
        case "A1+": stroke("# FACE2F"); fill(255,255,255,200); break;
        case "C2": stroke("blue"); break;
        case "C2+": stroke("#4224FC"); fill(60,80,90,150); break;
        case "G1": stroke("green"); break;
        case "G1+": stroke("#45BA54"); fill(120,120,120,200); break;
        default: stroke(220,120,220); fill(40,40,220,120); console.log(bassNotePlaying);
    }
    const bassX = width/2 + sin(millis() / 1000) * width/4;
    const bassY = height/2 + cos(phase / 100) * height/3;
    circle(bassX, bassY, bassRadius);
```

In this example we have used the note playing to drive the colour of our visualised instrument.

:::tip
**think:** What other information can you get from the loop/part/pattern? How can you use the note (or other information) to drive different aspects of the visualisation? How could you use this technique to trigger other visuals (not visualisations)?
:::

**do:** Use the remaining time in class to develop a new, unique, visualisation for an existing composition of your own.

Note `sketch-complete.js` brings it all together if you' like to have a look. You can use these techniques in any "audio-visual" sketch.

**do:** Save Everything. Stage your changes. Commit. Push.

## Summary

Congratulations! In this lab you:

- investigated techniques for visualising audio
- explored a range of strategies for synchronising visuals with audio
- created your own dynamic audio visualisation 
