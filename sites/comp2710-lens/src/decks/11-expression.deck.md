---
title: "Interfaces and Expression"
description: "Not what to do, but how to do it."
---

<!-- _class: banner -->

# COMP2710 LENS

## Extra Lecture!

Things are a bit freeform at this part of the course, but I'm feeling inspired.

This week is **interfaces and expression**.

Next week is **composition in improvisation**.

These lectures are meant to help you directly with planning your final performance. Not extra topics or extension.

## Interfaces

We've already _talked_ about interfaces so why should we do more?

- previous discussion focussed on technical aspects

- now we need to go deeper into design.

This is an important research topic for the [New Interfaces for Musical Expression](https://nime.org) conference!

## Expression

What is a musical interface for?


Enabling performers' to express themselves. That is, giving them creative control over the sounds that occur in a performance.


Expression can be defined as "conveying feelings", but maybe to avoid unwanted romance we can define it as "conveying complex information".


## The Mapping Problem

Electronic instruments have an important **seperation** between the control parts and the sound making parts (not so for most acoustic instruments).

Many different types of interfaces (or controllers) can control many types of synthesiser design.

Working out how to map different signals from a controller to the parameters of a synthesiser is an **important design decision**.

Hunt, Wanderley, and Paradis (2003) explored mapping and determined that simply having one slider for each synth parameter is probably not a good idea.

Citation: Andy Hunt, Marcelo M. Wanderley & Matthew Paradis (2003) The Importance of Parameter Mapping in Electronic Instrument Design, Journal of New Music Research, 32:4, 429-440 <http://dx.doi.org/10.1076/jnmr.32.4.429.18853>

## Mapping and Utility

> Imagine a one-button interface that triggers all the sequences a completes the whole performance. **What is wrong with this?**


It's very user-friendly! Easy to learn! Low-effort! High likelihood of success! What is wrong with it?


But it's missing something! The risk-free design means we don't get complex information from the _performer_ (just from the button designer).

## Mapping and Accuracy

> Imagine a beautiful synth design with 106 parameters, with each one connected to an individual slider. The designer has created a custom hardware interface with all 106 sliders available at the performers fingertips. **What is wrong with this?**


It's very accurate! Any sound configuration is available to the performer, they can explore the full creative range of this instrument.


It's missing something! The system doesn't have any constraints and would be impractical to learn. This design means much of the information conveyed by the user will be arbitrary (random) and meaningless.


# Expressive Interface Tips and Techniques

## Continuous not Discrete 

Sasha Lietman (2017) says: "use continuous sensors"! Why?

- continuosu sensors allow nuanced performance
- discrete sensors tend to become sample playback buttons (cliche)

**Charles advice**: give performers "somewhere to go" in every moment. With a button you have nowhere to go (after hitting it). With a continuous controller you can, go up, go down, stop moving, change speed, change direction, etc.

Sasha Leitman. 2017. Current Iteration of a Course on Physical Interaction Design for Music. Proceedings of the International Conference on New Interfaces for Musical Expression, Aalborg University Copenhagen, pp. 127–132. <http://doi.org/10.5281/zenodo.1176197>

## Filtering data

Continuous data from a sensor _should_ be filtered before use. But how and why?

Think of it like an audio signal:

- Do you want to detect slow changes? Use a low pass filter.

- Do you want to detect fast changes? High-pass filter.

If you have control data in Pd, send it through `sig~` to turn it into audio, then you can use `lop~` and `hip~` as usual.

## Take the magnitude

Some sensors have lots of dimensions:

- e.g., a normal accelerometer sends 3D vectors of data: accel in x, y, and z. (fancy inertial measurement units send 9 dimensions!)

The _easiest_ and _fastest_ way to get **one** signal from all that stuff is to take the magnitude of these vectors:

`sqrt(x*x + y*y + z*z)`

Two questions:

- is this actually all you need?
- do you even need the squareroot in the equation?

## Inverse Mappings

There are lots of interfaces that function in some manner similar to "move the thingo to make more sound".

But what about doing the opposite? ("move the thingo to make LESS sound").

Seems wild, but can work! What other ways could you use _inverse_ mappings?

[ARJ](http://arj.no) has thought about this a lot, including in the "standstill" performances Charles was involved in.

Charles Patrick Martin, Alexander Refsum Jensenius, and Jim Torresen. 2018. Composing an Ensemble Standstill Work for Myo and Bela. Proceedings of the International Conference on New Interfaces for Musical Expression, Virginia Tech, pp. 196–197. <http://doi.org/10.5281/zenodo.1302543>

## The one-knob synth

A synth with one-button is a bit silly (or [is it](http://www.nime.org/proceedings/2010/nime2010_106.pdf)), but can one knob work to control?

The trick is to _not_ have it sound all the time (rhythm is important).

- map knob position to pitch/timbre or a chosen "sound quality" parameter.

- map _movement_ to start an envelope

- could map speed to max volume of the envelope.

Charles uses this technique _extensively_: e.g., PhaseRings app, EMPI synth, etc.

## Finally, a plea

- please think about expression.

- don't **just** control volume.

- don't **just** trigger samples/sequences.

This week: think about creative control, complex information, and how your ensemble will use your interfaces.

## Idea Gibber Websockets:

Gibber code:

```
const socket = new WebSocket("ws://localhost:9080")
socket.addEventListener("open", (event) => &#123;
  console.log("connected to websocket")
&#125;)
socket.addEventListener("message", (event) => &#123;
  console.log(event.data)
&#125;)
```

## Python Code:

```
#!/usr/bin/env python

import asyncio
from websockets.sync.client import connect

def hello():
    with connect("ws://localhost:9080") as websocket:
        websocket.send("Hello world!)

hello()
```
