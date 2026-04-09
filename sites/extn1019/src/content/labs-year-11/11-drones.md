---
title: "Lab 11: Drones"
tagline: "Creating and Playing Drone Instruments"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-10
image: ./images/year-11-lab-11.png
---

## Outline

In this lab you will:

1. Revise how oscillators work in [Tone.js](https://tonejs.github.io)
2. Work in groups to come up with a drone performance
3. Perform with your drones
4. Reflect for a Blog Post

## Pre-lab checklist

Before you attend your lab session, make sure:

- you can fork, pull & push to GitLab

There's not much else on the "pre-lab checklist" for this lab.

## Introduction

Welcome drone musicians! This is an exciting day. Today you and your peers will work together to perform some drone music using the oscillator instruments you created last week. We don't have a separate template repo this week since you'll be using your code from last week. So grab your headphones and open up your template repo from last week.

**do:** To start, open your template repo from last week. If you haven't yet worked through last week's lab, you'll need to fork and clone the [lab 10 template repo]().

## What is a Drone?
A [drone in music](https://en.wikipedia.org/wiki/Drone_(sound)) is a musical piece which includes a sustained note or chord which is continuously sounded for the duration of the performance. The drone may be monophonic, polyphonic or harmonic. The drone may be an accompaniment or it may be the star instrumentation. Drones have a long history in music. In Australia, the [didjeridoo](https://en.wikipedia.org/wiki/Didgeridoo) has been a drone instrument used for at least 1500 years, but possibly much longer. In India there are a wide range of drone instruments used to accompany performances including the [ektara](https://en.wikipedia.org/wiki/Ektara), [dotara](https://en.wikipedia.org/wiki/Dotara), [shruti box](https://en.wikipedia.org/wiki/Shruti_box), [nadaswaram](https://en.wikipedia.org/wiki/Nadaswaram), [ottu](https://en.wikipedia.org/wiki/Ottu_(instrument)), [swarmandal](https://en.wikipedia.org/wiki/Swarmandal), [dakshinavarti](https://en.wikipedia.org/wiki/Dakshinavarti_shankha), and [tanpura](https://en.wikipedia.org/wiki/Tanpura). The [banjo](https://en.wikipedia.org/wiki/Banjo), [sitar](https://en.wikipedia.org/wiki/Sitar), [sarod](https://en.wikipedia.org/wiki/Sarod), [veena](https://en.wikipedia.org/wiki/Veena), [zither](https://en.wikipedia.org/wiki/Drone_zither), [hurdy-gurdy](https://en.wikipedia.org/wiki/Hurdy-gurdy) and [cwrth](https://en.wikipedia.org/wiki/Crwth) instruments include resonant strings that act as drones. [Bagpipes](https://en.wikipedia.org/wiki/Bagpipes) include drone pipes, and drone effects can be created using the [pedal point in pipe organs](https://en.wikipedia.org/wiki/Pedal_point). As can be seen, drone instruments include stringed instruments, wind instruments (woodwind, brass and other), but also include [many traditions of  vocalised drone singing](https://blog.chrisrowbury.com/2020/10/the-different-types-of-polyphonic_12.html). Electronic synthetic ([synth](https://schneidersladen.de/en/desktop-synthesizers/drone-noise/)) drone instruments were developed in the 20<sup>th</sup> century.  

## What is drone music?
Drone music is a minimalist musical genre, related to ambient music, that emphasizes the use of drones (usually synth drones). It is well covered in [this Wikipedia article](https://en.wikipedia.org/wiki/Drone_music).

## Part 1: fine tuning

In case you didn't get time to adjust your instrument to your liking last week, we'll spend the first 40 minutes of class working individually to fine tune your drone.

From last week, you might remember that all of the sounds you've been making through Tone.js so far are produced through [_oscillators_](https://tonejs.github.io/docs/14.7.77/Oscillator.html). Oscillators are just voltage signals that oscillate between a minimum and maximum value at a certain frequency. If this signal is used to drive (or move) a speaker, it will produce an analogue sound wave -- hopefully one we can hear, because we are making music after all.

Recall that oscillators can be combined through additive synthesis (you can have 2 or more oscillators which will combine to create a more complex sound).

```js
  // a sawtooth wave oscillator running at 440 Hz with 4 partials
  osc = new Tone.Oscillator(440, "sawtooth4");
  osc.toDestination(); // --> shorthand for "connect(Tone.Master)"
  osc.start();

  // a sine wave oscillator running at 220 Hz with 2 partials
  osc2 = new Tone.Oscillator(220, "sine2");
  osc2.toDestination(); // --> shorthand for "connect(Tone.Master)"
  osc2.start();
```

As we discussed at the start of class, your oscillators can be treated as audio processing nodes -- you can think of this as a unit (or box) which either produces or manipulates signals. While oscillators _produce_ an audio signal, other audio processing units can _manipulate_ signals.

We can pass the output audio signal from one audio processing unit to another using the `connect()` method. In the example below, we connect the output from our oscillator to the [`Reverb`](https://tonejs.github.io/docs/14.7.77/Reverb), which is another audio processing unit. The output from the `Reverb` is the connected to the master output using `toDestination()`.

```js
const osc = new Tone.Oscillator();
const verb = new Tone.Reverb(1.5);
osc.connect(verb);
verb.toDestination();
```

We can also set up a chain of audio processing units. Chaining the units in this way implicitly processes some input signal, e.g. the signal from your master output, by applying each audio processing unit in the chain one after the other. The code below illustrates how to chain several audio processing units using the `chain()` method. The order in which the audio is processed is:

1. the oscillator generates a signal
2. the oscillators signal is fed to the master output
3. the master output is passed through a phaser unit
4. the master output is passed through a reverb unit

```js
const osc = new Tone.Oscillator();
const verb = new Tone.Reverb(1.5);
const phase = new Tone.Phaser(40);
osc.toDestination();
Tone.Destination.chain(phase, verb);
```

Remember also, you can use a [LFO (Low Frequency Oscillator)](https://tonejs.github.io/docs/14.7.77/LFO) to modulate your signal:

```js
  // creates a low freq oscillator with freq 0.5hz and max - 55, min value - 440
  lfo = new Tone.LFO("0.5hz", 55, 440);
  lfo.connect(osc.frequency); // apply LFO to object (oscillator) 'osc' property 'frequency'
  lfo.start(); // start the LFO
```

**do:** Explore some of the [audio effects](https://tonejs.github.io/docs/14.7.77/AutoFilter) Tone.js offers. This particular link takes you to the AutoFilter effect (the first effect alphabetically), but if you scroll down to "Effects" on the left-hand side panel, you'll find even more delicious effects to play with.

:::tip
**think or play:** Tone.js has some [examples](https://tonejs.github.io/examples/) to explore different ways you can make sounds. You can look here for ideas on how to use oscillators and effects. *Please limit your investigation to oscillators and effects this week!* If you want to find out the technical details, you can look into the [API (application programming interface)](https://tonejs.github.io/docs/15.0.4/index.html). 
:::

## Part 2: bringing the band together

Your task during the rest of class is to split up into groups of three or four members, and make some sweet sweet drone music together. At this stage, you may or may not move into another room to give you a separate audio space in which to practice :)

:::tip
**talk:** Say hi to your new band mates! If you haven't met already, introduce yourself to the members in your group.
:::

**do:** Spend a few minutes improvising together. It might sound a lot like noise at this initial stage and that's ok. For now, we want you to pay attention to the sorts of changes you make and how you respond to the changes you hear.

:::tip
**talk:** Discuss what your experience was of your first drone performance. What can you do to make things more musical? Can each member have a certain role in the context of the performance? How can you create some structure to the musical performance?
:::

**do:** After your discussion, you might feel that you need to make some small tweaks to your instrument. Go ahead and make any changes you'd like to your instrument.

It's almost time for your performance, there's just one more thing your group needs to decide on.

:::tip
**talk:** Come up with a name for your performance or for your group (or both!) -- something that represents your collective sound.
:::

Alright! The time has come. Let's regroup in our usual lab room and prepare to perform. Dim the lights.

### Part 3: What to include in your blog post?

You will be discussing what you created in class in your blog post which is due at _11:59pm_ this Friday.

**A reminder that we are not assessing the "quality" of the work you present in the blog post.** The blog posts are just a way for you to regularly _"sketch"_ with code and _reflect_ on your work.

### Screenshots and/or screen recordings

We want to see the thing! Reference **at least one** screenshot/screen recording of your drone performance. Since you will be performing in groups, your instructors will upload recordings of each group's performance to the _cc-blog_ channel on Teams. All you need to do is **include the name of your group** in your blog post.

### Discussion / Context

We want to read the thing! Write a short paragraph which covers the following discussion points:

1. How did you give your performance structure?
2. To what degree were you improvising during the performance?
3. What control interfaces did you create for interacting with your performance?
4. What was _your_ role and/or your _instrumentation_ in the ensemble performance?
5. Discuss any challenges you faced OR the main things you learned.

## Summary

Congratulations! In this lab you:

1. Revised how oscillators work in [Tone.js](https://tonejs.github.io)
2. Worked in groups to come up with a drone performance
3. Performed with your drones
