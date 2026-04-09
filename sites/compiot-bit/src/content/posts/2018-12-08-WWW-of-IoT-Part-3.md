---
author: William Cashman
date: 2018-12-08
title: WWW of Iot Part 3
week: 3
---

### Quick Trip Update
I am at the conclusion of my second week in Beijing in which a lot has happened, though it was perhaps too cold to enjoy everything as much as we had hoped. Amongst the various tourist attraction visited such as the Temple of Heaven, we were fortunate enough to visit two leading technology companies, IBM (Hardware focus) and SAP (Software focus) for a brief tour of the site and a several lectures held by the researchers there.

### Project update

After much consideration I have chosen the note-recognition project as my project for this project. I have also partnered with Zoey Chen to achieve this goal as we were both planning on doing similar things.
The overall goal is to design and build a convenient, low-cost recording system to allow musicians to record their new compositions and be able to view the equivalent musical score on some centralised database. The artefact would automatically transcribe the musicians performance into a reasonably descriptive digital format and then upload them each note that is being played and is then recorded on a small controller. It would then upload this data onto a centralised server via the internet that the musician can then view at a later date.

This I believe can be segmented into four areas, each with their own challenges:
* Sensor identifies movement
* Micro controller sends what note was played.
* Controller sends this to the cloud.
* Person can view the music score and listen to the song online.

By my estimations this should consume the time allotted to this project. As 'future work' example of this, it is also possible to create a social media-like platform upon which after uploading recording to it, a user could then share these recordings with other musicians.

### Problem of the Week (PoW):  Note recognition and storage

This is the first instalment of what I hope will become a regular segment in these blogs. In these I will take the problem that is relevant to the stage of the project I am at at the time and that I think will interest you guys the most and explore it in depth.

#### PoW: Problem Statement

The first question on the agenda is that of converting sensor data taken from musical instruments into an accurate digital representation (not raw audio, something like MIDI). By accurate I mean, one such that the original sound could be recreated elsewhere by someone each with reasonable accuracy. We will assume that the sensors detect whatever aspect they intend to measure 100% accuracy. This of course is not achievable in practice, but it is a good assumption to make when beginning and I will likely address the inaccuracies of the sensors in more depth in a later blog. I would also like this solution to be able to be performed on a small micro-controller rather than on a computer.

When measuring only the raw audio output, this task is known as the 'polyphonic musical transcription' problem and has be the topic of many research papers over the decades. However, my problem statement is a lot more flexible than this in that it allows for different aspects of the performance to be measured. In this blog I will only focus on percussive instruments (Zoey's personal interest) and string instruments (My personal interest). I might look at expanding this to more classes on instruments in a later post.

#### PoW: Discusion
As you can probably expect, this difficulty in conversion will largely depend on how the sensors are used. For transcribing a percussive composition we simply require the sensors to alert the micro-controller when a particular object has been struck. Whereas if we want to record guitar notes, then we may need to analyse the waveform of the string or something of the sort. The challenge associated with the percussive case will be a simple corollary from the solution to the guitar case, just a different configuration. So now I will look more into the case for the guitar.

There are several setups we could have with the sensors:
* Using a microphone to sample the raw audio
* Using pressure sensors on every one of the frets which will relay to the controller which fret has been pressed.
* Vibration sensors on each of the strings which relays the waveform from the string to the controller when it is strung.

The raw audio goes back to the polyphonic transcription problem which has already thoroughly been established as being very difficult and so I don't want to try to attempt this using a micro-controller.
The pressure sensors would probably provide the most accurate information as to the note recognition and duration. However, it would likely be very inconvenient to setup such an arrangement for every single fret combination and so I would like to explore other possibilities first.
The third one I find is the most appealing as it allows for the entire waveform of each string to be collected. This is very useful as it means that we can analyse the notes in the context of the monophonic transcription problem which is far easier than the polyphonic version.

#### PoW: Solution Summary

The best solution so far for recording a guitar performance would be to attach vibration sensors to each other the guitar's strings. The sensors would then relay the strings vibration (frequency) back to a micro-controller which would then analyse the waveform using a monophonic transcription algorithm. Though I think this should be fine, a couple of aspects I have not fully calculated yet are:
* Whether or not a micro-controller has sufficient processing capabilities to perform such an algorithm in real time
* If a micro-controller can store an entire musical composition in such an encoding
* If the inaccuracies in the sensor equipment is too great to perform a reliable analysis.
