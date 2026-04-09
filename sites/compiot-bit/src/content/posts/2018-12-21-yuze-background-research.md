---
author: Yuze Gong
date: 2018-12-21
title: Background Research
week: 5
---

I have determined to prototype the attendance device so that next time (if there is a next time), it would be much easier to do the attendance check and (maybe) much earlier to find out who's been left out. Now it's time to do some background research.

Currently, there are three types of RFID tags and each of them is using a different frequency, where the first kind utilizes **Low Frequency**(125 – 134 kHz), the second utilises **High Frequency**(13.56 MHz) and the third one utilizes **Ultra-High Frequency**(433, and 860-960 MHz).

Here's a blog that explains their difference quite clearly:

> **Low Frequency (LF)** – An extremely long wavelength with usually a short read range of about 1 – 10 centimeters. This frequency is typically used with animal tracking because it is not affected much by water or metal.
>
> **High Frequency (HF) & Near-Field Communication (NFC)** – A medium wavelength with a typical read range of about 1 centimeter up to 1 meter. This frequency is used with data transmissions, access control applications, DVD kiosks, and passport security – applications that do not require a long read range.
>
> **Ultra High Frequency (UHF)** – A short, high-energy wavelength of about a one meter which translates to long read range. Passive UHF tags can be read from an average distance of about 5 – 6 meters, but larger UHF tags can achieve up to 30+ meters of read range in ideal conditions. This frequency is typically used with race timing, IT asset tracking, file tracking, and laundry management as all these applications typically need more than a meter of read range.
>
> <cite>https://blog.atlasrfidstore.com/active-rfid-vs-passive-rfid</cite>

And all of the above are talking about passive RFID, which means it does not require any internal power source. The tag itself is powered by the electromagnetic energy transmitted from an RFID reader. The advantage of using a passive/powerless RFID tag is its really cheap. The typical cost of a passive RFID tag could be somewhere between $0.20 to \$5. However, low costs trades off transmission range and robustness. The disadvantages of powerless RFID tags could be very frustrating if, for example, the leader of the group does not know any of the group member before hand hence he needs to yell out his/her name in order to check the attendance of the "missing group member". But if it comes to a group of people that's (going to) be familiar with each other, the low cost would quickly overweighs the drawbacks.

For Active RFID, the transmission range would no longer be the issue. And it would be much easier for the group leader to be noticed who's been left behind as long as people still stays in a group-ish shape rather a snake-ish shape. The battery life of a active RFID tag could lasts for 3~5 years, which surprises me a lot. If it could last that long, there is a higher probability that people would lose the tag before the tag runs out of battery.

There are two types of Active RFID tags namely:

> **Transponders** – In a system that uses an active transponder tag, the reader (like passive systems) will send a signal first, and then the active transponder will send a signal back with the relevant information. Transponder tags are very efficient because they conserve battery life when the tag is out of range of the reader. Active RFID transponders are commonly used in secure access control and in toll booth payment systems.
>
> **Beacons** – In a system that uses an active beacon tag, the tag will not wait to hear the reader’s signal. Instead, true to its name, the tag will ‘beacon’, or send out its specific information every 3 – 5 seconds. Beacon tags are very common in the oil and gas industry, as well as mining and cargo tracking applications. Active tag’s beacons can be read hundreds of meters away, but, in order to conserve battery life, they may be set to a lower transmit power in order to reach around 100 meters read range.
>
> <cite>https://blog.atlasrfidstore.com/active-rfid-vs-passive-rfid</cite>

Active RFID tags are mostly deployed in rough environment, hence it's the rugged design that mainly raises the price. However, in a group trip scenario, since most of the time the environment is mild, if we can bring down the price by removing the rugged design, that could be a really good solution to the group attendance problem.