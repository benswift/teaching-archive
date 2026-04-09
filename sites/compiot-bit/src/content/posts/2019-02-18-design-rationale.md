---
author: Chinmay Garg
date: 2019-02-18
title: Design Rationale
week: 12
---

["Almost 6,000 Australians died from alcohol-attributable disease in a single year, about one every 90 minutes"](http://ndri.curtin.edu.au/news-events/ndri-news/media-release-alcohol-causes-nearly-6,000-australi)

### Initial Idea

Everyone's had those nights where their friends drink too much. I know I have. And as the resident non-drinker in every group, I make it my responsibility to look after them and make sure they don't do anything risky or potentially life-threatening. But sometimes, it's hard to just look at someone and know just how drunk they are - at least for me. 

One of the hardest things on a night out is to convince drunk people that 'Yes, they are, IN FACT drunk, and not you' as some of them might try to convince you. It becomes harder to keep an eye on everyone when you have multiple intoxicated friends and they split off into different areas of the club. After having a similar experience in Beijing, I thought about what could potentially be helpful to make it easier to ensure that everyone was safe - and that's what inspired my artefact, the PS Band.

So, that leads us to, what *is* PS Band?

PS Band is a sort of tracker (like Fitbit, for example) but instead of tracking your steps, it tracks your Blood Alcohol Content (BAC). It is basically a battery powered ESP32 microcontroller which is connected to a alcohol sensor. The idea is that everyone in the group wears a PS Band, which is connected to their phone and sends the wearer's BAC information over Bluetooth. The phone then uploads individual's BAC values to a server via WiFi, from which it can be accessed by the members of the group using an app. Therefore, everyone is able to monitor their own and additionally, their friends' BAC values. This makes it easier for people in groups to take care of each other and give higher attention to those with a higher BAC. 

### (Dis)Connecting Together

Nights out are about having fun and people connecting with each other - and this artefact helps people to connect more safely while not diminishing any of the fun. The artefact also connects people, quite literally, via the app which is used to keep track of each other. As an additional feature, there could be an option to add random fun strangers you meet on the night to your group in the app, which helps to create deeper connections but is less personal than adding strangers on Facebook.

### User experience

I want people to be more responsible drinkers after experiencing the artefact and realise when they've had enough drinks and should not drink anymore. Often times, people just might not realise how much they've had to drink. PS Band hopes to promote responsible drinking by educating people on their BAC. This artefact can also be used to measure who has the lowest BAC at the end of the night, actively encouraging people to drink less or not at all (won't happen, but a guy can dream).

However, realistically, this artefact also has the potential to backfire and encourage drinking instead of reducing it. For example, drinking could be turned into a competition to see who has/can reach the highest BAC value where the scores are recorded on a leaderboard. This could encourage people to drink way beyond what they would have normally, and could also lead to alcohol poisoning.

To discourage this from our side, Aditya Chilukuri (my partner) and I, are going to broadly categorise the BAC readings, instead of displaying the actual values, to reduce the level of granularity associated with them. This won't completely discourage the competitions but hopefully, it will greatly reduce their number by making it harder to compete. The categories are colour coded based on the the traffic light system. It ranges from green (no BAC) to orange (medium BAC) to red (high BAC). These are going to be displayed in huge font, in the centre of the screen so it is extremely easy to read.

### Design

During the initial conception of the idea, Adi and I were quite excited to passively monitor BAC using transdermal sensors. Unfortunately, after a few weeks of research, we concluded that we didn't have access to the necessary ingredients nor the chemical expertise needed to pull it off. Therefore, we decided to go with a MQ-3 alcohol sensor, which requires users to actively blow on the sensor for it to produce BAC readings. Even though it wasn't what we had initially hoped for, it still got the job done - which was to make a prototype for an artefact to promote responsible drinking. As we didn't need to/couldn't spend as much time on developing transdermal alcohol sensors, we decided to use that time to develop a mobile app instead.

Another necessary design change we had to make was the inclusion on an Arduino to power the sensor. So, the alcohol sensor is typically meant to receive a power input of 5V, which we were not aware of until the parts had arrived. The problem was the Node-MCU 32S microcontroller we were using only had power output of 3.3V. By the time we realised it might pose a problem, we had already spent quite a bit of time with Node-MCU microcontroller so switching to another microcontroller was not a viable option. Instead, we borrowed an Arduino from someone else and used that to power the sensor. So now the sensor was powered by Arduino (5.0V) and sent the raw analogue values to the ESP32 which contained the code we developed.

Initially, Adi and I started working on the project individually but soon realised that it was counter productive as it took longer to figure things out and also meant we wasted twice as much time as we encountered similar problems. After realising that, Adi and I started meeting up every day or two to work on the project together - not only so we can be more productive but also so that the other person knows everything about the project that you do. This also meant that we were not limited to suggesting/implementing improvements to just the parts we worked on, but to the project as a whole, which hopefully increased the overall quality of the artefact.

As we got closer to the deadline, we had to be more selective in our development as we simply did not have enough time to do everything we wanted. This meant making decisions - such as - prioritising the Back-end over the UI/Front-end of the app. We chose this as we felt that an app with a nice UI which does nothing is not as useful as an app which might not have the best UI but actually does what it's supposed to. 

### Reflection

As the PS Band is still a prototype, it is not extremely sophisticated at the moment and comes with some issues. A problem we're facing with the current prototype is that the readings are not completely precise. This is due to the way the sensor works, which makes the values slightly dependant on the temperature of the sensor itself. However, as we have decided to classify the readings into broader sections (to try and reduce alcohol competitions), this isn't a particularly large problem. Although, it does mean that this prototype could not be used by law enforcement/medical departments for completely accurate and precise readings which breathalysers carried by police produce.

There are a few improvements which could be made to increase the usefulness and usability of the PS Band. This idea could be extended to include a GPS chip and a potential button to notify Emergency Services. However, this again has the potential to be misused. If the GPS data from the users is not secure and protected properly, it can be used by criminals to target intoxicated people who have greatly decreased cognitive ability.

Previously, I wasn't really sure what Internet of Things meant. It was just a buzzword like AI or Machine Learning that people threw around but most didn't really know what it means. After this project, I feel I know a lot more about IoT than I did previously. Before going to Beijing, I thought that IoT was just making any device (no matter how random) internet enabled. And while that's still true to an extent, that's not its only function. IoT can be used to help people by connecting them, and making their lives simpler and easier. However, it can also be used to hurt people by surveilling them and collecting their data to sell to others. 

IoT is a bit like our PS Band in a way, as it can do a lot of good, if used for that purpose, but, also has the potential to be misused and hurt people. Overall, this was a great opportunity to build an IoT device myself which has greatly increased my understanding regarding what it is and how it can be used.
