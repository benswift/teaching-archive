---
author: Zoey Chen
title: Method of Processing the Input Data
date: 2019-01-04
week: 6
---

This week's work is focused on the software end, Will is in charge of network part (WiFi and the server) and I will be working on data processing (getting input data from the sensor and apply data processing and math methods on the raw data).

My blog this week will be centred around the use and problem with MiniSense 100 Vibration Sensor. Exploration of the microphone sensor will be introduced in next week's blog post.

## MiniSense 100 Vibration Sensor
MiniSense 100 Vibration Sensor is an excellent accelerometer with an affordable price. It converts vibration to voltage and thus is able to do either continuous vibration or impacts. However, there are two problems with this vibration sensor.

1. The voltage the sensor produces could be higher than the voltage threshold(5V) of the micro controller. Depends on the resonance or not, the voltage sensitivity could be 1.1V/g or 6V/g (proportional to the acceleration). The voltage could be more than 50V depends on the vibration which is way higher than 5V. The vibration of the surface of the drum may not be strong enough to produce a voltage higher than 5V, but if it does, we need to deal with it.

2. The off-axis sensitivity of the sensor is really low.
  ![Off-Axis Sensitivity Image](/images/posts/zoey/week6-Off-Axis-Sensitivity.png)
  Which suggests that the position of how we put the sensor is really essential for the sensitivity. That means we are not able to put the sensor anywhere we want. But at the same time this might but a possible way to fix up problem one - find a position where detecting the vibration is possible and at the same time voltage is not too high.

3. Old problem talked about in the previous post. The measuring method of this sensor is using acceleration and the vibration of the drum may not be strong enough in acceleration sense.

## Test the drums

I used the drum kit in Lena Karmel Lodge to test how the drums vibrate. Here is what I found out.

- They all create a synthetic sound wave combined by waves of very different frequencies.
- Some drums' sound wave and vibration vanish really quick and some are relatively slower. This might affect the accuracy of the sensing - when the drums are hit really fast it is highly possible that they would overlap with each other.

      ![Testing the Drums](/images/posts/zoey/week6-DrumTesting.png)

Resources:
[MiniSense_100.pdf](https://www.sparkfun.com/datasheets/Sensors/Flex/MiniSense_100.pdf)
[Book about ESP32](https://leanpub.com/kolban-ESP32)
