---
author: Aditya Chilukuri
date: 2019-01-25
title: Piecing Together Peripherals
week: 9
---

This week, Chinmay and I worked on getting a BlueTooth connection working between the ESP32 board and our phones. We are aiming to use BlueTooth to transfer alcohol content data to the users' phones.

## Windows Woes Continued

The platformIO framework works well on Windows but I realised that more support is available for developers running the ESP-IDF toolchain using the "make" commands provided. Make is simply not supported for Windows, and I have reinstalled the Linux VM provided by BIT during our trip. I will continue my development using the Linux (TinyOS) VM\*.

## BlueTooth with ESP32

The ESP-IDF framework provided by Espressif includes extensive BlueTooth demo projects to get us started with this. The ESP32 supports both BLE (Bluetooth 4.0) and BlueTooth Serial. With the BLE capabilities, the ESP32 supports the General Attribute Profile ([GATT](https://learn.adafruit.com/introduction-to-bluetooth-low-energy/gatt)), a protocol that allows 2 BLE enabled devices to _exclusively_ pair with each other. This is particularly interesting for our project because this means that the Party Safe Band (the peripheral) will stop advertising itself after pairing with the mobile device\*\*.

Chinmay and I struggled to connect the ESP32 to any of our devices using the GATT protocol, until I found [this]() video that explains that the GATT client/server connection needs software (such as that provided by nRF Connect for Android and Apple phones) on _both_ devices to work.

We were finally able to pair

## Alcohol Sensor Connection

The MQ3 Alcohol sensor has four connections: for a ground cable, an input voltage, and both an analogue and digital output signals.

**INSERT IMAGE**

The ESP-IDF provides some useful abstractions for working with the analogue-digital convertors on the board.

In an effort to

## Future Work

Chinmay and I discussed what the final artefact would _look_ like, and what it would include in addition to the board and sensor. We're thinking of a strap/wristband that we could attach the board, a battery and the sensor to. We haven't yet decided how we will make a wristband. We also discussed the user interface to the sensor and figured the easiest way to _activate_ the sensor would be to have a button as part of our artefact. When the button is pressed, the sensor is given power for the next few seconds, giving the user time to breathe into it, and register a reading.

\*I have considered dual-booting/reimaging my computer with a Linux distro to solve these kinds of issues but there are various reasons I can't do that at this point.

\*\*I'm not sure if a GATT connection between a mobile phone and the ESP32 board would mean the phone would also not be able to advertise itself and connect to other devices (headphones etc.). It may be inconvenient to the end user if only the party save band can connect to their phone.
