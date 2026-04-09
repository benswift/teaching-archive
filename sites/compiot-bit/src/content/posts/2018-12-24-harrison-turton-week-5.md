---
author: Harrison Turton
date: 2018-12-24
title: The Roadmap
description: Planning for the future
week: 5
---

It's time to flesh-out the ideas behind this artefact, and develop a roadmap for the future. If I want to build the interactive display of my dreams, I really need some milestones to keep me on-track.

## Motivation

Imagine describing a decentralised network to your grandma. Its not easy. There is a lot of background knowledge and visualisation required.

What does decentralised mean? What is networking? What do you mean by routing?

The answers are not trivial, and it is difficult to explain without visual aids and introductory YouTube videos.

We want to build an interactive display to help visualise decentralised networks. Ideally, it indicate changes in network topology, and the routing of individual packets through the network.

I think it's really important to embrace interactivity when teaching a new concept. I want everyone to fiddle with the display, and see how it affects the LEDs. I want to bridge the gap between "pretty lights" and an actual understanding of what is happening.

## Artefact Description

The goal is to imitate a decentralised network. Each "node" will be a microcontroller. Each node will be connected to surrounding nodes via LED strips. When a "packet" is passed between nodes, the LED strip will light up to indicate the passing of information.

Each node will have a button, a knob, and a switch.

The button will send a message through to the base station — you'll be able to see how it's routed through the network.

The knob will change the "data" that is collected by the node. This data will be displayed at the base station.

The switch will turn the node on/off. An "off" node cannot be connected to, and cannot route messages. This allows viewers to change the topology of the network, and see how it reacts in real-time.

The base station will be connected to one or two nodes. It will have a button that collects information from every node, and displays the "data" (really the knob settings) on a screen. This base station can be a laptop, or potentially another microcontroller with a screen. If we're running out of time, the "data collection" part can be ignored, since it is not essential when understanding the behaviour of decentralised networks.

In summary:

* Button on node sends message to base station
* Message passing is indicated by lighting LEDs strips
* Switches on each node turns it on/off, which is indicated by another LED
* Knob on each node changes its "data"
* Button on base station collects the data from each node, and displays it

## The Display

Since we want to embrace the interactivity of our display, we need to be concious of how people will use it. Although it would be cool to expose the electronics, I don't want a child to poke a microcontroller and break the electronics.

I think we'll need to put the boards into a transparent container, with only the buttons/switches/knobs exposed to the outside world. This keeps the electronics visible (which is interesting!) but removes the problems caused by greasy fingers.

These nodes will then be mounted on a backboard, along with the connected LED strips.

## Hardware

Since our display is an educational one, we don't actually need to build a physically decentralised network. We'll connect our boards with wires, not with wireless communications.

Our main requirements are that the board runs ARM (so we can use Rust), and that it has enough soldering points to support multiple LED strips.

All in all, this lead us to discover the [Black Pill](http://wiki.stm32duino.com/index.php?title=Black_Pill) board. It runs on an STM32 ARM M3 microcontroller, which means Rust should be easy to set up. It has a long strip of mounting holes on either side, which means LED strips should be easy to connect. It is cheap, and available on Aliexpress, Taobao, Alibaba and eBay for about $2 each.

## Software

We want to write the entire project in Rust — both for the learning experience, and also to avoid the numerous problems with C. Though this has a high upfront-cost (setting up embedded Rust is a bit tricky), I'm sure this initial timesink will pay for itself.

Rust also has a "Realtime for the masses" crate, which provides concurrency for embedded devices. I'm not sure if this will be required, but its always good to have the option. A decentralised network is an inherently concurrent one, and perhaps this will let us model our code closer to our business requirements.

Here are some resources (for future reference):

**Embedded Rust**

* [Intro to Embedded Rust](https://rust-embedded.github.io/book/)
* [Embedded Rust in 2018](http://blog.japaric.io/embedded-rust-in-2018/)
* [Realtime for the Masses (Crate)](https://docs.rs/cortex-m-rtfm/0.4.0/rtfm/)

## The Theme

In a decentralised network, you are not connected to everyone. That is the point — to communicate with a distant node, you need to play a game of chinese whispers and route packets through your neighbours.

I believe this embraces the theme of disconnecting together — no node is connected to everyone, and the network must work together so that everyone may communicate.

## Timeline

Starting from the first week of January. We can either do this per-week, or per-fortnight. There will definitely be overlap in these, especially if international shipping takes longer than expected.

1. **Learn Rust**
Especially the memory/ownership model (the "borrow checker") and approach to concurrency
2. **Learn embedded Rust (in the context of the Discoboard)**
Figure out how to use GPIO, timers & interrupts
3. **Purchase / Begin hardware development**
Figure out how to run Rust on our preferred board — the Black Pill. If it doesn't arrive during the week, we can try learning soldering and basic electronics.
4. **Learn the Black Pill board**
Learn to use GPIO, timers & interrupts on our final board. See if we can implement the cool LED-strip effects — perhaps write a small library for it?
5. **Begin software implementation & construction of the artefact**
We should have the knowledge required to put everything together. Start wiring everything up, crafting the interactive display, and implementing the algorithms. This will continue until the artefact is built.

There is a lot of time dedicated to "Learning Rust for xyz". Neither Tim nor I have used Rust before, and we certainly haven't used it for embedded programming. Except for the hand-held development with NesC and ARM ASM in COMP2300, we're brand new to this.

By itself, Rust will take some getting used to. We'll need to learn its own idiosyncracies, and then also use these to handle the idiosyncracies of each board.

**Intermediate Milestones**

- Working embedded Rust on the discoboard
- Working embedded Rust on the black pill

## Collaboration

At the beginning, a lot will be self-directed learning. We don't need continuous collaboration to learn Rust — we just need to bounce some concepts off eachother to deepen our own understanding.

Once we understand Rust and have a handle on embedded development, we'll delegate certain features to eachother. We'll be working with a git repo, so we can easy keep eachother up-to-date.
