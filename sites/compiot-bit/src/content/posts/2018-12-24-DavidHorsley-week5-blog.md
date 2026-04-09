---
author: David Horsley
title: Artifact Plan - David Horsley
week: 5
date: 2018-12-24
---

## What are we going to build

The project will explore the creation of a social music system, enabling for music to be played that responds to the preferences of the people on the area in real-time. Additionally, the system will display these music selections prominently, taking something that is often abstract and hidden and projecting it in a public and physical way. The hope is to create new types of interaction; publicising one’s preferences can help struck up conversations between people with similar (or opposing) interests, and the ongoing adjustment of what music is playing will hopefully create meaningful interactions as people see how their choices influence the world around them. I hope that our project can help people to see the power of groups of people and hopefully allow us to experience new things — be it new music or just by making us all more aware of the people around us.

## How does this relate to "disconnecting together"?

Our plan relates to the theme of “disconnecting together” by allowing the technology associated with selecting and playing music based on everyone’s preference to fall into the background, allowing the social interactions between people to take precedence. Essentially, by embracing IoT technology, we can allow ourselves to be freed from the hassles that are typically associated with music such as picking songs and playlists, syncing speakers or even connecting cables (if you’re really old school). My vision is that the devices will be so streamlined that they almost appear to be non-technical at all, as if one is carrying a magical rune with them that can change the music. I hope that the users will not need any understanding of the technology that’s allowing this to take place; or even for it to feel so easy and innate that they might forget the device is doing anything at all, and simply allow themselves to experience the people and the music around them. In this way, users are disconnecting themselves from the technology, and allowing themselves to be brought together in a more natural and human way.

## Hardware and software requirements

At this stage, we’ve decided to use an ESP32 development boards as a starting point, due to hitting a good balance between price, power consumption and connectivity, with Bluetooth (LE and Legacy), and WiFi included. Bluetooth LE is likely going to be the main method for communication between the “glowstick” nodes and the speaker hubs. One problem that was unsolved at my last blog post with Bluetooth LE is distance estimation. Establishing the distance between the glowsticks and the speakers is important for this system to work, in order to decide which glowsticks get great preference, as those which are closer will likely get greater preference than those which are far away, or which are closer to another speaker hubs. Thankfully, it seems that distance estimation with Bluetooth LE is not completely uncharted territory, and one reasonably simple solution exists: using the RSSI (Received Signal Strength Indicator). Using RSSI for proximity has a few problems, most notably that the RSSI value isn’t standardised between different chips, and that using the RSSI value to estimate distance isn’t reliable for comparisons in different environments, as Bluetooth can be heavily influenced by the environment. Thankfully, neither of these should present a major concern for this project specifically, as all the glowsticks are likely to be similar (or the same) in terms of hardware, and the system doesn’t need to make comparisons between different environments. Additionally, it may be possible to combine the distance estimations between neighbouring glowsticks to get some greater accuracy, however the accuracy of the glowsticks isn’t a huge issue for this project, as long as the system can detect distances between the hub and the glowsticks relative to one another it should be accurate enough for at least the simplest use cases of the system.

Another important hardware component will be the LED lights to make the glowsticks glow. RGB LED strips are cheap, can be cut to the desired length and, as an added bonus I think I’ve still got some sitting around my house from an old project. Additionally, there are plenty of guides and tutorials online about getting LED to work with microcontrollers, and the ESP32 (seems to) have some built-in functionality for controlling LEDs using Pulse-Width Modulation.

We have also started looking a bit at the music side of our project, specifically we have had a bit of a look at the Spotify APIs, and it’s looking likely we will use these in out project to support the music selection.

## Timeline

The start of O-Week (and hence the deadline for this project) is roughly 7 weeks away. During that time, there are a number of milestones we would like to reach, in order of importance:

• A functional prototype of a glowstick, which allows a user to select a genre of music and displays a colour based on this selection, whilst broadcasting this information in a way which could be understood by the speaker hub, and a functional prototype of the speaker, incorporating the inputs from the glowsticks and making music choices based on the preferences communicated to the speaker from nearby glowsticks. This represents the most basic iteration of this project, without any additional features or functionality.

• A more advanced prototype, including more advanced communication such as communicating when a user likes or dislikes a song by pressing a button on their glowstick, and having a working prototype of the glowstick that supports this additional functionality, as well as possibly supporting more advanced display options for the glowstick rather than just displaying a single colour.

• Thirdly, an even more advanced version of the system which supports multiple speaker hubs and can use proximity/distance estimation to decide which glowsticks will influence which speaker.

We have also decided that we would rather have a “polished” project to present, at a level as close as possible to representing a finished product as opposed to presenting a project which attempts to do many things but does them all poorly. As such, we are defining a strict “tools-down” day; after which we will only focus on polishing, fixing and cleaning-up our existing project rather than adding additional features, in order to ensure our project is suitable refined upon completion and release.

As such, the timeline we have set ourselves is:

• December 24th – January 1st: Research, preparing example code, collecting / purchasing hardware, etc. This phase is essentially waiting for our boards to arrive (which have been ordered), as well as giving ourselves some time for the holidays, while getting as much work done to ensure that when the hardware does arrive we can get thing moving as fast as possible, using the information, example code and other resources we gather during this time to speed up our initial development.

• January 1st – 14th: Basic Prototype. As described above, this involves the creation of the most basic version of the system, capable of basic networking between the glowsticks, having the speakers receive the preference information from the glowsticks and using this information to make basic music selections, as well as having the glowsticks glow a certain colour corresponding to the genre of music the user picks.

• January 15th-28th: Incorporating responses, such as likes and dislikes from the glowsticks, and using this to inform music choices; as well as the possibility of more advances lighting displays on the glowsticks.

• January 28th-Febuary 7th: Adding more advanced networking features, such as allowing for multiple speaker hubs and for the system to decide which glowstick influences which speaker through distance/proximity estimation of the distance between various speakers and glowsticks.

• February 8th: Tools Down: From this point on, we won’t focus on adding new functionality; instead we will focus entirely on polishing the existing project so as to ensure it is of a high quality when we release it.

If we have extra time before the tools down date, we may add some of the additional functionality mentioned in my previous blog post, such as supporting silent discos.

## How will will collaborate?

Initially, during the research phase of our project, our plan is to decide on a topic for each of us to research and then have twice-weekly updates in which we explain what we learnt to the other person, and then decide on our topics for the next period.

When it comes to actual coding and hardware development, we plan to have semi-regular meetups in person, and the use git in combination with good documentation, comments and code styling to hopefully allow us to work on the code together. We hope that our regular face-to-face meetings can help us keep on track and ensure we’re both on the same page, with the comments and documentation for the code helping to smooth any hiccups relating to the code itself on a day-to-day basis.
