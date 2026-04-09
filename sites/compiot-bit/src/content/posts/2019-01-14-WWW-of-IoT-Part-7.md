---
author: William Cashman
date: 2019-01-14
title: WWW of Iot Part 7
week: 7
---
### Beginning Implementation

Welcome back to the seventh installment in myblog series! A lot has happened since you were gone and not really on any one specific aspect of the project, so below I've divided everything into sections to address each field.

#### Setting up the ESP Framework

I was going to setup the framework from the roots up however I found that PlatformIO on VSCode can do all of that for you. I choose to use the ESP-IDF rather than Arduino as I knew that I would be working with interrupts a bit and also doing a bit of TCP socket connections which are things that the Arduino IDE tries to abstract away from. I have already read ahead on these topics and it seems like they shouldn't be too difficult to deal with using plain C code.

#### Addressing the Schedule

To address the schedule I laid out before.
1. The software analysis (which is a milestone due next week) has its plans laid out. Because we are using boolean data this will be very simple.

![Basic Control Flow of Note Transcription](/images/posts/will/general_note_transcription.png)

I am not expecting this to be too difficult, it is basically a corollary from the steps outlined in Lucadentella's post on how to set up [I/O interrupts](http://www.lucadentella.it/en/2017/02/25/esp32-12-io-e-interrupts/)

2. Connecting to online database has been successfully researched and partly implemented

Last week I said that I will look into the wifi stuff and database, and I have successfully set up a MySQL database and have it interacting with my localhost server on my laptop. Everything seems to be working fine at the moment, I am considering using a tunnelling service to facillitate the communication between the ESP32 and my local server just for simplicity at the moment. I can always change it later

![MySQL Server has been set up](/images/posts/will/MySQL_Server_will.png)

Though my main concern at the moment is how I am going to make the ESP32 interact with the server on the programming level of development. As I mentioned previously, I have no experience with this kind of low-level TCP connections programming so next week will be mostly focusing around how to actually upload data to my server.
