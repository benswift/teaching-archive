---
title: "A1: monster"
template_repo: https://gitlab.cecs.anu.edu.au/comp1720/2024/comp1720-2024-assignment-1
hidden: False
deadline: 12 August 2024, 9:00 pm
weighting: 20%
available_marks: "20"
---

In this assignment you will create a monster that moves in p5.js.

Your goal is to make a monster that's **interesting**, **coherent**, and has
**personality**. It should seem like there's a character behind your monster,
that it's more than a bunch of shapes on screen. Think carefully about how
you use colour and shapes to create an interesting and coherent monster.
Think about how you can use movement to communicate personality.

:::info
This isn't meant to be a scary assignment, it's just a chance to get
started with making small works of art in p5. You don't have to be
completely on top of coding yet to have a great submission.
:::

## Outline

- **Due:** {{ page.deadline }}
- **Assignment template:** [available on GitLab (link)]({{page.template_repo}})
- **Specification:** keep reading 🙂
- **Weighting:** {{ page.weighting }}
- **Marked out of:** \_ / {{ page.available_marks }}
- **Submission:** submit your assignment through
  [Gitlab]() ([full instructions
  below](#submission-process))
- **Policies:** no late submissions accepted; this is an individual assessment
- **Rubric:** Please see the relevant assessment task on the class summary for your course:
  - [COMP1720](https://programsandcourses.anu.edu.au/2024/course/COMP1720/Second20Semester/9174#assessmenttask-1)
  - [COMP6720](https://programsandcourses.anu.edu.au/2024/course/COMP6720/Second20Semester/9213#assessmenttask-1)

## Requirements

Your monster submission **must**:

- **be a monster**: it can be biological, mechanical, energy-based, anything, but some kind of **non-human** creature
- **be interesting and coherent:** use what you know about drawing shapes and colours in p5 to make your monster an _artwork_ that grabs the viewer's attention
- **have personality:** it should seem like there's _depth_ and _character_ to your monster, that it's more than a bunch of shapes thrown on the screen.
- **move:** in some way to help engage the viewer, using `frameCount` or other methods.
- **be** an 800x800 p5.js sketch.
- **include** a `monster.png` file (a static image of your monster)
- **include** the code in the usual `sketch.js` file
- **include** [an artist statement](#artist-statement) (max 200 words) describing your artwork
- **include** a `references.md` file with **at least two** references
  - these can be from classmates, artworks, books, online sources, any reference is fine as long as there are two (or more) of them.
  - _anything_ that is not your own work **must** be included in the `references.md` file

You **can** include a background (behind your monster), if you want, but it's not a requirement.

And a few "must nots":

- **must not use `image`**: this assignment is about p5's drawing functions, not using images. Do not use `loadImage` or `image()` in your assignment.
- **must not use sound**.
- **must not use interaction**: this is a dynamic artwork, but not interactive art. No user-interaction allowed.

### The artist statement {#artist-statement}

Your submission **must** include a short (max 200 words) artist statement. This is a
short document, written in the first person, which explains:

- What your artwork is.
- Why it is an artwork.

The artist statement is your chance to tell us what is interesting and artistic about your submission---don't assume that we can guess. It's you chance to explain how and why your work is interesting, coherent, and has personality.

You won't receive a separate mark for the artist statement, but it will be used to judge how successful your submission is as a work of art and your abilty to design and construct a computer-based artwork.

## Getting started

Here's the process for working on the assignment:

1. fork & clone the [assignment 1 repo]()

2. add whatever code you like to make a cool/interesting monster

3. when you run the sketch, hitting `spacebar` will save a still image of the
   sketch (as a `monster.png` file in your Downloads folder)

4. when you're happy with your `monster.png`, copy it into your assignment 1
   folder (this will overwrite the previous version) and commit the new version
   to the repo (and push it up to the [GitLab server]({{site.gitlab_url}}))

:::info
If you're new to Git and you'd like a helping hand, there are some [git help
videos](/resources/04-screencasts/) (from 2018, but still pretty
spot-on) on the resources page.
:::

## Submission process {#submission-process}

1. fork the assignment 1 template repository from the [Gitlab server]()

2. clone[^own-fork] & work on _your_ fork of the assignment 1 repo, regularly
   committing & pushing your changes to the GitLab server

3. at the submission deadline, the latest commit[^branch] [pushed to the GitLab
   server](/resources/01-faq/#is-it-pushed) (not on
   your local machine!) will count as your submission

[^own-fork]:
    make sure you clone **your own fork** (i.e. the one with your uni ID in the
    url) to your local machine, not the template (because obviously you aren't
    able to change the template for everyone---GitLab won't let you)

[^branch]:
    it's the **main** branch which counts as your submission---which is the
    default anyway (if you've just followed all the instructions then you've
    been working on the master branch all along)

:::warning
One thing to note is that there are some "checks" which the GitLab server runs
to help you out. So if you get a **pipeline failed** email, then [have a look at
the FAQ](/resources/01-faq/#gitlab-ci).
:::

### Submission checklist

1. my project satisfies the [requirements](#requirements)

2. my completed assignment has been [pushed to the GitLab
   server](/resources/01-faq/#is-it-pushed), and
   **all** the required files (_your_ versions of `artist-statement.md`,
   `references.md`, `monster.png` and `sketch.js`) have made it to
   the server

3. my `references.md` file includes at least two references, and _everything_ not mentioned in there is my own work

4. i have viewed my submission on the [test URL](/resources/01-faq/#test-url) and it displays correctly

## FAQ

### How do I get started?

The first thing you should do is to fork the repo to your
account, clone it, make very basic monster out of one circle, and push it back to GitLab. Hey, wow! You've started!

After that, try some of these ideas:

- experiment with different shapes to find an aesthetic you like
- experiment with different colours (including transparency) for the
  `stroke()`, `fill()`, `background()` etc. of your sketch
- use the `random()` function to control some aspect of your monster, then run
  it multiple times and save it when it does something that you like
- look in the reference for new functions to use
- don't try to do too much---simple monsters can communicate a lot of personality sometimes.
- pick a small selection of colours and/or shapes and experiment with subtle
  variations of this small set of ideas
- look back at some of the _art theory_ content from the
  [lectures](/_lectures/index/) for inspiration

If you can do that, then you've proved to
yourself that you can submit something (and you'll save yourself some
panic if you don't do that until just before the deadline).

### Does my monster have to be scary?

No, it can be a friendly monster, or an indifferent monster. Any emotional response is fine as long as your work communicates personality.

### Can I change the size/dimensions of the canvas?

No, you need to use a square 800 x 800 canvas as set up by the template: `createCanvas(800, 800)`

### Can I use images or sounds from the internet (e.g. as a background image)? {#using-images}

No.

### Can I use _insert advanced p5 feature here_?

Yes, as long as it doesn't involve using images (see above). We may not be able to help with some advanced p5 and JavaScript that isn't included in the course so far.

### Will I be marked on the `monster.png` image, or the sketch that created it? {#static}

The sketch.

### How do I submit my references & artist statement?

The template repo contains "starter" files for both of these. You should
change these files to put your own content in there, and commit & push the
files up with the rest of your submission.

Basically, _everything_ you need to submit is in that Git repository---as
long as you make the changes in there, commit them and push them up to the
GitLab server then you're all good.
