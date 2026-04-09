---
title: Weekly audiovisual diary
summary: Your opportunity to make stuff for inspo and discussion in class.
---

## Outline

- **Due date:**
  - 60sec (solo) or 180sec (group) video submissions due (via GitLab) 11am every
    Thursday in weeks 2--8, 10 (no AVD in week 9 because [demo day](/deliverables/demo-day/))
  - portfolio submissions due 11:59pm ~~March 26~~ March 29 (beginning of week 6) &
    May 14 (week 10)
- **Mark weighting:** 30% total (see [below](#marking))
- **Submission:** submit your videos & portfolio submissions according to the
  instructions below
- **Policies:** for late policies, academic integrity policies, etc. see the
  [policies page](/policies/)

## Description

Your audiovisual (AV) diary is a way to try things, keep track of ideas and
generally develop your creative practice through a series of videos. It's like a
weekly vlog, except that you don't have to say "like and subscribe" at the end.

In this course each week you'll learn about a particular computer music concept
(through our [flipped lectures](/workshops/)), and the
lecture content will include a particular "creative provocation" for you to
respond to in your AV diary entry.

The videos you'll produce aren't just dumb "box-ticking" deliverables,
though---we're going to listen to, play with & discuss the things that you and
your classmates have made _during the [workshop timeslot](/workshops/)_.

## Weekly videos {#weekly-videos}

Remember: the specification & submission instructions for your AV diary are in
two parts---this information relates to the weekly video part.

The "week numbering" for the diary entries can be a bit confusing, especially
because it's a flipped class (where you create your video _ahead_ of the week's
class). Just remember: in week _N_ you submit the diary entry for week _N_, e.g.
in week 2 you'll submit your first AV diary video in response to the
[week 2 provocation](https://comp.anu.edu.au/courses/comp2710-lens/workshops/02-synthesis-1/).

### Specification {#weekly-videos-spec}

Each week's submission must include:

- a 60 second video of your own work exploring the week's theme, which
  - has the filename `week-N.mp4`, `week-N.mov` or `week-N.mkv` (with `N`
    replaced by the week number of the submission date, so the _first_
    submission is `week-2`)
  - is 1920x1080 (full HD) resolution
  - has sound (obviously!)
  - uses one of the [computer music software environments we're covering in this
    course](/resources/tools/#software) (i.e. Pd or Extempore)
  - uses a video and audio codec which is supported by
    [ffmpeg](https://ffmpeg.org)

- all files (e.g. Pd patch files, Extempore source code files, sound files &
  other assets) required to re-produce your submission (in a subfolder called
  `materials`)

- a 200-word reflection on how your work responds to the weekly provocation (as
  a [markdown](https://www.markdownguide.org) file called
  `week-N-reflection.md`)

It doesn't matter how the files are named in your `materials/` folder, but for
the main video & reflection files you must name things exactly as requested
(note the lowercase!) because otherwise they won't play nice with my
scripts---and I've only got a couple of hours turnaround between the submission
deadline and the weekly workshop in the afternoon.

As an example, for week 2 your folder structure should look something like this:

```plaintext
├── week-2
│   ├── materials
│   │   ├── README.md
│   │   └── week-2.pd
│   ├── week-2-refection.md
│   └── week-2.mp4
```

This might seem complicated, but we've created (blank) template files for you in
the GitLab repo---you just need to modify them.

Note: if you're _not_ willing to share your patch files & other materials with
other LENSers, let [Ben](mailto:ben.swift@anu.edu.au) know asap. The default
will be that
[everyone's patch files will be shared](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/2021-av-diary-materials)
(just within this LENS cohort).

### Submission process {#weekly-videos-submission-process}

You must submit your 60sec (or 180sec for group AVD weeks) video and associated
files by Thursday 11am every week (from weeks 2--9 inclusive) through
[GitLab](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/2021-av-diary-submissions).

If you're familiar with git & GitLab, then you can do this however you like---as
long as the video & reflection document is pushed to GitLab before the
submission time.

If you're new to this sort of thing, here are a couple of walkthrough videos of
me using [VSCode](https://code.visualstudio.com) to edit the
`week-2-reflection.md` file, commit the `week-2.mkv` video file and push it to
GitLab. If there's any language in there that's not familiar that's completely
ok---hit us up on Teams to ask questions, we'd love to help you out.

#### How to fork the project

#### How to add your video & reflection document & push it to GitLab

### Tips on making a good weekly video

1. small & focussed is ok---you don't have to build a huge thing every week

2. think deeply about the provocation: brainstorm 10 ideas, try out 3 of them,
   pick the best 1 (this will help with the "small & focussed" aspect as well)

3. you don't have to record it all in one take---you can record several
   screencasts and cut together the best bits

4. think about the layout of your patch (font size, object positions, comments,
   etc.) to make sure it's going to be interesting _viewing_ (as well as
   listening)

5. if you saw something interesting in a classmate's video the previous week,
   ask them (on Teams) how they did it

6. have a look at the ["screen recording software" section of the Tools page](/resources/tools/#screen-recording-software)

### Tips on writing a good weekly reflection

1. it's ok to mention the inspiration (either an abstract concept, or a specific
   thing you saw/listened to) for your work

2. don't spend too much time on the _what_ (we can watch the video for that),
   talk more about the _why_

3. discuss any particular challenges or tensions you felt between competing
   ideas/priorities (if there were any)

4. don't overthink it---it's only 200 words

## Portfolio {#portfolio}

Remember: the specification & submission instructions for your AV diary are in
two parts---this information relates to the **portfolio** part (due in weeks
~~5~~ 6 & 10 only).

### Specification {#portfolio-spec}

Even though you submit something every week, you won't receive a mark each week.
Instead, you'll be marked through two "portfolio" submissions:

- a 1000--1500 word document due on ~~March 26~~ March 29 (beginning of week 6)
  which covers AV diary entries for weeks 2--5

- a 1000--1500 word document due on May 14 (end of week 10) which covers AV
  diary entries for weeks 6--10 (there was no week 9 AVD because of demo day,
  but you can reflect on your demo day presentation in the portfolio)

Each document must articulate your combined (and edited) reflections on your AV
diary submissions for the specified weeks, explaining how each one explored the
theme and creative criteria for that week. Include figures, screenshots, and
code excerpts in your documents as necessary. You do not need to re-submit the
videos---we have them already from your [weekly submissions](#weekly-videos).

The purpose of this portfolio is to tell a story about how you (both as an
individual and a group member) have explored the key music computing concepts
through your AVD submissions. Don't just give us a week-by-week description of
what you submitted each week---draw out "common threads", tell us why you chose
to respond to the provocations in the way you did, and show us your development
as a LENS member and computer musician through these AVD submissions.

You can (and are encouraged to) include diagrams, screenshots, even links to
videos, as long as they help you tell a coherent story (i.e. don't just dump a
bunch of screenshots in there because it makes it look fancy).

### Submission process

Submit each document (in markdown or pdf format) through
[GitLab](https://gitlab.cecs.anu.edu.au/laptop-ensemble/2021/2021-av-diary-submissions)
by 11:59pm on the due date.

### Marking criteria {#marking}

Each stage of your portfolio is worth 15% of your total mark, and will be
assessed entirely based on the submitted document. The marking criteria (based
on the [course learning outcomes](/outline/)) are:

- demonstration of the fundamental concepts in computer music covered in the
  course including digital synthesis, algorithmic composition and musical
  interface design

- reflection on the design and performance challenges associated with computer
  music interfaces (including ensemble performance aspects in the case of the
  group AVDs)

- engagement with the weekly provocations and specifically how they shaped your
  AV diary submissions

- clarity of communication, overall narrative structure of the portfolio (i.e.
  does it read like a cohesive document, or just like 4x 200-word reflections
  copy-pasted together?)

- adherence to the [spec](#weekly-videos-spec) &
  [submission deadlines](#weekly-videos-submission-deadlines) for the weekly
  videos
