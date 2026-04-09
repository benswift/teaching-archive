---
author: Yuze Gong
date: 2019-02-01
title: No Brain
week: 10
---

![wheat does not have brain, but it grows quite well](/images/posts/yuze/wheat.jpg)

"Wheat does not have brain, but it grows quite well". 

>an organ of soft nervous tissue contained in the skull of vertebrates, functioning as the coordinating centre of sensation and intellectual and nervous activity.

The brain of any IoT artefact is the micro controller. It is responsible for retrieving data from the sensors, devices and send it to the other end of the internet and so on. 

What if there isn't any micro-controller in the IoT Artefact ? Would it still count as an IoT Artefact ? 

![IoT Artefact with MCU](/images/posts/yuze/brain-vs-brainless.jpg)

We could see on the right picture, the blue-ish board is removed from the setup. And yes, the blue-ish board is the MCU and now my IoT Artefact is a brainless machine -- the HC-05 Bluetooth module is hooked to the voltage converter, which is then hooked to the RFID Module. I've completely bypassed the MCU since the only job the MCU needs to do is 

1. direct the output from the RFID module to the Bluetooth module 
2. direct the output from the Bluetooth Module to the RFID module

We could say the MCU is transparent towards the RFID module and the Bluetooth module, since no one really knows that between them there is a MCU exists. Interestingly, I could configure the Baud Rate of the Bluetooth Module to exactly the same as the baud rate of the RFID module. Ummmmmmmmm, then why not remote the MCU and see if that would work. And it works !

![IoT Artefact with MCU](/images/posts/yuze/bluetooth-serial.jpg)

Now, finally, onto the Android Client development

XDDDDDDDDD