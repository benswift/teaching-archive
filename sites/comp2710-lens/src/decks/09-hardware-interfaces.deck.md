---
title: "Making Hardware Interfaces"
description: "Creating physical computer instruments"
---

<!-- _class: banner -->

# COMP2710 LENS

## Outline

- High-level concepts and discussion about physical computer instruments
- Two appoarches: instrumental and compositional (adapted from "Composing Interactions" - Marije Baalman)
- The question of mapping
- Micro:bit live demo making a simple movement-based MIDI interface

## Recap: Incorporating Soft-/Hardware Interfaces in Pd

- Buttons, sliders, selectors.
- Keyboard: `key`, `mouse`, `joystick`, etc.
- External library: Processing

![](/assets/lectures/hardware-interface/yichen-pd-processing-interface.jpg)


More interaction options beyond your computer?

## Hardware Interface Devices

- Phones and OSC interfaces
  - [TouchOSC app](https://hexler.net/touchosc)
  - [Heartbeat sounds demo by Federico Visi](https://www.instagram.com/reel/CgXLQNWLNzx/?utm_source=ig_web_copy_link)

- Microcontrollers + sensors
  - E.g., Micro:bit, Arduino, [Bela](https://learn.bela.io), etc.
  - [Dialogues in Space](https://youtu.be/3aZNt6G2dko) by Sandy Ma
- You can also do something even [wilder](https://www.instagram.com/reel/CjK4XviOKv_/?utm_source=ig_web_copy_link) (not in this course!) with custom MIDI controllers, webcam and so on...

## Recap: A Simple Workflow

![](//assets/nimes/nime-workflow.png)

---

![bg](./assets/hardware-interface/yichen-ozchi-performance-2022.jpg)

##  Where do I start ?

## Instrumental Approach

- Inspired by the acoustic instrument and well-established music tradition
- Task-oriented interface design

- Classifications (Miranda and Wanderlay, 2006):
  - Augmented musical instruments: extended by sensors and/or controllers
  - Instrument-like gestural controllers: model an acoustic instrument as closely as possible
  - Instrument-inspired gestural controllers: inspired by acoustic ones + new configuration
  - Alternate gestural controllers: not directly modeled or inspired (say - "imaginary")

---

![bg contain](https://d3i71xaburhd42.cloudfront.net/2d72f5d4d42ff1e5789d6320148302b7bb39c467/5-Figure6-1.png)

## The extended clarinet (2016) / Carl Normark et al. 


Digital sound layer


Preserve the interaction complexity and playing virtuosity


Extending the [clarinet's bell](https://zenodo.org/record/1176090#.ZEnG_i8RpCA) through the performer's motion and gestures


Extra pitch bending and note playback options with visuals

---

![bg](https://blog.bela.io/images/nime2020/svampolin.jpg)

## Svampolin (2019) / Laurel S. Pardue et al. 


A custom-designed electrodynamic pickup capturing the velocity of each string


[Separating sound from source: sonic transformation of the violin through electrodynamic pickups and acoustic actuation, NIME2019](http://instrumentslab.org/data/laurel/sound-from-source.pdf)

---

![bg](http://instrumentslab.org/images/research/accessible/Strummi-all-versions.png)

## The Adapted Bass Guitar and The Strummi (2015 & 2018)/ Jacob Harrison 


Accessible guitar instrument - touch screen guitar (?!)


[When is a Guitar not a Guitar? Cultural Form, Input Modality and Expertise, NIME2018](https://www.nime.org/proceedings/2018/nime2018_paper0063.pdf)

---

![bg](./assets/2014-metatone.jpg)

## Phaserings (2015) / Charles Martin 


Percussion-inspired?


A granular synthesis component in Pd

---

![bg contain](./assets/hardware-interface/yichen-ozchi.jpeg)

## Cubing Sound (2022) / Yichen Wang


Freehand gestures and embodiment


Imaginary? 


... or I haven't clearly figured out yet!

## Other cool physical computer instruments

- [Multi Rubbing Tactile Instrument](https://zenodo.org/record/1176084#.ZEnHBy8RpCA)
- [An Easily Removable, wireless Optical Sensing System (EROSS) for the Trumpet](https://zenodo.org/record/1178562#.ZEnG9i8RpCA)
- [Kontrol: Hand Gesture Recognition for Music and Dance Interaction](https://zenodo.org/record/1178496#.ZE32HC8RphE) - more like an interface?
- [nime.org](https://www.nime.org/archives/) for more

## Compositional Approach

- Focuses on the concept of a performance
- You are the _composer_
- Week 6: algorithmic composition and interactive music system
- "From providing instructions for performers to create music, to creating contexts for performances in which music may be experienced" - Marije Baalman

---

![bg](https://charlesmartin.au/assets/projects/lmtd/Benjamin-codes-and-Hanna-sets-the-masks.jpg)

## Vital LMTD (2009) / Last Man to Die

Exploring three art forms: acting, percussion, and drawing through new interactive technologies and experimental performance

[Video](https://vimeo.com/14152601) and [more](https://charlesmartin.au/projects/lmtd/)

---

![bg](https://i.ytimg.com/vi/chA-4GRCb-I/maxresdefault.jpg)

## Twilight (2013) / SLOrk


Inspired by the classic science-fiction short story “Twilight” by John W. Campbell


[Video](https://vimeo.com/100624271)

## The Question of Mapping

- Connection between an action in the environment to sonic output

- Steps in Mapping:
  - How do you want to control the sound & what is the interface?
    - E.g., Micro:bit, computer keyboard
  - What sonic / musical process is controlled by the interface?
  - What is the representation od sound and music that you are working with?
    - FM synth
    - String synth
    - Sequence-based melody (Gibber)

## Steps in Mapping

- Gesture/Input action
- Sensor and electronic handware
- Accessing data from hardware (sometimes over network and can be tricky!)
- Computational model (E.g., algorithmic composition, synth mechanism, sampling)
- Sound output

---

![bg](https://usercontent.one/wp/www.captaincredible.com/wp-content/uploads/2021/11/cleanPatA.png)

## Live demo: Micro:bit + Pd making interactive musical system


Check out [Captain Credible](https://www.captaincredible.com/microbit-orchestra/) for more Micro:bit works/ideas!

## Live demo: steps in mapping


1. Gesture/Input action - hold micro:bit and move around
2. Sensor -  Micro:bit sensors
3. Accessing _MIDI data_ from Micro:bit hardware and to Pd over radio
4. Computational model - Playing different pitches of an osc (envelope parameters, FM synthese, etc)
5. Sound output - Pd

## Micro:bit

- [Hardware description](https://tech.microbit.org/hardware/#hardware-description) 
- Sensors: 
  - Accelerometer
  - Temperature sensing
  - [Code examples](https://microbit.org/get-started/first-steps/sensors/)
- [Radio communications](https://lancaster-university.github.io/microbit-docs/ubit/radio/)

## Accessing data from Micro:bit and radio transmission

- Get accelerometer data from Micro:bit
- Sending data over radio communication
- Receiving data at the laptop-end
- Therefore, you need a sender & receiver

## Receiver


```
// set communication channel
radio.setGroup(1)

// proxies all radio buffers to serial
radio.onReceivedBuffer(function (buffer) &#123;
    serial.writeBuffer(buffer)
    // light on showing receiving in-progress
    led.toggle(4, 4)
&#125;)

```

## Sender


```
radio.setGroup(1)
let accelx = 0

// set midi channel
let accelx_send = midi.channel(1)

basic.forever(function () &#123;
  // access accelerometer data
    accelx = input.acceleration(Dimension.X)
  // some sound representation
  ...
  // note "bang"
  accelx_send.noteOn(accelx_note)

&#125;)

// send midi messages over radio transmission
midi.setTransport(function (data: Buffer) &#123;
    radio.sendBuffer(data);

&#125;)
````

## Radio Serial to Pd in your computer

- MacOs: [SerialMidiBridge](https://github.com/RuudMulder/SerialMidiBridge)
- Windows & Linux: [HairlessMIDI](http://projectgus.github.io/hairless-midiserial/) & loopMIDI
- Pd midi set-up
- [More](https://vulpestruments.com/2018/11/21/how-to-connect-your-mini-mu-to-puredata/)

## MIDI and sound process in Pd

![](/assets/lectures/hardware-interface/microbit-midi-example.png)

- Read MIDI data
- Transform it to other forms ...

## If you want to try Arduino

Thanks to Charles - he got you something to [start with](https://github.com/cpmpercussion/EMS-ArduinoTutorial).
