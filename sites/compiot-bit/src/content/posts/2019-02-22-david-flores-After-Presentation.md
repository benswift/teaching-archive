---
author: David Flores Condezo
date: 2019-02-22
title: ★ Ripples in The Red Dragon 12 | MidWeek Interval CRISIS Blog
week: 12
---

Today on Ripples in The Red Dragon, I presented my project, faced terrible unexpected challenges and finished my design document..
This week follow me on the last days in the journey of exploring the field **Internet of Things**,
Delve into my mind as I share my ideas, passion, and knowledge that I steadily built upon my time and experience in Beijing.
I look forward to our time together and to exchanging invaluable concepts. :)
For **LIT** photos documenting my work see below ↓

## Artifact

### Research/Work done this week
 Believe it or not this week I had to do a substatntial amount of research. As you would have known from my previous blog posts, I ordered 2 Wifi Shields separately at different times earlier this year, however the first ended up getting refunded due to error in stock and the second never actually arrived. This resulted in me using an ethernet shield instead. Unfortunately I found out that I would not be able to plug in my ethernet cord during the presentation due to the router access at CS:MSI. This put me in a state of panic as my only solution was to switch to a Wifi Shield and not only reProgram my project/artifact to work with a wifi shield, but also scower the hardware stores to try and find one as buying online again was not a viable soution due to the limited time. I ended up browsing the net and found that JayCar Electronics sold them however only the stores in Sydney had them in stock. Sooooooo I quickly got ready, ran to the train station and went on a quick trip to Sydney.

![JayCar Electronics](/images/posts/david-flores/yorkStretJayCar.jpg)

### Duinotech Yun Shield
I had a choice to choose from either the ESP8266 Wifi Shield or the Yun Wifi Shield, I researched the difference between them and found that the Yun has a full Wifi connection and is also able to operate as a router itself. It's also best suited when you're trying to run complex networking on an Arduino, and to access the WiFi on the Yún you need to communicate with it over the in-built serial connection. The ESP266 Wifi Shield doesn't have the ability to operate as a router itself however it can be controlled through serial using AT commands. Looking at them they both were gonna work so I went with the Yun Shield as it was on sale... I would later find out why.

![Yun Wifi Shield](/images/posts/david-flores/duinotechYun.png)

### Problems Faced
As soon as I bought the Yun Shield, I took the train back home and started working on reprogramming my project/artifact to work with the Yun Shield. Lucky for me I was able to use my mobile data to pull up the Yun Manual to get it up and running.. **Boi I have never been more tilted in my life** The manual was absolute garbage and I quickly found out that the Duinotech Yun Shield was nothing but a rebranded Dragino Yun Shield.... I looked through so many forums all with people complaining with the same problems... How bad and Dodgy the shield is.

![Search Results](/images/posts/david-flores/nightmare.jpg)

I went through countless forum posts, manuals and YouTube videos until finally I was able to get the hotspot started at which I exclaimed with joy.

Following that debackle I was back on track and worked on integrating my existing infrared sensor code with the Yun Shield. This proved to be be pretty simple and I didn't run into any problems, the problem I did run into was trying to integrate my PHP firebase connection code with the Yun Shield. This proved to be quite challenging and I ended up just rewriting it in C instead as a Post function and uploaded it to the arduino alongside the infrared sensor code.

### Reflection on IoT (My Artifact as a puzzle piece in IoT)
 For this entry in my blog I have decided to relate my artifact to the entire field of IoT and comment on the impacts/issues raised by IoT and how this conflicts/relates to my project.
 This week's topic will be relating to Privacy
### Privacy
One of the biggest threats in IoT is all the strain that is user privacy. Recently due to heavy advancement in IoT we have seen a rise in and hacking and security breach. Sometimes even consumers are surrendering their privacy, without realizing it, because they are unaware of what data is being collected by IoT devices and how it is being used and lets face it most people do not read privacy policies for every device they buy or every app they download, and, even if they attempted to do so, lots of them are written in legal language unintelligible to the average consumer.

Increased corporate transparency is desperately needed to ensure that user data is not vulnerable to others. In fact a recent study at the University of Glasgow has shown that consumers are largely unsatisfied with the lack of privacy that IoT is allowing them. As users have grown more aware of the extent of cyber-surveillance through applications like (Snapchat & Tinder: asking users for their location at all times, to the Samsung Smart TV's privacy policy: which warned consumers not to discuss sensitive topics near the device), people have begun taking their privacy more seriously and thus demand that the ultimate control over their data should remain with them.

Now although I have been "marketing" the benefits of OfficEye, being able to give motivation to employees and make sure they're being kept on task. Sticking sensors under employees "noses" to know all this data is a **HUGE** breach of privacy. In fact knowing the exact hours, minutes and seconds that you are working on your desk is definetly scary and not only that but being able to know what applications you are running on your computer is even more terrifying. Sure it increases workplace productivity but also workplace insecurity and personal life exposure. The ammount of data that can be gathered from this is quite abundant and could be used for terrible means if not handled with atmost security.

To not end on a serious note:
![Obama Meme](/images/posts/david-flores/obamaSpy.jpg)

## Warm Regards
To conclude this post, I look forward to my progress next week in finishing programming and building my artifact.

Ciao...

![Beijing](/images/posts/david-flores/Beijing.jpg)