---
author: Kathleen Qian
date: 2019-01-04
title: Beginning Project Diary
week: 6
---

It is the beginning of Kathleen's project diary~

## Current Process

The overall process through the 2 weeks is much slower than my plan mostly because of my tooth surgery :( After cutting pieces of bones to pick out the wisdom tooth and five stitches, my face swells like the "squash" in *Plants vs. Zombies*... So with quite a lot of rest, the main job I did is online shopping for most of components needed for my artefact, including Arduino things and operating devices~ Happily, all the key things have arrived.

I begin linking light sensor with microcontroller and some basic coding this week. The initial design for each function is also out that I'm able to make good device preparation in China.

## Feeding

With the help of real-time clock (to decide whether feeding is needed), I design to mainly use **steering gear** (micro servo) for the function operation.

I drew my current idea as below:

![feeding](/images/posts/kathleen/feeding-idea-w6.jpg)

*Graph 1* shows how the food could drop into the tank.

*Graph 2* briefly shows the use of steering gear: I will use a **board** to control whether the feeding hole is hidden or not, and the board will **rotate with the remotely controlled "steering gear"**. The "rotating board" idea booms from [a video introduction of micro servo](https://www.youtube.com/watch?v=iH9_xtulyws). It specially points out, you could attach other mechanical parts onto the horn of steering gear (at about 3:58 of the video~).

*Graph 3* explains if the **hole** is not **hidden**, the food will drop.

## Lighting

I found "filament lamp" and *"bright LED"* (whose usage mainly shown in [shop owner's website](http://www.y77.cc/wenzhanghuizong/dajian/39.html) -- while not sure why it cannot be open when I come back to CBR...) components that can be combined with Arduino. I will try to use them later~ If there is enough time, I think it's better to control the brightness level as well.

**Diaphragm pressure sensor** (water-proof) is bought as well. Considering we cannot make light on once the environment becomes dark, I may use the sensor to detect whether the tortoise is on the “flat roof”, and then make the light on to simulate sunlight.

## Land-water Swap

It's my first function to work on as planning. While I am still deciding the final plan to realise the "swap":

![land-water swap](/images/posts/kathleen/landwaterswap-all-ideas.jpg)

Currently, I prefer the 2nd idea to **raise part of the board inside the tank** and better to separate the **ladder** part and the **flat roof** part. It is my *next week's* job to make the decision and work on that~

## Temperature

The main difficulty for this part is the **heating method**.

I have bought the "water temperature sensor", while for the operating part, I cannot directly buy the water heater.

I bought the special heater for "tortoises' tank", but all types of these heaters have normal plugs. That means if I need to use these devices directly, I need to have **a "smart" electric socket**! That's a new part for the project... *Or* I need to **assemble heating pipe** by myself. I will try to deal with this problem in the near future.

## Water Changing

"Turbidity sensor" is ready as well. The difficulty for "water changing" is similar to the above "temperature" section. I bought the **“water pump”** and decide to make the "water circulation" device by myself~

That's all for this week. Hope to bring more share next week :-) ~
