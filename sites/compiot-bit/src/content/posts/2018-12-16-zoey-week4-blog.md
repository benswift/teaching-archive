---
author: Zoey Chen
title: Instrument Virtualisation Ideas
date: 2018-12-16
week: 4
---

## Learning outcome

This week we learned (1). data collection and processing; (2). transfer learning; (3). how to build a self driving car. Different to traditional way of machine learning, transfer learning allows us to use training data and test data under different distributions.

We did a group presentation on Friday and I explained my idea about music sheet generator (MSG) during my part. I will put the notes of that presentation at the end of this blog post, but the actual implementation I will do first are the parts I mentioned in the previous blog posts and _Hardware_, _Software_, _Further investigation_ in this blog post.

## Hardware

1. Vibration Sensor. All the options listed below are small and cheap - suitable for this project.
   - Bump switch : gives boolean output (tells if the object is vibrating or not). Issue: can not change the threshold for detecting the drum hit
   - Accelerometer : takes in all the vibration including non-audible sound. It is good at telling the big movement of the object, but not really the vibration of the instrument which sometimes is subtle.
   - **Microphone** : converts the vibration of audible sound into voltage. Which is exactly what we want for this project.

2. Light sensor. It is possible to use vibration sensor to detect different hits on the instrument according to the pitch, light sensor is not necessarily needed.

3. Use multiple microphones. One (name it M1) attached to the surface of the vibrating object and one (M2) not attached but really close to the surface.

## Software

- Use Matlab to do the fourier transform.
- Filter out the background noise by subtracting M2 input from M1 input. Idealy the background noise should be canceled out and the sound of the insrument will be lower in amplitude but still the same pitch and we should be able to pick it up.

## Further investigation

1. Which instrument to use as a sample input? Choose from drum set, guitar and piano. Drum set is easier for boolean inputs: hit or not hit, but to distinguish different techniques is difficult - drum may not produce a stable pitch each time thus difficult to use pitch to distinguish different kind of hits on the same drum. Guitar and piano both gives stable input for each note, and for different techniques it is easier to use fourier transform over piano/guitar input to distinguish them.

2. Are the pitches of different type of hits on the same drum the same? (If so, it is possible to perform fourier transform over the input to extract a bunch of peaks and convert the peaks into different hits according to the pitch of them)

## Notes of the presentation about MSG

- Name: Music Sheet Generator
- Reason for the IoT : help composers to record their progress; entertain and help learners to learn how to play the instrument.
- Wireless : to make the working environment less messy, Use cryptography to encode the IoT device to avoid others getting the data from the microcontroller by simply hacking into it. problem is Wireless connection can be interfered easily.
- Start up: detect which instrument is being played; use RSID to read what brand the instrument is; use video analysis to determine if the user is playing the instrument - and even able to identify the special techniques, for instance, snare rimshot rather than a simple hit, vibrato rather than a simple pluck. Capture the emotion of the user, produce “emotion sheet” using different colours to represent the emotion. Take one shot and give it a caption for today’s practice/composing.
- Convert the wave into music sheet: analyse the synthetic wave produced by multiple notes is a big challenge, seperate the waves from each other is not feasible, so the idea is to run machine learning algorithms over big data to give possible combinations of the given synthetic wave
- Analyse the wave : Cloud data and machine learning: upload all the data to a cloud (optional for premium users). The user can choose to type in the name of the existing song they wanna play and choose the music sheet that they want to be compared to, and the MSG will analyse the performance and identify the issue the user is encountering while playing the instrument. MSG can also come up with popular instruments, trending music genres, common mistakes.. For original music pieces, MSG will convert the audio and video input into a music sheet - sometimes it is difficult for the composer to remember every detail of their draft composing, and the MSG will record their practice and compare the difference each time. MSG will also be able use machine learning to give advice to the composer - what chords, what techniques might improve which part of the music piece - by either using the existing local music data or using cloud data (which will be much larger and possibly give better advice). To do all these, MSG need to be able to iIdentify dwarf data - what is a “good” music piece and what is “bad”, we don’t want MSG to waste energy on some randomly played piece
- UI: user will be able to see the music sheet generated by themselves; can see the time, number of songs, scores of the others (privacy setting: self only, friend only, public). Or connect MSG to a local PC (if they are worried about privacy). Streaks … Users who have similar taste ..

\*\*For the part of converting the live performance into music sheet, there is another way out - using vibration sensor and light sensor instead. Vibration sensor can identify the hits on which key or string, light sensor can identify special techniques (not as good as video analysis but also less complicated)

- Equipment: (1). ESP32 with vibration sensor and light sensor; (2). Use the microcontroller built upon STM32F103C8 by Will
- Existing similar device using vibration sensor: Mogees Vibration Sensor detects vibration of the object and create synthesized sound. Mogees is able to catch seperate hits on the object which is connected to the sensor.
- Mogees' sensor is bulky and possible improvement is to reduce the size and make it more professional. It is also expensive ($166.87 = 826.14 yuan)
