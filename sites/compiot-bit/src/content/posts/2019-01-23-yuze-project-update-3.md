---
author: Yuze Gong
title: Explore More then Find Yourself More Ignorant
week: 8
date: 2019-01-23

---

That's exactly how I felt......

I've bought tons of hardware since my last post.  Here's all of them

- **HC-05 Bluetooth Module**
- **ESP8266 Wifi Module**
- **6 in 1 Converter** (USB, TTL, RS-232, RS-485)
- **STC12C5A60S2** Minimal Board
- **TX-1C STC89C52** Experiment Board
- Huang Hua 907 **Soldering Iron Kit**
- Electronic **Pliers**
- A Bunch of **Dupont Wire**
- 6 dBi Ceramic **Antenna**
- DB-9 to Dupont **Adapter**
- Some **Storage Box** for All the Above Electronics
- Sheng Li 89C+ **Multimeter** (which is still on its way...)
- ... and two set of **Led Light Bulb Spare Parts**

And here's a picture that attempts to capture all the hardware I've owned at the moment.

![A Photo attempts to capture all of my hardware](/images/posts/yuze/Hardwares.jpg)

I bought the **TX-1C STC89C52** Experiment Board because I had a textbook that's about MCS-51 MCU and the TX-1C Experiment Board is its teaching board. I bought the **soldering kit** because the GPIO pins weren't soldered on the board when I got the **STC12C5A60S2**. I bought those **Led Light Bulb Spare Parts** to practice soldering because I don't know hot to solder properly...

### Soldering

I decided to start with soldering. I soldered a radio back in high school and I was one of the five person who could get sounds out of the radio. Hence I have some good memory with soldering, regardless the fact that I actually don't know how to solder properly.

The beginning of learning soldering was confusing, with first I've mistaken someone's opinion saying *230C* to *260C* is the ideal range for soldering and when I found out I couldn't melt any solder I started to questioning whether it's because the tip of my soldering iron got oxidized hence it could not transfer heat properly. At one point I even doubted myself have already oxidized all of my soldering tip .......

Luckily on the next day when I was browsing some forum for tips on soldering, someone's post mentioned that the temperature should be around *300C* to *350C*, which should be depending on the size of the copper pad and the components. After I turned up the temperature, I've found out I could melt solders easily and now I could practise how to heat the components properly and how to apply adequate amounts of solder to them.

Here's what I've accomplished after practising soldering for 2 hours

![Solder Led Bulb Spare Parts](/images/posts/yuze/Soldering.jpg)

After I've gained enough confidence, I soldered the pins to the **STC12C5A60S2** Minimal Board and then moved onto the next part.

### Learning MCS-51 MCU

Before I could start programming the **STC12C5A60S2** Minimal Board, I have to learn something about the MCS-51 MCU using the **TX-1C STC89C52** Experiment Board, which comes with a textbook and video tutorials. *STC* is a Chinese company which mainly focuses on designing and manufacturing different flavours of MCS-51 architecture MCU.

STC89C52 is one of the most popular MCS-51 MCU among China's university because it's cheap and easy to learn and teach. Many company has developed its own teaching board based on STC89C52 where they wired different types of components to the STC89C52 MCU. Typical components includes

* *Seven-segment display*
* *AD/DA Module*
* *Buzzer*
* *4x4 Push Button Matrix*
* *Individual Push Button*
* *74H573 OCTAL TRANSPARENT D-TYPE LATCHES WITH 3-STATE OUTPUTS*
* *Leds*
* *DS18B20 Digital Thermometers*
* *DS12C887A Real Time Clock*
* *TC1602 Liquid Crystal Display*

It was quite interesting and encouraging at the start. They show you how to control the led lights or 7-segment display by sending *1* or *0* to specific registers, which are wired to those components and you need to read the provided Circuit diagram in order to find out which is which. I was quite enjoying this.

![BUT](/images/posts/yuze/BUT.jpg)

![Didn't they tell you it's a 8bit MCU](/images/posts/yuze/8bit.jpg)

![WHAT???](/images/posts/yuze/WHAT.jpg)

I didn't find this out until recently 😑. I was thinking why doesn't COMP2300 use something like this to teach. Although it turns out that MCS-51 MCU will be more friendly to freshers, the hardware capability and architecture is seriously out of date....... Now I can understand why they choose STM32L476Discovery as the teach board.

However, I've already spent a decent amount of time learning the MCS-51 board and I haven't met or foresaw anything that exceeds **STC12C5A60S2**'s hardware capability (That means I've already seen something that **TX-1C STC89C52** could not handle, although I should blame the oscillator rather than the MCU itself).

On the other hand, setting up a new development environment, reading heaps of documentations and *be familiar with a completely new board* in a short time is quite challenging for me. When I started with the MCS-51, I've already bumped into quite a few of technical terms that I have no idea about. I can't imagine what it would be like when it comes to STM32L476, especially at a time where it's hard for me to find help (Chinese Lunar New Year is coming soon).

### Sum Up

Hopefully I could get the **STC12C5A60S2** working correctly with the RFID module and the Bluetooth module. I have no idea if the parity byte went wrong how could I inform the remote module to re-transmit the whole frame again.

Besides, the communication via Bluetooth seems non-trivial. I wondered how much time would it take to get this working.......

That's exactly what the title of this week's blog is -- explore more then find yourself more ignorant. So true.......

Let's end this with a photo of my (not working yet) prototype...;)

![First picture of my prototype](/images/posts/yuze/Prototype1.jpg)