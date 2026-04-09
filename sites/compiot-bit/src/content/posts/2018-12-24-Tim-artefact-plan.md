---
author: Timothy Lee
date: 2018-12-24
title: Visualisation of a Mesh Network
week: 5
---

## Project Summary & Plan

### What am I going to build
The artefact that I've decided to build is one in which allows a viewer to understand how messages propagate through a mesh network. I'll have an array of microcontrollers with each one connected to 2 - 4 other microcontrollers with wires and LED strips to form a mesh network. Those strips will light up as messages are passed along the wires between controllers. One of the microcontrollers will also be connected to a computer allowing for user input for different features.

For example, if each microcontroller has an ID number and I have 10 controllers in the system, I could ask the microcontroller hooked up to the computer to send a message to controller 7. the system would then figure out the best route to take to get there, and then light up as the message travels along the route. I will be looking into how mesh networks are commonly used today and then try and figure out how to best represent that. I will also be working with Harrison Turton (Harry) on this project.

#### How it relates to the theme

Mesh networks are important for IoT as often in places like smart homes or a smart city, smart devices won't necessarily have direct communication access to a central or control node, if there even is one. Therefore, compatible devices may have to act as relays for each other to communicate instructions and data to far away devices. This forms a mesh network and the communication through the network is more complex than if all devices were in proximity to a central node. The aim of this project is to show people how networks like these could work.

