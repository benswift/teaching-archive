---
title: "Lab 17: Soundscapes"
tagline: "compose a soundscape algorithmically"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-17
image: ./images/year-11-lab-17.png
---

## Outline

In this lab you will:

1. revise the algorithmic compositions and visualisation techniques from the last fortnight
2. work in groups to create a soundscape
3. perform your soundscapes
4. add a visualisation for your soundscape

## Introduction

Welcome back everyone. We will be wrapping up the _instructional part_ of the computer music portion of the course this week. To celebrate the end of our computer music journey, we will be creating our very own _soundscapes_. What is a _soundscape_ you ask? Excellent question! Well if you have a cheeky Google, you'll probably find several different definitions. For the purposes of this week's lab, we will consider a _soundscape_ to be an immersive atmosphere composed of _sounds_. These sounds don't have to be 'musical' in nature, meaning they don't have to be in a specific pitch or be played on a tradition/synthetic instrument. Sounds can be anything from the crackle of a fireplace to the sound of birds chirping.

In fact, to really drive home this idea of working with _sounds_ and not _pitches_, we will be using audio files (audio recordings) in the soundscape compositions we create today. We'll refer to these audio recordings as _samples_ and we will play the samples on a special instrument in Tone.js called the [_sampler_](https://tonejs.github.io/docs/15.0.4/classes/Sampler.html)[^1].

