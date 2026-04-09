---
author: Namitha Sara John
date: 2018-12-24
title: Artefact Plan
week: 5
---

# Blog Post Week 5

## Basic Project Overview

You walk in to the dentists room, hating every second of your time there. The dentist asks you to take a seat on the chair and asks you THE QUESTION. "How often have you been brushing your teeth?". You know that your brushing habits have been bad lately but due to fear of telling your dentist you lie. How do we overcome this? The answer is the Smart Toothbrush.

Imagine another scenario where you're in a lot of pain in your mouth and don't know what is causing it. What do you do? The dentist doesn't what is causing it because he has to physically see your teeth first. How do you get instant diagnosis? The answer is again this Smart Toothbrush. Through the use of this Smart Toothbrush, dentists will get information on any abnormalities in the mouth instantly which will assist both the dentist and the patient with faster relief.

My artefact is a Smart Toothbrush. This toothbrush will be revolutionary as it will give dentists live information on the brushing habits of patients and hopefully be able to detect irregularities in the mouth such as cavities. The toothbrush will also be connected to an app which will make the brushing experience more enjoyable and help you keep track of your brushing routine.

Your brushing routine and irregularities your mouth isn't something that people wish to publicize to others. However, at the same time due to fear of people knowing it can be beneficial in the sense that it will encourage people to maintain good dental hygiene. During my time in China, I noticed that public shaming was a pretty common thing such as displaying jaywalkers on a screen and displaying number plates of speeding cars. I am using that idea to motivate this project.

## Project Details

This is only a basic overview of how I plan to make the artefact but is still subject to change once I start working on it.

### How does it relate to the theme?

Intenet of Things is a network of physical objects that are connected over the internet. The way this artefact relates to the theme is that The Smart Toothbrush uses IoT to transmit the data that is being collected in the toothbrush from the sensors to the PC node in the dentists computer. If I am able to extend my project further, the information could also be sent to the users phone app.

### Hardware Aspects of the Artefact

List of Hardware Components:

	1. ESP32 (2) - either DEVKITC OR PICO KIT
	2. Touch Pad which will be connected to the touch sensors
	3. Toothbrush (Will most likely be using an existing toothbrush and then adding to it)
	4. Wires that connect the touch pad to the microcontroller

I will need two microcontrollers for this project and I will be using the ESP32 development board as both since it has touch and temperature sensors, wifi and bluetooth connectivity, both of which could be essential for the project. The ESP32 has 10 capacitative IOs that detect changes in capacitance on touch sensors due to finger contact or proximity. One microcontroller will be connected to the toothbrush which will collect the data from the mouth and the other to the PC which is the dentist's computer where he/she can then evaluate the information. The touch sensor can be utilised by connected a metal plate or aluminium foil to the sensor pins on the development board which can then monitor movements. Platform IO is a common framework that is used for ESP32.I have currently bought the ESP32 DEVKITC but upon further research I think the ESP32 PICO KIT might be a better fit for my project since it is smaller in size and this is essential for my artefact.

In order to implement the second part of my project if it is possible. I will need access to a few more sensors such as pH level sensors. This is allow the tooth brush to detect the presence of cavities. However, I'm still performing research on this topic. Another possibilty would be to use laser beam which many researchers say will work. However, this might be beyond the scope of the project.

### Artefact Design

At the moment, the design of the toothbrush is quite difficult and I am still in the process of figuring out how to make the toothbrush so that it is usable without having multiple wires visible on the outside of the brush and a huge microcontroller hanging from it.

A possibility would be to use an electric toothbrush/normal toothbrush and make some changes to it to optimise comfort when the extra charactersitics of the toothbrush are added to it. My main task will be to create a feasible and safe design for my project that can be used by people of all ages.

## Timeline

I will be working alone on this project thus will have to manage the workload overtime to stay on track and make sure I am able to complete the project on time. This plan is still in its early changes and is subject to change once I begin.

### 1. 24 Dec - 11 Jan
There is a very limited number of tasks I can complete during this period as I'm in India. But my plan is to start the design documentation, do some research, write some basic code, and plan out the design of my project (how to incorporate the microcontrollers and sensors into a safe design) and go through documentation for platform IO. I have already purchased the microcontrollers from AliExpress which will arrive early January but I will be exploring different electronics stores while i'm here to try to find any sensors or other hardware components that could be useful for my project.

	a. 24 Dec -> 30 Dec
		* Read through the documentation for Arduino IDE / Platform IO
		* Research cavity detection and see if it is possible to implement for my project
		* Draw up a basic design of the artefact
	b. 31 Dec -> 11 Jan
		* Start the design doc
		* Start writing some basic code for the project and brainstorming ideas for the app
		* Set up my github account and add the ReadMe file to it

### 2. 11 Jan - 28 Jan
I will be back in Perth during this period. My task while I'm there will be to finish up all the coding aspects of my project as I will have access to the microcontrollers. I will also start the initial building stages of the toothbrush.

	a. 11 Jan -> 18 Jan
		* Set up the touch sensors on the first microcontroller and get that working first
		* Send the information to the second microcontroller
		* Work on github repo and design document
	b. 19 Jan -> 28 Jan
		* Finalise toothbrush design
		* Work on design document and github repo

### 3. 28 Jan - 18 Feb
When I am back in Canberra during this last month, I will work in the labs to finish building the toothbrush and completing the final stages of the project and work on any finishing touches.

	a. 29 Jan -> 10 Feb
		* Use the plan to create the toothbrush (perhaps in the physics lab?)
        * Design document and github repo
	b. 11 Feb -> 18 Feb
		* Finalise Project and add any finishing touches
		* Finish up all parts of github repo
		* Finish up the design decoument

## Milestones

1. Stage 1 Milestone will be to implement the toothbrush with touch sensors (Stage 1 of the project which is basic toothbrush with touch sensors that send information to PC node when patient is brushing)
	This stage will include getting the touch sensors working, connecting them to the toothbrush, and then sending the information to the PC node.

2. Stage 2 Milestone will be to create an app that will be connected to the toothbrush (still deciding if the app will be done) (app will assist people with brushing and give them access to information on dental hygiene and monitor their brushing by getting data from the toothbrush)

3. Stage 3 Milestone try to implement the second part of the project (cavity detection) but not sure if it will work as different websites are presenting different methods of detection

All milestones may not be achievable depending on how the project pans out but my target is to definitely get the first milestone done.

## References

https://www.quora.com/What-is-an-actuator

https://docs.platformio.org/en/latest/frameworks/arduino.html#tutorials

https://techtutorialsx.com/2017/06/05/esp-wroom-32-uploading-a-program-with-arduino-ide/

https://github.com/espressif/esp-iot-solution/blob/master/documents/touch_pad_solution/touch_sensor_design_en.md

https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj6qo7S67ffAhXFMI8KHX_6AZoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.target.com%2Fp%2Fphilips-sonicare-153-essence-rechargeable-electric-toothbrush-hx3211-17%2F-%2FA-51163784&psig=AOvVaw3pa3KtMvQz6zRc4k3BxKUp&ust=1545719379959086
