---
author: Ushini Attanayake
title: + King Aggregator & The Accelerator Accumulator
date: 2019-01-20
week: 8
---

So here I am, innocently turning over rocks in the field of audience interaction with live music, looking for a decent way to aggregate the data I will collect from my devices, when I find this. [Experio: a Design for Novel Audience Participation in Club Settings](http://www.nime.org/proceedings/2014/nime2014_481.pdf). Someone stole my idea and did it better. Not cool Bastiaan van Hout. Now, its personal.

### Why my idea wants to be Experio when it grows up, but will remain its own person for now.
![I am artist](/images/posts/ushini/kingGizzard.jpg)
I joke, I kid of course. It was great to see the implementation details of an idea close to mine. The team that developed Experio had this cool idea of casting lasers across the floor of a club; 6 different sectors to be exact. Then, as people start dancing through the laser light, the changes in light intensity were used to either trigger preloaded MIDI tracks or control various parameters of tracks which are already playing. Each sector of light has a specific affect on the music and its up to the dancers to find out what it is. For example, one will trigger a certain instrument to sound, one controls the tempo or rhythm of one component of the music. The master control over the musicality and audio is governed by a moderator interface. This is likely operated by the DJ. After observing its use in a club setting, Hout and his team found that the best results came when only one person danced in a given sector. They also observed that audience members were more willing to participate if the their personal movements were distinguishable in the music.

![experio](/images/posts/ushini/experio.jpg)

I love the rich interactions enabled by the sextet of lasers. My idea, as it stands now, doesn't allow for the audience to affect various components of the music. But, I think its possible to incorporate it. I didn't like the fact that the interactions in Experio were designed to work well with
one person. After some discussion with Ben and Kieran, I think it would be interesting to turn Hout's findings on its head; I want the audience to work together or against each other to see how they affect the music as a group. They may not necessarily be able to identify their individual contribution to the music. I think this would be an interesting take on the theme (dis)connecting together.

I think this will work best if alot of, if not all, the control is given to the audience. Then, we can see the emergent effects their aggregated motion has on the music; whether it sounds good or bad.

### The thing with the MPU6050 is

It has a 3 axial accelerometer and gyroscope. This means it outputs 6 values. 3 values represent the acceleration in gs in the x, y and z direction. The direction of the acceleration will be at a certain angle from the x, y and z axis. The final 3 values represent the rate at which these angles change.

![accel n gyro](/images/posts/ushini/accel_gyro.jpg)

I want the acceleration and the rate of rotation to affect two different components in the music. For example, rolling your arms would change the rate of rotation which could affect the volume. Pumping your fist could affect the tempo. In each case, we will be working with 3 axis. I plan to only look at the magnitude of the sensor data so that I don't fall into the situation where a change in direction causes the aggregated signal to be zero. I will aggregate the data for each sensor and axis across all devices. This will result in a 6-tuple of accumulated data. I could add a weight to each axis so that each direction contributes differently to the overall sum. Then I will take the maximum value for the accelerometer and gyroscope across all axis. I could also sum all three axis as this would give more fine grain control. Since I will have three devices, I will determine what the maximum aggregated output is for 3 devices for both sensors, then determine what the current aggregated output is as a fraction of this maximum output. Take a shot every time I use the word 'output'. For safety reasons, I will choose a maximum tempo and volume and use the fraction we calculated to control these parameters.
The MPU6050 also comes with a 1024 byte FIFO buffer. I'm not sure if this will be necessary, but I can see it coming in handy if, for example, collect sensor data over time and map spikes in this data to a rhythm.

### Technical issues
When I left you last time, I couldn't connect to the internet :( You'll be happy to know that I have now connected to the internet. The issue was that I was trying to connect an edu network which required an ID and password to gain access. If you just make your computer a mobile hotspot and connect to it using the password it should be good. So yes, whoops-a-daisy. Minor faux pas.

![I am artist](/images/posts/ushini/connect_accelto_node.jpg)

In other news, I tried to connect the accelerometer to the nodeMCU and it turns out that the nodeMCU only just fits the width of my breadboard :( and I only have male-to-male jumper cables. I really should have checked this. So I'm trying to do all the wiring under the nodeMCU and then fit the nodeMCU onto the board ontop of the wiring. I'll eventually solder everything though. I'm also starting to realise the nodeMCU is fairly bulky. I did want to see if the ESP12-E wifi module alone is capable of transmitting the data. But testing that is backburner at the moment. I'll check all of that stuff after I get something working.

Wish me luck, and see you next week :)
