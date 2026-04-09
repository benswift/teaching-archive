---
author: Zoey Chen
title: Music Sheet Generator
date: 2018-12-07
week: 3
---

## Learning outcome

Learned how to use varies sensors to collect information from the environment and communicate with the server.

## IoT Idea Further Exploration

Ben is here this week and we had some detailed discussion about the IoT project. Plan for the current stage is to collabrate with Will Cashman and build a generic music sheet generator.

Equipment will be one of the followings: (1). ESP32 with vibration sensor and light sensor; (2). Use the micro-controller built upon STM32F103C8 by Will.

Research on similar sensors and thoughts:

- Mogees Vibration Sensor detects vibration of the object and create synthesized sound. Mogees is able to catch seperate hits on the object which is connected to the sensor.
- We have two directions to go:
  1. Stick with the idea of music sheet generator: first step is to build a vibration sensor which can detect the vibration of the instrument (guitar's string, for instance), and print out the note by analysing the frequency of the vibration. Things like different techniques and emotions could be add on later.
  2. Do something similar to Mogees, so we can produce music with any object. Mogees' sensor is bulky and possible improvement is to reduce the size and make it more professional.

\*Note: The idea of detecting the notes by analyzing the overall sound waves has been discarded due to the time constraint and the complication.
