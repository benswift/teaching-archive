---
title: "A brief guide to live coding music"
description: "Creating music and art with computer programming in real-time."
---

<!-- _class: banner -->

# COMP2710 LENS

---

<!-- _class: centered -->

We acknowledge and celebrate the First Australians on whose traditional lands we meet, and pay our respect to the elders past, present and emerging.

---

![bg](./assets/welcome/charlesmartin-synth-profile.jpg)

## Charles Martin

Senior Lecturer, ANU School of Computing

computer musician, percussionist

[homepage](https://charlesmartin.au)

[SMCCLAB: Sound, Music, and Creative Computing Lab](https://charlesmartin.au/lab)

[@charlesmartin@aus.social](https://aus.social/@charlesmartin)

## Sound and Music Computing

two big goals:

1. make _sound_ with _code_ on laptop _computers_

2. play computer _music_ in a group

...how do we do this at ANU?

---

![bg](./assets/photos/2015-ems-workshop.jpg)

---

![bg](./assets/photos/2018-lens-showcase.jpg)

---

![bg](./assets/photos/2019-rehearsal-rohan.jpg)

---

![bg](./assets/photos/2020-brent-performance.jpg)

---

![bg](./assets/photos/2021-yichen-performance.jpg)

---

![bg](./assets/photos/2022-lh.jpg)

## how does this work?

1. get logged in on your computer (need temporary user ID and password)

2. open "Chromium" web browser

3. go to <https://bit.ly/laptop-music-coding> for the workshop instructions

4. go to <https://gibber.cc> to start coding music

see these slides: <https://bit.ly/coding-music-slides>

⚠️⚠️ the lab computers use an operating system called _linux_ that you might not be familiar with! You might need help finding _Chromium_ and the _volume control_. ⚠️⚠️

## Gibber

![](./assets/gibber-screen.png)

Free tool for making computer music---in your web browser.

Developed by [Charlie Roberts](https://charlie-roberts.com). "New" (circa 2013), under _active_ development.

Start using it at [gibber.cc](https://gibber.cc).

---

![bg](./assets/photos/2022-lh2.jpg)

## coding to make sound

[Emma Liu (2022)](https://youtu.be/pd8D_MywniQ)

[Madelyn Fardell (2022)](https://youtu.be/xixlJ9WtqNo)

[Wenshilan Ren (2023)](https://youtu.be/LqYNjvo2qvc)

[Evangeline Sturges (2023)](https://youtu.be/gQch_vbFqHo)

---

<!-- _class: impact -->

who has a question right now?


## Later... so you've made a piece in Gibber...

1. Dive deeper into the synth designs provided in Gibber (well, in [gibberish](https://github.com/gibber-cc/gibberish/tree/v3/js/instruments) actually, see below). Create sounds with a synth you haven't used before such as `fm` or `karplusstrong`.

2. Read through the [`modulation` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/modulation.js) and the [`arpeggios and signals as sequences` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/arp.js) and learn about how to create custom modulations for synth parameters and sequences.

3. Look at the [`making synths` tutorial](https://github.com/gibber-cc/gibber/blob/main/playground/examples/make.js) and create your own synth design in Gibber using the Genish DSP library.

5. Try the `tidalcycles` tutorial for a different (some would say better) way of defining sequences in Gibber. The full syntax for tidalcycles mininotation is [here](http://tidalcycles.org/docs/reference/mini_notation/).

4. Use Gibber's built-in collaboration features to create a group performance with your ensemble!

## Much later... music and code resources

0. ANU Sound and Music Computing [student performances.](https://www.youtube.com/watch?v=2EdxJ_aJRHA&list=PLKm3iGh1D7Mur62hvm6BHBNqlObABGDgY)
1. The [gibber playground](https://github.com/gibber-cc/gibber): Gibber's user interface, clone this repo to run Gibber locally.
2. [gibber.audio.lib](https://github.com/charlieroberts/gibber.audio.lib): Audio components for Gibber, most of this wraps `gibberish` (see below), but it does include the [presets](https://github.com/charlieroberts/gibber.audio.lib/tree/main/js/presets).
3. [gibber.graphics.lib](https://github.com/charlieroberts/gibber.graphics.lib): Graphics components for Gibber.
4. [gibber.core.lib](https://github.com/charlieroberts/gibber.core.lib): A few shared objects and function for Gibber, mostly for sequencing. `euclid`, `seq`, and `tidal` are defined here.
5. [gibberish](https://github.com/gibber-cc/gibberish): a "fast JavaScript DSP library". If you want to know where `Synth` or `Sampler` are defined, look here (actually look in `gibberish/js/instruments`).
6. [genish](https://github.com/charlieroberts/genish.js): this is a lower-level DSP library for doing "per-sample audio processing" (inspired by the `gen~` object from Max/MSP). To understand why this is cool, look at the [genish tutorial](http://www.charlie-roberts.com/genish/tutorial/index.html).
