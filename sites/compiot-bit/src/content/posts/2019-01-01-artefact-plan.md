---
author: Sam Moore
title: Artefact plan
date: 2019-01-01
week: 5
---

## Artefact Plan

Hey everyone, this is my plan for how I will implement my home water usage measurement system.

#### (dis)connecting together

As the world becomes more connected, people change the way they behave. The decisions that people make are more commonly influenced by information that wouldn't have had access to even five years ago. There are so many new sources of information every day it becomes a bit hard to keep track of. WIth my project, I want to bring a number of things to a connected world. The first is a better way to keep informed about water usage and issues with a home water system, with almost zero required interactivity. I want something that goes on in the background, so while it makes people more connected to their homes, it does not get in the way. The second thing is nothing at all, if it provides no other purpose other than telling you if your house is about to be under water that is fine. Plenty of people don't like the idea of everything being connected, so using it as a failsafe that could prevent significant damage to their home is a valid use case as well.

#### Technology

##### Microcontroller

I will be using a raspberry pi 3B, because I already own it and it has everything I need in terms on I/O and networking.

##### Sensors

Small [water flow sensor](https://cgi.ebay.com/ws/eBayISAPI.dll?ViewItemVersion&item=331264634461&view=all&tid=1608850105014) to measure water flow

##### Actuators

Small [submersible pump](https://www.ebay.com/itm/312146714365) to simulate water pressure that would normally be mains water pressure.
[Fluid soleniod](https://www.ebay.com/itm/163428679876) to halt the flow of water if some condition is met (leak detected etc.)

##### Software

- **Python** - the GPIO pins on the raspberry pi are easily [programmable using python](https://www.raspberrypi.org/documentation/usage/gpio/python/README.md).
- **MQTT** - a network protocol that is very popular for IoT devices. I'll use [mosquitto](https://mosquitto.org) as the broker as I have experience with it from COMP3310
- **Flask** - Python web framework to serve a web page, I'll have MQTT callbacks from button presses to communicate with the microcontroller as well as use the page to display device statistics and configuration.

#### Timeline

I have already ordered all the parts I should need so first its the waiting game.

I can get started with the software, and even nearly complete the software package before the parts arrive because the sensors and actuators function can be stubbed for testing.

1. **Spin up an MQTT broker** as it will be the connection between users and the device. Both sides of the system communicate through this so it is the logical first step.
2. **Work on the user-facing side** to give the hardware some extra time to arrive, I'll begin working on the controls and data configuration from the users perspective first, as that does not require any of the embedded hardware to function.
3. **Embedded code** Once the interface is complete, the next step is to hook it up to the actual device. Even if the hardware hasn't arrived, I can write the code for the embedded system that sends data and receives commands.
4. **Design the circuit** This is probably the most difficult step and will require some research and prototyping.
5. **Make sure everything works together** Testing and applying fixes to each part of the system will also take significant time but everything will come together in this stage.

#### Intermediate Milestones

- **By Jan 14**: Have the interface completed
- **By Jan 21**: Have the embedded system up and running (without hardware)
