---
title: "Major project"
summary: "this is the big one"
template_repo: https://gitlab.cecs.anu.edu.au/comp1720/2024/comp1720-2024-major-project
hidden: False
deadline: 28 October 2024, 9:00 pm
weighting: 40%
---

A p5.js artwork for our class, and your biggest challenge yet.

Your major project is an **interactive** p5 artwork for an
interactive media art exhibition. Here's the scenario: gallery attendees are
able to walk around and observe the various works (including yours) at their
leisure. If they wish, they can pause at your sketch and interact with it, but
they will receive no additional guidance/instruction on what to do. Your goal
is to provide an **engaging** and **coherent** viewer experience of _roughly_
three minutes, but the exact nature of that experience is up to you.

Each year we have a different _major project theme_. This year's theme is:

> **Entangled Realities**

Your work **must** reflect the major project theme in a meaningful way. It's up
to you to decide how the theme is incorporated into your work and we expect
every student to have a unique concept for their major project. You will
explain how you want viewers to perceive the theme in your artist statement.

:::info
While your interpretation of the theme is ultimately up to you, your tutors
are your best resource for discussing and refining your specific take.
Make sure you attend the labs and take time to discuss with your tutors
about this!
:::

## Outline

- **Due:** {{ page.deadline }}
- **Assignment template:** [available on GitLab (link)]({{page.template_repo}})
- **Specification:** keep reading 🙂
- **Weighting:** {{ page.weighting }}
- **Submission:** submit your assignment through
  [Gitlab]() ([full instructions
  below](#submission-process))
- **Policies:** no late submissions accepted; this is an individual assessment
- **Rubric:** Please see the relevant assessment task on the class summary for your course:
  - [COMP1720](https://programsandcourses.anu.edu.au/2024/course/COMP1720/Second20Semester/9174#assessmenttask-4)
  - [COMP6720](https://programsandcourses.anu.edu.au/2024/course/COMP6720/Second20Semester/9213#assessmenttask-4)

## Requirements

Your major project **must**:

- **relate to the [theme](#theme)** in a meaningful way
- **be interactive:** the viewer should be able to interact with the artwork using either the keyboard, mouse, microphone, camera, or some combination of those input devices
- **be engaging and coherent:** use what you know about drawing and interaction in p5 to make your submission an _artwork_ that grabs the viewer's attention and demands exploration for _roughly_ three minutes
- **use interaction to enhance experience:** this means that interacting with your work reveals aspects that are not available without interaction, and that deeper interaction leads to more engaging experiences
- **be** a p5.js sketch that takes the whole browser window and works smoothly at the [test URL](/resources/01-faq/#test-url).
- **use** fractions of `width` and `height` for drawing and interaction
- **include** a `thumbnail.png` file (a static image of your submission)
- **include** the code in the usual `sketch.js` file
- **include** an artist statement (max 300 words) describing your artwork (see below)
- **include** a `references.md` file with **at least two** external references and any self references (see box below)
  - these can be from classmates, artworks, books, online sources, any reference is fine as long as there are two (or more) of them.
- **include** a [recent developments file](#recent-developments) if you are a **COMP6720** student

:::warning
Because this assignment is allowing you include external assets
which you may have made yourself, we need you to be clear about this
and **include** entries in your `references.md` file for **all** assets
that you use, _including ones that you have made yourself_ (make sure you state that you are the source for assets created by you). This is so
that there is no confusion when it comes time to mark on whether the
asset was sourced externally, or if you have created it yourself.
:::

<a id="must-nots" />
And a few **must nots**:

- **must not include image files** _unless_ you have created them yourself (e.g., with a camera or digital art software), or they come from [unsplash.com](https://unsplash.com)
- **must not include sound files** _unless_ you have created them yourself (e.g., with the record function on your phone), or they come from [freesound.org](https://freesound.org)
- **must not be a game**: the specification is for an interactive artwork, not an "art-themed game". If your artwork involves a "score" or a concept of winning or losing, you may actually be [making a game](/resources/07-games/).
- **must include references** for any image or sound files that you include (even if you created them yourself).

And one _can do_:

- **can** include an `instructions.md` file to provide any instructions that you want us to see when viewing your artwork.

### The artist statement

Your submission **must** include a short (max 300 words) artist statement. This is a
short document, written in the first person, which answers the questions:

- How would you like viewers to perceive the major project theme in your work?
- How does interaction enhance the viewer's experience?

The artist statement is your chance to explain how interaction enhances the
viewer’s experience of the theme in your submission---don’t assume that we can
guess.

You won’t receive a separate mark for the artist statement. It is considered as
part of your whole submission. The artist statement is used to help evaluate
your ability to design and construct an interactive artwork in line with the
major project specification.

### The recent developments file (COMP6720 **only**) {#recent-developments}

If you are a student enrolled in COMP6720, then as an additional task you _must_
explain how your artwork reflects recent developments in Art and Interaction Computing
in your `comp6720-recent-developments.md` file (max 200 words).

If you enrolled in COMP**1720**, you don't have to do anything with this file.

### The instructions file {#instructions-file}

Your submission includes an `instructions.md` file. This file is  
optional and is for you to add any instructions that
you want us to see when viewing your artwork.

Some example instructions might be:

- This artwork requires a webcam.
- Use the arrow keys to control the evolution of the universe in the artwork.
- Press "r" to restart the artwork at any time.

We generally expect the instructions file to be a list of short
instructions. You might use this file to explain a complex interaction or to
tell us about hidden sections in case we miss them.

In general, viewers should be able to figure out how to interact with your
artwork without this file. However, for the purpose of marking and ensuring
that we see all aspects of your submission then this file can be filled out as
you see fit.

## Submission process {#submission-process}

1. fork the major project template repository from the [GitLab
   server]()

2. clone[^own-fork] & work on _your_ fork of the major project template repo,
   regularly committing & pushing your changes to the GitLab server

3. at the submission deadline, the latest commit[^branch] [pushed to the GitLab
   server](/resources/01-faq/#is-it-pushed) (not on
   your local machine!) will count as your submission

[^own-fork]:
    make sure you clone **your own fork** (i.e. the one with your uni ID in the
    url) to your local machine, not the template (because obviously you aren't
    able to change the template for everyone---GitLab won't let you)

[^branch]:
    it's the **master** branch which counts as your submission---which is the
    default anyway (if you've just followed all the instructions then you've
    been working on the master branch all along)

:::warning
One thing to note is that there are some "checks" which the GitLab server runs
to help you out. So if you get a **pipeline failed** email, then [have a look at
the FAQ](/resources/01-faq/#gitlab-ci).
:::

### Submission checklist {#submission-checklist}

1. my project satisfies the [requirements](#requirements)

2. my completed project has been [pushed](/resources/01-faq/#is-it-pushed) to the `main` branch of my fork on the
   GitLab server, and **all** the [required](#requirements) files (including
   any [assets](#must-nots)) have made it to the server

3. my `references.md` file includes at least two external references, as well as references for external files that I have created, and _everything_ not mentioned in there is my own work

4. (if I am a **COMP6720** student) I have completed the [recent developments file](#recent-developments).

5. my sketch works when viewed in Chrome/Chromium at the
   [test URL](/resources/01-faq/#test-url)
   (<https://comp1720.cecs.anu.edu.au/uXXXXXXX/comp1720-2024-major-project/>, with
   `uXXXXXXX` replaced with your UID)

## FAQ

Here's some frequently asked questions. Remember that there is lots of information about the major project in lectures and labs from week 9 onwards. Read it all!

### Can I write more than the word limit?

No. If either your artistic statement or [recent developments](#recent-developments)
statement are more than 10% over the word limit, you will start to lose marks.

### Can I get feedback on how my major project is going?

The lab sessions from week 9 onwards are **all about your major
project**. You could also ask a question on the [COMP1720 forum]({{site.forum.url}}) using the `major-project` tag.

### Can I use stuff from previous assignments?

You won't get marks for it, and if it isn't referenced it is a breach of academic integrity.

### Will my major project be public? {#public-visibility}

Yes---as we've said all along, the major project will in an online exhibition using the test server URL,
so your work will be visible to the public.

If you want to opt out of the exhibition---just message us on the forum. I
hope that you won't opt out, because exhibiting your work is a crucial part of
being an artist, and is also pretty fun. Make something that you're proud of
and show it off.

### My sketch works on my machine, but when I use the test URL it can't find the assets? {#cant-find-the-assets}

As it says in the `/images/README.md` file in the template repo:

> This folder is where you should put any assets (e.g. image files, audio files)
> which you use in your sketch. Make sure you commit the asset file in git
> (otherwise it won't get pushed to the server, so it won't work at the test
> URL)

The reason for this is that the [CI job](/resources/01-faq/#gitlab-ci) which copies your files to the test URL
server (by default) uses this command:

    cp -r assets *.html *.js $DEST_DIR

If you're familiar with the `cp` (copy) command you can see that it copies three
things:

1. `assets`: the whole `assets` folder
2. `*.html`: _any_ file with a `.html` file extension in the top-level of the project
3. `*.js`: _any_ file with a `.js` file extension in the top-level of the project

If you've got files somewhere else, then they won't get copied to the test URL
server, and so your sketch won't work.

At this point, you've got two options:

1. move your files (e.g. any assets not in the `assets` folder) so that they
   _do_ get copied by the script (you'll have to update the paths in your sketch
   as well)
2. modify the script so that it copies the files that currently "misses"

Both options are fine---although if you're not familiar with the command line
and `cp` command then you might find the first option easier.

Finally, if you're going to modify the `.gitlab-ci.yml` file then [have a look
at the FAQ](/resources/01-faq/#can-i-modify-the-gitlab-ci-yml-file).
