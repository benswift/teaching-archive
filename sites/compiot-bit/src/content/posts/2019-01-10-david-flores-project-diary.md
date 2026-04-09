---
author: David Flores Condezo
date: 2019-01-10
title: ★ Ripples in The Red Dragon 06 | Project Diary
week: 7
---

Last week on Ripples in The Red Dragon, I worked on my project and documented it on my project diary..
This week follow me in a journey as I work on my artifact & explore the field **Internet of Things**,
Delve into my mind as I share my ideas, passion, and knowledge that I steadily built upon my time and experience in Beijing.
I look forward to our time together and to exchanging invaluable concepts. :)
For **LIT** photos documenting my work see below ↓

## Artifact

### Research done this week
 I've been researching how on the basics of Azure and how to use it concurrently alongside firebase. I've also been going through the Adafruit Trinket M0 programming guide and the Arduino UNO Programming guide.

 I have also been researching how wifi shields work specifically the ESP8266 module, and its compatibility with different micro-controllers.

### Arduino Wifi-Shield
 The Arduino WiFi Shield allows an Arduino board to connect to the internet using the 802.11 wireless specification (WiFi). It is based on the HDG204 Wireless LAN 802.11b/g System in-Package. An Atmega 32UC3 provides a network (IP) stack capable of both TCP and UDP. Use the WiFI library to write sketches which connect to the internet using the shield. The WiFI shield connects to an Arduino board using long wire-wrap headers which extend through the shield. This keeps the pin layout intact and allows another shield to be stacked on top. There is an onboard micro-SD card slot, which can be used to store files for serving over the network. It is compatible with the Arduino Uno and Mega. The onboard microSD card reader is accessible through the SD Library.
 This shield would be my ideal choice however it is very expensive and definetly out of my budget range.

 ![Arduino Wifi Shield](/images/posts/david-flores/arduinoShield.png)

### SparkFun ESP8266 WiFi Shield
 The SparkFun ESP8266 WiFi Shield is an Arduino compatible shield for the ESP8266 WiFi SoC. There are a variety of designs based around the ESP8266, including tiny, modular boards and more accessible development boards. The ESP8266 WiFi Shield finds a middle ground between the Module and the Thing that provides a great introduction to the ESP8266 without leaving the comfortable hardware confines of the Arduino. It is a great inexpensive gateway to the Internet however I am unsure about its cloud posting capability as every information related to it is linked to phant.io, which is now deprecated.

 ![SparkFun Wifi Shield](/images/posts/david-flores/sparkfun.png)

 I ended up settling for this shield...

### Freetronics ESP-01 WiFi Module Shield
 The ESP-01 WiFi Module Shield lets me easily plug an ESP-01 WiFi Module into an Arduino UNO.
 This shield takes care of all the problems that arise from connecting an ESP8266 Module and lets you load a sketch, and communicate with it directly from your Arduino. Alongside this I had to look for a ESP-8266 Module compatible with this shield.

 ![Freetronics ESP-01 WiFi Module Shield](/images/posts/david-flores/freetronics.png)

### What i've been working on
 I finished programming the Adafruit Trinket M0 along with the Infrared sensor, and started working on the connection to the cloud from the microcontroller using a free web hosting site along firebase for the database. I started Azure instead of just a free web hosting site however it proved more convenient just using a free hosting website with a F2P client and hooking it up to my project and database.

 I have also been testing the metrics and limitations of the infrared sensor in terms of distance and how to go about "tricking/hacking" the "surveillance" through manual methods.

### Problems Faced
I have faced mutiple problems with the Adafruit Trinket M0 including its storage size and it's capability to connect to the internet is limited without a bluetooth link shield extension. https://www.adafruit.com/product/1628. I have looked into using 3rd party shields however because i'm also facing problems with the storage, I have looked into switching to a different microproccessor and have settled with using the Arduino UNO, along with a wi-fi shield.

## Warm Regards
To conclude this post, I look forward to my progress next week in continuing programming and building my artifact.

Ciao.

![Beijing](/images/posts/david-flores/Beijing.jpg)