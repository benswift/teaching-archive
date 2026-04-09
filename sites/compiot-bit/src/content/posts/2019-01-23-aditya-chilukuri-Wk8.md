---
author: Aditya Chilukuri
date: 2019-01-23
title: Environment Setup — Windows Woes
week: 8
---

Chinmay and I discussed our findings with respect to sweat-based alcohol sensing, and we agreed that the specialised chemistry skills and equipment needed to produce prototype sweat based alcohol sensors meant that this project wasn't for us.

In this post I'll cover the work I've done so far in setting up the software development environment for the ESP32 NodeMCU-32S boards we will be making our project using.

## PlatformIO

I used the PlatformIO IDE for VSCode to start an ESP32-NodeMCU-32S project, using the ESP-IDF (There is a choice of ESP-IDF, the official ESP framework for the ESP32 boards, and the Arduino framework for software development for ESP32 boards — we used ESP-IDF because it's the official framework, and also because Arduino isn't really meant for serious code development). Upon testing a shell program, I found that the framework couldn't recognise my board. Here's the error message I found:

````````````
Looking for upload port...
Auto-detected: COM10
Uploading .pioenvs\nodemcu-32s\firmware.bin
Serial port COM10
Connecting........_____....._____....._____....._____....._____....._____....._____

A fatal error occurred: Failed to connect to ESP32: Timed out waiting for packet header
````````````

This error occurred regardless of the USB port I used on my computer. A cursory search for the cause of this error yielded nothing.

I decided to try running the ESP-IDF from scratch, doing away with the PlatformIO interface. I realised that this would make the setup significantly harder, but at least this way, I'll learn about how the ESP-IDF toolchain works and use that to pinpoint where this error was occurring.

[This](https://hackaday.io/project/43374-esp32-idf-deploying-the-development-platform) blog on Hackaday.io gives a setup guide to downloading and using the ESP-IDF framework. Most of it follows the [official how-to]() on running ESP-IDF on Windows, but there's some added support there for some common issues.

Following the steps, I found the hardest part was getting MSYS2 or MinGW working for Windows. This is needed because the alternative to PlatformIO or IDE based builds is building projects using [make](). Make is a GNU/Linux building/compilation tool that is most commonly used for compiling larger C projects (anything where a simple "gcc" command line call won't suffice). Windows provides no native support for make, and MSYS32 and MinGW are two packages that come with the make build tool. Following the instructions, MSYS2 didn't come with a make tool, and so at the end I simply wasn't able to build the Hello World project. MinGW and MSYS2 are notorious on various forums for being finnicky and not worth the trouble, but I went ahead and installed make from MinGW.

To ensure I'd covered all the avenues, I retried uploading the project using PlatformIO — only this time, expecting it to fail, I was fidgeting around with the buttons on the board. To my surprise, the error message changed!

``````````````
Traceback (most recent call last):
File "C:\Users\Aditya\.platformio\packages\tool-esptoolpy\esptool.py", line 2849, in <module>
_main()
File "C:\Users\Aditya\.platformio\packages\tool-esptoolpy\esptool.py", line 2842, in _main
main()
:
:
File "c:\users\aditya\.platformio\penv\lib\site-packages\serial\serialutil.py", line 368, in timeout
self._reconfigure_port()
File "c:\users\aditya\.platformio\penv\lib\site-packages\serial\serialwin32.py", line 222, in _reconfigure_port
'Original message: {!r}'.format(ctypes.WinError()))
serial.serialutil.SerialException: Cannot configure port, something went wrong. Original message: WindowsError(5, 'Access is denied.')
*** [upload] Error 1

``````````````

I'm not sure why the Access Violation error is raised — in my experiences working with the STM32-Discovery board using PlatformIO, I faced no problems specifically to do with OS Access Violations. But with more digging on the upload problems, with the new knowledge that pressing the buttons on the board might be contributing to the errors, I [found]() that a single press on the Boot button is necessary before the programs can be flashed onto the board.

With this in mind, I was able to get a Blink example program working on the ESP32 board:

**INSERT IMAGES**

It's certainly a little frustrating that the issues I was facing were caused by my not pressing a button at the right time, but I think the learning experience was worth it. I've learnt about the "make" tool and its Windows implementations, and also about researching bugs and issues more broadly.

At the very least, hopefully this blog will help future ESP32 programmers with the specific issue of upload failures for ESP32 boards using PlatformIO.

## What's next

Now I've got the software development framework in place for the on-chip programming, Chinmay and I will be working on setting up BluTooth communication between the chip and either a Laptop or a mobile device so we can have a proof-of-concept communications channel working for the Party-Safe band.
