---
title: "Lab 14: gestural sounds"
tagline: "explore ml5's HandPose model"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-14
portfolio_repo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-3
image: /images/banners/sound-flowers-by-lily-campbell.jpg
hidden: false
---

## Outline

In this lab you will:

1. get introduced to ml5's HandPose model.
2. create an instrument controlled by your hand! 
3. begin planning the first sketch of portfolio 3.

## Introduction

This week, we will begin working with ml5's [HandPose model](https://docs.ml5js.org/#/reference/handpose) and make some sounds. 

After this, you will continue working on project work. 

**Do:** Fork and clone the [lab 14 template repo](). 

## Part 1: HandPose

From the website:

:::info
HandPose is a machine-learning model that allows for palm detection and hand-skeleton finger tracking in the browser. It can detect multiple hands at a time and for each hand, and provides 21 2D and 3D hand keypoints that describe important locations on the palm and fingers. The ml5.js HandPose model is based on the [HandPose implementation](https://github.com/google-ai-edge/mediapipe/blob/master/docs/solutions/hands.md) by TensorFlow.js.
:::

Have a read through the lab template code. The HandPose model has been set up to read via your webcam. This template has been taken from the [ml5 tutorial](https://editor.p5js.org/ml5/sketches/QGH3dwJ1A) and draws out the detected hand points on top of your webcam feed. 

The `gotHands(results)` function returns all information on the hand it has detected. 

```js
[
  {
    confidence,
    handedness,
    keypoints: [{ x, y, confidence, name }, ...],
    keypoints3D: [{ x, y, z, confidence, name }, ...],
    index_finger_dip: { x, y, x3D, y3D, z3D },
    index_finger_mcp: { x, y, x3D, y3D, z3D },
    ...
  }
  ...
]
```

Have a play around with the webcam interface and explore what data the model provides. 

**Do:** Consider using the `handedness` attribute. How would we detect the handedness of the hand the model has detected? Add a new functionality to the code that changes the colour of the keypoints depending on the which hand is being detected. 

## Part 2: Let's add some sound

Visual feedbacks nice, but let's make the room a bit noisier. (It's been a bit quiet the last few weeks)

This week's lab activity is based on P5's sound library, rather than the usual Tone.js but the same principles apply. 

The lab template includes a `playSound()` that plays a triangle oscillator (`triOsc`) shaped by an ADSR envelope (`env`). Cast your mind back to Year 11 where we first discussed [oscillators](https://comp.anu.edu.au/courses/extn1019/labs-year-11/10-oscillators/) and [audio visualisation](https://comp.anu.edu.au/courses/extn1019/labs-year-11/16-audio-visuals/).

**Do:** In p5.sound `osc.freq(N)` method sets the frequency of the oscillator. Turn your handedness code into an instrument. Add new functionality that plays distinct notes/frequencies depending on the handedness. 

## Part 3: Let's work it out on the remix

What happens when you remove the webcam feed in your draw loop?

:::tip
**Think:** How might you make an interactive work using the ml5 HandPose model? How could you classify different gestures using only the `keypoint.x` and `keypoint.y` values? Discuss and experiment with the folks around you. 
:::

## Part 4: Natural Intelligence/Biological Learning

Our final task today is to start thinking about our Portfolio 3 assessment (if you haven't already). 

So far this term, we have explored ml5's following models:
* [ImageClassifier](https://comp.anu.edu.au/courses/extn1019/labs-year-12/12-image-classifier/)
* [NeuralNetwork](https://comp.anu.edu.au/courses/extn1019/labs-year-12/13-neural-network-noise/)
* [HandPose](https://docs.ml5js.org/#/reference/handpose)

Gather your thoughts from your brainstorm in last week's lab. What is the broad interpetation that will guide your sketches? 

**Do:** Within `interpretation.md` of the lab repo, write down a few sentences describing your interpretation of the theme.

Consider:
* What are some synonymous or antonymous words to the theme?
* What stories or experiences could be related to this theme?
* How could you represent those experiences within a p5 sketch?
* How might you use one of the ml5 models to enhance the interactivity of your response to the theme? 

**Do:** If you haven't already, please fork and clone the [portfolio 3 repo]().

## Summary

Congratulations! In this lab you:

1. learnt about ml5's HandPose model.
2. created an instrument controlled by your hand! 
3. began planning the first sketch of portfolio 3.