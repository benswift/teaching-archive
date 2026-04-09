---
author: Harrison Turton
date: 2018-11-30
title: Precise Solutions to Imprecise Problems
description: Exploring technical solutions to abstract, ill-defined problems.
week: 2
---

My understanding of IoT is slowly developing, but I've yet to fully internalise the concept. We've discussed the technical challenges that underpin IoT, but haven't touched the business applications.

That being said, these challenges are really interesting! I enjoyed searching for precise solutions to imprecise problems. We touched on some interesting topics:

* Guaranteeing privacy, even from upstream entities.
* Breaking down how we can understand contextual and semantic information from unstructured images.

These are very nebulous problems! How do you guarantee privacy from your electricity provider — how can you hide that?! Hopefully not without increasing my bill.

How do we understand images? As analogue animals, we don't interpret discrete colour signals (like pixels) but instead "read" shape & texture. How can a computer do this? Are the problems of viewpoint variation, varied illumination & occlusion (etc) too prohibitive?

## Computer Vision

Can we understand images? What does that mean?

As humans, we can:

* Make semi-accurate assumptions about who, what and where.
* Reliably interpret images despite strong viewpoint & illumination variation, occlusion, scaling, artistic styling, etc.
* Interpret the dynamic action in static images (e.g. running, falling, laughing).
* Guessing what will happen next. Will the falling glass break? Will the ball bounce?

And much more. This is amazing, and an area where even cutting-edge tech fails. If  huge tech companies (pouring billions into AI) cannot do this — is it even possible?

Ignoring the philosophical implication of this question, we can try breaking the problem down. If we cannot solve this on a pixel-level, can we do it on a shape level? How do we jump between these levels of abstraction?

As a consequence of our physical camera systems, we can show that:

* Nearby pixels are similar
* Nearby objects have nearby pixels
* Object boundaries are clues to object shape
* Far-away objects appear smaller
* Light gives clues to shape

Using these rules, we can roughly jump between the pixel and shape level. We can do similar things with texture to estimate material.

## Project Thoughts

When looking at successfully commercialised IoT products, I discovered "smart farming". An interesting application involved distributing hundreds of small sensors over a large area to measure humidity, temperature and soil mineral content, among other metrics.

The user (a farmer) needs to:

* Receive and analyse the collective data
* Get notified when the sensor breaks or malfunctions

Ideally, each sensor should be:

* Cheap
* Weather-proof / weather-resistant
* Easy to construct & mass produce

These requirements work somewhat against each other. A cheap sensor won't work well in bad weather, and it won't be able to communicate over the (comparatively) large distances on a farm.

Existing products are expensive, and manually drilled into the ground. Instead — assuming the unit cost could be reduced — thousands of sensors could be dropped throughout the fields.

Since cheap sensors can only reliably communicate over a short distance (especially considering bad weather), this could be a great application for decentralised/distributed protocols. A base station could send out a "data request", and each sensor would relay their messages back to the base station.

Interesting problems to solve:

* Efficiently sending data back to the base station. Must minimise unneeded message passing, and do some sort of load balancing with sensors near to the base station.
* Detected when a sensor is broken and determining where it is.
* Getting all data from a certain location
* Making sure all messages are distributed through the network, even if it is sparsely connected.
