---
author: Ushini Attanayake
title: + Memory Machine
date: 2018-12-16
week: 4
---

I'm a very forgetful person.
Our time in Beijing expires and I leave wishing I had taken more photos, more videos, bought more souvenirs; anything to remember the amazing three weeks we had. But there are so many memories that couldn't be captured by a camera, like how cold it was or how delicious the Lamian was in that one restaurant down that one street. So, though my memory is as leaky as a sieve, I like to think I tried my best to interact with every experience as much as possible in China and I think it made the memories a little more viscous. Hopefully that's enough to last me a few years :)

In my [last blog](https://cs.anu.edu.au/courses/china-study-tour/news/2018/12/07/ushini-week-3/), I decided I wanted to create a device which allows an audience at a live coding gig to interact with the music being created. There were a few questions that were left lingering after last week.

### For the live coding gig at a club

In a club setting, one use case for such a device is a means to collect motion data from people and use this information to affect the music being created.

##### Should the device collect motion data from the entire body?

I wanted to collect data from the entire body becuase I wanted the way people danced to affect e.g. the rhythm or tempo etc. However, I think capturing motion all over the body is outside the scope of this project.
The only work I found which monitors motion from the entire body involved using video data and computer vision techniques. See [Optical Tracking for Music and Dance Performance](https://pdfs.semanticscholar.org/43ac/7c178367e4bece4798d5221498ee41982761.pdf). Other works embedded piezoelectric acceleration sensors in the shoes of dancers to monitor the rhythm of their footwork. But I want my device to be practicle to offer at a nightclub and 'smart dance shoes' doesn't scream practicle to me. Mark Christopher Feldmeier's [Large Group Musical Interaction using Disposable Wireless Motion
Sensors](http://dspace.mit.edu/bitstream/handle/1721.1/33547/52641276-MIT.pdf?sequence=2) explores interactions using piezoelectric foil accelerometer which detects motions of the limbs. When the acceleration passes a certain threshold, a radio transmitter transmits radio frequency pulses. These pulses are then used to determine any rhythmic features in the motion and estimate the level of activity of the dancer/club-goer. Pretty cool stuff.
Park, Chou and Sun's use a very compact and low power sensor node called the Eco. The Eco, which had real-time monitoring capabilities, was modified slightly by adding more sensors. This was because the original design of the Eco only had one accelerometer and this was found to be inefficient at capture the detail of the dancers movements. In fact, the additional sensors (a three-axial accelerometer, temperature sensor, image sensor, light sensor and gyroscope) were not only collecting motion data so following this design exactly might be too complicated for my purposes. However, depending on how I go, I would certainly consider using multiple types of sensor. Perhaps an accelerometer, temperature sensor and or a pulse sensor.
Unfortunately, the Eco costs about $50 a piece and I would love for my device to be a bit more affordable.
So, I've decided to only use motion from the dancers arm to get me started with the EP8622 which I mentioned in my [previous blog](https://cs.anu.edu.au/courses/china-study-tour/news/2018/12/07/ushini-week-3/) and an accelerometer and see where that gets me.

##### How can we make this system scalable?

In a club we aren't just monitoring the motion of one dancer. A lot of the solutions above haven't been designed to scale well to collecting data from multiple dancers. I want to find a way to aggregate the data from all dancers in a club.
Park, Chou and Sun's work in [A Wearable Wireless Sensor Platform for Interactive Dance Performances](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.75.4428&rep=rep1&type=pdf) achieves this to some extent.
Their system consists of multiple nodes on the body of the dancer (several sensor nodes on the limbs of the dancers and one aggregator node worn on the waist of the dancer to aggregates the data from the sensor nodes) and a wireless interface board. This design serves to solve the problem of scalability by separating the system into two different networks. One is the network on the body which is similar to the heterogeneous network architecture. The data from all the sensor nodes are fed to aggregator node which is slightly more powerful. Generally the sensors nodes don't have enough power to transmit all its data directly to the central board. So, having a powerful aggregator node will help prevent the signal from degrading. The second network consists of the aggregator nodes of all the dancers and the central interface board.
I really like the network architecture and I'd like to use a design similar to this one. It would also help me use multiple sensors on both arms and feed this to an aggregator. The only problem is that having a network with multiple nodes will be fairly inconvenient to distribute at a nightclub.
The next question is how to aggregate the sensor data and which parts of the code do I want this data to affect. There would, could should be some answers next week. See you then :)
