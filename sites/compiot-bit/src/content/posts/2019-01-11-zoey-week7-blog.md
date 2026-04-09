---
author: Zoey Chen
title: Setting Up
date: 2019-01-11
week: 7
---

I have been talking about my ideas for weeks and this week I finally am starting to make everything come to life!

## Prepare the Equipments
All the equipments we need for current stage are acquired either through online store or local specilist electronic store (Jaycar electronics).
- **Microcontroller:** ESP32-PICO-KIT
- **Sensors:**
    - Piezo vibration sensors
    - Microphone inserts
- **Others:** appropiate wires needed to connect everything together

      ![Images of the equipments](/images/posts/zoey/week7-equipments.JPG)

## Physical Set Up
I then researched and completed the initial physical set up of my project, starting with connecting the vibration sensor to specific input-output pins on the kit motherboard, and then using a USB-C adapter to link them both to my laptop. The LED light on the board is blinking when I connect the board to my laptop, which shows they are successfully connected.

It is a bit more work to connect microphone insert with ESP32 as the microphone insert needs to be soldered onto the board, and I don't have the equipment to do that (need to get access to Enginerring building or MakerSpace to look for helpful equipments).

## Software Set Up
For the software environment set up, I followed a [doc] (https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#introduction) for ESP32. I installed the toolchain, ESP32 specific API / libraries (ESP-IDF) and the Python packages.

      ![Software Setting up](/images/posts/zoey/week7-software-setting-up.jpg)

However, I met issues while trying to find the device name for the serial port of my ESP32. Normally it is supposed to show up when we run
```ls /dev/cu.*```
in the terminal (on MacOS). I installed a [driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers), which some other users claimed to be helpful [here] (https://github.com/espressif/arduino-esp32/issues/1084), but it didn't help with my issue.

I need to put in the device name here to tell the toolchain to upload the code onto the board. This will be the first thing I need to figure out during this weekend.

         ![Asking for device name](/images/posts/zoey/week7-device-name.png)
