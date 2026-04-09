---
author: Harrison Turton
date: 2019-01-11
title: Boards & Blockers
description: Getting to development
week: 7
---

This will be a very quick update, since development is currently blocked.

In order to get started, we need:

* At least two black pill boards
* Cables to connect them

We can get the cables in Canberra, and we are purchasing 12 black pill boards from [Alibaba](https://www.alibaba.com/product-detail/Minimum-System-Development-Board-Module-ARM_60827795213.html?s=p)
for $2.50 each. After discussing the final artefact with Tim (my partner), we've decided to connect
10 different boards. The number of neighbours each node has is limited by the pins on the Black Pill board.

There are two different kinds of LED strips:

* Ones requiring 2 pins
* Ones requiring 4 pins

The 2-pin LED strips simply turn on and off. The 4-pin strips have individually addressable LEDs, which
could enable some really cool transitions.

Since our project is about visualising the data flow within a decentralised network, I think the latter
is required. Flashing connections *works*, but being able to animate the connections (with some sort of flowing
animation) would make the display more approachable and compelling.

There is a 5-day lead time on purchase, and then we're hit with sluggish international shipping. The delay is
quite annoying, since it stops a lot of development.

We can start development on our Discboards, but I'm concerned about unforeseen issues when re-targeting to the
Black Pill.

I've created a [Github page](https://github.com/harrisonturton/decentralised-networks-viz), although we haven't committed anything yet.

I can't wait to jump into development, but we've just gotta get over this slow inventory-gathering hump!
