---
author: Namitha Sara John
date: 2019-01-25
title: Project Diary 4
week: 9
---

# Project Diary 4

## Overview/Research

I spent most of this week trying to get the accelerometer to work and finally succeeded yesterday. Unfortunately, I'm a bit behind schedule as I should've already got the communication working between both my boards. However, I will be back in Canberra next week and should be able to power through that and get it done as soon as possible. Once, I get the basic important set up working, I can work on the actual building of the artefact. I should also get started on the design document soon.

Once I got my sensor working, I've been trying to get wifi set up on my board as well. I've been doing some research and have found that there are multiple types of wifi communication protocols available with the ESP-IDF including ESP-NOW and ESP-MESH. I've been reading through the following links to figure out which one I should be using and I will be doing further research to pick a protocol to use for my project over the next week.

https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/network/esp_wifi.html

https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/network/esp_now.html

https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/network/esp_mesh.html

## Software

Getting my sensor working was the highlight for this week. I used the website that I had included in last weeks post which was a very helpful guide to help with the getting the values from the accelerometer. The following image shows a screenshot of the output that I got:

![sensor](/images/posts/namitha/SensorValues.jpeg)

The ADC driver supports two ADC channels (ADC1 AND ADC2). I used ADC1(GPIO pins 33 and 34) for my sensor since ADC2 has restrictions including not being able to operate at the same time as the Wifi driver. I initialised the gpio pins, configured the channels and outputted the raw values obtained which are the x and the y values from the accelerometer. At the moment, all I'm doing is printing these values on the terminal but I will be working more with these once I get the communication working.

This week I also began to explore the wifi protocols on the ESP 32 and how to get started with some code. I looked through the sample code available on the ESP-IDF repository and ran the code that was given which worked and was able to the connect to the wifi. Below is a snippet of the output.

![wifi](/images/posts/namitha/WifiOutput.jpeg)

## Hardware

I've been focusing more on the software this past week so I don't have much to discuss regarding the hardware however I still haven't been able to solder the piece with the ports to the sensor. I'm hoping that I will be able to do it once I'm back in Canberra in the physics lab (hopefully). It has been a pain testing out my code because I have to hold them in place carefully to ensure contact. I also need to purchase more jumper wires and need another cable to connect my other microcontroller to the laptop at the same time to establish wifi connection. I will be buying these next week.
