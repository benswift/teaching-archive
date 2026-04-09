---
title: GitHub repo
summary: "A (public) GitHub repo where you share your project with the world"
date: 2019-02-12
---

![GitHub octocat](./images/github-octocat.png)

## Outline

- **Due date:** Mon 25 Feb (same as the IoT artefact)
- **Mark weighting:** 10 marks
- **Submission:** on GitHub ([full instructions below](#submission-process))

As well as building the [artefact](/deliverables/04-IoT-artefact/), you need to release the source code, parts
list and build instructions for the your artefact on GitHub.

You're part of a global community of hackers & makers, and this is one way you
can share the things you learn in this course. As a bonus, your GitHub profile
is part of your resume these days, so it's a good way to show off your skills to
potential employers.

## Spec

You must create a **public** GitHub project for your
[artefact](/deliverables/04-IoT-artefact/). You can
call the project whatever you like; give it a catchy title.

The exact "shape" of the GH repo will depend on the nature of the artefact
you're building. The main goal of your GitHub repo is to present your IoT
artefact to the world, including all the information required for someone else
to build it for themselves.

## Submission process

You don't have to "submit" your repo somewhere else for marking, we'll just look
at it on GitHub. So as long as you've created it and pushed all your work up
there by the deadline, then you're golden.

## Marking {#marking}

The repo is worth 10% of your total grade.

Here are some of the things we'll consider when assessing your GH
repo[^repo-checklist]. This isn't a checklist; if you do all these things you
don't automatically get 100% for this deliverable. Still, it gives you a sense
for what we're looking for:

[^repo-checklist]:
    This list is based on a list by [Radek
    Pazdera](https://radek.io/2015/11/23/release-checklist/), but modified to
    reflect a more IoT-y type project.

- **documentation**
  - does your [project have a
    `README.md`](https://guides.github.com/features/wikis/#creating-a-readme)?
  - does it clearly say what your artefact _is_ and why people should care?
  - does it include any visual elements? (screenshots, diagrams or videos are
    great to grab people's attention)
  - does it say how to contact you?
  - does it have links to other important documentation?
  - is there an opportunity for others to contribute---and an explanation for
    how they might get involved?

- **software**
  - is there a clear description of the software development environment
    required to build your project (OS, toolchains, etc.), and how to set it up?
  - does it have **complete** instructions on how to build and deploy the
    software for your IoT artefact?
  - have you used Git (good commit hygeine; not just a giant single commit at
    the end) and GitHub (e.g. use of
    [issues](https://guides.github.com/features/issues/) to keep track of
    problems)

- **hardware**
  - is there a list of the required parts (e.g. a _Bill of Materials_) & tools
    to re-create your artefact?
  - are there **complete** instructions on how to configure/build the hardware
    required for your artefact?

- **licensing**
  - does your project include a [licence](https://choosealicense.com/)?
  - is your licence compatible with the rest of the ecosystem?

## FAQ

### What licence can/should I use?

Any open-source licence is fine (consider the issues above). We can discuss the
pros and cons of the various options [on the forum](https://discourse.cecs.anu.edu.au/c/china-study-tour).

### What if I don't have a personal GitHub account?

Then you need to create one.

### What do you mean by "**complete** instructions on how to build and deploy the software/hardware"?

In this context, **complete** means that there are no missing pieces---the
reader shouldn't have to do any sleuthing or reverse-engineering to fill in the
misisng pieces before they can build it themselves. As always, a good diagram is
worth a million words (or something).

It doesn't mean that you have to list all the steps in your documentation in
exhaustive and excruciating detail. For example, if the software toolchain
you're using has some great docs on how to get it set up, it's fine for you to
just say "for documentation on setting up the toolchain, see _link goes here_".
But the reader shouldn't have to guess what toolchain your using and find the
docs themselves.

### When do I have to create the GH project?

The final due date for this deliverable isn't until near the end, and so I guess
in principle you could do all the work somewhere else (e.g. on GitLab or
unversioned on your local machine---yuck!) but since you're gonna have to put it
up on GH in the end then I suggest you create and work on it there from the
start.

### Can I work somewhere else (e.g. GitLab) initially and then push it to GitHub just before the deadline?

Sure, as long as the final GH repo still has the full commit history of your
project. This should happen automatically; when you create and push an existing
repo to a new "host" like GH all the history of the repo is pushed up as well.
Such is the way with _distributed_ version control.

Although I'm not 100% sure why you'd want to do this. Open source software is
gloriously messy, so you shouldn't stress too much about having the "work in
progress" out in the open, no-one will think less of you.

### If I'm working in a pair should we create and push to separate GH projects, or both work on the same one?

You should work on the same GitHub project (either under one of your personal
accounts, or you could create a new GH organisation or something if you'd prefer
to do it that way).

You'll therefore get the same mark for this deliverable as your partner.
