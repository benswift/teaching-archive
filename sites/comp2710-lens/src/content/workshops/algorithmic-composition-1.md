---
title: "Week 7: algorithmic composition 1"
summary: triggering events in pitch & time using algorithmic processes
---

**Solo AVD**: write a piece with three algorithmic parts: drums, bass and lead

## Goals for this week

1. download, install & make a sound with **Extempore** (the
   [VSCode Quickstart page](https://extemporelang.github.io/docs/overview/quickstart/)
   is probably a good place to start) (make sure you can get the sound out of
   Extempore and into your video recording, too)

2. see how musical events (pitch, velocity, duration) can be represented &
   manipulated in a textual computer music language

3. create one (or more) simple algorithmic processes which generate music

## Extempore resources

Lots of new stuff this week, although because of the two week lecture-free
period you actually have a bit longer to get on top of it. Don't be
overwhelmed---we'll guide you through some example code which will (hopefully)
be fun to play with, and don't worry if you don't understand everything about it
at first. And **if you have questions, hit us up on Teams**.

### Quickstart

The best way to get started with Extmpore is to follow the
[Quickstart](https://extemporelang.github.io/docs/overview/quickstart/); it'll
help you download & install Extempore and also a text editor (VSCode) which
you'll need to write Extempore code.

After that's all working, all you need to do is create a new `.xtm` file, start
& connect Extempore (as you learned to do in the _Quickstart_ guide) and you're
off and racing.

### Background

There are a couple of maths-y/music-y pre-reqs which you've probably already
seen before, but are often helpful in algorithmic composition:

- [pitch classes](https://en.wikipedia.org/wiki/Pitch_class) provide a way to
  think about which notes fit with which other notes (scales, intervals, chords)

- [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic) is
  handy for both rhythmic and harmonic (pitch) algorithms

- all the music theory crash course stuff [mentioned in week 1](/workshops/synthesis-1/#pd-resources) will be helpful here as well, especially
  because now you're working in a textual programming langugage you might be interested
  in doing more "note-based" stuff

### Launch points

Extempore (like Pd) can do lots of things, and the best way to learn is probably
to dive in and start making noise. Here's a good place to start:

- The
  [Extempore Pattern Language](https://extemporelang.github.io/docs/guides/pattern-language/),
  as well as looking at all the covers in the `examples/sharedsystem/covers/`
  directory

After that, what you do (and what parts of the documentation & sample code are
relevant) will depend on what you're trying to do. A few potential "launch
points":

- The pattern language isn't the only way to make loops in Extempore---you can
  also use regular Scheme code and a design pattern called
  [temporal recursion](https://extemporelang.github.io/docs/overview/time/), and
  check out e.g. the fmsynth example (`examples/core/fmsynth.xtm`) or the
  electrofunk example (`examples/external/electrofunk.xtm`)

- If you're more interested in making algorithmic beats & rhythms, then the
  Extempore sharedsystem loads up a sampler which has some drum samples in it
  (an 808 in bank 3 and an acoustic kit in bank 4)---have a look at the
  [sampler](https://extemporelang.github.io/docs/guides/sampler/) guide and
  maybe even load in and trigger your _own_ samples

- Extempore has a few different ways of generating random numbers; e.g. explore
  the differences between these random calls:

```extempore
;; option 1
(random)

;; option 2
(random 10 100)

;; option 3
(random '(60 63 64 67))

;; option 4
;; for this one you need to (sys:load "libs/core/pc_ivl.xtm") first
(pc:random 60 72 '(0 2 3 5 7))
```

Seriously, though, if you've got an idea and are wondering about how to make it
happen then hit us up on Teams and we can probably point you in the right
direction.

### Non-Extempore resources

A few more places to get ideas for algorithmic composition:

- [Brief History of Algorithmic Composition (John A. Maurer)](https://ccrma.stanford.edu/~blackrse/algorithm.html)

- [Getting Starting with Algorithmic Composition: Donya Quick](http://donyaquick.com/algorithmic-composing-advice/)

- [The Concert Programmer](https://www.youtube.com/watch?v=yY1FSsUV-8c)

- Check out [Ben's livecoding sets](https://benswift.me/livecoding/index.html)
  and ask him to explain anything you have questions about

- D. Herremans, C.-H. Chuan, and E. Chew. A functional taxonomy of music
  generation systems. ACM Comput. Surv., 50(5):69:1–69:30, Sept. 2017.
  [DOI:10.1145/3108242](https://doi.acm.org/10.1145/3108242)

- [Oxford Handbook of Algorithmic Music (available through ANU library)](https://virtual.anu.edu.au/login/?url=https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780190226992.001.0001/oxfordhb-9780190226992)

- [Algorithmic Composition: Computational Thinking in Music (Michael Edwards)](https://cacm.acm.org/magazines/2011/7/109891-algorithmic-composition/fulltext)

- [Algorithmic Composition - Cambridge Companion to Electronic Music (Karlheinz Essl)](https://www-cambridge-org.virtual.anu.edu.au/core/books/cambridge-companion-to-electronic-music/algorithmic-composition/5390BDB514BF6EDABD6DA031A6395407)

- Euclidean rhythms; here's a [blog post
  version](https://splice.com/blog/euclidean-rhythms/) and here's a [deep dive
  academic
  paper](https://www.sciencedirect.com/science/article/pii/S0925772108001156)
  (note that Extempore has a `euclid` function for generating Euclidean rhythms)

- <https://generative.fm/> is a super-cool website full of
  generative/algorithmic compositions

- this [google sheet with various drum
  patterns](https://docs.google.com/spreadsheets/d/19_3BxUMy3uy1Gb0V8Wc-TcG7q16Amfn6e8QVw4-HuD0/)

- evolutionary algorithms for music composition (e.g.,
  [darwintunes](http://darwintunes.org),
  [evolutionary music slides](http://igm.rit.edu/~jabics/EvoMusic/BilesEvoMusicSlides.pdf))

- AI/ML composition (e.g., [Magenta project](https://magenta.tensorflow.org))

- cool algorithmic artists: [Renick Bell](https://renickbell.net),
  [kindohm/Mike Hodnick](https://kindohm.com),
  [William Fields](https://williamfields.com)

## Things to think about

- even though you're more sophisticated computer musicians than you were in
  [week 1](/workshops/hello-sine/), it's still worth doing the
  Extempore set up stuff ASAP, just in case you have installation issues (we're
  really keen to help, but you need to give us enough time to help you out)
