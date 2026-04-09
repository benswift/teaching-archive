---
author: Sam Moore
title: Channels of Communication
date: 2019-01-11
week: 7
---

## Channels of Communication

So it is time to solidify the communication channels between the 'client' (raspberry pi) and the 'server' (my laptop, or any other consumer of the data).

There are two defined groups of messages that need to be sent:

- **Reporting** - sensor measurements
- **Controlling** - control messages (shut water off etc.)

### MQTT Topics

Conveniently, MQTT has a 'topics' system, whereby messages can be categorised by the topic they fit into. If you recall from my previous blog post the `testing/heartbeat` topic is a category for testing with a subtopic called heartbeat. Topics are a great way to distinguish between types and sources of messages. MQTT even implements and wind card system so you can subscribe to multiple topics with some constraints, for example:

The topic structure for a home with multiple water monitors may look like:

`watermonitor/<device-location>/flow-rate` for any number of different reporting devices.

To read from a specific device: `watermonitor/rear-sprinklers/flow-rate`

Or to read from all of them at once: `watermonitor/+/flow-rate`

the `+` character is a scoped wildcard, that will match any of the device location subtopics

there is also a full wildcard `#` that will match anything after it: `watermonitor/#`

The flexibility of MQTT topics makes designing the communication layout very simple.

For this project the initial plan is to utilise the following topic structure:

|                | Topic                                                                                                                                                                 | Sub-topic 1                                                                                       | Sub-topic 2                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Reporter**   | water-monitor                                                                                                                                                         | \<device-location>                                                                                | \<metric>                                                                                                                                                                     |
| Notes          | a base topic is a good thing to have as it separate all the MQTT traffic for the water monitor itself, to make it easier to use the same broker for multiple systems. | the device location will be a simple but unique identifier for a specific water monitoring device | there will be an appropriately named metric subtopic for each metric, even though at this time there is only one (flow rate).                                                 |
| **Controller** | water-monitor                                                                                                                                                         | control                                                                                           | \<action>                                                                                                                                                                     |
| Notes          | "                                                                                                                                                                     | sub topic for all control actions                                                                 | a unique identifier for each action that the monitor can perform. These can include turning on and off the water, as well as updating settings such as sensor read rates etc. |

As for the actual implementation of this, my GitHub repo will be up soon with some more demos and progress towards a function communication system.

### Hardware Status

So far I a few of the components I ordered have been delivered, way sooner than I though which is great. As of today I have:

- The water flow rate sensor.
- The air solenoid I ordered by mistake because I can't read.
- The small submersible pump.

I'm very excited to start developing the hardware component of this project as it will be quite a challenge to handle a water system safely around the other electrical components, lets hope I done break anything...
