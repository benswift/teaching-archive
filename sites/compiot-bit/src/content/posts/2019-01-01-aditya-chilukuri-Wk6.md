---
author: Aditya Chilukuri
date: 2019-01-01
title: Orienting Ourselves
week: 6
---

Parts ordered — the breathalyser sensor modules have arrived already and the boards should arrive by the end of this week. In this time, I've been reading about sweat-based BAC sensing techniques, particularly [this](https://pubs.acs.org/doi/abs/10.1021/acssensors.6b00356) paper by Kim et al. I mentioned last week.

## Sweat-Based BAC Sensing

The sensing technique used by Kim et al. uses a two stage process to measure sweat alcohol content. A patch consisting of sensor and inducer cathodes and anodes are placed on the person's skin. In the first stage, pilocarpine, a sweat inducing compound, is absorbed by the skin in a process called iontophoresis — where a small current is applied to the skin to speed up absorption. After a few minutes, sweat has been induced on the skin covered by the patch, and a small voltage is applied. The amperometric response (the current induced) is measured and this current proportional to the blood alcohol content.

![Sweat Based Alcohol Monitoring](/images/posts/aditya-chilukuri/Wk6/Sweat-Based-Alcohol-Sensing.JPG)

I have analysed the specific sensor technology Kim et al. used, and have listed my thoughts for each of the components Kim et al. used for their prototype — to answer the question: Can we build this thing ourselves as two undergrads without a formal chemistry/biology background?

- Kim et al. used a TI-LM334 current source for the iontophoresis needed for pilocarpine transfer. The TI-LM334 is a standard for adjustable current source chips which can be used in a variety of microcontrollers. A cursory search found me these chips for about $10 on the Texas Instruments (TI) Official Store.
- The paper also describes using a TI CC2541 Bluetooth Low Energy (BLE) enabled microcontroller — the ESP32, with the excellent PlatformIO support that comes with it, should be sufficient for our prototype.
- A TI LMP91000 "chemical sensing analogue front end" was used for sensing the sweat alcohol content — it induces a -0.2V potential across its two electrodes for the constant-potential amperometry (basically keeping V constant while measuring A (isn't this basically the sweat's "resistance"?)). The current needs to be measured using an analog-digital converter (ADC), which our ESP32 board provides out of the box. The TI LMP91000 is a little more pricey at about $25 each (TI Official Store).
- Kim et al. also describe their low power data transfer:
    >[The samples were] transmitted via a Johanson Technology 2.45 GHz chip antenna (2450AT42A100) and impedance matched balun (2450BM15A0002) in a 2-byte format to a Bluetooth 4.0-enabled receiver.  The flexible PCB was powered by two 396/397 watch batteries (2 × 1.55 V, 33 mAh each) mounted in series and conditioned via a TPS61220 boost converter and an LM4120 low-dropout voltage regulator.

    This isn't too interesting to me — I want to focus on the technology used in passive blood alcohol sensing for this prototype — power usage is of secondary concern because the Party Safe Band needs to work only for one night on a battery with intermittent BAC sensing.

At this stage, as most of these sensor hardware are easy to acquire, and I am looking further into the "chemistry" aspect of building the sensor — pilocarpine is available at pharmacist stores but may require a prescription (some of its side effects of improper use on Wikipedia are nothing to sneeze at). A gel substance was also used by Kim et al. on the sensor patch where the sensor contacts the skin — I've made similar stuff in high school but concentrated hydrochloric acid is needed, and I wouldn't have the permits necessary for that. I will look further into the chemistry-related reasons for using this gel and if I can get around this issue.

The sweat alcohol content sensor technology looks to be on the cusp of being possible for us to create based on the rough blueprint provided by Kim et al. More on this next week.

## The Breathalyser Component

Chinmay received the breathalysers on Wednesday (4/1/2019) and they look in excellent shape. In the next blog post we'll cover initial experimentation with the sensor and the ESP32 boards if they arrive.

## GitHub Repository!!

I've started a GitHub repository where Chinmay and I will develop the code for this project! You can find it [here](https://github.com/Aditya-Chilukuri/party-safe-band)!