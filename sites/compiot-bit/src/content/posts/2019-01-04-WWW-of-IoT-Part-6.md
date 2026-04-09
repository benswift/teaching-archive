---
author: William Cashman
date: 2019-01-04
title: WWW of Iot Part 6
week: 6
---
### Where am I now?

So in the last blog post I set out a schedule as to what I planned to do from that time until the projects conclusion, so I will first address those and then get into some more interesting stuff:

* Order things - Yes, ESP32 ($14), and MiniSense 100 ($5) (vibration sensor).
* Control flow of system - Yes, this will be a simple stage system will the data being: Collect Sensor Data -> Trigger interrupt on ESP32 -> Record this as musical score -> Upload this score to centralised server -> Access server on remote device (Maybe: -> Share musical score with others online)
* Decide what data to use - Boolean at least at this stage. With boolean data we can detect: when a drum is hit, and how long the wave lasts, which we can hopefully use to determine how the drum was hit. This will greatly save computation time as no intensive analysis will need to be performed, which will greatly simply testing.

Okay to be fair these were not very very difficult nor interesting topics so to give you guys a little more I think I'll give you all an insight into what I'm currently looking at at the moment.

### Current Focus
The main thing is organising how the ESP32 will connect to the internet. I have found [ESP32's Home Site](esp32.net) to be very helpful in finding appropriate information on all the ESP32's setup. It lists pretty much every tutorial or blog that has been made about the ESP32 so its sure to contain everything that would be needed.
After sifting through several pages I found [Lucadentella's](http://www.lucadentella.it/en/category/esp32/) series of blog posts to be highly informative and relevant to my project so I will be using them as my primary resource. The main topics I require are:
* I/O interrupts (to efficiently handle the sensor data)
* How to connect to wifi (for wireless transmissions)
* TCP connections (to send messages to the centralised server).

At this juncture in time, Zoey and I have divided the workload; I will be looking at how to set up the wifi connection and server database, and she will look at processing the sensor data.

### Database
The server database will very likely be a simple MySQL database running on my computer (at least at the beginning), just because it is the simplest option at the moment. I haven't done any SQL before though so that will be something to look into a little more.

Due to this lack of experience I am not sure of how developed this database will be by the time that this project concludes. At the very least the only functions it will need to perform is:
* Store a newly uploaded musical score
* Able to easily retrieve this score on a different device.

This is the most basic incarnation and will likely be used for most of the testing and development phase. Afterwards however, I am very interested to see if this can advance into a social thing. Such where you can easily share musical scores will friends or fellow band members.

### Internet Transmission
The challenge of sending packets over the internet seems to be one that ha been covered in many tutorials already.

Fortunately, the ESP32 comes with a very comprehensive IDE called ESP32-IDF in which it contains many libraries to facilitate wifi connection and TCP transmission. My plan is to loosely follow the blog posts in [Lucadentella's blog post series](http://www.lucadentella.it/en/category/esp32/) to understand some of the basic functions and their caveats and adapt them into this project. Once I have a basic communication network set up, if I have time I will look into making more advances features associated with the social network extension I mentioned before.
