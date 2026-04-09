---
author: Harrison Turton
date: 2019-01-25
title: Meshlight
description:
week: 9
---

I had a great discussion with my partner, and finally got Rust working on the discoboard!

## Small Rust fixes

*Since writing this, I opened an [issue](https://github.com/rust-embedded/book/issues/118) on the [Rust embedded github](https://github.com/rust-embedded/book). Within a few hours,
they'd created a [pull request](https://github.com/rust-embedded/book/pull/119) fixing the Mac-specific errors. Fantastic support!*

To get Rust running on our COMP2300 Discoboard, follow [Tims detailed blog post](https://cs.anu.edu.au/courses/china-study-tour/news/2019/11/01/Tim-Rust-Discoboard-guide/). If you are using a Mac, however,
the brew instructions in the embedded rust ebook are quite outdated. Instead of simply running:

```
$ brew cask install gcc-embedded-arm
```

You need to manually download the binaries for the GCC toolchain from [this website](http://www.rau-deaver.org/MacEmbeddedLinks.html). Check
the links under **GNU Tools for ARM Embedded Processors**.

Decompress it, put it somewhere convenient, and add the `/bin` folder to your `PATH`. Voila! It works. Simply run:

```
$ cargo build && cargo run
```

To flash your code onto the discboard.

## Core functionality

We made concrete decisions on the *core* functionality of our artefact, and also enumerated some "stretch goals" if progress is going well:

### Core Functionality

* Animated LED strips
* Buttons for turning on/off each node (could potentially just unplug them)
* Routing algorithm
* Individually accessible nodes (send messsage from `node x` to `node y`)

### Cool Functionality

* Connect board to a speaker
* Send lambda functions across the wire. Have each node evaluate the lambda, and peform functions based on the output.
* Base station with a UI for users to interact with
* Use the discoboard LCD screen to display data

## Software Architecture

We can view each node as a "router", which means our project is *very* similar to one of the old COMP2310 final assignments.

Each node will need to receieve messages, and either pass them along to its neighbours (as per the routing table, see my previous blog post) or
handle the message itself.

Since it's often good to model our architecture against the real-world requirements, we can interpret this (almost) literally, and plan
for 3 concurrent processes:

![Diagram of my artifact](/images/posts/harrison/preliminary_architecture_diagram.png)

The node has a message queue, which it's neighbours can directly deposit data into. The "dequeue process" will quickly determine (perhaps by the message header?) whether
the message has reached its destination (and so we need to handle it directly), or whether it needs to be passed along.

If it has reached its destination, then the data is sent to the "message handler" process. Ideally, this would maintain its own queue, to avoid blocking the dequeue task.

If not, the message is passed to the "sending task", which handles all the communications protocols.
