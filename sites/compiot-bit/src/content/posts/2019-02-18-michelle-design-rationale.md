---
author: Michelle Zhou
date: 2019-02-18
title: Design Rationale
week: 12
---

## The Beginning of Design

There are some plants that I grew in my dormitory that I would water regularly. During the summer break, I left my dormitory for three months, so I had to ask my friend for help to look after them. It was very inconvenient because lots of them would leave for the break. At that time, I was thinking whether or not there is a way that I can take care of the plants from other places using a remote control system. I was inspired by some of the many horticultural technologies that assist in automation and regulation of modern greenhouse cultivation. Therefore, I decided to design a system that can notify me of the condition of the plants and also assists me in watering it if necessary. I used: an Arduino board, a soil moisture sensor, a wifi module, a water pump and relay to achieve this goal.

Speaking more generically, my project is to develop a system that can sense the condition of items, and send the related data to people, so that people can receive this data and perform operations remotely to respond to their changes in conditions. It helps to disconnect people from their obligation to remain tied down in the one location.

For example, when the council cleaners are cleaning the roads, some roads might be dirtier than others. If there are sensors that can sense the rubbish or dirt on the road, it will be easier for cleaners to design a route to clean them. They might just need to choose to clean some of the roads and can use the appropriate amount of water to clean them according to the road conditions. Another such example could be setting up sensors in the garbage bins so that the trash collectors can get this information of how full the trash bins are and only collect some of the trash bins rather than checking every single one in the town.

These applications assist people in their respective occupations by disconnecting people from physically checking the conditions of items. They just need to react to the system when the condition needs to be improved or changed.

## Design Goals

I would like my artefact to encourage people to use simple and cheap micro-controllers to connect the things in our home to make life better. Although this watering device is not a replacement for gardening as a hobby, it can be very useful when we are on holiday and can’t take care of the plants. All the devices are simple and easy to obtain, and not hard to implement as long as we know how the system works. This is just one of the simple applications that we can design for our home, I want to encourage people to design their own smart home devices to make our lives more advanced and methodical. We can use the internet to monitor and control some of the items at home, and it can tell us how all the things are going at home, or even help to take little actions when receiving our remote command.

## Design Criteria

My primary design criteria are: simplicity and user-friendliness. Since I am using an existing app on the phone to receive and send messages, the interface is simple enough for every phone user and the instructions of sending commands are clear and intuitive. Additionally, because I used this existing app as the interface, I didn’t create a nicer interface for the artefact itself, so it doesn’t look very professional from the appearance. Also, I sacrificed the flexibility of the command because the wifi module doesn’t transport data in a fast way, so the command can’t be executed on time. In this way, multiple commands can’t be sent in a short time.

## Technical Design and Implementation Notes

My design starts with something that can notify me of watering plants because I sometimes forget them. Since different plants need to be watered periodical differently, it might be good to put a sensor in each of them, so they can detect which one should be watered. But for the funding and complexity reasons, I just worked on one sensor. Later I found out that putting more sensors are similar to one sensor, just need a little more complex hardware connection.

The next, and most important part, is to send messages. I decided to use wireless connection because it is stable and wouldn’t need to worry about the longevity of the wires. At first, I wanted to make both of my Arduino board and my phone a client of internet in case that later I will add more modules to transport data. Later I found that there is no need because these two things are enough for my projects, so I decided to make the Arduino board a client and the phone a server to enable the communication. To make the wifi module work with Arduino board did cost a bit of time. But luckily I found some existing apps on phone that can make the phone a server instantly.

At this time the main part of my project, notifying me to water the plants, was almost done.

Then I decided to implement a watering device that can help me water the plants. To do this, I need a water pump and a relay to control it. Previously I plan to control the relay by sending “on” or “off” from the phone, later I found that the react time is too long for the wifi module, which would always cause overwatering. So I change my plan to water the plant for a specific time whenever it received a working command.

This combines the notifying and watering together, it tells me the condition of my plants, and also enables me to perform some operations from remote areas through the wireless internet.

Many people told me that I can omit the data sending procedure and just let the system work itself whenever the plants need water. I agree with it, also think about that the reason I include a watering device is to help care for the plants while I am not at home. The main idea for my project is to know the condition of the plant, therefore do something to make it better. Water is not the only thing that the plant needs, sometimes it might have too much water and needs more sunshine instead. The whole system is not for replacing the hobby of gardening, it just helps us to know the condition of things so that do operations on them.

## Reflection and Parting Thoughts

The challenge for this project is that I don’t have much hardware background to connect the things. I have read lots of different online material about connecting the electronics. When they are not working, it is hard for me to find out whether it is wrong in the hardware connections or software programming. As a consequence, debugging is always a challenge.

Other challenges are: sensors giving inaccurate data sometimes, the standard of deciding the plant needs water, the communication through TCP, the devices not responding to the command, and so on.

This project greatly changes my idea of IoT. Before this, I have seen some smart home advertisements. Everything inside is very technical and advanced. People live a comfortable life with the help of the machines working together. The life looks very fancy and far removed from reality. But through this project, I know that we can use the cheap electronics and CPUs to design our own smart home and they are not hard to put into practice. The system makes the items alive, so that they can tell humans that they have something wrong and need to be fixed. It can save a large amount of time and energy for humans to check the conditions of items. It disconnects people physically checking the items but connects people with items that need to be cared about more closely. With IoT, everything around us can be coordinated and cooperated to help us do our jobs more quickly and specifically, and more time can be saved to care for the things that need more attention.
