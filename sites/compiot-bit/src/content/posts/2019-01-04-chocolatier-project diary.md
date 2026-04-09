---
author: Chocolatier
date: 2019-01-04
title: chocolatier's Project Diary - Part 1
week: 6
---

_As the physical parts haven't arrived yet, this blog contains no technical content_.

## Why privacy loss is unavoidable

The concept of forced microchipping of humans is a [favourite among conspiracy theorists](https://duckduckgo.com/?q=microchipping+agenda), that argues that governments and corporations will seek to control humanity by tracking them through implanted microchips. While the specific allegations are far from becoming realised, we have managed to achieve similar levels of surveillance by blindly allowing (nay, encouraging) the digital revolution to take place.

There are two reasons for this.

### Pervasiveness

Today we carry devices that [track our location constantly](https://www.zdnet.com/article/us-cell-carriers-selling-access-to-real-time-location-data/), are [installing wiretaps into our own homes](https://support.google.com/googlehome/answer/7072285),[ have our purchase history](https://amazon.com) known to a single company etc. And although unlike the conspiracy theory, none of this is strictly required, it becomes impossible to avoid them if you want to participate in modern society. Even if we discount shadow profiles, browser fingerprinting and other "side channel" tracking mechanisms, the fact is that you *need* to use these services to participate in modern society. The smartphone is unfortunately a almost necessity today - we are expected to be able to use WhatsApp or WeChat or iMessage at any given time, answer emails on the go etc. And often times we are forced to use them for work and/or school. e.g. The ANU forcing everyone to use Microsoft's email service.

Even when privacy respecting providers like Firefox and DuckDuckGo are available, we find that trackers like Google and Facebook are built into the very fabric of the web. If we choose to block them altogether, we are constantly hit with Captchas (answering which usually trains Google's ML Algorithms, so you end up helping them anyhow) or often just denied access. Unfortunately we find that this is poised to become even more invasive with [Recapcha v3](https://developers.google.com/recaptcha/docs/v3).

### Ignorance

Another issue that comes up is that a lot of users seem to be unaware about how invasive the tracking is. While the information is public, outside of the occasional New York Times piece, much of it is presented at conferences like [CCC](https://media.ccc.de/v/35c3-9941-how_facebook_tracks_you_on_android/) or [Defcon](https://www.youtube.com/watch?v=DoeNbZlxfUM) or even worse, behind paywalled[^nominally] journals like [IEEE Security and Privacy](https://ieeexplore.ieee.org/document/6017276) or the [ACM](https://dl.acm.org/citation.cfm?id=1280688). So the average user is simply unaware of exactly how extreme the data collection is.

I spent a lot of time talking to other people[^pros] about privacy over the internet over the last few weeks, and even among more tech savvy people (the kind who would hang out on Discord[^iknow]), people were either not aware of the extent of tracking, or didn't care enough to take basic privacy precautions.

## (dis)connecting Together

As indicated in my previous blog post, I wish to explore the theme of the dossier society. To recap, it is a society where everything a person says or does is documented, analyzed and sold. This ties into the theme of (dis)connecting together by exploring the consequences of our modern, always connected society and aims to convince people to disconnect.

My current plan is to build a swarm of robots that physically track you, photographing and recording everything you do. While on some level, this might be a physical analogue of a web cookie, depending on the it might not necessarily creep people out. After all, something like the [Anki Vector](https://www.anki.com/en-us/vector) following you might come off more as amusing than terrifying.

While physically following you is one way track you, the main idea my project draws on is the constant presence of tracking technology. Towards that end, I looked at how other artists had explored this theme.

But perhaps because of the terms I am DuckDuckGo-ing (Ducking?), the primary way artists explore this is by borrowing the design of the [surveillance](https://www.ignant.com/2015/07/06/artist-jakub-geltner-installs-surveillance-cameras-into-public-spaces/) [camera](https://www.lissongallery.com/exhibitions/ai-weiwei--2).

Which made me think that due to gradualism, that particular design has lost it's effectiveness. But this did remind me that a way to ensure constant presence is omnipresence. To that effect, I am considering incorporating into my project to be a series of surveillance cameras and microphones, conspicuously present, that record everything you do and say, share data between cameras and react to what you say. The end result would be a cross between HAL9000 from 2001 and the personalised advertisments from Minority Report, achievinh greater levels of creep than a simple robot that follows you along.

[^nominally]: Thanks to the good folks at Libgen, Sci-Hub and arXiv this is only nominal.

[^pros]: Though I'm sure it came off as proselytizing.

[^iknow]: Another example of how the lack of privacy is standard. Discord has a horrible privacy policy, has zero advantages over XMPP/Zulip/Matrix etc and [their team resort to "won't somebody think of the children"](https://old.reddit.com/r/discordapp/comments/8nzb5d/comment/e001lr1/) to justify the lack of end to end encryption. Yet it's where the people are.

_The content of this blog post is licensed under CC0_