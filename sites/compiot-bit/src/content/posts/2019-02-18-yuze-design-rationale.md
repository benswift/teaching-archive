---
author: Yuze Gong
date: 2019-02-18
title: Design Rationale
week: 12
---

All the paths I've walked through...

Let's go back to the start point. 

### A Drama in Real Life

Somewhere in the subway station, everyone is chatting with each other, including the student helpers. When they left the train they took and arrived at the train they were transited to, everything seems fine. Is that so?

**WHERE IS JASON?** 

The scenario could be much better if any of the following condition could be met

* Someone noticed Jason wasn't around before people have arrived at the other train
* Someone could get in touch with Jason immediately after they've found Jason had been left behind
* Jason know where the group is heading to 

But the title already gave us the answer. A drama always contains a huge amount of coincidence, so, Jason had to be left behind and keep waiting in the subway station for two hours while others were having fun in the Temple of Heaven. 

The student helper might feel guilty because it is their job to keep good accompany with the group. Those who knows Jason might feel sad because Jason was absent from one of the fun outdoor activities. And there is someone like me, who already foresaw situations like this could easily happen. Now it did happen. If we weren't in an IoT Study Trip, I might just leave it there. But hey, think about it for a bit, the full name of IoT is Internet of Things, and if we think in an more abstract way, human being is still a "thing" -- A living "thing", to be more precisely. If we view human being as a thing, just as we view everything as an object in OOP, what IoT stuff could we use in order to help improve this situation ? 

### Ideation

If we abstract this scenario and view human as moving objects. The problem could be retook as this: 

>A group of moving objects needs to maintain in certain distance with each other. If one left the group for more than a certain amount of time, it would be into a (hard/soft) troublesome scenario. We need a mechanism to let all of them to "survive" as long as we can. 

Does that remind you something? It reminds me of the COMP2310 Swarm Assignment when I reached this point of view. Could we use something similar to that ? 

One of my friends uses a "global table" to store the positions of all vehicles, a bit like how router updates and shared its table with its reachable neighbours. Inspired by these, my first thought was actually to let everyone to act as a beacon and at the meantime, record all other beacons that's visible to them at the time. And Bluetooth technology would be quite handy for this kind of task -- it's very mature, has standard protocol, the communication range is suitable, and most important it's very convenient -- you don't need to rely on any external cables/network. As long as a device supports Bluetooth, it would be able to join the "Internet" of "Things". 

