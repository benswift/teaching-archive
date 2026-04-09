---
title: "Week 8: synthesis & sampling 2"
summary: configuring and playing an analogue modular synth with code
---

**Group AVD**: start big, then "remove" things with filters & algorithms (3min
AVD this week, because group)

## Goals for this week

1. revisit the basic synthesis & sampling concepts we covered in [week 2](/workshops/synthesis-1/) and [week 3](/workshops/sampling-1/), this time in Extempore

2. begin to learn what the different synthesis "building blocks" (oscillators,
   filters, effects, as well as new samples) _sound_ like in a musical sound
   design context

3. to be able to load in and play with recorded sounds in Extempore, including
   going beyond just triggering pre-recorded "one-shot" samples, to explore the
   compositional possibilities of _manipulating_ pre-recorded sounds during
   playback

4. discuss any special tech/setup requirements for the [demo day](/deliverables/demo-day/) presentations

## Extempore resources

### Synthesis

The main course material this week is the
[analogue synth guide](https://extemporelang.github.io/docs/guides/analogue-synth/)
on the Extempore documentation website.

### Sampling

The sharedsystem setup process that you've been using for the [last couple](/workshops/algorithmic-composition-1/) [of weeks](/workshops/synthesis-and-sampling-2/) creates one sampler (called
`samp1`) which contains:

- piano samples in banks `0`--`2`
- TR808 drum samples in bank `3`
- acoustic drumkit samples in bank `4`

You can see how this is all set up in `examples/sharedsystem/audiosetup.xtm`
(start looking at around line 30).

As covered in the
[sampler guide](https://extemporelang.github.io/docs/guides/sampler/), to access
the samples in a given bank you need an additional argument to `play`, e.g.
using the pattern language you could try:

```extempore
;; play slot 60 (middle C) from bank 1, i.e. the mf piano
(play samp1 @1 60 dur 1)

;; play slot 60 (middle C) from either bank 0, 1, or 2
(play samp1 @1 60 dur (random 3))
```

Remember that the "bank" argument is a parameter just like all the others, so
you can use whatever algorithmic process you like to determine which bank to
select the sample from (again, see [this
guide](https://extemporelang.github.io/docs/guides/sampler/) for more info about
banks, slots & samplers).

## Things to think about

- since Extempore's analogue synth is based around the exact same concepts as a
  hardware (or software) modular synth, have a look at some of the many YouTube
  videos on patch design & modular synthesis and try and re-create that sound
  yourself

- think of the different timescales involved in a piece of computer
  music---you've got things which cycle thousands of times per second (like
  actual waveforms), things which change over the course of a note (envelopes),
  things which change slowly over the course of a piece, etc... how can you vary
  different parameters at different timescales?

- patch files can be saved & shared (with
  `analogue-save-preset`/`analogue-load-preset`), so ask your classmates if
  they're willing to share their patches around (remember: it's a **group AVD**
  this week)

- can you use any of the [algorithmic composition](/workshops/algorithmic-composition-1/) concepts from last week to
  algorithmically modify the synthesis parameters of your piece?

- can you make something melodic with only unpitched[^pitched] sounds? how about
  making something that's primarily rhythmic with only pitched sounds?

[^pitched]:
    pitched vs unpitched isn't a binary, it's a
    [bit more complicated than that](<https://en.wikipedia.org/wiki/Pitch_(music)#Definite_and_indefinite_pitch>),
    but that doesn't make the distinction any less interesting as a creative
    prompt

- Extempore's sampler allows you to pitch-shift the sample data on playback;
  what are the limits to how far you can push this idea?

- can you make a whole piece by playing back (with different pitches and
  offsets) from a single audio file? what does "composing" look like under this
  constraint?

- what are the _roles_ in a group AVD collaboration, anyway? are there any new
  roles in your group music-making which didn't even exist in your week 5
  collaboration?

- are there any ideas/aspects of your final LENS performance that you're not
  sure about, or want feedback on? can you incorporate something of that into
  your collaborative contribution this week?
