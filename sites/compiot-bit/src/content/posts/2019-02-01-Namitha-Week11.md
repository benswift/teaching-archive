---
author: Namitha Sara John
date: 2019-02-01
title: Project Diary 6
week: 11
---

# Project Diary 6

## Overview/Research

This week consisted of mostly figuring out how to get the data from the sensors to send from one board to another and this pushed me back and had me stressing about this project a lot. However, towards the end of the week I was reconsidering my ideas and wanted to send the data to some sort of server or an app on the phone. This blog post will be outlining the final plan for my project and what I plan to be working on over the next two weeks.

## Software

I started off this week getting the wifi connection set up in my board and spend the remaining time trying to set up the ESPNOW protocol between the two boards. However, after multiple attempts the espnow wasn't working and towards the end of the week I began to come up with other ways that I could set up the patient/dentist database so I could actually have something working for the final presentation.

The past two days I've been looking into sending the data to a central server. I've done some research and had a look at a couple websites that I will be using this weekend to hopefully get that bit done. Then, I will be looking into setting up the website and producing some designs for it. I'm just really hoping that I will be able to get something working by the end of next week.

## Hardware

This week I attended one of the physics inductions in order to gain access to the makerspace so I can actually start to put together my artefact. I will be going into uni a couple times next week in order to work on it and use the soldering kits. I have also been watching youtube videos on how to solder so I will actually know what I'm doing. I also got myself a toothbrush which I will be attaching to the accelerometer next week which I will probably do in the makerspace perhaps using a hot glue.

## New Inspiration/Ideas on Theme

At the start of the week, I didn't really know where I was going with the project. As the week went on, I began to explore bleutooth options and other methods of sending the data of a central system. I talked to some people that had already implemented the bluetooth feature on the ESP 32 and read through a couple blog posts and given the time left didn't think i'd be able to fully implement in two weeks.

I finally decided to set up a webserver where I will be sending my sensor data to and this website can also be accessed by the dentist. The final goal will be to have a completed website where both the dentists and patients can log in to and patients can add data from the toothbrush and the dentist will then be able to see this data when they log on the to website. But since this is only a prototype I will be creating a sample website with a bunch of design ideas. This will use fake data so not directly from the sensors. The website can then be improved to be able to actually be used in real life which I will leave as a future work.

This toothbrush is a great way to improve oral hygiene and changing people's lifestyles for the better because the fact that the dentist has access to this information will force people using this device to maintain good oral hygiene due to fear of other people (including the dentist) finding out. There are some potential ethical concerns with this project. The mouth is a very private part of the body and so is a person's brushing routine and exposing that to the dentist on a website might be something that users have a problem with. 

## Questions/Next Week

1. Working on the hardware aspect
2. Get the information sending to the server