![But I didn't go that way](/images/posts/yuze/NotThatWay.jpg)

The reason is actually quite irrational when I looked back from today's point of view. Bluetooth is so much mature, usable and stable compared to the technology I am using now. But there was only one thing in my mind back at that time, and that's **MONEY**. 

Living in BIT for an extended period of time once reminds me of the fact that China is till a developing country and there are still millions of people live a very poor life. 

*The goal of this artefact is not only to solve this problem properly, but also to make it reachable to the majorities.* And one of the most important factors is to keep the cost in a very acceptable range. Now thinking about it I might have been too extreme in keeping the cost down. But I think this experience is quite valuable. Whenever I need to think about designing something that's useful in a meaningful way, I could always come back to this artefact and remind myself the consequence of going extremely one sided on one of the major designed criteria. 

Given the reasoning above, **UHF RFID** is the technology I decided to go after due to RFID tags have a known reputations for being really really cost-effective. It's been widely applied to other Internet of Things fields, especially in the goods delivery industry, storage management and so on. The huge scale deployment of RFID makes me feel safe when it comes to answering how willingly the user would be happy to accept this product given its price. And since I've done some research on the UHF RFID capability, I decided to use it as the solution to the problem. 

### Design Progress

The Design it's fairly straight forward. It consisted of four components and a client application. 

*Components*

There are originally four component in my design. 

* UHF RFID Reader Module

  This is a development board bought on [taobao.com]() which uses the UHF band and with provided the antenna it could read tags up to 2 meters away. It is the key component for sensing who's around. 

* Bluetooth Module

  The Bluetooth Module is responsible for sending the tag data retrieved from the RFID reader to the mobile phone client. 

* MCU

  This is the brain of the artefact, it is responsible for pulling data from the RFID Reader and pass it to the Bluetooth Module, and transferring the command sent from the mobile client to the RFID board.

* Power Unit

  Powering up all the above stuff. 

But things didn't go that smooth as I prefer. Coming from a CS background having zero hardware development, I hit the first wall as soon as I started reading the user manual RFID Reader Module. I feel a big knowledge gap when I was trying to understand how to connect the reader module to the MCU by asking the sale assistance. He kept spitting a lot of terms as if I were an engineer. 

Meanwhile, programming with the MCU wasn't as straight forward as it is in software. I was spoiled by library functions and already developed certain level of trust that , if something went wrong, it's my fault, where in the hardware world, nothing is trustable at all. When I was trying to establish the control from the MCU to the RFID Reader Module, if I didn't finally give up and ask for help, I would never realise that the MCU is actually that unreliable -- it just works. If it doesn't work at the first time, it might work at the second time. As long as it could achieve what it is designed for. That's it. No more efforts would be put into that. There is no guarantee on any reliability, stability or whatsoever. Needless to mention the companied software....... I appreciate it as a real world of freedom -- you can design nearly everything on your own. The level of design and control is never reachable from a software perspective. But really, that's it. I don't even know what I could deeply trust if I have to do a custom artefact in the future. 

Finally, in order to improve the hardware level stability, I've removed the MCU part from my design and directly hook up the Bluetooth module with the RFID Reader module. It's actually my father, who doesn't know anything about engineering at all, help me break out this hardware trap. Without him helping me thinking out of the "box", I might get stuck at there forever.

After successfully solved the hardware problem, the rest of the development is much smoother once I've got to the software part since that's what I'm most familiar with. Currently I am still working on the GUI of the client app. 

### FAQ

####  What ideas or existing projects inspired your work?

The first part of the blog where we couldn't find out Jason is lost on the way to the Temple of Heaven gives me the "idea".

####  How does your project explore the theme?

To be honest. I didn't know how to reply to this question when I've started my project. I don't even know whether it would count as an IoT artefact. But after all these days I finally have an answer. 

What IoT has achieved is to connect things in the physical world and by using its network capability, providing us, the human beings, who lived in a analogue world, another dimension of information or experience. Sometimes it would try to manifest something that's virtual in an analogue form. 

For me, I am connecting 'people' together. But I am also disconnecting them. I am connecting them because I am providing the information who's nearby and who isn't, or say making people to be able to aware who's present and who's absent more directly. But meanwhile, I am also disconnecting them -- the device could potentially reduce the level of interaction since the motivation to know and remember each person has been reduced -- you could rely on the displayed information. 

#### What do you want the viewer/user to think/feel/do after they've experienced your artefact?

Part of question has been answered above. And generally, I believe most tools (not arts) is trying to free human labours from static, repeat stuff. This artefact is trying to improve the user experience by spending less time trying to figure out who's here and who isn't hence make the whole trip more coherent between different destination. It's a tool, to help people focus more on what they want.

#### What design criteria did you choose to prioritise? Which Criteria did you have to sacrifice?

As in the main blog, I choose minimum-cost and scalability criteria and trade off some stability, reliability and ease of development due to keeping down the cost.

#### What was your design process? How did your project develop over time?

Trial and error. decide one thing, try it, adjust it. See the third part of the post for more details.

#### What were the challenges you faces in developing your ideas and prototype? 

Mainly Hardware knowledge and reliability issue. 

#### How has this project changed the way you think about IoT?

As mentioned in the second question, I would more view IoT as a bridge to connect different dimensions together to provide us another dimension of sensing. 

