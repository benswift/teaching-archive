---
author: Michelle Zhou
date: 2019-01-30
title: Connected!!
week: 9
---

It is a very very late post.(sorry) I didn't submit my post last week on time because at that time I couldn't get my wifi module working and the process was not much to say. But now I finally get it connected to the Internet and successfully communicated with other devices.

## ESP8266 WIFI module

This is a low-cost wifi module that has multiple usages. It has 8 pins in total and I am using 6 of them. There are a lot of online tutorials teaching people how to use it. I watched some of them and found there were multiple ways to connect the wires. I have tried but not all of them worked for me. After a long time of trying and searching, I decided on this way of connecting.
 
![board](/images/posts/michelle/wificonnected.jpg)

### some difficulties 

Last time I was at the stage that I couldn't upload the code of the wifi module to the IDE. I guessed it was the connection method that I used was incorrect, or I lost some steps when uploading it. 

When I read some online instructions, the bootload mode is a thing that confused me a lot. Since the ESP8266 doesn't have a button, I was stuck at the instructions like "pulling GPIO0 low". I know it indicates that the module can be in different states(eg. reading code, executing) at different time so we need to give it a signal to indicate we have uploaded all the code so it's time for it to execute. I first tried to set a button for the GPIO0 pin, but it doesn't work as the way I expected. Later I tried to set up the pin from the code, but there is no related code of that. I found out that they did have a similar button on some other advanced ESP wifi modules, so I guess I might need to do some physical removal or connection of the wires when I upload the code to make it work like a button, and it work eventually. 

From some online tutorials, people set up ESP8266 via serial with AT commands. I tried to set it up, but the serial monitor was not printing out anything to respond to my command, which is weird because I started to doubt it was connected correctly. I tried to avoid using the command and used the corresponding code to run instead, it worked well. I still don't know why the AT command does't work, but at least the code is working to achieve the same goal now. 

### TCP communication

After connecting the wifi, I tried to get the board communicated with other devices. There is a very useful [website](https://diyprojects.io/esp8266-web-client-tcp-ip-communication-examples-esp8266wifi-esp866httpclient/#.XFFS7Vz7TD4) teaching people how to make the ESP8266 work as a web client. I used my android phone as the web server, got the IP address of it when connected to the wifi, and gave this IP address to ESP8266 so they can connect and communicate. 

It worked as I expected because the module can send message to my phone regularly, and I can use my phone to send messages to the board as well. 

What I am going to do next is to insert some functions. Let the auduino board send data of the soil moisture sensor to my phone, and let my phone send commands to the arduino board to control the water pump. 

## Chinese new year approaching

Life was very good recently. I passed the driving test and need to do a quiz to get my driving license tomorrow. I am sooo happy about that^^. Also the Chinese lunar new year is coming soon so we are having lots of get-togethers and big lunches and dinners everyday. Yay keen for the new year!!
