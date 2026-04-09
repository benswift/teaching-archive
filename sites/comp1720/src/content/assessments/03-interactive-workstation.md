---
title: "A2: workstation"
template_repo: https://gitlab.cecs.anu.edu.au/comp1720/2024/comp1720-2024-assignment-2
hidden: False
deadline: 02 September 2024, 9:00 pm
weighting: 20%
available_marks: "20"
---

In this assignment you will create an interactive workstation in p5.

The world is full of _workstations_. These can be real (your messy desktop), imagined ([spaceship control panels](https://en.wikipedia.org/wiki/LCARS)), fun ([baby activity centres](https://www.amazon.com.au/Fisher-Price-Activity-Entertainer-Toddlers-HBM26/dp/B096Y39PZX)), serious ([air traffic control](https://en.wikipedia.org/wiki/Air_traffic_control#/media/File:Potomac_Consolidated_TRACON.jpg)), creative ([painter's studio](https://unsplash.com/photos/xSMIuUDMMSY)), or boring ([checkout cash register](https://en.wikipedia.org/wiki/Cash_register#/media/File:HomeDepotPinOakHoustonselfcheckout.jpg)). All of these workstations have a variety of objects that humans _interact_ with to accomplish some kind of task.

You goal in this assignment is to create some kind of interactive workstation in p5 that's **engaging**, **coherent**, and **rewarding** to use. The objects in your workstation should fit together in some kind of clear theme. There should be interactive elements in your workstation so that clicking or moving the mouse causes a response in your sketch. You will need to carefully design your interactions and the responses to create an artwork that _engages_ the viewer in interaction and _rewards_ their attention with a deeper understanding or enjoyment.

## Outline

- **Due:** {{ page.deadline }}
- **Assignment template:** [available on GitLab (link)]({{page.template_repo}})
- **Specification:** keep reading 🙂
- **Weighting:** {{ page.weighting }}
- **Marked out of:** _ / {{ page.available_marks }}
- **Submission:** submit your assignment through
  [Gitlab]() ([full instructions
  below](#submission-process))
- **Policies:** no late submissions accepted; this is an individual assessment
- **Rubric:** Please see the relevant assessment task on the class summary for your course:
   - [COMP1720](https://programsandcourses.anu.edu.au/2024/course/COMP1720/Second20Semester/9174#assessmenttask-2)
   - [COMP6720](https://programsandcourses.anu.edu.au/2024/course/COMP6720/Second20Semester/9213#assessmenttask-2)

## Requirements

Your workstation submission **must**:

- **be a workstation**: it can be real, imagined, electronic, natural, mechanical, fun, serious, creative, or anything else as long as it's a collection of objects that an entity interacts with to accomplish a task
- **be interactive:** the viewer should be able ot interact with the workstation using the keyboard and mouse, this could mean triggering animations, changes in the workstation or "doing" the work task the work task 
- **be engaging and coherent:** use what you know about drawing and interaction in p5 to make your workstation an _artwork_ that grabs the viewer's attention and demands exploration
- **be rewarding:** exploring and interactive with your artwork should be a rewarding experience for the viewer who should gain a deeper understanding of your workstation through interaction
- **be** an 1280x800 p5.js sketch
- **include** a `thumbnail.png` file (a static image of your workstation)
- **include** the code in the usual `sketch.js` file
- **include** an artist statement (max 200 words) describing your artwork (see below)
- **include** a `references.md` file with **at least two** references
   - these can be from classmates, artworks, books, online sources, any reference is fine as long as there are two (or more) of them.
   - _anything_ that is not your own work **must** be included in the `references.md` file

And a few "must nots":

- **must not use `image`**: again, we want you to focus on p5's drawing functions, not using images. Do not use `loadImage` or `image()` in your assignment.
- **must not use sound**: we haven't studied sound and music computing yet, wait until we have taught you the basics before trying to use sound.
- **must not use camera, microphone or other sensors** for interaction, just the keyboard and mouse. 
- **must not be a game**: the specification is for an interactive workstation artwork, not a "workstation-themed game". If your artwork involves a "score" or a concept of winning or losing, you may actually be making a game.

### The artist statement

Your submission **must** include a short (max 200 words) artist statement. This is a
short document, written in the first person, which explains:

- What your artwork is.
- How your artwork is rewarding to the viewer.

The artist statement is your chance to tell us what is interesting and artistic about your submission---don't assume that we can guess. It's you chance to explain how and why your work is engaging, coherent, and rewarding.

You won't receive a separate mark for the artist statement, but it will be used to judge how successful your submission is as a work of art and your abilty to design and construct a computer-based artwork. 

## Getting started

Here's the process for working on the assignment:

1. fork & clone the [assignment repo]()

2. add whatever code you like to make a cool/interesting workstation

3. when you run the sketch, hitting `spacebar` will save a still image of the
   sketch (as a `thumbnail.png` file in your Downloads folder)

4. when you're happy with your `thumbnail.png`, copy it into your assignment 
   folder (this will overwrite the previous version) and commit the new version
   to the repo (and push it up to the [GitLab server]({{site.gitlab_url}}))

:::info
If you're new to Git and you'd like a helping hand, there are some [git help
videos](/resources/04-screencasts/) (from 2018, but still pretty
spot-on) on the resources page.
:::

## Submission process {#submission-process}

1. fork the assignment template repository from the [Gitlab server]()

2. clone[^own-fork] & work on *your* fork of the assignment 1 repo, regularly
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
   **all** the required files (*your* versions of `artist-statement.md`,
   `references.md`, `thumbnail.png` and `sketch.js`) have made it to
   the server

3. my `references.md` file includes at least two references, and *everything* not mentioned in there is my own work

4. i have viewed and tested my submission on the [test URL](/resources/01-faq/#test-url) and it displays / works correctly

## FAQ

### Can I change the size of the canvas?

No, you need to use a rectangular 1280 x 800 canvas as set up by the template: `createCanvas(1280, 800)`

### The `thumbnail.png` has a different resolution than the canvas size - what can I do?

Try adding `pixelDensity(1)` at the beginning of `setup()`. See [the reference](https://p5js.org/reference/p5/pixelDensity/) for details and ask on the forums if you need help.

### Can I use images or sounds from the internet? {#using-images}

No.

### Can I use *insert advanced p5 feature here*?

Yes, as long as it doesn't involve using images (see above). We may not be able to help with some advanced p5 and JavaScript that isn't included in the course so far.

### How do I submit my references & artist statement?

The template repo contains "starter" files for both of these. You should
change these files to put your own content in there, and commit & push the
files up with the rest of your submission.

Basically, *everything* you need to submit is in that Git repository---as
long as you make the changes in there, commit them and push them up to the
GitLab server then you're all good.

