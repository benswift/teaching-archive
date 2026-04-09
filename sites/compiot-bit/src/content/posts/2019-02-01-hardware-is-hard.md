---
author: Sam Moore
title: Hardware is hard
date: 2019-02-01
week: 10
---

## Hardware is hard

This week, I have finally had all the resources I needed to begin work on the hardware component of this project. I have only done very basic electronics so far so designing and implementing the circuits has proved quite a challenge for me. 

As for the other hardware, as in the tubes that route water through the system sensor and solenoid, I have that all fitted and I have been testing it manually.

![tubes](/images/posts/sam/tubes.jpg)

Before attempting to implement a circuit to power and control the components, I decided to do a mock up to refer to as I go.

![schematic](/images/posts/sam/water_monitor_schematic.png)

It is definitely not fully correct and will require some more tweaking to get it to function properly in reality.

There are plenty of online resources  to learn how to properly wire up sensors and motors to multiple devices like the Arduino and raspberry pi, so I have been looking into those to gather all the information I need to implement this properly.

### Assumptions don't require research

I made some initial assumptions in regards to the hardware implementation in this project. Likely due to a time shortage my research into the specifics of the design was lacking and fairly thrown together at the time. I have now realised after beginning to build the hardware that there are some things I need to reconsider, and a slight redesign is necessary to have a functioning demo. The main assumption I made is that the controller (raspberry pi) is able to provide power over its 5V and 3V3 pins. This is true to an extent, but as I have learned, drawing the current required to run even a small pump motor is not a good idea at all. The current that can be supplied by the pi is influenced by a number of factors, which as a start is not a good thing for consistency;

- The rated current of the power supply (mine is 2.1A)
- The power usage of the pi itself (changes under different loads)
    - The 5V pins are connected directly to the 5V rail on the pi, so any power supplied to the pi is shared with those pins and that can cause issues with over usage by external devices.
- The available current for external devices is quite low, so driving a pump motor from it is infeasible.

The result of this was me realising I will need an external power supply, which can be quite a pain to manage, wither its batteries I need to charge or replace when then run out, or an a AC→DC converter like a phone charger with specific power specifications that I can wire up to the pump. An up side to this is that the pump does not require digital control in turning on and off. The pump is there to simulate the water pressure that would be present when installing a product into say a tap or main water supply into a home. The control of water flow  is delegated to the solenoid as controlling the pump electronically does not mirror the circumstances of a real world installation.

In retrospect, the assumptions I made were very ill-informed and I should have done some more research in the early stages of the project to properly figure out what I components I needed. Assumptions do not require research, but successful projects do.
