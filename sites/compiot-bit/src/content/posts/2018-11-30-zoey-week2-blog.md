---
author: Zoey Chen
date: 2018-11-30
title: Origin of my project in the city of dream
week: 2
---

## Beijing, Beijing

First week in Beijing! Time for some music -- [Beijing, Beijing](https://www.youtube.com/watch?v=0oZn1M50Uw0) This song expresses feeling of living in Beijing, struggling but loving the city at the same time. First thing I did after arriving in Beijing is crash on my bed and slept like a rock. My daily life in Beijing is either having classes, exploring Beijing or crashing on my bed like I did on the first night - Beijing life is so intense! :ooooo

## Learning outcome of the week

From what we learned from the classes this week, the following dot points are the parts I think that can be used in my IoT project.

- Computer Vision. Image processing
- IoT Privacy. Use cryptography to encode the IoT device to avoid others getting the data from the microcontroller by simply hacking into it
- Wireless network

## Ideas of IoT

I have two major IoT project ideas in my mind at the moment.

1. **Drum Sheet Generator** (for drum set or single drum)

   _Methods_:
   - Attach vibration sensor to the drums and generate the drum sheet while the drummer is playing the drums.
   - Instead of vibration sensor, use one device to analyse the frequency of the signal to get which drum is being playing right now.
   - Add on one lighting sensor which will catch the shadowing over the drums. Can distinguish the situations when the drumhead is hit and when the frame of the drum is hit. Can realise the drummer is doing snare rimshot if both of them are hit.
   - Wireless preferred (1). If connect vibration sensor to the wire, the vibration the sensor detected will be influenced by the wire; (2). Makes the drum set easier to be moved around and gives a less messy environment.

   _Other ideas_:
   Image presentation of the drum music ("emotion sheet"). Use different colors to represent how strong the drums are hit and amount of blocks represent the frequency.

   _Issues_:
   - The vibration sensor may not be able to distinguish two hits that are really close in time to each other. Light sensor might be able to help with this problem.
   - Frequency(signal) matching: waves produced by different hits on the drum might mix together and add up to a new signal which the device wouldn’t be able to understand.
   - Wireless connection can be interfered easily.

2. **Protect Hypoesthesia patients from hot objects**
   For the people who can not feel pain on their skin, it is dangerous if they touch something extremely hot by accident (give really cold material is really rare in the natural environment). Original idea was to produce a graphical representation onto a pair of glasses, but that is over complicate and not achievable in this one semester long individual project. New idea is to embed that a heat sensor inside a ring/patch/glove, which will give audio alert when the user is about to touch something that is really hot.
