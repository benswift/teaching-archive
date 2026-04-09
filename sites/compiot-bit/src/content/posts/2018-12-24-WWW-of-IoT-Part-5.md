---
author: William Cashman
date: 2018-12-24
title: WWW of Iot Part 5
week: 5
---

### Project Layout

This is it, this is where I lay down my words in stone and present all my plans in full to you all.

Convenience has long been a leading factor in the development of many electronic devices. It is not only to make the user's task quicker and more efficient, but also to reduce labor and costs associated. At the moment, there is no convenient way for a drummer to physically record their musical score that they create on-the-fly while they are playing, it is mostly achieved solely by memory. This has clearly proven to be effective method as people have been doing this for hundreds of years in a thriving industry.
But is it effective enough...?
Of course not! We all know that the best projects are the ones that take some part of your life that you thought was already quite simple and make it unnecessarily convenient.
Enough silly questions, Let's get into it!

#### Project Aim (Recap of last weeks post)

The aim of this project is to design and develop a low-cost convenient IoT artefact which will transcribe a drummer's music in real time and upload the musical score to a centralised database via wifi.
The artefact will use vibration sensors attached to each of the drums to identify: which drum was hit and how it was hit. A small micro-controller will process the sensor data into a musical score which it will then upload to a centralised server on the internet.
This I believe explores the theme of _(dis)connecting together_ by:

- _disconnecting together_ by having the device wireless and allowing the device to be completely operated by the musician
- _connecting together_ as the device can upload the musical score to a centralised server for others to see and collaborate.

#### Hardware and Software

I have already discussed the hardware and software in the previous blog post, but more developments have been made in the mean time:

_Sensors_: Though the simple boolean sensors would be the most convenient to use, they are unable to detect HOW the drum was hit, as different sounds can be made on the same drum. There are two main options here:

- Have multiple boolean sensors to detect the different kinds of sounds (if they can)
- Record a continuous stream of the vibration information then perform some sort of analysis on the data.
  These both seem like reasonable options but they have their pros and cons

Advantages in using multiple boolean sensors:

- Analysis is very simple, and could use fewer micro-controllers because of it.

Advantages in using continuous stream data

- Less wires, and is therefore cheaper as only one device is needed
- Might get a more accurate result as a more comprehensive analysis can be performed

Since the sensor model suggested in last weeks post could perform both functions I will order several of those and test which method is more effective.

_Microcontroller_
As the the micro-controller itself, I considering two different micro-controllers, one with which I have had experience with before but requires a separate wifi module to connect to the internet (The 'Black Pill'), and one which I don't have experience with but has wifi capabilities built in (ESP32).
At the moment I am now strongly considering using just the Black Pill. Simply because I have realised that we will likely need to use multiple micro-controllers regardless of which type of sensor network we decide to use. If we decide to use the boolean sensors, then we will need to run many cables into the micro-controller, many more than what the device can accomodate, so we will need more controllers. If we decide to use the continuous stream of data, then we will probably need perform the musical analysis using multiple controllers in parallel to meet the data processing needs.
Also if we use multiple controllers it is more convenient to use only one type of controller so that we can keep all the software configurations the same.
Taking this into account, the Black Pill is the most cost effective option, since if we need four controllers, then four black pills cost 4 x $2 = $8, plus one wifi module (say the ESP8266) is approx $6, so $14 in total. Whereas if we used four ESP32s, then it would cost 4 x $8 = $32.
To connect the Black Pill to the internet we will need a Wifi module to perform this task. I have had a brief look into this and have found the ESP32 could actually serve this purpose quite well so I might look at integrate a single ESP32 controller into a network of Black Pills.

Software side:
Analysis: This will largely depend on which type of sensor network we end up going with. For the boolean sensor network, the software side is fairly trivial. However for the continuous data stream sensors, we will have to perform an analysis on the data to categorise it into the note that it represents. This could probably be done by analysis the envelope of the sound wave as the different notes that are played on the same drum have quite different envelopes. We would then be able to categorise them based off that. This (at least at the moment) seems like something that we could hard code.

Internet Upload: This is something that we wold definitely want to use the inbuilt libraries for. I've already seen that the ESP32 has many libraries for this purpose so it should just be a matter of learning the libraries. Though there are also many tutorials online for this.

#### Timeline

_ASAP:_
Order things

_Now - 1 week:_
Plan software design: find libraries and determine the control flow of the overall device.

_1 week - 2 weeks:_
Decide to use either the continuous data or boolean data (or a mixture of both)

_2 week - 4 weeks:_
(**Milestone 1**) Get the data analysis software working well
Have a good idea of how to connect with the centralised sever through the device and have the foundations of the software.

_4 weeks - 5 weeks:_
(**Milestone 2**) Get the device to convey the information to the centralised server well

_5 weeks - Finish time_
Refine and debug
Implement a social aspect to the online server where users can share their musical scores with others and give feedback.

#### Division of labor

If we look at the Timeline above, some of the time periods contain two goals, when this happens, each person will be assigned one of the goals. The actual assignment will be made when the time comes depending on what either of us likes and how much time we think we will have to work with that week. Regardless, it will be resolved in advance and I will keep you all information on the outcomes of such decisions.
For the weeks that have only one task, we will attempt to divide the work as evenly as possibly during this time.
