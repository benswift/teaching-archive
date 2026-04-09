---
author: William Cashman
date: 2018-11-30
title: WWWW IoT Part 2 - Initial Ideas and Plans
week: 2
---

Welcome to the second instalment in this blog series. In this I will outline my current thoughts surrounding the artefact that I intend to build, including some of my leading ideas and some things I intend to do next.

#### General Direction

Throughout the past week in the Beijing IoT Study Tour, we have attended numerous labs and lectures covering several of the basic foundations of IoT. However these unfortunately proved to not relate strongly with the kind of device I wish to build. They have so far seemed to be focusing more on privacy and security; whereas I'm looking to make something more novel and gadget-like in its intentions.
At the moment I am considering building upon some aspects of a previous project of mine, in particular, some of the hardware. The project used a low-cost microcontroller to make a cheap but highly customisable lighting system that would create a real-time audio-visualisation of a given audio input. I would like to use some components of the hardware setup in this design to enable the artefact to perform some complex or even cloud based analysis of an audio input.

I have a couple of ideas of where I could take this. The main candidates are

- Creating an even more generic and internet-connected version of the previous project.
- Making a educational music analyser. I could make a device that can receive the audio from the instrument either directly (via cable) or via a microphone. It would then analyse the signal and generate some feedback as to how well the person is playing.
- In a completely different direction, I could make some sort of game in which people could interact with other people over the internet. It would be similar to the internet games played on smart phones today but using as bespoke artefact of some design rather than a phone.

#### Where to go from here

The next step I believe is to ascertain exactly what I wish this project to achieve whilst taking into account the time constraint (a couple of months). Once I have a good idea of what I want the device to achieve I can begin to sift through the potential functions and features to see what would be feasible.

While I decide which direction I want to take it, there are a couple of other things I could do now which would help me later down the track.
The first of these would be to investigate how I will connect my device to the internet. In particular, whether or not it would be better to add some peripheral device (shield) to the micro-controller from my previous project, or to use a different controller entirely that has wifi capabilities built in. This decision will be largely based upon the availability of such external devices and their ability to interface with the audio and the computer.

The second thing to do is to get some idea of what peripheral devices I intend on interfacing the artefact with. In the previous project I found that writing the software to enable the artefact to interface between multiple different kinds of lighting rigs very tedious and so I believe that it would be very difficult to implement a user-friendly interface for achieving such a goal. I also should pay due attention to the availability of existing libraries for such interfaces that are compatible with the micro-controller.

And finally I also need to figure out precisely what I want the artefact to do. Though I think it best if I postpone making this decision until after I have already investigated the problems above.
