---
title: Frequently Asked Questions
summary: Some questions which come up, well... frequently
---

This is the page with the answers to your questions, well, as long as they have been frequently asked.

## Getting started {#getting-started}

### What do I need to do when I _start_ the course? {#course-start-checklist}

Here's a checklist:

1. make sure you can log in to [the forum]({{site.forum.url}})

2. read the course [policies page](/policies/)
   carefully

3. sign up for a lab group on MyTimetable

4. attend your [week 1 lab](/labs/01-intro/)

### What's expected of me in this course?

0. attend all lectures and labs and engage with all learning activities

1. watch & ask questions on [the forum]({{site.forum.url}})

2. read the weekly lab material _ahead of time_, complete pre-lab tasks and attend your scheduled lab
   session

3. start the assignments _early_

4. ask questions (in lectures, during labs and on [the forum]({{site.forum.url}})) if you don't understand anything---there are no silly questions in this course.

### I need a permission code to enrol, can I have one? {#permission-code}

Please see the instructions and application form for permission codes
on [this
page](https://cecs.anu.edu.au/current-students/policies-and-resources/enrolling-cecs-courses).
Applications for late enrolment after **Monday of Week 2** are not
accepted.

### Is there a textbook for this course?

The "official" textbook for this course is "Make: Getting Started with
p5.js" which is available online through the ANU Library
([link](https://tinyurl.com/yxl6dobh)) so you don't have to buy
anything.

We have several other online books also available through the [books
and links](/resources/03-books-links/) page.

### What programming language will I use in this course?

You'll write JavaScript code to run in the web browser using the `p5.js` framework. There's more info on the
[software setup page](/resources/02-software-setup/).

## Assignments {#assignments}

### How do I check if my submission has been pushed to the GitLab server properly? {#is-it-pushed}

You can check through the [GitLab website]({{site.gitlab_url}}). Look at the
GitLab page for **your fork** of the assignment repo: the files shown there are
the ones we'll mark.

If the files you want us to mark aren't there, that might be because:

1. you haven't added that particular file to git yet
2. you might have committed the files to git locally, but not pushed them to gitlab

Whatever the reason, only the files on the GitLab server count as your
submission. Any other files will not be marked. No exceptions.

If you need a refresher, then [lab 1](/labs/01-intro/) is probably a good place to look.

### What's the COMP1720 test URL? {#test-url}

Every time you push your code to GitLab for the [labs](/labs/) or [assessments](/assessments/) the latest version will also be visible at the
following URL (with `uXXXXXXX` replaced by your own uni ID and
`major-project` replaced by e.g. `assignment-3` or `labs` depending on which
project you're actually trying to look at):

<https://comp1720.cecs.anu.edu.au/uXXXXXXX/comp1720-2024-major-project/>

This is helpful for a few reasons:

1. you can check that your commits have been pushed to GitLab successfully

2. you can see that it works correctly (and that you're not having any "only
   works on my machine" issues)

3. if you like, you can send the link around to share it with others

This is exactly what you did all the way back in lab 1 when you [put a circle on
the internet](/labs/01-intro/#pushing).

### Why is the `comp1720-2024-s2-marker` user listed as a member on my repo?

This user is added automatically when you fork the template repo. It's there so
that we can mark your submission and upload your feedback.
Don't remove this user (even after the assignment deadline is passed).

### What visibility settings should my assignment repo have?

_Your_ fork of the assignment repo must have visibility set to
**Private**. You can check the current visibility status in _Settings_ >
_General Settings_ > _Visibility, project features, permissions_.

## `references.md` {#references}

### What needs to go in my `references.md`?

The short answer is: _everything that you didn't create yourself_.

Here are a few examples of places you might have taken
code/images/music/words/videos/ideas from: other students, lectures, lab
content, videos online, tutorial websites, books, artworks.

If you're unsure, check with your tutor or ask on the [forum]({{site.forum.url}}). In general if anybody asks "should I cite this?" on the forum, the answer is "YES!"

### What reference style should I use? {#what-style}

We use ACM reference style in this course: <https://www.acm.org/publications/authors/reference-formatting>

See below for an example.

### Will I lose marks if I incorporate stuff from others in my own work?

You are marked on your original contribution to your artwork, so if you ONLY use code/assets you have found on the internet, without adding any of your own ideas, you won't get many/any marks for your work.

A better approach would be to take _inspiration_ from something on the web, and use it in an original and creative way. You could get a great mark this way.

### Do I have to be specific about which files I've copied/taken inspiration from?

Yes. You need to specifically specify every source in your references.

### What if base my submission on someone else's code, but I've made changes?

You are not likely to get a good mark with this approach. In any case, you
**must** credit the original author, even if you've made
non-trivial changes. Otherwise, it's plagiarism---even though you've done
some of your own work as well.

### Do I have to reference images/music/words/videos from the internet as well as code? {#reference-images-assets-or-just-code}

Yes.

### What happens if I don't change the references file from the version in the template?

1. The assignments _require_ you to inlude some references, so you will lose marks.

2. If you have included code/images/text that you did not create in your assignment, you may end up involved in a academic integrity case.

### Can I see an example of a completed `references.md`? {#references-example}

```markdown
# References

- [1] Alice McGuffing. 2023. Ideas for creating the animated ripple effect
- [2] Jerry Wang. 2023. Background Artwork (artwork.jpg)
- [3] Howzit (StackOverflow user). 2018. p5js-image-array (CC BY-SA 2.5). Retrieved from: https://stackoverflow.com/questions/51233447/p5js-image-array
- [4] p5 Reference. No Date. MouseWheel Example (CC BY-NC 4.0). Retrieved from: https://p5js.org/reference/#/p5.Element/mouseWheel
- [5] Scott Bauer. 2004. Photo of Potatoes (Public Domain). Retrieved from: https://en.wikipedia.org/wiki/Potato#/media/File:Patates.jpg
- [6] Aaron Wu. 2018. Boat Photo on Unsplash. Retrieved from: https://unsplash.com/photos/_8rjlHwN4uk
- [7] Wikipedia. 2022. J M W Turner Article. Retrieved from: https://en.wikipedia.org/wiki/J._M._W._Turner
```

## Forum/message board

### Where's the class forum/message board? {#where-is-the-forum}

In we use [{{site.forum.name}} as the main point of contact]({{site.forum.url}}).

### I can't access the forum---what should I do? {#I-cant-access-the-forum-what-should-i-do}

We will periodically add people to the forum in the lead-up, and early days of the course. However if you feel you have been missed out then [email the convener](mailto:{{site.contacts.page_contact.email}}) about it.

### How can I manage my email preferences? {#discourse-email-preferences}

[You can find the Ed notification settings here](https://edstem.org/au/settings/notifications).

### How do I ask a question anonymously? {#anonymous-posting}

When posting a question, simply tick the 'Anonymous' box.

:::warning
Anonymous posts only make you anonymous to other students, instructors will still be able
to tell who you are.
:::

### How do I ask a question privately? {#private-posting}

When posting a question, simply tick the 'Private' box.

:::warning
Private posts are visible to all teaching staff (tutors, lecturer(s) and convener). If
you have a sensitive matter and only want the convener to see it, then [email the convener](mailto:{{site.contacts.page_contact.email}}) about it instead.
:::

## GitLab Continuous Integration (CI) {#gitlab-ci}

### What's continuous integration?

Continuous Integration (CI) is just a fancy name for a bunch of commands which
are executed on the GitLab server every time you successfully push a new commit
to your repository. This can be used to do all sorts of things, for example to
check that you haven't forgotten to commit a file (e.g. `thumbnail.png`), or to
copy all your files (html, js and the whole assets folder) somewhere so you can
visit your sketch at the [test URL](#test-url). These commands are called "CI
jobs".

### Why am I getting "Pipeline #xxxx has failed..." emails from GitLab? {#ci-checks}

In this course we've enabled GitLab's [Continuous Integration
(CI)](https://gitlab.cecs.anu.edu.au/help/ci/quick_start/README.md) feature.
This means that every time you push to your fork of the GitLab template repo,
the GitLab server will check things like:

- your files are present and have content in them

- your wordcount of things like artist statements

- your code "compiles"

This isn't a guarantee of the "correctness" of your submission (it doesn't
actually run your code), it's a just a checklist of the very basic things your
code must do (like compile successfully).

### So if all the CI tests pass, do I get 100% for the assignment?

No. It just checks the "[bare minimum](#ci-checks)", that your
assignment is valid and the most important components are in place.

### Should I be worried if my submission fails the [CI checks](#ci-checks)?

Not initially. What you need to do is have a [look at what has
failed](#ci-results-web-interface) and make sure that you're working towards
fixing them up. As the submission deadline approaches and you finish off your
assignment you should see fewer and fewer failures.

### How long does my CI job take to run?

Most CI jobs take less than one minute to run. However, there are a lot of
students in the course, and we've only got a limited number of servers to run
the CI jobs on, so it's quite likely that your job won't start straight away if
the servers are already busy.

Your CI job goes into a queue and will run as soon as possible. So if a lot of
people are pushing (e.g. if it's close to the deadline) then you might have to
be a bit patient.

### If the CI job takes ages to run, does that mean my code hasn't been accepted before the deadline?

No. The CI checks are just there to provide helpful feedback to you---they have
no impact on whether your code is submitted (or the time of submission). The
submission time is based only on the timestamp when GitLab receives your push.

### Can I see whether my submission passes the CI checks through the GitLab web interface? {#ci-results-web-interface}

Yes. Go to the web interface for your repo, and click on "CI / CD" in the
sidebar. You'll see a view which gives you info about the last CI run (which
should have happened last time you pushed).

### I'm sick of getting these CI emails, can I disable them?

Yes---if you want to disable this email notification, go to your account setting
in GitLab (click on your profile picture, then select _Notifications_). Change
the notification level of your assignment repo to "Custom", then in the pop-up
window de-select "Failed pipeline".

### Can I modify the `.gitlab-ci.yml` file? {#can-i-modify-the-gitlab-ci-yml-file}

Yes, if you like. Although it won't have any effect on your grade and may cause issues with our marking procedure, so I wouldn't unless you have discussed this with the course convenor.

## git {#git}

### I can't access GitLab---what should I do? {#I-cant-access-gitlab-what-should-i-do}

The [COMP1720 GitLab server]({{site.gitlab_url}}) is part of the official CECS
teaching infrastructure, so you can ask for help at the CECS Teaching & Learning
support office (N117) on the ground floor of the CSIT building.

That's the place you need to go for help, because we don't administer the GitLab
server ourselves (and can't easily give you access, fix issues etc).

### What _is_ git? {#what-is-git}

[git](https://git-scm.com) is a version control program, which means that its
job is to help you take "snapshots" of your files as you work on them. If you've
ever had to manually make "Save As..." copies of something (e.g. a Word
document) with `-version-1`, `-version-2`... suffixes, you've used "version
control" (a ghetto version of it, anyway). git is just a program to do this sort
of thing automatically---to easily make (and keep track of) a bunch of snapshots
of the files in a directory over time.

### Do you have any videos demonstrating how to use git?

Absolutely, we've made a series of [screencasts explaining exactly how to use git and gitlab for this course](/resources/04-screencasts/).

### Am I expected to know how to use git before I start this course? {#am-i-expected-to-know-how-to-use-git}

No, we'll walk you through it---and there will be **plenty** of help in working
on and submitting your assignments as long as you reach out ahead of time.

If you're not a CS student and you're freaking out about this, then please let
us know on the course forum. I'm happy to run extra labs give extra support if
you think you're gonna need it. Again, there's heaps of help available, just
let me know so that we can help you out.

### Can I submit my assignments some other way, e.g. by emailing them to you? {#can-i-submit-my-assignments-some-other-way}

No---no special cases, no exceptions. Sorry, it's the only way to run a course
of this size.

### What's the difference between git & GitLab?

[git](https://git-scm.com) is a program (like Microsoft Word) for keeping track
of files (see [what _is_ git?](#what-is-git) above). The [GitLab server]({{site.gitlab_url}}) is a website (running on a computer at the ANU) which uses
git to keep track of your snapshots somewhere other than your own computer. The
GitLab server never adds any new files to your snapshots, it just keeps track of
the changes (commits) you've made once you push them to the server.

So git is the program, and GitLab is the website, although you can interact with
the website both directly (e.g. with a `git push`) or indirectly (through the
GitLab user interface in the web browser).

### I cloned the "template" repository by mistake instead of my own fork---what do I do?

It's ok. You just need to change the remote (the repository on the GitLab server
which your local copy of the files "points" to when it tries to push them back
up to the server).

### Do I have to type in my password all the time? {#setting-up-ssh-keys}

No, if you set up SSH keys then you can do all the git stuff without having to
put in your password. This step isn't necessary, but it is super-handy.

The basic idea is this: when you have trusted friends, you leave a key out for
them so that they can get in to your house when you're not home. git allows you
to do _sortof_ the same thing.

This is so that the GitLab server knows that it's you (you don't want someone
else submitting something on your behalf). Added bonus: no more passwords.

- [SSH key generation (Git*Hub* docs, but still useful)](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
- [GitLab SSH key setup](https://docs.gitlab.com/ce/ci/ssh_keys/README.html)

## Markdown {#markdown}

### What's markdown?

From the [commonmark website](http://commonmark.org/help/):

> Markdown is a simple way to format text that looks great on any device. It
> doesn’t do anything fancy like change the font size, color, or type — just the
> essentials, using keyboard symbols you already know.

[This tutorial](http://commonmark.org/help/tutorial/) takes you through the basics.

### How do I write markdown?

Anytime you open a file in [VSCode](/resources/02-software-setup/#vscode) with a `.md` or `.markdown` file
extension it'll automatically detect that it's a markdown file, and give you
special highlighting of bold/italics/headings etc. You just write it and save it
(and [commit it](#what-is-git) to Git) just like any other file.
