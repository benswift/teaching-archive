---
author: Namitha Sara John
date: 2019-01-04
title: Project Diary 1
week: 6
---

# Project Diary 1

## Overview/Research

The past two weeks have been crazy busy with Christmas and New Years but I've been trying my best to set aside time to work on the project and lay out all the groundwork so that I am well prepared to start once I get back to Australia in a week!

This past week, I did some more research on trying to come up with a way to use sensors to detect cavities in the mouth. Unfortunely, this will not be possible. I will be sticking to the idea of using touch sensors and motion sensors to detect brushing movements. I've also started working on my design document and added a couple dot points on my thoughts and ideas and what I plan on acheiveing. I plan to work on my design document a bit every week so I have a good amount of information that can I put together to write the whole thing out.

## Software

In terms of the software side of things, I've started off by getting my laptop all set up for the microcontrollers by downloading the toolchains and setting it up on Visual Studio which is the IDE I will be using for this project.

I've also set up my GitHub account, creating the repo and added the ReadMe file to it. I will be working on this over the course of the project and adding my code to this repo as I progress. The link to the repo is below:

https://github.com/smart-toothbrush

I've been also trying to familiarise myself with the frameworks and decided to go with the Platform IO IDE which I have already set on on my VSCode. I've been reading up on ESP-IDF and setting it up on my laptop which is what I will be using for the project. I've been reading up on touch sensors on the ESP32 and how set them up using the link below:

https://dl.espressif.com/doc/esp-idf/latest/api-reference/peripherals/touch_pad.html

I've been trying to set up Flutter on my laptop as well to try to use that to create the app. I'm still a little skeptical about the app because at the moment, I plan on only displaying the information on the terminal of the PC but I need to research how to actually get the data to display on the app. This is something that I will be looking into over the next couple weeks.

My first milestone which I plan to get done by Jan 18th is to get the touch sensors working and make sure that the sensors are getting data when the user uses the toothbrush. My second milestone will be sending that information across to the PC node which I plan to get done by Jan 25th. Once those two are done, I'll be able to work on the hardware side of things and also work on my app a bit more.

## Hardware

The microcontrollers have been ordered and will be ready to use when I get back to Australia in a week. However, I may have to order a smaller microcontroller (PICOKIT) to attach to the toothbrush since a smaller microcontroller will be best for a comfortable brushing experience. Once, I have the other microcontrollers, I'll work on the software and if required, will buy another microcontroller.

Once I get access to the microcontrollers, I will start testing out some sample code to perhaps get the LED lights going and then move on to the touch sensors.

## New Inspiration

After talking to some people, I thought about adding a tiny camera to the toothbrush so the dentist will get footage of inside the patient's mouth as he/she is brushing. However, after going throgh various online stores, I wasn't able to find a camera small enought to fit in the toothbrush which would also allow the patient to brush without discomfort. The main difficulty with this project is to be able to create a well-designed toothbrush along with all the added features.

I will try to add some more features to the toothbrush once I get the touch sensors working and sending information.

## Some Questions/Next Week

1. How will I get the app to display the received data instead of the terminal?

2. Things I will be working on:
   - Reading the ESP-IDF Programming Guide
   - Working on the ReadMe file
   - Design document
   - Figuring out how to get the app started

Next week I will be exploring a store that I found close to where I live to try to find anything that I may find useful for my project. I'm hoping to find a smaller microcontroller and some motion sensors. Hopefully, I'll find what I need next week!

## References

https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#start-a-project

https://dl.espressif.com/doc/esp-idf/
