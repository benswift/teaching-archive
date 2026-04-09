---
author: Aditya Chilukuri
date: 2018-12-24
title: How do You Find a Social Drinker?
week: 5
---

> Every time someone says, 'I'll have a drink' — They say, 'Social I.'

## The Project

As humans, we're pretty bad at self-control — what we know is right, and what we do, are often entirely separate.

Our relationship with alcohol is always an interesting one — social drinking at bars, clubbing, music festivals and the like all share the risks associated with alcohol overuse — and it's a difficult problem, especially when you're with your mates and everyone is egging each other on in drinking games and the like that only get more crazy as time passes.

Our solution is specifically aimed at everyone who go out with their mates to a music festival, club or the like, for some drinks to have fun. We propose the Party Safe Band (PS Band): a BlueTooth enabled Smart wrist band equipped with an blood alcohol content sensor to allow you, and all your mates, to keep track of each other's alcohol levels as you safely party.

We believe the PS Band can help you and your friends in ultimately making better decisions about who's good to drive home, who's had enough drinks for the night, and who's probably going to need to be looked after the most. Say goodbye to all the situations where you've had to tell your mates they've had enough and all the mindless arguments that follow.

At its core, PS Band is about how we can make a difference to how all of us, as social creatures, deal with safe drinking — and how technology can help us in [Connecting Together](https://cs.anu.edu.au/courses/china-study-tour/deliverables/04-IoT-artefact/).

## And Now, Our Technical Requirements

The project will require:
 - a microcontroller with:
     - GPIO ports to communicate with an alcohol sensor
     - Bluetooth capability to communicate to user's mobile phone.
     - If battery requirements permit, a vibrator may be connected as a peripheral that can notify the user to use the alcohol sensor.
 - Phone app development to:
     -  receive alcohol readings
     -  get current location
     -  keep in communication with the server
     -  graphical user interface to display the intoxication of everyone in the friend group
 - Server development to:
     - keep track of all app users' incoming messages
     - collate and forward up to date information about everyone in each friend group to all the members' phones.

For our project, the ESP32 chip looks like the best choice of microcontroller — it has inbuilt BlueTooth capability and most boards provide sufficient GPIO pins for this prototype. The Adafruit ESP32 Feather is reasonably priced (\$20) and is supported by [PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/featheresp32.html).

App development will most likely be for Android for this project — I have some experience using Java from other courses and [COMP2100](https://cs.anu.edu.au/courses/comp2100/) covers some Java based app development that Chinmay and I will refer to throughout the app development process.

For our prototype project, we will use a laptop for our server architecture.

Now, for the alcohol sensor — we will place an order for and build around a [breathalyser style alcohol sensor](https://www.littlebird.com.au/alcohol-sensor-for-arduino#description) that the user can breath into periodically upon notification. The sensor analyses the breath and the onboard ESP32 chip relays the information back to the phone via BlueTooth, which handles the server side communication.

We are also looking into passive alcohol content monitoring based on analysing the user's sweat.

## Workflow and Timeline

Chinmay and I are working together on this project, and we've decided that while the work is split 50-50, I'll be focusing more on the hardware side (working with the microcontrollers) while Chinmay will be focusing more on the app and server side development.

We decided on the following timeline (list of deadlines) for our project:

| date    | week | What We Will Achieve                                                                              |
|---------|------|----------------------------------------------------------------------------------------------|
| Dec 26 |    5 | Place Orders for Hardware                                                                |
| Jan 4  |    6 | Familiarise with libraries, decide on software infrastructure (Rust/C/Arduino for the microcontroller)                                                         |
| Jan 15 |    7 | Start building our app; Get communication between laptop and phone (IP based) working |
| Jan 19 |    8 | Intermediate Deadline — Working communication between laptop <-> phone; basic implementation of the app             |
| Jan 20 |    8 | Parts should have arrived                                            |
| Jan 25 |    9 | Test out software on the board; Make changes if necessary and be able to flash the on-chip software to the board                     |
| Feb 1  |   10 | Basic alcohol detection is working                               |
| Feb 8  |   11 | Intermediate goal — App can receive data from esp32 and relay the message to the laptop which updates database                            |
| Feb 15 |    12 | Finished app and product                                       |
| Feb 18  |   12 | Finished the design rationale                                                                    |

That's all for this week. Merry Christmas (if you celebrate it) and have a Very Happy New Year!