---
title: "Lab 13: Sequencing Beats"
tagline: "Making beat patterns with Tone.js"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-13
image: /images/labs-year-11/year-11-lab-13.png
---

## Outline

In this lab you will:

1. familiarize yourself with the [Tone.js](https://tonejs.github.io) sequences and samplers

2. learn some of the fundamental concepts in using code for beat-based music-making

3. work to create your own beats & rhythms

## Pre-lab checklist

Before you attend your lab session, make sure:

- you can fork, pull & push to GitLab
- bring Headphones (if you have some spare)

## Introduction

Welcome to the fourth week of the computer music section of this course. Let's get stuck in to laying down some beats.

In today's lab, we will introduce you to some important concepts in Tone.js,
which are actually fundamental to any form of computer music. 

We will finish off with a brief introduction to the theory and practice of beats & rhythm, after
which you will go on to make your own beats.

## Part 1: Keeping time with Transport

If you cast your mind waaaay back to last term, where we used p5.js to make
visuals, you'll remember that there was a `draw()` function which was called at
a regular time interval. With each new frame, p5.js would execute the code
inside the `draw()` function. You might also remember using the `frameCount`
variable to access how many frames have been drawn since you started the sketch.
This allowed us to make animations relative to the `frameCount`, for example
rotating the canvas if the `frameCount` is divisible by 7. We tend to use
`frameCount` as a way to keep track of time.

Having control of when things happen in our sketch becomes even more important
when making music. So, like any good computer music framework, Tone.js has a
(very precise) way of keeping track of time. We tell time through the sound
engine in Tone.js which is referred to as the
[Transport](https://github.com/Tonejs/Tone.js/wiki/Transport) object. To
simplify things, you can think of the Transport object as a stopwatch, because
Transport lets us _start_, _stop_ and _pause_ time. Before we make any music in
Tone.js, we need to make sure we start the sound engine by calling
`Transport.start()` (or `Transport.toggle()`, which is pretty similar except
that it starts the transport if it's currently stopped, and vice versa).

To get started, fork and then clone the [lab 13 template
repo](), open it in VSCode and start the live server.

Look through the code in your lab template and try to find the line where
`Transport.toggle()` is called. You'll noticed it's inside the `mousePressed()`
function. An interesting 'quirk' of Tone.js is that it relies on user
interactions with the sketch to start the sound engine and start playing sound.
This is why your sketch prompts you to press the space key to start the sound
engine and press the mouse to toggle the sound on and off.

For the moment, all you need to know about
`Transport.start()`/`Transport.toggle()` is that, when it is called, it is
starting a stopwatch so we have a way of keeping time when we play music. This
is similar to the way p5.js starts incrementing the `frameCount` variable from
zero as soon as we run our sketch, only the Transport object handles time much
more precisely.

## Part 2: Sequences

Now that we have a way of keeping time, we can make some music. Say I wanted to play a rhythmic sequence on a loop; something like a "boom ka boom ka". Last week we used Tone.js Loops to do this. This week we will use the Tone.js sequencer to play a sequence of notes, or beats.

You will find a function in your lab template which helps us do this. At the very top of the sketch.js file in your lab template, you'll see a function called `createSequence()`. This function utilizes a Tone.js object called [Sequence](https://tonejs.github.io/docs/15.0.4/classes/Sequence.html)  ([example Step Sequencer](https://tonejs.github.io/examples/stepSequencer)). Don't worry if you don't quite understand how the Sequence object is being used at this stage. All you need to know is the `createSequence()` function will play a sequence on loop as long as you specify _which 'instrument' to use, which 'notes' to play_, _the duration of the sequence_ and _when it should start playing_. Since we are going to create a rhythm on a drum, the 'notes' will refer to the timbre of the drum i.e. hihat, kick, tom, snare.

:::tip
**Aside:** The beats are played using a [Tone.js Sampler](https://tonejs.github.io/docs/15.0.4/classes/Sampler.html) ([example sampler](https://tonejs.github.io/examples/sampler))created from samples of drum beats from the [808 kit](https://en.wikipedia.org/wiki/Roland_TR-808). A sampler allows 'notes' to be played which do not have matching samples - the Sampler will extrapolate from the information provided to _guess_ what the sound you are looking for should sound like. Your instructor has an issue with this: the drum map used cannot be extrapolate to other instruments!!!
:::

Copy this line of code below into your lab template, at the bottom of your `setup()` function (the comments will help you find exactly where to put it) and run your sketch. You'll notice that the first argument of this function is an instrument, and the second is an array of drum timbres; `[drumMap.kick, drumMap.snare, drumMap.kick, drumMap.snare]`. At the moment it's only using the kick drum and the snare. At the top of your sketch you'll see that there is a large list of drum timbres for you to choose from. This might look familiar if you remember the lab on _Objects in p5.js_. Each timbre is a property of the _drumMap_ object.

```js
my_sequence = createSequence(sampler, [drumMap.kick, drumMap.snare, drumMap.kick, drumMap.snare], "4n", 0);
```

Try to change the timbres in your sequence. Replace the elements in the array of drum timbres with different properties of the drumMap object. e.g. `drumMap.splash`.

The third argument of the `createSequence()` function is set to "4n". This argument specifies how long each note is played for and, in this case, it represents 1/4 note. As you can probably imagine, a half note is represented by "2n", a whole note by "1n" and so on. 

Try to make the sequence play twice as fast by changing the second argument of the `createSequence()` function.

So far, each note has had the same duration. What if we want some notes to have a shorter duration than others? This is easily done by replacing one of the notes in our array of drum timbres with another array of drum timbres. Take the example below. 

```js
my_sequence = createSequence(sampler, [drumMap.kick, drumMap.snare, [drumMap.splash, drumMap.snare], drumMap.kick], "4n", 0);
```

The first two elements in this array are drum timbres, while the last element is another array with two drum timbres. In this example, the first kick and the first snare will still be played for a 1/4 note, but the last kick and snare will each last for an 1/8 note. Try replacing the call to `createSequence()` in your lab template with the line above and save your code. Can you hear the change when you start the sound in your browser? Your sketch will likely ask you to start the sound engine by pressing the space bar and toggle the sound by pressing the mouse.

Experiment with the different ways you can give the notes in your sequence different durations. You might want to start by recreating some swing beats. 

What is sound without silence? You can use rests in your rhythm by adding empty arrays to your array of drum timbres. Take the example below. 

```js
my_sequence = createSequence(sampler, [drumMap.kick, [drumMap.snare, drumMap.splash], [], drumMap.snare], "4n", 0);
```

Here the first kick and last snare are each held for 1/4 note. There is a snare and a splash for 1/8n followed by a rest which is held for a 1/4n. Try replacing the call to `createSequence()` in your lab template with the line above and save your code.

Try to recreate the iconic _"boom boom ka"_ rhythm from "We will rock you" by Queen.

:::tip
If you blazed through this section, try to recreate a rhythm from a song you like. 
:::

## Part 3: Call and response 

Now that you have had a play around with creating sequences, it's time for you to collaborate. 

:::tip
Pair up with someone you don't usually sit next to or work with. Introduce yourselves in a COVID safe manner. You'll be working together to come up with a call and response rhythm. 
:::

You and your partner will create a rhythm sequence worth 2 bars. For example, the sequence below will repeat every 2 bars where each note is a kick drum which is held for 2 whole notes. If you're not sure why, ask your instructor.

```js
my_sequence = createSequence(sampler, [drumMap.kick, drumMap.kick, drumMap.kick, drumMap.kick], "2n", 0);
``` 

Since you will be creating a call and response rhythm, one of you will be creating the rhythm for the first bar and the other will be creating the rhythm for the second bar. Think about what we covered in Part 2 of this lab. How can you create some interesting rhythms. You might even find that you have similar taste in music with your partner and recreate a rhythm from a song you like. 

Once you are happy with the rhythm you've created, we'll give each of you some time to share what you've created with the class. 

## Part 4: Starting Later, Stopping Sooner

In the sequence creation, we said above that you can say "when to start". Our createSequence calls have all passed `0` as the start time. This pretty much means _"start playing the sequence straight away"_, when Tone.Transport starts, and the sequence has been asked to start, then it will start at that point in time. Clicking the mouse toggles transport, but you can also ask the sequence to start and stop. There is a helper function in your code called `startStopSequence(sequence)` which will start a stopped sequence, and stop and started sequence.

In the `function keyTyped()` add the following code:

```js
  if (key === "1") {
    startStopSequence(my_sequence);
  }
```

Add interaction to your sketch to start and stop a sequence as shown above.

This is different to toggling `Tone.Transport`, as you can have other sequences which are still running. This can enable layering of different instruments played for different sequences.

How can you use the **start time** for your sequence?

You could try changing to a value greater than 0, such as:

```js
my_sequence = createSequence(sampler, [drumMap.kick, [drumMap.snare, drumMap.splash], [], drumMap.snare], "4n", 2.0);
``` 

What happens? Does it work? Did it start after a delay?

In other words, how should Tone.js interpret your request to start after 2.0 - does it mean seconds, beats, notes, or something else.
By default, Tone.js will interpret this number as the number of seconds. If we have multiple sequences, we might want them to synchronise.

Quantizing time can help synchronise our beats. Compare the following two ways of delaying the start time:

```js
my_sequence = createSequence(sampler, [drumMap.kick, [drumMap.snare, drumMap.splash], [], drumMap.snare], "4n", 0);
let second_sequence = createSequence(sampler, [drumMap.lowFloorTom, [], [drumMap.hiFloorTom, drumMap.hiFloorTom], []], "4n", 3.0);
``` 

```js
my_sequence = createSequence(sampler, [drumMap.kick, [drumMap.snare, drumMap.splash], [], drumMap.snare], "4n", 0);
let second_sequence = createSequence(sampler, [drumMap.lowFloorTom, [], [drumMap.hiFloorTom, drumMap.hiFloorTom], []], "4n", Tone.Time(3.0).quantize("4n"));
``` 

Why might you want to start later? Do you always want to start later? Can you start later dynamically? There are a lot of creative decisions to be made.

## Part 5: Changing Instruments

You may have noticed that the first argument to our helper function `createSequence()` is the instrument. I don't want you to leave today with the impression that sequences are only for creating drum patterns.

You may have also noticed that there is another JavaScript file in the template code. `pianoetta.js` contains the `Pianoetta` class from last week. You can create a synth, or an oscillator, or any other Tone.js instrument, and sequence the playing of its notes. Pianoetta is available to use, because in index.html it has been helpfully loaded into our browser context:

```html
  <script src="pianoetta.js"></script>
```

To create a Pianoetta synth you can use the same code as last week (and we have already setup the synth for you as a global variable in the `setup()` function):

```js
  synth = new Pianoetta(Tone.Master);
```

To create a sequence of notes for a synth you just list the notes in an array. The patterns/syntax for timing are the same as for our drum sequence, but the notes can simply be listed as string values:

```js
  let synth_sequence = createSequence(synth, ["C4", ["C5", "B4"], ["G4", [], "G4"], "A4"], "4n", 0);
```

Create a synth_sequence, and a second drum sequence. Offset start times. Play with dynamically starting and stopping sequences separately (using the code shown above, but triggered with different keys).

Make sure you commit and push your code to gitlab. Look back over the labs from last term if you forgot how to do this, or ask your instructor.

## Summary

Congratulations! In this lab you:

- made some phat beatz 🥁🪇🪘🥁

- learned more about Tone.js, especially the `Transport`, `Time`, `Sampler` and `Sequence` methods.
