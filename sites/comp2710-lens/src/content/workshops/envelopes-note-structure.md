---
title: "Week 4: envelopes & note structure"
summary: shaping sound in the short (and long) term
---

**Solo AVD**: with a _single_ sound source, create a piece using envelopes

The past two weeks of workshops have shown several different ways to create
sound "sources"; single oscillators, more complex networks of oscillators &
filters, soundfile playback objects, noise sources, etc. In building your
patches for performance, you've even found several different ways to shape the
relative trajectories of these sound sources over time; such as multiplying
signals with slider values.

This week, we look at
[envelopes](<https://en.wikipedia.org/wiki/Envelope_(music)>)---the more general
term for this type of "sound event shaping". Envelopes are a key part of taking
the "raw signals" you've been generating so far and shaping them into more
structured and recognisable musical elements like notes, bars, choruses, and
movements.

![The effect of applying an envelope to a carrier
wave.](/images/digital-synthesis/envelope-sound.png)

## Goals for this week

1. be able to control the sound sources in your patch in a reliable & repeatable
   manner

2. to explore how different envelope parameters can be used from a compositional
   perspective

## Pd resources

- [Charles' Pd examples (start with `11-EnvelopeGenerator.pd`)](https://github.com/cpmpercussion/ComputerMusicIntro)
- [PureData tutorials - rich synthesis (2) - simple envelopes](https://www.youtube.com/watch?v=gqpvIwYko3o)
- the Pd help for the `line~` & `vline~` objects, as well as the `bang` and
  `metro` objects for triggering your envelopes

![Anatomy of a vline
message](/images/digital-synthesis/pd-using-vline.png)

## Things to think about

- does an envelope have to control the _amplitude_ of a sound source? or can it
  control other things? can envelopes control other envelopes?

- when is an ADSR (attack-decay-sustain-release) envelope the right choice, and
  when do you want a different type of envelope?

- can you take a patch (or part of a patch) that you've made in a previous week
  and add an envelope to it? you might want to try the `metro` object to
  generate a sequence of "bangs" to keep triggering your envelope generator

- for some further reading,
  [look on teh Googlez](https://www.google.com/search?hl=en&q=adsr%20envelope),
  e.g.
  [ADSR Envelopes: How to Build The Perfect Sound](https://blog.landr.com/adsr-envelopes-infographic/)
