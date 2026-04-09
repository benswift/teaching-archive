---
author: Aditya Chilukuri
date: 2019-02-08
title: Drinking for Science!
week: 11
---

Before we start, PSA: Yes — we consumed alcohol for science, and no — it wasn't unjustified. Neither Chinmay nor I drink alcohol anyway.

## Sensor Calibration — A Practical Approach

Chinmay and I read through the MQ3-sensor [datasheet](https://www.sparkfun.com/datasheets/Sensors/MQ-3.pdf) documentation this week to find more information on the sensor. We found that the datasheet was scarce on information, but noticed that the sensor is rated for use at 5V, while the ESP32 only offers 3.3V output. As a temporary solution, we connected a 5V Arduino to provide power to the sensor. The setup we used for the testing that follows is:

![Setup for 5V Sensor Power](/images/posts/aditya-chilukuri/Wk11/5V_Sensor_Power_Setup.jpg)

The final prototype will need a 5V power supply to power the ESP32 and the sensor in parallel.

This week, a friend and I drank measured standard drinks of alcohol and took sensor readings after 15 minutes — the time it takes for alcohol to enter the bloodstream. As the sensor readings reached a different "stable value" throughout the testing time, Chinmay and I decided to measure the difference in the raw value measured between when blowing and when not blowing on the sensor surface.

![Setup for Getting Sensor Readings](/images/posts/aditya-chilukuri/Wk11/Getting_Sensor_Readings.png)

Here's the data we collected:

![Alcohol Readings Data](/images/posts/aditya-chilukuri/Wk11/Alcohol_Readings.png)

The trend we found isn't as simple as expected — in my case, the difference in BAC reading increases as I have more standard drinks, but this trend isn't found so cleanly in my friends' data. We're limited by the small sample space of data we could collect, and also by the absence of an industrial/police quality breathalyser readings to compare our raw readings to.

## Data Presentation and Social Impacts

We discussed the sensor data analysis issues with Kieran, and Kieran advised us to focus on the other parts of the project — he helped us remember we're building a prototype, not a shippable alpha release. Chinmay and I decided that we'll be using the alcohol sensor readings to estimate classifications — or ranges — of BAC readings.

This avoids the problem of our alcohol sensors, at least for this prototype, are not sensitive enough to provide accurate BAC readings. Chinmay also raised the point about the social impact of this device — with breathalyser-style BAC readings, it's very easy for groups of friends to turn this into dangerous competitions: "Who can get the most drunk?". If instead, the device provided one of 4-5 classifications to characterise how drunk a user is, such a competition would be slightly harder to do because of the lower granularity of information.

This doesn't by any means entirely stop the Party safe band from being misused by groups of people to facilitate competitions. But this situation is telling of how perhaps reducing the information technology provides to users can help protect them — lower granularity readings make it tougher to create competitions of who in a friend group is most drunk, and classifications are also easier to interpret than a raw BAC reading when deciding who in your friend group is at risk due to intoxication.

While on the topic of the social impact of our IoT prototype, I wanted to share some of my thoughts on the data security problem that almost characterises IoT projects. Many IoT projects are security-minded people's nightmares. Specific to our project, I think there are two facets to data security. Firstly, users' blood alcohol content data must be secured from access by anyone outside the friend group. While our prototype hasn't yet implemented encrypted BlueTooth and WiFi data transfer, encryption is key for a final shippable product. Secondly, users' BAC data should be shared between people who can be trusted not to misuse it. This problem is hard to solve with technology, it's the user's decision who he/she allows into their friend group and shares their BAC data with — we can't stop people from misusing our product to create competitions as we don't control our users' choices directly.

## UI Development

I've just started app development on the flutter.io interface — for our prototype at this stage of the project, we'll be building only a simple interface to see different users' most recent alcohol readings.