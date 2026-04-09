---
title: Sequencer
summary: "Structure your code to play a song!"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-assignment-2
hidden: true
---

## Outline

- **Due date:** 11:59 PM, Friday 3rd of May, 2019 (Friday of week 8)
- **Mark weighting:** 12 marks
- **Submission:** submit your assignment through [GitLab]()
  ([full instructions below](#submission-process))
- **Policies:** for late policies, plagiarism policies, etc. see the [policies
  page](/policies/)

In assignment 2 you need to program your discoboard to schedule/trigger a
[sequence](https://en.wikipedia.org/wiki/Music_sequencer) of "notes", each with
a different pitch/duration/loudness. As in assignment 1, the focus is on
controlling the behaviour of your discoboard with assembly code rather than
doing a bunch of music theory.

This assignment will again have two parts: in Part 1, you need to play a
specific sequence of notes with specific timing. In Part 2, you can generate a
new sequence of your own creation to demonstrate the capabilities of your sequencer.

## Background {#background}

Sequencers are tools for "scheduled execution", and they have been very
influential in recent music history.  
Consider, for example, the classic [Roland TR-808](https://en.wikipedia.org/wiki/Roland_TR-808) 
drum sequencer---a piece of electronic hardware designed for **sequencing** 
drum patterns which inspired a whole Kanye album:

<YouTubeEmbed id="?listType=playlist&list=PLX68ZEYlh74tpCb5sOXP98ito6DhP60-t" />

Ikutaro Kakehashi, the founder of Roland and a hugely influential designer of early
music technology, [died in 
2017](http://www.npr.org/sections/therecord/2017/04/02/522328217/ikutaro-kakehashi-founder-of-roland-drum-machines-dies-at-87), so consider this 
assignment a small tribute to his work.

Sequencers aren't limited to making drum sounds---the pattern they generate
might be a sequence of musical notes, like in a bassline or melody line. In
fact, this core concept is not even unique to music---the same ideas are found
in scheduling, robotics, cyberphysical systems, and a bunch of other domains.
The key idea is that sequencing is a way of controlling a device to perform
certain actions at certain times.

## Part 1 (50%) {#part-1}

In Part 1, you must program your discoboard to play a specific sequence of
notes---and you have 3 options this time, **pick 1**:

* [Daft Punk - Around the World (Bassline)](#daft-bass)
* [Daft Punk - Around the World (Vocal line)](#daft-vocals)
* [Deep Purple - Smoke on the Water (Guitar riff)](#deep-purp)

All options are considered of equal difficulty and will be marked to the same
standard ([see the marking section for part 1](#part-1-marks))---ie. you will not gain or lose marks for picking one option over another.

The note sequence is provided for each song, but in case you're not the musical type 
(and that's fine!) we have also included a table of frequencies and durations for each song, 
including the gaps (silence) between notes, represented by a `-` in the 
pitch column.  
These pitch tables contain the timing and frequencies we will be marking part 1 on.

<a id="reusing-part-1">

As you are provided 3 options for part 1, it is not a sufficient or acceptable submission 
to implement a different song from part 1 (or a mixture of them in sequence) as your 
part 2 with no other changes made

### Daft Punk - Around the World (Bassline) {#daft-bass}

<YouTubeEmbed id="LKYPYj2XX80" />

*Note: the bassline starts at around 0:23*

Once started, your program must play the sequence:

- in the key of G major[^key] (so the note sequence is A-A-A-A-C-C-C-C-D-E-E-E-E-F#-E-D-C-B-A-G-A)
- at a tempo of 120 beats per minute (this timing is shown in the table below)
- using an audible square wave sound (you can re-use your code from Assignment 1, 
but make sure to note it in the SoO)
- so that it loops forever---i.e. that when the sequence finishes playing, it
  starts again from the beginning (with no interruption to the timing)

**Pitch Table:**

| pitch (Hz) | duration (s) |
|-----------:|-------------:|
| 110        |         0.25 |
| -          |         0.25 |
| 110        |         0.25 |
| -          |         0.25 |
| 110        |         0.25 |
| -          |         0.25 |
| 110        |         0.25 |
| -          |         0.25 |
| 130.81     |         0.25 |
| -          |         0.25 |
| 130.81     |         0.25 |
| -          |         0.25 |
| 130.81     |         0.25 |
| -          |         0.25 |
| 130.81     |         0.25 |
| 146.83     |         0.25 |
| 164.81     |         0.25 |
| -          |         0.25 |
| 164.81     |         0.25 |
| -          |         0.25 |
| 164.81     |         0.25 |
| -          |         0.25 |
| 164.81     |         0.25 |
| -          |         0.25 |
| 185        |        0.125 |
| -          |        0.125 |
| 164.81     |        0.125 |
| -          |        0.125 |
| 146.83     |        0.125 |
| -          |        0.125 |
| 130.81     |        0.125 |
| -          |        0.125 |
| 123.47     |        0.125 |
| -          |        0.125 |
| 110        |        0.125 |
| -          |        0.125 |
| 98         |         0.25 |
| 110        |         0.25 |

### Daft Punk - Around the World (Vocal line) {#daft-vocals}

<YouTubeEmbed id="yca6UsllwYs" />

*Note: this tune is based on the sound signature of the lyrics (throughout), and also the 
note progression which starts at around 6:30*

Once started, your program must play the sequence:

- in the key of G major[^key] (so the note sequence is G-F#-G-G-A-G-F#-G-B-G)
- at a tempo of 120 beats per minute (this timing is shown in the table below)
- using an audible square wave sound (you can re-use your code from Assignment 1, 
but make sure to note it in the SoO)
- so that it loops forever---i.e. that when the sequence finishes playing, it
  starts again from the beginning (with no interruption to the timing)

**Pitch Table:**

| pitch (Hz) | duration (s) |
|-----------:|-------------:|
| 196        |         0.25 |
| 185        |         0.25 |
| 196        |         0.25 |
| 196        |         0.25 |
| 220        |          0.5 |
| 196        |          0.5 |
| 185        |          0.5 |
| 196        |          0.5 |
| 246.94     |          0.5 |
| 196        |         0.25 |
| -          |         0.25 |
| 196        |         0.25 |
| 185        |         0.25 |
| 196        |         0.25 |
| 196        |         0.25 |
| 220        |         0.25 |
| -          |         0.25 |
| 196        |         0.25 |
| -          |         0.25 |
| 185        |         0.25 |
| -          |         0.25 |
| 196        |         0.25 |
| -          |         0.25 |
| 246.94     |          0.5 |
| 196        |         0.25 |
| -          |         0.25 |

### Deep Purple - Smoke on the Water (Guitar riff) {#deep-purp}

<YouTubeEmbed id="ikGyZh0VbPQ" />

Once started, your program must play the sequence:

- in the key of G minor[^key] (so the note sequence is D-F-G-D-F-G#-G-D-F-G-F-D)
- at a tempo of 120 beats per minute (this timing is shown in the table below)
- using an audible square wave sound (you can re-use your code from Assignment 1, 
but make sure to note it in the SoO)
- so that it loops forever---i.e. that when the sequence finishes playing, it
  starts again from the beginning (with no interruption to the timing)

[^key]:
    note that this isn't the same key & tempo as the recording---it's been
    specifically chosen to make the note durations nice, round numbers

**Pitch Table:**

| pitch (Hz) | duration (s) |
|-----------:|-------------:|
| 293.66     |         0.25 |
| -          |         0.25 |
| 349.23     |         0.25 |
| -          |         0.25 |
| 392        |          0.5 |
| -          |         0.25 |
| 293.66     |         0.25 |
| -          |         0.25 |
| 349.23     |         0.25 |
| -          |         0.25 |
| 415.30     |         0.25 |
| 392        |          0.5 |
| -          |          0.5 |
| 293.66     |         0.25 |
| -          |         0.25 |
| 349.23     |         0.25 |
| -          |         0.25 |
| 392        |          0.5 |
| -          |         0.25 |
| 349.23     |         0.25 |
| -          |         0.25 |
| 293.66     |         1.00 |
| -          |        0.75* |

* **Note***: a rest of 0.5s is also acceptable / correct

### Part 1 Marks {#part-1-marks}

Marks will be awarded for:

- playing the notes with the [correct pitches (frequency)](#exact-timing-frequency)
- playing the notes at the [correct tempo (timing)](#exact-timing-frequency)
- code structure, readability & modularity (including comments & use of
  functions)

For questions around frequency accuracy, *please read* [this section](#how-close)

Note: there has been an update to the init function that affects the sample plotter, please see 
[this piazza post](https://piazza.com/class/js9iyij0aiy637?cid=278) for information.

## Part 2 (50%) {#part-2}

In Part 2, you get to choose which song you play on your sequencer. Your program
must generate a musical signal which plays indefinitely (either by "looping" or
by coming up with a continuous stream of new notes).

Here are a few ideas, in increasing order of difficulty:

- create a basic generic sequencer to play a different sequence of notes 
  (e.g. a cool bassline that plays a sequence of notes then loops back to the beginning)  
  Note: you **cannot** play any of the songs from part-1 with no changes, please see
  the box [here](#reusing-part-1)

- create a sequencer to play one of the melodies from Part 1 (or some other melody), 
  that can change some aspect of the playback (e.g.
  [tempo](https://en.wikipedia.org/wiki/Tempo), loudness,
  [pitch](https://en.wikipedia.org/wiki/Pitch_(music)),
  [timbre](https://en.wikipedia.org/wiki/Timbre)) continuously over time

- create a sequencer that can play multiple notes simultaneously to
  create [harmony](https://en.wikipedia.org/wiki/Harmony)

- create a sequencer that uses an 
[amplitude envelope](https://en.wikipedia.org/wiki/Envelope_(music)#ADSR) to change 
the "shape" of your notes

- try and create non-pitched (e.g. percussive) sounds to build a drum machine

Marks for Part 2 will be awarded for a 
[**design document**](/resources/05-writing-a-design-document/) describing what
you're doing and how you implemented it in ARM assembly language. This means
that it's ok if you don't do something *super*-complex, what really matters is
how you explain what you've done (although it's worth reading the
[FAQ](/resources/01-faq/#ambition) as well). 
Using images/diagrams in this document to help explain what you've done is 
encouraged*. Your design document must be in **pdf** format (no more than 2 pages) 
with the filename `design-document.pdf` in top-level folder on the `part-2` branch.

*Note: any diagrams you submit must be of sufficient quality for academic writing 
i.e no photos of the screen or hand drawn diagrams, with high quality screenshots as 
the minimum acceptable standard.

Please note that your design document should talk about the sequencer you have created 
and not about the song you have played. If you have chosen a specific song to showcase the 
capabilities of your sequencer then talk about those capabilities and how they are demonstrated.  
For more tips on *how* to write a design document, 
[check out this page](/resources/05-writing-a-design-document/).

## Submission {#submission-process}

### Process

Here's the process for working on & submitting your assignment:

1. fork the [assignment 2 template repository]()

2. clone[^own-fork] & work on *your* fork of the major project repo

3. regularly commit & [push](/resources/01-faq/#push-all-branches) your changes to the GitLab server (ensuring the code
for each section is in their respective branches)

4. the last commits on the `part-1` and `part-2` branches [on the GitLab
   server](/resources/01-faq/#is-it-pushed) 
   (not on your local machine!) *before the submission deadline* will count as 
   your submission

[^own-fork]:
    make sure you clone **your own fork** (i.e. the one with your uni ID in the
    url) to your local machine, not the template (because obviously you aren't
    able to change the template for everyone---GitLab won't let you)

### Checklist {#submission-checklist}

1. the code in my `part-1` branch generates **one** sequence of notes of the 
   songs described in [Part 1](#part-1)

2. the code in my `part-2` branch generates a different sequence as described in
   [Part 2](#part-2) and I've committed my `design-document.pdf` to the repo under 
   the base folder of the part-2 branch as well

3. my `statement-of-originality.yml` files for both Part 1 and Part 2 include
   [all the necessary references/acknowledgements](/resources/01-faq/#statement-of-originality), and *everything* not mentioned in there is my own work

4. [both branches](/resources/01-faq/#push-all-branches) 
   of my completed project have been
   [pushed](/resources/01-faq/#is-it-pushed) 
   to the GitLab server

5. [both branches](/resources/01-faq/#push-all-branches) pass the Gitlab CI test (the pipeline does not fail)

## FAQ

### Part 1

#### Is the setup code (`init` and `BSP_AUDIO_OUT_Play_Sample`) the same as in [assignment 1](/deliverables/01-synth/)?

Yes.

#### How close to the exact frequencies & timings does my sequence have to be? {#exact-timing-frequency}

As close as you can get! You can probably make it *fairly* close without too
much effort, but to get that last bit of precision might require some extra
work.

Having said that, assignment 2 isn't primarily about the base square waveform
(that's what [assignment 1](/deliverables/01-synth/)
was about). In this assignment the most important thing is the way you trigger
the [sequence](#background)---getting the start & stop times of the various
notes right, making sure it loops seamlessly (i.e. that you can tap your foot
along to the sequence, even across the loop boundary).

<a id="how-close">

**You won't lose marks if you've rounded the frequencies to what's achievable in a
whole number of samples** (so you don't have to do multi-cycle period averaging
this time around) but if you're off by more than that you will still lose marks.

Similarly for the timings; if a human, looking at their watch, would agree that
the timings are correct, then that's ok. If the timing is way off, however, then
that's a problem.

However you manage it, make sure your assembly code is still well-organised &
understandable (comments can help a *lot*).

#### Is there a requirement on the dynamic range this time around?

No, although if you look [above](#part-1) it says that the waveform must be
audible---i.e. that a person with normal hearing can hear it comfortably using
headphones. If you use a similar amplitude to what you used for your square
wave in assignment 1 then you'll be fine.

#### If I generate the right sequence of notes, then I get 100% for Part 1, right?

No, that's not how it works. As [described above](#part-1-marks), code structure &
readability are part of the marking criteria as well.

### Part 2

#### I'm not musical---does that mean I can't get a good mark for Part 2?

No---there are heaps of things you can do which don't require musical knowledge.
As always, start thinking about this stuff early, experiment and see what sounds
good to your ears, and ask for help **early** if you get stuck.

The most important thing for Part 2 is that you clearly explain in your design
document what (if anything) is special about the sequence you're generating 
(use pictures!) and how you designed your assembly program (sequencer) to generate 
this sequence.

#### Can I play a song for Part 2?

Yes. [Hooray!](/deliverables/01-synth/#can-i-play-a-song)

#### How can I play my favourite song?

*Note: The sequence you generate in part 2 doesn't have to be a song---there are
lots of ways to make interesting patterns in frequency & time*

A **note** has three basic dimensions: the *pitch*, the *loudness* and the
*duration*. If you want to play a part of your favourite song, you need to find
out the pitch, loudness and duration of each note in the sequence and get your
program to generate those notes, one after the other (potentially with gaps in
between).

Here are a few tips:

- by playing successive notes with slightly different loudness, you can
  create [*accents*](https://en.wikipedia.org/wiki/Accent_(music))

- it's ok to have periods of silence between notes

- the relationship between frequency and the notes on the piano keyboard isn't
  linear, although the relationship between the piano keys
  and [MIDI note numbers](https://en.wikipedia.org/wiki/MIDI_tuning_standard)
  *is* linear, and you can use this handy conversion widget (or write an asm
  function which does the same thing in your program)

#### Can I use the FPU (or some other peripheral on the discoboard we haven't covered in class)?

Your program can use *any* part of the discoboard---as long as it still meets the 
requirements for [part 2](#part-2) and generates the signal you describe in your 
design document. However, if you decide to use any features we haven't yet covered 
(or don't cover at all) in the course (e.g. the floating-point unit, the timers, 
the accelerometer, etc.) then you're on your own to make it work.

If you're up for a challenge then doing that can be a *great* learning
experience, but you need to know what you're getting yourself in for---and you
need to give yourself plenty of time (in case things don't work out as planned).

