---
author: Yuze Gong
date: 2019-01-11
title: Project Diary 2 - Fuzzy Hardware
week: 7
---

This week I've spent most of my time on figuring out what sort of hardware is suitable for my Group Attendance Device and here's how it feels like...

<iframe width="560" height="315" src="https://www.youtube.com/embed/wBqM2ytqHY4?start=52" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I was quite excited when I got the RFID module, thinking finally I could start getting my hands dirty. But after reading the data sheet for the module, I felt very lost. At first, I got the idea that the manual was trying to show me the structure of the packet and explain what instructions they have implemented. But when it comes to the part of connection setup, it only has one sentences and that's definitely not what I was expected. It just told me it uses RS-232. What is RS-232? Which pin on the module should I connect to which pin on the my STC89C52 development board ?  I don't know !

And then I start searching for how does MCU communicate with its peripherals. I've found methods such as Universal Asynchronous Receiver/Transmitter, Serial Peripheral Interfaces and I$^2$C. I've got the idea of what each of them can achieve and what's their trade-off, but I still could not understand which part of the board should I look into. Furthermore, none of these mentioned RS-232.

So I googled RS-232 and found out its Recommended Standard 232, which is a standard specifying -15V ~ -3V represents logical 1 and 3V ~ 15V represents logical 0. And it seems there are also other standards, such as RS-485, USB and Transistor-Transistor Logic, etc.

At this point I was really helpless as I didn't solve any of my confusion but made it even bigger instead. What standard does my development board use? Did it have chips to communicate with peripherals using RS-232? And since I decided I would like to collect the tag info wirelessly on my phone via Bluetooth, it brought up a problem that I haven't realised yet -- did it have enough serial ports to communicate with the Bluetooth module? If not, can I add more ports by attaching additional hardware to the board or must I change to another one? And where can I find one that had enough IO ports for this project but not too complicated to learn to use ?

On top of this mess of hardware knowledge gap, the RFID module didn't meet my expectation as well. First of all, with the provided antenna(at the dimension of 50mm x 50mm x 10mm), the current maximum read range is just 2 meter, which means most of the time it could only read tags within 1.5 meters. Secondly, although the RFID module could read multiple tags simultaneously, it seems to misread quite a lot. For example, when I've put eight tags in a row on my table right next to the RFID module, the number of tags it could detect varied from 4 ~ 8 constantly.  Thirdly, I've tried put a tag in my pocket and found out that the RFID module could not detect that tag until I was nearly holding the module and pushed it against the tag. All these three questions drove me to either alter my plan or to look for whether if there was a better module.

And in the rest of the week what I have done was reading through a bunch of blogs online introducing different standards, researching on what sort of hardware plan would be the most suitable for the project., chatting with the RFID salesman and ask for advices.

Currently I've decided that, if I am going to stick to this group attendance project, I would use [STC12C52A0S2 Minimal Development Board](https://item.taobao.com/item.htm?id=562141211094&_u=t2dmg8j26111) to prototype since it's got 2 UART ports and it's not too complicated for me to learn to use compared to other STM32 boards I've owned or found out, such as the [COMP2300 STM32L476G Discovery Board].

For hooking up the RFID Module with the development board, I would need to buy an additional chip which would convert RS-232 to TTL so that they could understand each other. TTL is the common standard that would use within the development board, while RS-232 is more focusing on long range robust communications with between the MCU and processors. It's more common on the industrial side.

And finally about the RFID module, there are a couple things I could do in order to keep prototyping. First of all, the tag must be exposed, and I think I would just find out if there is any RFID tags that is in a badge shape so that I can stick it on top of clothes or on the strap of bags. Secondly, I could switch to a RFID module which can hook up to a more powerful antenna (200mm x 200mm) by trading off some portability. Last but not least, I've checked with the salesman and found out that switching from passive tags to active tags could do some help in order to increase the read range but currently I couldn't find any active tags on taobao.

I think I might stop for a bit at this point and re-think about the project. The situation is far away from perfection and I need to  compromise quite a bit, either in size & portability or communication range. On top of that, I would try control the RFID module from the MCU by reading the manual.

See you next week ;)