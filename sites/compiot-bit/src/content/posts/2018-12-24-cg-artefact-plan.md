---
author: Chinmay Garg
date: 2018-12-24
title: Artefact Plan
week: 5
---

## Party Safe Band (PS Band)

You go to a club with your mates to suss it out. Everyone is on the same page - one, maybe two drinks max. It starts off a fun night, everyone chilling, dancing and having a few drinks.

However, some people start to have more than just 'one or two' drinks. Next thing you know, someone is shirtless in the middle of the club while someone else keeps saying they've lost their wallet even though you've told them multiple times that they gave it to to you for safe keeping.

Some time passes and you realise you haven't seen David (purely fictional character, bearing no resemblance to anyone on the trip) in a while. You start to look for him and a few minutes later, still no sign of him. You ask your other friends and no one knows where he is. You try calling him but no answer...

You and your friends start to worry and everyone frantically starts looking for him - not an easy task in a dark, overcrowded club where everyone is jumping around. You finally find him, passed out in a dark corner and let out a sigh of relief after making sure he's ok.

However, the situation could've been a lot worse and dangerous than just being passed out in the corner. "If only there was something to help keep track of how drunk everyone is and their location", you think to yourself.

This is where the **Party Safe Band** or **PS Band** comes in. It allows you to check on your friends and ensure that everyone is safe and sound. It also reduces the amount of time looking and worrying for your drunk friends while not compromising on any of the fun!

### Specification

Each band will be equipped with its own BAC sensor and a small microcontroller (potentially smaller ESP32). The band will be connected to a phone via Bluetooth and send it the recorded BAC data. The phone will then send the data to a server via WiFi from which all the friends in your group can receive your BAC information.

The information will be categorised and displayed in a basic and intuitive way as it is hard enough for drunk people to do basic tasks, much rather deal with a cluttered, complex app.

For demonstration purposes, we might use a laptop to act as the server as it could be easier to set up.

- Insert Diagram \*

### Hardware

Below are the expected sensors and microcontrollers which might be used.

#### Sensors

Passively sensing Blood Alcohol Content is going to be a very non-trivial task. According to the [research](https://www.scientistlive.com/content/detecting-alcohol-sweat) I've done, sweat is one possible way of measuring BAC however, it is still in research stages there are no commercially available sensors for us to work with. We could try to implement it ourselves but it might require access to controlled/radioactive chemicals which will be almost impossible to acquire.

Further research on the AlcoPatch is required, however if the patch changes colour, then a colour senser could possibly be used to detect the level of ethanol (the ingredient which causes the inebriation) in the sweat. If sweat based BAC detection is possible, then we might also require pilocarpine - a drug used to induce sweat - embedded in the device, as there is no other way to guarantee the wearer will always be sweating.

If that is not possible, then a small [alcohol sensor](https://www.littlebird.com.au/alcohol-sensor-for-arduino?fbclid=IwAR3Z-N8NE-RKalL0O6TbA-TRbrnYAWFXEs8oJpGV0xdDlVBrWao_rUz-FT4) could be used where the wearer is periodically reminded to breath into it so that the data can be collected. This is obviously a lot more cumbersome than passive monitoring and is, therefore, a backup option in case we are unable to passively measure BAC.

#### Microcontroller

We're looking at [Adafruit ESP32 Feather](https://docs.platformio.org/en/latest/boards/espressif32/featheresp32.html#hardware). It has both Bluetooth and WiFi which we require for data transmission. It is also supported by PlatformIO which we have previous experience with due to COMP2300 and will hopefully, decrease the time we spend initialising and fixing bugs.

### Software

We will most likely be using C/C++ as is the most common with these type of microcontrollers but is subject to change based on the board we go with. Adi also seems quite keen to work with Rust so it is likely to be used as well.

For the development of the app, we will most likely be using Java and maybe some Python. Neither me or Adi have done mobile app development before, so we're not sure about all the languages and libraries we will use. The languages mentioned above should be enough to implement most of the project and additional software used will be mentioned in the future blog posts.

### Timeline

Dec 26 - Order Parts
Jan 4 - Familiaring self with libraries/board
Jan 15 - Start building app/ Focus on communication between laptop and phone
**Jan 19 - Intermediate Goal - Working communication between laptop - phone, have a very basic implementation of the app working**
Jan 20 - Parts arrive
Jan 25 - Test out software/Make changes to software specifications
Feb 1 - Basic alcohol detection with binary output
**Feb 8 - Intermediate Goal - App can receive data from esp32 and send data to laptop**
Feb 15 - Finished App/Product
Feb 18 - Finish Design Rationale

### Collaboration

Adi C and I are gonna be working on almost everything together and so the work is fairly split 50/50. However, that said, Adi is more interested in the hardware side of things and I'm more interested in the software so there might be a very slight deviation from the split as a result.

### cu next week...
