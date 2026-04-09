---
title: "Lab 27: Particulate Matters"
tagline: "Classification of Particle Systems"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-27
image: ./images/year-11-lab-27.png
---

## Administrivia

Your final projects will be finalised and marks returned very soon &mdash; stay tuned.

**The *venue* for our *Exhibition of Works 2024* has *changed*.**

It will now be in the Innovation Space of the Birch Building (this is to be confirmed &mdash; again, stay tuned!)

### Schedule of Classes:

Classes continue! 

* Wednesday 27 November HN 1.23 (today)
* Wednesday 4 December HN 1.23 (next week)
* Wednesday 11 December Innovation Space (exhibition)

### Inspirations

* [Year 12 Projects 2024](https://comp.anu.edu.au/courses/extn1019/showcase-yr12/)
* [Year 12 Projects 2023](https://comp.anu.edu.au/courses/extn1019/showcase-yr12-2023/)
* [Year 11 Projects 2023](https://comp.anu.edu.au/courses/extn1019/showcase-yr11/)

## Particle Systems

Today we are looking into Particle Systems.

![Star Trek Wrath of Khan - Genesis](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F03%2FThe-Genesis-Effect-in-The-Wrath-of-Khan.jpg&f=1&nofb=1&ipt=b124bec43fc4ee1d01b6558e22d1127a90a0c8fe47b6c8d9c84398adfab1e47d&ipo=images)
*Image copyright Paramount Pictures and Lucasfilm, 1982*

Particle Systems have a history in computer graphics going back [(at least) 4 decades](https://youtu.be/Qe9qSLYK5q4). They are still mighty useful, fun to play with, and can create a wide range of effects.

First up - you know the drill:

**do:** `Fork` the [Lab 27 Template]() and `clone` onto your computer.  

Once you have your template forked, you can test it locally using the live server. Once tested, `stage` the changed files, `commit` your changes, and `push` to gitlab.

After you have done this you should be able to view your artefact in a web browser using the URL format: https://extn1019.cecs.anu.edu.au/u9999999/extn1019-2024-year-11-lab-27/

Change u9999999 to your UniID!

### Video Lesson Format

Daniel Shiffman has covered [Particle Systems in Coding Train](https://natureofcode.com/particles/) if you would like to follow a video structure of today's class

### What is a Particle System?

Siggraph (The Association for Computing Machinery Special Interest Group for Computer Graphics) is the key resource for all information about computer graphics.

[This is their explanation!](https://education.siggraph.org/static/HyperGraph/animation/particle.htm)
*"The use of Particle systems is a way of modeling fuzzy objects, such as fire, clouds, smoke, water, etc. These don't have smooth well-defined surfaces and are non-rigid objects, i.e., they are dynamic and fluid."*

It is important to note that **each particle has its own attributes** and a set of common behaviours.

This makes it an ideal candidate for object-oriented analysis and design.

### How can we use particle systems?

Conduct 15 minutes of research into how Particle Systems have been used, and think about ways you might wish to use Particle Systems.

Write down your ideas and findings.

Observe some particle system animations - and then write down what you observe about the behaviour and properties of particles.

## Particle Class

What are the properties of a single particle?  Write your properties down.

**do:** Share your properties, as invited by your teacher. Together we will build the properties for a Particle class. Note: there are no absolute set of properties, as some properties may apply only to specific effects. We will also discuss the datatype for each of the properties listed. 

Now we have a set of properties, add these to the constructor for your Particle class.

## Emitter Class

Particles are emitted over time. The are emitted from some point in space. The do not "self emit" (although, some particles may emit other particles as part of their behaviour).

We need something to be responsible for emitting the particles.

So we need to create an Emitter class/object/function.

What are the properties of an emitter?  Write your ideas down.

**do:** Share your properties, as invited by your teacher. Together we will build the properties for an Emitter class.  Does it need to be a Class? Would it be better as a function?

Write your Emitter code based on your decisions.

## Putting it together

Your Emitter Class needs to be "instantiated" - i.e. create at least one object - most probably in `function setup(){}`.

The emitter class usually emits continuously - so you need to ask it to emit in the `function draw()`. 

All existing particles should be updated each `draw()` cycle.  What needs to be updated?  Their age? Their position. Their speed? Do particles interact with other objects?

All active particles need to be rendered each `draw()` cycle.

Dead particles should be removed from the list of active particles.

Write your code. Test. Run. Debug!

## Effects

You may wish to try rendering smoke, fire, fountains, fireworks, rain, bubbles, or something fun and unusual.  Investigate examples and see what you may need to generate something amazing. Play around with the code. Experiment.

## Summary

Congratulations, today you:

* got up to date with the admin side of things
* investigated particle systems
* built your own particle class
* built your own emitter class
* played around with generating effects