### Hardware
The microcontroller that we plan on using for this project is the [Black Pill](https://wiki.stm32duino.com/index.php?title=Black_Pill). This was chosen because it is a small, inexpensive microcontroller with a lot of GPIO pins, giving us more flexibility on what connections we could make. This board has also been used by William Cashman for a previous project, meaning that we'll be able to ask him for advice on how to use it if necessary. We will also be getting cables and LED strips, however at this time we aren't sure exactly which ones we will be getting. We may also investigate getting some breadboards as it may help reduce cable clutter around the microcontrollers making it easier to see.

### Software
For this project we intend on using the programming language Rust. During our time in china, we spent a lot of time working with a language called NesC which is C with extra libraries to support embedded development for the TinyOS platform. This was quite an unpleasant experience because of the lack of documentation for NesC. On top of that most of the people in the group didn't have any prior C language experience, making it very difficult to figure out and debug our code. Thus, we decided to go with a newer language designed to help cover some of the pitfalls of C whilst also being easier to use and powerful. Harry and I have also been meaning to learn more about Rust for a while, so it seemed like a good fit.

Whilst Rust is a new programming language, it already has a good amount of support for [embedded development](https://github.com/Rust-embedded/awesome-embedded-Rust). This includes thorough guides on how to do embedded programming using Rust, as well as converting from other languages. They have also generated hardware API crates (Rust's packages & libraries) for a variety of microcontrollers on different architectures. There are crates there for programming in Rust on thee cortex-m architecture, as well as specific crates for the STM32L4x6 series of boards. Using those I was able to do basic GPIO operations and blink the red and green LEDs on the STM32L476G-Discovery board, used in [COMP2300](https://cs.anu.edu.au/courses/comp2300/). Doing it this way meant that I didn't need to manually write bits to memory addresses. Instead I would assign the peripherals to a variable and call functions on that to do the operations. This should allow us to worry less about building functions to interface with the hardware easier and focus more on the artifact at large.

Additionally, it looks like there is a more developed crate for the black pill's family of boards, which should make things easier for us once we've learned what it offers and how to use it. This will take a bit of time to figure out what each crate offers, and what other crates we need for the project. Another crate that I'm looking into using is the [Real Time for the Masses](https://github.com/japaric/cortex-m-rtfm) framework in Rust. This is because it offers a concurrency framework more like what we used previously in [COMP2310](https://cs.anu.edu.au/courses/comp2310/) and may make it easier for us to complete the project.

However, given that Rust is a newer language, there is still risks that we will not be able to complete the project using it. I have not had the chance to test the usage of Timers & Interrupts on the STM32L476G-Discovery board, which will be crucial to the project. Additionally, the black pill may be slightly different to the other more commonly used blue pill, and such may take us a while to debug board specific issues. As such if we feel that Rust is not working out, we will likely switch to the Arduino Coding Environment as it has more support than Rust currently has. However, I do not think this will be necessary as there appears to be support for all of the above already in Rust.

### Timeline
From the week of January 1st, we will have 7 weeks to complete the project. In that time, we will need to:

A.  [Learn Rust](https://doc.Rust-lang.org/book/) up to at least the concurrency sections
B.  Learn how to use GPIO, Timers & Interrupts on the STM32l476G-Discovery Board in Rust
C.  Discuss and full outline artefact feature set + needed hardware
D.  Buy the black pills & other hardware (Led strips & LEDs)
E.  Learn how to use GPIO, Timers, Interrupts and interactions with external hardware (LED Strips) on the black pill board
F.  Begin implementation & building of artefact
&nbsp;&nbsp;&nbsp;Fi. Build the underlying communication and message passing framework
&nbsp;&nbsp;&nbsp;Fii. Build additional features to show off at the exhibition.

Given that Harry and I haven't used Rust very much prior to this, the first half of the project time will be dedicated to learning Rust and the embedded Rust framework. Weeks 1 & 2 will be dedicated to steps A and B, learning how to use Rust on the hardware we currently have. We still have our STM32L476G-Discovery boards and those use a similar ARM cortex-m architecture to the black pill, so until those arrive we'll be using the Discovery boards to learn what the different Rust crates offer and how to use them. The crates for the Discovery board and the black pill were made by the same group of people so the syntax and usage should be very similar for both.

At some point during week 1 & 2 harry and I will order the black pill boards and some of the LED strips, a breadboard and wires. These should arrive by week 3/4. Once I get back to Canberra in week 3, Harry and I will discuss the feature list and additional hardware which should be finalised by the end of week 3. This will also be an important milestone (18th Jan), as after we finalise the feature list, we'll discuss how the Rust progress is going and decide whether or not to proceed with Rust or switch to Arduino. Once the black pills arrive, we'll do some work in learning how to use them as I believe there are some different steps needed to work with these regarding the need to burn the bootloader onto the device. Once we've done that, we'll also need to check that we can use GPIO, Timers, Interrupts and other hardware on the board. This should be fairly quick as we can reuse a lot of the code from steps A & B. This will be the second major milestone (25th Jan) as we'll need to make sure that everything is on track and that we have everything we need to finish the project.

Once we've confirmed that all the features we need are in place, we will begin construction of the artefact. This should begin in week 4, giving us about a month to finish it as well as the design rationale. We'll aim to spend the first two weeks of that time on step Fi, the building of the underlying communication and message passing framework. This will govern how each board communicates with others such that they could potentially handle messages from multiple boards arriving at once with ideally no data being lost in the process. At the same time the boards will need to do its own computation based on the incoming data. The completion of this framework will mark the 3rd and last major milestone (3rd Feb) as we'll be checking that all the groundwork is solid and that we're good to make all the features we want.

Once the underlying framework is complete, the last two weeks of the project will be spent on building additional visual features that people can come see and interact with. These will be things like asking board 1 to send a message to board 10 to light up, asking all boards of even number to light up and so on. Basically, anything that users will interact with directly at the exhibition and will make for a better show. We'll also be working on our individual design rationale as those will be due in week 8. The month of project time will be flexible with regard who how much time we spend on each section as I am not sure how long it is going to take for us to finish the different parts.

#### Gant Chart

![chart](/images/posts/tim/gant_chart.png)

#### Summary of Milestones
All the dates for the milestones are approximate as the dates are more based on when different items or people arrive in Canberra

| **Key Milestones** | **Start Date** | **Week** |
|-------------------------------------------------|--------|--------|
| Feature list finalise and Rust recap | 18 Jan | 3 |
| Hardware checks complete for black pill | 25 Jan | 4 |
| Underlying framework complete | 03 Feb | 6 |

### Distribution of Work
Since most of the early work will be self-learning, it will be done mostly independently except for us asking each other from help. A lot of the early design work as well as the construction of the underlying framework will be done together. This is because framework construction will need to be done quickly and need to be reliable for us to build on top of. Once the framework is complete, we should be able to easily split the rest of the features between the two of us to complete, as well as having time to debug and refine it such that it will make for a great exhibition piece.
