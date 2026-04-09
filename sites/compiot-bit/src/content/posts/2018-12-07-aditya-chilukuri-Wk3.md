---
author: Aditya Chilukuri
date: 2018-12-07
title: More Project Ideas — Brainstorming as a Team
week: 3
---

# Two's Company

Over this week, Chinmay Garg (Another excellent blogger) and I have been sharing ideas for our IoT prototype. We've agreed there's a lot of common interests between the two of us. Here are some of our ideas:

### 1. Personal Air Quality Monitor

This is an evolution of the smart mask idea I had — Chinmay and I decided that connecting the air quality measuring functionality to the mask makes it a difficult product to sell. The air quality data could be used more productively for providing updates/notifications to the users' phones, notifying them of any air quality hazards — perhaps tailored to their needs (for example, sending notifications with air pollen concentration for allergic users while on the other hand sending more notifications about dust or PM concentration for asthma patients).

The physical device could be a small internet enabled chip that the user could stick onto his/her bag, clothes, or even wear as a watch. The chip would wirelessly connect to the user's phone and give up to date, real time information about air quality.

The lectures about Big Data in Beijing also got us interested in what we could do with the data, after thousands of people have begun to use our service. One potentially useful (and certainly exciting!) idea we had was to collate the location and create a heat map in real time of the air quality in major cities. This data could then be used to send updates to users *ahead of time* about the air quality along, for example, the route they take everyday for work.

Now, as with any service that relies on user location and medical information, we would have to think about user privacy, both the ethical challenges and practical solutions — like perhaps anonymising the user data, or using a Zero Knowledge Proof Technique to transfer user data to cloud servers while maintaining anonymity.

Overall, I feel really interested in taking up this idea. I've looked into some **[sensor modules]()** that we could connect to an internet enable chips, like the ESP32, and offload any data processing to a cloud server. As I've mentioned previously, as an asthmatic, I'm passionate about air quality related projects that can help people with respiratory problems.

### 2. Smart Locks for Hotels and Apartments

The accommodation here in Beijing has been excellent, and all of the study tour students being placed on three floors has been an excellent part of the experience — there are always people doing something cool after class. But a major inconvenience in the system is card based access to hotel floors and individual rooms. We have to wait to be let in to each floor by someone on that floor, as well as not being allowed into each others rooms. This is more so an issue, for example, with families staying in an apartment or hotel room and only having one card to access the room.

All these issues could be circumvented by a smart lock system — locks that can be opened by phones with the cryptographic key — transmitted using the NFC chip available on most smart phones. A phone app could be used as a platform by hotels to distribute keys to all the people living in each hotel room.

The potential for added features is very large: owners of an access key could give and revoke access to their room to others as they please, the main tenant and/or hotel management may also keep a record of the people entering and leaving the room for added security (more on this later), and even remotely check in to hotels and apartments — no more long lines at check-in times at large hotels or keys left under carpets or behind flower pots for AirBNB style apartments.

The technology that we could use for the smart lock itself, as well as the security concerns of passing cryptographic keys over wireless network are really interesting, and I will look into some methods of doing this in the coming week.

### 3. Wildlife Detection for Automobiles

This was Chinmay's original idea at the [start of the trip](https://cs.anu.edu.au/courses/china-study-tour/news/2018/11/23/chinmay-s-intro-blog-post/). Briefly, the idea is to use infrared camera or ultrasound sensors to detect wild animals that are in the way of vehicles driving in the night. Upon detection, the driver would be immediately notified to slow down the car or take evasive measures.

So far, this idea didn't seem very "*Internet* of Thingsy". I discussed this idea with Kieran, and he raised the possibility of gathering wildlife data using our sensors. In recent times, due to rapid urban development and climate change, wildlife is increasingly moving towards cities, and away from warmer climates. If our proposed sensor module were used by a large number of cars, we could potentially gather in a centralised server a lot of real-time data on the locations of kangaroos and other native wildlife. This could help conservation authorities monitor large-scale movements of animals over time.

We still need to look into the sensor technology — can a relatively cheap infrared or ultrasound sensor be used to detect the temperature / sound attenuation gradient accurately enough to identify animals from a significant distance (perhaps about 100m)? This would be a major technological challenge we would have to solve with our system.

## Some Broad Reflections on IoT

I want to close this week's post with some patterns I see emerging in the ideas we've had so far, and IoT generally. It seems that, at least with Idea 1 and 3, there is huge potential with the data that is being created by the sensors to both do a great deal of good — like help the lives of asthma patients by warning them of bad air quality — and also to do a great deal of harm — by syphoning their location data and private medical information for third party companies.

I suppose this is the nature of collecting Big Data, but these ethical concerns popping up in our ideas is something a little surreal to me — and makes me appreciate the concerns that some people have with IoT and wireless sensor networks.

That's all for this week, see you next time!