---
author: Michelle Zhou
date: 2018-12-24
title: How is my plant?
week: 5
---

## Overview of my project

I have some plants in my home and they are very cute. They are succulent plants and don't need to be watered very often. I will water them whenever I think I haven't done this for a long time, or I can actually see they are becoming dry. The problem for these plants is, watering too much is not good for them so I can't do it frequently. But they will not give you a sign when they are dry because they are not as sensitive to water as those fresh flowers. So it always confuses me when I should water them and how much water would they need at that stage. So I want to design something that can tell me when the plant is dry so I can water the plant with a proper amount of water when it needs.

The idea is to put some sensors in the soil to sense the dryness, and send this information to a micro-controller. When the dryness reach some level, the micro-controller will send a message to my smart phone or other electronic devices to remind me to water the plants.

Another part I am also considering doing is to build a auto-watering device, which can receive command from the smart phone and water the plants when asked. With this, we can use our phone to water the plants. So the final results will be similar to some games that grow plants and take care of them but with real plants. My plan for now is working on one plant. I will consider expand it to more plants to make it a little garden app according to the later-on process and budgets.

## Hardware to use

### Arduino Uno

![board](/images/posts/michelle/arduinouno.jpg)

Since I don't have much experience in hardware, I plan to use Arduino Uno because it is a good board to get started with electronics and coding. Arduino Uno is a micro-controller board based on the ATmega328P. It communicates using the original STK500 protocol. It contains everything needed to support the micro-controller; we can get started by simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery. [Arduino Uno](https://www.arduino.cc/en/Main/ArduinoBoardUno/) has its own website and a software IDE to write programs and upload it on the board. There are [language reference](https://www.arduino.cc/reference/en/) and [example tutorials](https://www.arduino.cc/en/Tutorial/HomePage) to explain how to use the various features on the board.

### Moisture sensor

![sensor](/images/posts/michelle/moisturesensor.jpg)

This is a sensor that can be used to sense the moisture in the soil. I ordered it from Taobao and it can be connected with the board.

## Timeline

### 1. 24 Dec - 7 Jan

To start with the project, I should get familiar with the board. So the first week my main task is to explore the website of the board and get to know the structures and functions. From some online search, it is recommended to use C to write the project with the board. So I will also learn some C at this period.

### 2. 8 Jan - 29 Jan

For these three weeks, I will work on the coding part of the artefact. The main tasks can be divided into:

    a. 8 Jan - 22 Jan
       * connect the board with the sensor to receive message from it
       * connect the board with an electronic device to send message to it
       * set up github and keep track of the project process
    b. 23 Jan - 29 Jan
       * design a auto-watering device that can water the plants
       * connect the smart phone with the auto-watering device to send command
       * keep track of the process

### 3. 30 Jan - 18 Feb

This will be the time to finalize the project and work on design rationale. At this time I will check whether all the devices can be connected well and do their own jobs.

- See whether it is possible to extend the project(eg. a gardening app)
- Finalize the github repo
- Design rationale

It is very exciting to actually do something by myself that is related to our lives. Though there are lots of things that are new to me, I am so keen to learn more during this summer holiday and achieve my little goal (๑•̀ㅂ•́)و✧.
