---
title: "Useful links"
summary: "If you're stuck for places to look for inspiration, here are some ideas"
---

All of this stuff is related, e.g. it's hard to know what MCU to choose until
you know what sensors & actuators you'll need, and vice versa. So don't read
this page as a "beginning-to-end" thing, it's just a bunch of resources to help
you when you don't know what to look for or where to look for it.

In each case, some of the links are just from the first few hits of a Google
search[^ddg]---so I'm sure you can find other/better ones. If you do, let me
know on the [forum](https://discourse.cecs.anu.edu.au/c/china-study-tour) and I'll add them here.

[^ddg]: well, [a DDG search](https://duckduckgo.com/) actually, but you get the idea

## Hardware

### Sensors

Sensors are the things which take input from the world---from simple buttons and
knobs (potientiometers) to acceleration, temperature, position (e.g. GPS)
microphone, camera, oh my!

Here are some links:

- <https://en.wikipedia.org/wiki/List_of_sensors>
- <https://www.engineersgarage.com/articles/sensors>
- <https://www.elprocus.com/types-of-sensors-with-circuits/>

### Actuators

Actuators are the things which allow your artefact to actually *do stuff* in/to
the world.

- <https://www.thomasnet.com/articles/pumps-valves-accessories/types-of-actuators>
- <https://sciencing.com/list-6311171-types-sensors-actuators.html>

### Microcontrollers (MCUs)

If you've done COMP2300 in the last couple of years you'll be familiar with the
STM32 L476VG Discoboard we use in that course. It's packed with peripherals
(although it doesn't have wireless) and I have a couple lying around you could borrow.

If you want on-board wifi, then the [Espressif
ESP32](https://en.wikipedia.org/wiki/ESP32) is a popular choice these days.
They're fairly cheap (especially if you buy a Chinese clone rather than an
official one). The [RPi Zero
W](https://www.raspberrypi.org/blog/raspberry-pi-zero-w-joins-family/) might
also be a good choice, and the RPi community is really big and supportive. For
help thinking through the differences, seek the wisdom of
[Reddit](https://www.reddit.com/r/arduino/comments/65dp98/esp32_vs_pi_zero_w_serious_question_what_would/).

If you're into bang-for-buck and don't need on-board wifi, then perhaps the [STM
Black Pill](http://wiki.stm32duino.com/index.php?title=Black_Pill) is an option.
You can get them for ~$2 each, and if your project involves a *lot* of compute
devices (perhaps spread over a large area) then it's an interesting choice. The
documentation kindof sucks, but some folks (Will) have been working with this
device for a semester already and can give some pointers to get started.

In fact, there's a general point that for many of the more popular boards have
cheap clones which are amazing (the Black Pill is just one example). There's
usually a trade-off between community size/support and price, but if you're
aware of it then you can build some super cool things for not too much money.
One good way to check whether you're gonna have a good time development-wise is
to see if the [board is supported by PlatformIO](https://platformio.org/boards).

## Software

### on the MCU

It's no secret that I think that
[PlatformIO](https://docs.platformio.org/en/latest/) is pretty great. It
supports all the boards I've mentioned above (and [**heaps**
more](https://platformio.org/boards)) so that might actually be a place to look
for ideas when you're trying to select the hardware.

[Micropython](https://micropython.org/) is fairly cool as well (if the board is
supported) if you'd prefer to write python to C. Pros and cons, y'know?

### IoT system

If you choose to go the "home automation" type route, then [Home
Assistant](https://www.home-assistant.io/) is a pretty cool project; very
flexible with a large community.

Of course, if your devices themselves can connect to the internet, then you
might not actually need a specialised IoT server---you could just use a regular
server and communicate over the public internet. So many options!