[^1]: The Tone.js [Sampler](https://tonejs.github.io/docs/15.0.4/classes/Sampler.html) is a Synth and will interpolate sounds between the notes you give it - effectively pitch shifting - to allow you to play any note/frequency with the given sample(s). If you want a complete range of sounds for a sample, then create separate Samplers for each sound.

Additionally, we will be using either the Dice Roll game or the Markov Chain from week 14's lab to help us create a sequence of sounds. If you need a refresher, your instructor will take you through the solution to week 14's lab exercises. If you're not able to attend this class in person, [this repository](https://gitlab.cecs.anu.edu.au/extn1019/2023-2024/year-11/live-coding/live-coding-lab-15) has the solutions from last week's class in it. Have a look over it and come to us next week with any questions or send us a message on Teams.

To start, well you know the drill...

**do:** ...`fork` and then `clone` the [lab 17 template
repo](), open it in VSCode and start the live server.

## Part 1: using the sampler

If you open your template repo for this week's lab, you should see that it includes a solution to the Dice Roll game and the Markov Chain within the `setup()` function. You'll also see that there is a new instrument in your `setup()` function called `sampler`. This `sampler` instrument has been loaded up with some audio files of sounds you might hear in nature.

```js
sampler = new Tone.Sampler({
  urls: {
    C1: "bees.wav",
    C2: "ocean_noise.wav",
    C3: "gentle_waves.wav",
    C4: "splashes.wav",
    C5: "whale_breath_wind.wav",
    C6: "butcherbird.wav",
    C7: "currawongs.wav",
    C8: "kookaburras.wav",
  },
  release: 1,
  baseUrl: "/images/nature/",
}).toDestination();
```

The code above creates a `sampler` instrument. You'll see that there is a section of this code which lists the following note values; `"C1"`, `"C2"`, `"C3"`, `"C4"`, `"C5"`, `"C6"`, `"C7"`, `"C8"`. You'll also see that there are file names next to each of these note values e.g. `"bees.wav"`, `"ocean_noise.wav"`; these are just audio files. Since the `sampler` instrument plays back audio files, it doesn't produce signals with frequencies (i.e. pitches) in the same way a `synth` instrument does. The Sampler will pitch-shift via interpolation in an attempt to make desired pitch, but we are not asking you to do this! So, by writing `"C1": "bees.wav"` in the code above, we are associating the note value `"C1"` with the audio file "bees.wav". Given the note `"C1"` it will play "bees.wav" without pitch shift.

If you scroll down to your `myLoop()` function, you'll see that the `triggerAttackRelease()` is being called on the `sampler` and not the `synth` like we have been doing in past labs. You might remember that `triggerAttackRelease()` requires you to specify which pitch to play e.g. "C4" or "C1". If we say `sampler.triggerAttackRelease("C1", "1n", time)`, then this will play the sample associated with the note value `"C1"`; which in this case is `"bees.wav"`.

If you prefer to use Tone.Sequence or Tone.Pattern, there are sketches including these coding techniques in the template.

**do:** Change the pitch argument in `sampler.triggerAttackRelease()` to each of the note values in our sampler i.e. `"C1"`, `"C2"`, `"C3"`, `"C4"`, `"C5"`, `"C6"`, `"C7"`, `"C8"` and listen to the different audio files you have at your disposal. There are other audio files available in the `/images/nature` folder for you to explore or you can place your own audio files in the `/images/nature` folder: (media types supported are those supported for playing from HTML in your browser).

## Part 2: Soundscape

Your task for this week's lab is to create a _soundscape_ in groups of 2-3 and perform your _soundscape_ to the class. In last week's class you created a single rhythmic _composition_ sequence by chaining smaller rhythmic sequences together. You selected which smaller sequence to chain _next_ based on a either a `die roll` or a `Markov Chain` (if you didn't do the Markov Chain, that's totally fine - it was definitely optional!).

You'll be doing something similar this week, except instead of creating only one composition sequence (i.e. one composition array), you will create 2-3 composition sequences (depending on how many people are in your group).

Here are some steps for you to follow:

1. Find 1-2 people to work with to create your soundscape
2. Decide which algorithmic composition technique you want to use; dice roll or Markov Chains
3. You should write all your code for this exercise on one person's laptop. Nominate whose laptop you will use
4. Create at least three empty arrays (you should have one array per group member)
5. Just like you did last week, create a set of small sequences with 4 note values in each sequence. This time the note values must be a valid note value in our sampler, so any of the following note values; `"C1"`, `"C2"`, `"C3"`, `"C4"`, `"C5"`, `"C6"`, `"C7"`, `"C8"`. An example small sequence might be [`"C1"`, `"C1"`, `"C2"`, `"C3"`].
6. Use your algorithmic technique to chain the small sequences to your composition arrays. Remember that after each die roll (or selection form the Markov Chain) you have to chain a small sample to two (or three) composition arrays this time. You can choose how long you want the composition arrays to be.
7. use `console.log()` to print each of the compositions to the console.
8. Copy the composition arrays form your console and paste them into a Teams message and send it to your group members.
9. Have each group member pick a composition array and include it in their own template repos
10. have each group member play through their composition array on their own laptops.

## Part 3: Visualisations

To enhance the experience of the soundscape, it would be fantastic to add some visuals.
Last week we went through the process of creating visuals for sounds, through meters, waveforms, FFTs, and triggered drawing using Tone.Draw().

Think about what might work well for your chosen soundscape.

You will find sketches with visualisations using meters, waveforms, FFTs and triggered drawing in the template to use as starters.

Steps to follow:

1. decide which type of visualisation
2. decide what will **drive** the visualisation (which volume or effect level will drive what is displayed)
3. decide how it will appear (colours, positions, sizes, directions) - what visual aspect is **driven** by the sound
4. select the required code components
5. add to your sketch and wire it up (connect appropriately)
6. test and refine

## Blog post: What to include in your blog post?

You will be discussing what you created in class in your blog post which is due at **17:00 _(5:00pm)_ Wednesday 18 September**.

**A reminder that we are not assessing the "quality" of the work you present in the blog post.** The blog posts are just a way for you to regularly _"sketch"_ with code and _reflect_ on your work. The important thing is that you talk about what you tried and what you might like to try if you had more time.

### Screenshots and/or screen recordings

We want to see the thing! Reference **at least one** recording of your performance. Your instructors will upload recordings of your group's performance to the _cc-blog_ channel on Teams. All you need to do is **include the name of your group** in your blog post. If didn't attend class in-person, just upload an audio recording of the piece your created (as an attachment) with your blog post (approx 30-60 seconds long).

### Discussions / Contexts

We want to read the thing! Write a short paragraph which covers the following discussion points:

1. Discuss the decisions you made with your group members when creating your soundscape, including the aspects you made decisions about, why you selected those as decision points, what the decision outcomes were, and what the reasons for the decision were.
2. How did the algorithmic techniques you used affect your music making process?
3. For context on soundscapes, listen to this example of a [soundscape](https://www.youtube.com/watch?v=fDQZTXz2-7o&ab_channel=touchmusic33), discuss what sort of changes you heard in the music.
4. Discuss how you might recreate the kinds of changes you heard in code with Tone.js. (There are no wrong answers, just ideas!)
5. Discuss how you worked visualisations into your soundscape. Which aspects of the audio influenced your decisions about _what to drive_, _what was driven_, _how it appeared_, _what you appreciated about the visualisation_ and _how you might change the visualisation_.

## Summary

Congratulations! In this lab you:

- revised the algorithmic compositions techniques from last week
- worked in groups to create a soundscape
- performed your soundscapes
- added visualisations to your soundscapes for a more engaging experience

---
