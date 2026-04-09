---
author: Harrison Turton
date: 2018-12-07
title: Embedded Rust
description: A C program is like a fast dance on a newly waxed dance floor by people carrying razors. –– Waldi Ravens
week: 3
---

A lot of modern software development exists in a cosy world, with mittens, pillows and padded helmets. Scary things don't exist here:

* Illegal memory accesses
* Forgotten allocations, dangling pointers and memory leaks
* "The heap" or "the stack"

C lives in a different part of town, in that dodgy suburb across the bridge. Keep an eye out lest you're illegally accessed or violently segfaulted. Watch your references, kids.

## Supported Microcontrollers

I was looking for wireless-communications-enabled microcontrollers, over any (non-directed) medium and any protocol (Bluetooth, Wifi, radio, etc). I ran into two main options:

* Espressif microcontrollers, especially the ESP8266 (or the more modern ESP32 line in general)
* Realtek, specifically the RTL8710 chip

The ESP32 microcontrollers are really cheap, and really cool. Originally created to add Wifi capability to other boards, it can be seperately programmed! Soon after release<sup>1</sup>, a "hacker" ecosystem sprung up around the board, adding support for things like the GCC, embedded Python and Lua.

This sounds great, but Espressif uses a proprietary "Xtensa" architecture, which cannot be targeted by LLVM. This means we *cannot target ESP chips with LLVM-based languages*, like Rust. We can only use microcontrollers with architectures supported by LLVM.

In effect, we can only use ARM chips, like the Realtek RTL8710.

## Restricted functionality

It seems that embedded platforms has two different classifications:

* **Hosted environments** which are similar to a standard PC environment. The platform provides a system interface, like POSIX.
* **Bare metal environments** don't provide any nice interfaces. There is no OS, there is nothing hosting and managing our code. There is no standard library, no primitives, nothing!

We want to run Rust on the metal — without any system interface. This is the bare metal environment, and where we'll be working.

## Instructions to run Rust on bare metal

Sooo I haven't actually got Rust running on a microcontroller, because we're still working on the ideation stage, and I need to figure out the right board. When I have it working, I'll list the steps here, so everyone can learn how.

For now, check out the free Embedded Rust e-book! It even uses an STM32 board, which is extremely similar to the one we used in COMP2300.

[Embedded Rust](https://rust-embedded.github.io/book/intro/no-std.html)

<sup>1</sup> Actually after the Chinese manual was translated
