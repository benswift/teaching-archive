---
author: Aditya Chilukuri
date: 2018-11-29
title: IoT Ideas, Thoughts and Reflections — A Week into the BIT Tour
week: 2
---

# Studies in China

During some of the lectures in BIT, I have been exploring the uses of wireless sensor networks by coding a small, WiFi enabled microcontroller. I have so far learnt to use [nesC](http://nescc.sourceforge.net/) to:

- use an event based programming language to coordinate timers and LEDs.
- measure temperature.
- pass messages over WiFi in a C-based environment — a somewhat different experience to my prior Ada and Rust experience with IP based networking.

In addition than these practical skills, I am realising the power of small sensors and microcontrollers. I was amazed by how a microcontroller smaller than my palm could contain a temperature sensor, a WiFi connection, and accelerometer — to list only some of the functionality I've explored so far with this board.

# Ideations

Here are some of my ideas for my summer project related IoT.

## 1. Air Quality Measurement and Logging using Smart Masks

My accommodation in China is less than 100 metres from a factory. For the first couple of days, I suffered from light asthma. While this wasn't anything serious, the symptoms dissipated only upon wearing masks that filter out the air pollutants.

This episode got me thinking about the recent thunderstorms in [Sydney](https://www.couriermail.com.au/lifestyle/health/thunderstorm-asthma-warning-for-nsw/news-story/e989a6b2ff21ce61b99a41e77f2cd1bd) that caused pollen dispersion, leading to the death of 9 people due to allergen related asthma. One of the most important steps to avoiding these public health disasters would be for governments and public health organisations to have accurate air quality data. This could be achieved by embedding small air quality sensors into breathing masks, which can use low power WiFi connection to ping data to mobile phones or other larger devices. This air quality data, along with current location, would be sent to the central authority recording air quality data.

Sensors in the masks of volunteers, or mounted to drones, or even placed in strategic locations in populated areas can collect air quality information in real time—helping to reduce these public health disasters.

## 2. Health Monitoring using Smart Masks

A seperate but related idea to the above is measuring respiratory patients' lung health by sensing and profiling particles breathed out by the patient in the mask. This idea is something I've thought about well before this trip-I am particularly passionate about improving lung disease therapy and treatment, having suffered severe asthma in my childhood. Patient data could be sent to the hospitals wirelessly so health professionals can have real time monitoring of patient health to find and treat medical emergencies, as well as accurate information about the patient's health over time to help doctors accurately diagnose their patients.

In this coming week, I will research more the sensor technology for common particles that are indicative of some major respiratory illnesses. I am very keen to take on this idea if the sensor technology is viable.

## 3. WiFi and Ultrasound systems for 3D mapping of roads

I found that the lectures in the first week of the BIT study tour have so far been focusing on Unmanned Aerial Vehicles (UAVs) and large scale distributed sensing technologies (lecture by Prof. Li Fan). I was particularly interested by an idea mentioned in Prof Li's lecture — building mobile sensor networks using ultrasound or WiFi. I investigated this idea further and learnt that minor attenuations in WiFi signals picked up by internet enabled devices can be used to [detect objects and their movement](https://news.mit.edu/2018/artificial-intelligence-senses-people-through-walls-0612).

A use case for this data gathering would be to aid the development and maintanance of 3D maps of roads in specific areas to give self driving cars a 3D map of the terrain. Currently, there is no such 3D modelling for most streets in Australia or other countries—Google Maps Street View, for example, only holds "stitched" images of streets, an essentially 2D data format where the depth of objects in the image is lost. My idea is to use drones or other portable sensors to create 3D maps of the nearby environment.
