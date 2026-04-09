---
author: Chocolatier
date: 2019-01-25
title: chocolatier's Project Diary - Part 4
week: 9
---

### Google Cloud API

The primary goal of my project is to highlight how invasive the Internet (of Things) is when it comes to privacy. To that effect I've been building an automated tracking and surveillance bot. But unfortunately, just having a tiny robot roll around, recording data doesn't quite achieve the level of creep I want it to.

I could use open source frameworks like [OpenCV](https://opencv.org/) and [wav2letter++](https://github.com/facebookresearch/wav2letter) to try and analyze everything in real time, but the Raspberry Pi does not have enough computational power. I would end up offloading everything to a server anyhow.

I did experiment with DeepSpeech early on, and am planning on using OpenCV to have the robot track people locally, but without me putting tremendous amounts of effort in, I will not be able to even remotely approach what companies do. And really, what better way to peek into a [Kaiju](https://en.wikipedia.org/wiki/Kaiju)'s mind than to [drift](https://pacificrim.fandom.com/wiki/Drift) with it?

I am internally justifying feeding the beast by telling myself that the robot will be out in public for a couple of hours at most, so the harm is minimized.

I've decided to go ahead with the [Google Cloud API](https://cloud.google.com/vision/docs/object-localizer) to process the data the robot gathers.

To that end, I'm planning to use Google's Vision API to tag objects from a photo feed, and sound and natural language API to try and transcribe what is being spoken, and and analyze it. The results will then be displayed on a screen.

I have experimented with them on my laptop, and I don't really have anything to comment on from a technical perspective. Installation was as easy as `pip install google-cloud-*` and their API is pretty easy to use and well documented.

### Pi-Arduino Communication

Turns out, I was not the first person trying to interface a Pi with an Arduino, and others have [written up a solution](https://medium.com/@araffin/simple-and-robust-computer-arduino-serial-communication-f91b95596788).

It is roughly what I was suggesting in my last post, sending commands over serial and having the Arduino interpret them. But it provides much nicer interface than just writing a direct pointer table.

### What's in a name?

As I mentioned last week, I've set up a [GitHub repository](https://github.com/chocolatier/cocteau)[^MT]. As you may have noticed, I decided to name it Cocteau, in honour of Dr. Raymond Cocteau from [Demolition Man](https://en.wikipedia.org/wiki/Raymond_Cocteau).

Along with being the cheesiest 80s action flick released in the 90s, Demolition Man is also a surprisingly coherent Sci-Fi movie that takes place against the backdrop of a society where corporatism and surveillance is rampant. The system is seemingly well intentioned, architected by Dr. Cocteau. However, people who do not consent to the Facist levels of surveillance and control are condemned to live in the sewers, disconnected from mainstream society.

I find that this is an apt metaphor for what is happening with the Internet today, where to participate in it, we have to agree to be surveilled[^ThisCourse]. This ties back into the theme of "(dis)connecting together" by showing exactly how much privacy we give up when we choose to connect. And hopefully making people reconsider using privacy violating services like Facebook and Google, who no doubt run analyses like the ones I plan to use on the data they gather.

[^ThisCourse]: In fact, it applies to this course too, where I have to put my code up on GitHub (_embraced_ by Microsoft), even though using git on my Digital Ocean droplet as a remote, and using the [git-http-backend](https://git-scm.com/docs/git-http-backend) cgi to display the code would work just as well.

[^MT]: I had planned to start filling the repository up this week, but obviously that didn't happen. I spent most of this week experimenting yet again.

_The content of this blog post is licensed under CC0_
