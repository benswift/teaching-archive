---
author: Michelle Zhou
date: 2019-01-11
title: Connect devices Ⅰ
week: 7
---

## Github repo

I have created my github repository, click [here](https://github.com/Miizz/2019IoT) to see it.^^

## About this week

### temperature sensor module

This week I mainly worked on connecting electronics and got them work together. I was trying to work on the soil moisture sensor but there seemed to be some problems that I couldn't solved. Since I stayed in my grandparents' home and there was no plant for me to test, so I decided to work on the temperature sensor first, and work on the soil sensor later when it is more convenient to test.

[KY-028](http://sensorkit.en.joy-it.net/index.php?title=KY-028_Temperature_Sensor_module_(Thermistor)) is the temperature sensor module that I am using. The connection of the wires can be found in the given website. I tried to print out the current temperature in the serial monitor in the Arduino IDE, but the numbers are around 300. I guessed that it might has a conversion from the output values and the actual temperature. So I searched online, and find out that the values are something related to the voltage. I couldn't find a conversion between this value and the temperature so I printed the voltage directly.

![board](/images/posts/michelle/temperature-sensor.jpg)

As we can see in the picture below, the signal is inverted. When I put my finger on the sensor, which has a higher temperature, it shows a low voltage value at the analog output.(from above to below 400)

![board](/images/posts/michelle/voltage.png)

### wifi module

The wifi module comes with the package of Arduino. It is very small and unnoticeable, so it took me a long time to find it.TT

![board](/images/posts/michelle/wifi-module.jpg)

Following some of the online tutorials, I connect the wifi module with the Arduino board, and a led on the board. There is an app on Android that specifically for connecting the phone with the wifi module. When everything is connected well, I can use the app on my phone to control the light on the board.

This works like a wifi for now. But I still have some concerns. The wifi module doesn't really connect to an existed wifi. It works as a wifi itself. So what I am doing is connecting my phone to this wifi module and send messages to the board. It means I need to send messages to it in a distance that I can receive its signal. Instead of saying it's wifi, it is more like a nearby wireless connection device. What I am hoping is the board can get connected to an existed wifi, so can send and receive messages from remote.

I will explore more to see how to achieve this, probably need to buy a more advanced wifi shield.

These are for this week. Learning and exploring things is much fun. I am learning driving at the same time and my hometown is going to freeze soon. Everything becomes very slow when it's extremely cold(and without heat). My laptop also sleeps a lot when it's not charging w(゜Д゜)w. I will see you next week!!
