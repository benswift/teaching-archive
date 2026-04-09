---
author: Harrison Turton
date: 2019-02-18
title: Design Rationale
week: 12
draft: true
---

### What ideas or existing projects inspired your work?

The general concept – working with decentralised networks – was conceived immediately after the
Wireless Sensor Networks lecture at the Beijing Institute of Technology. The
lecturer touched on multi-hop systems, and cooperative routing via neighbours.

I immediately dived into a sea of wikipedia articles, Hacker News posts, and articles.

I’m pretty good at visualising these algorithms, and I knew they’d look good with LEDs. Though I
couldn’t find any previous visualisations of these routing protocols, I found
many cool displays of pathfinding algorithms. Since pathfinding & routing is
extremely similar, these cool visualisations sealed the deal – I’d do routing.

### How does your project explore the theme?

I discussed this in my last blog post. Though I can yak for hours on the technicalities of routing algorithms,
that’s not interesting to the average gallery-goer.

What is interesting, however, is the hugely transformational effect of the internet. If it weren’t
for the foundational algorithms, like distance-vector routing, we wouldn’t live
the lives we do today.

> This (delightfully) simple algorithm paved the way for the modern the web. Indirectly, distance-vector routing touched the hearts and minds of billions of people around the globe.
> <span class="cite"><a href="">Previous Blog</a></span>

Consider the theme, (dis)connecting together. Our artefact relates to this on two levels: technical
& social. Technically, multi-hop routing allows groups of disconnected nodes to
connect together.

Socially, the same thing occurs, but is much more meaningful. It’s impossible to enumerate the effects of a wholly connected
society. It’s increased the rate of social progress, enabled more travel,
increased the quality of distant relationships and (at first) granted
accessible anonymity to the masses.

### What do we want the viewer/user to think/feel/do after they’ve experienced the artefact?

The average gallery-goer is completely removed from the tech
that supports our internet. In a perfect world, each viewer will be deeply touched by our artefact, all embarking on a journey to a Computer Science PhD.

Realistically, this won’t happen. We can’t expect our viewers to fully
understand distance-vector routing. This isn’t an educational display for CS
students, but for the general public.

We want to spark an appreciation for the technology underpinning the internet, because we often take it for granted.

Connectivity is a commodity – everyone has the internet.

For each viewer, I want to inspire an appreciation and interest in how we’re connected. I want a
curious student to dive into Wikipedia, read up on undersea cables, or look for
relevant courses at ANU. As I stated in my previous blog post, we want to
connect the layman to the (relatively unknown) world of the practitioner.

If we fail to spark an interest in how the internet works, I’ll also be happy to
inspire a simple appreciation for the men & women who made the internet a
reality, and thus enabled the lives we live today.

### What design criteria did we choose to prioritise? Which criteria did you have to sacrifice?

There are 5 different design criteria:
1.	Ambition
2.	Technical quality
3.	Demoability
4.	Engagement with the theme
5.	Wow factor

We chose to prioritise “wow factor”. It’d be really cool to
watch a dark network spring to life, with LEDs flashing and lights rolling
through the web of connected nodes. Since our goal revolves around
inspiring interest and appreciation, I figured wow factor would be the best
way to attract more viewers. I also really like the way our artefact
connects to the theme – the internet triggered a societal shift akin to the
iron age, yet most don’t understand the basic concepts.

Initially, we had a really ambitious project. We wanted to demonstrate the ins-and-outs of
the routing protocol, with complicated visualisation techniques and flashy
LED patterns. We were very susceptible to feature creep – to make an
effective artefact, we had to focus on specific functionality.

During the feature cull, I thought this would make our artefact less compelling. We
couldn’t create the cool comprehensive display! Ultimately, this proved to
be a good decision. Our features were not essential to our goal, they were
fluff. Cool fluff, but fluff nonetheless. A quote from Mark Twain comes to
mind:

> “I didn't have time to write a short letter, so I wrote a long one instead.”
> <span class="cite">Mark Twain</span>

A viewer, confronted with the massively complex demonstration of
distance-vector routing, would not have any big takeaways aside from “Nice
LEDs”. By nailing down specific functionality, I hope our viewers appreciate
what we’re trying to exhibit.

Due to time constraints, we also sacrificed a bit of technical quality, since
we needed to get the artefact out on time. If I were a real artist, I’d treat
this as a test – a proof-of-concept MVP to improve upon.

### What was your design process? How did the project develop over time?
Our design process was iterative and reductive. We started with something extremely
practical (an actual sensor node, for use in sensor arrays). This would create
a pretty lacklustre gallery display, so we quickly swapped to distributed
routing visualisations.

Still, our goal was overly broad and ambitious. As
time went on, we were forced to shave our feature-set into something more
approachable.

At first, we wanted a detailed demonstration of distance-vector
routing. Each node would have a button, a switch, and an LCD display. The
“sensor data” would stream, in a distributed fashion, to a laptop. Each viewer
could interact with the whole network; through the laptop, or with individual
nodes; via the switches & buttons.

Our choice of boards was restricted by the number of GPIO pins – since each LED strip required 3 different connections.
This forced us to adopt boards without LCD screens. Since we weren’t willing to
purchase a large number of screens (and spend time integrating them), we
scrapped that idea. Similarly, we weren’t interested in reimplementing the USB
protocol, so we culled the laptop base station and real-time display.

In the end, we carved an approachable, achievable artefact from a huge block of pure
feature-creep. As I discussed earlier, I think this was beneficial. Our initial
concept would have been a bit overwhelming (albeit interesting). A layman would
potentially find it difficult to interact with, and to understand.

### What were the challenges faced in developing your ideas and prototypes?
Ah, the challenges! We had many – development wasn’t a smooth process, but rather a
streetfight with the vicissitudes of embedded development.

From the beginning, we knew we wanted to use Rust. Our other choice was C, but we really wanted the
guarantees of strong typing. In the end, this was probably a bad decision.
Learning the borrow checker and the navigating the crazy-strict compiler slowed
development significantly. We’d be better off working with an embedded language
that simply offered strong types – perhaps D, or Lua. Maybe even a strict
linter.

Our first challenge was getting Rust to work on the Discoboard. Tim
did most of this, but I appreciate the difficulty in getting it to work. We
were forced to flick through hundreds of esoteric cargo crates, understand code
generation and HAL libraries. We read through multiple eBooks on embedded Rust.
We played the game of test-and-check with the memory config files, before
finding the correct bit of documentation.

On top of this, it took three weeks for our boards to arrive. In the meantime, development was completely stunted.
Since our display requires multiple boards to be connect, there wasn’t much we
could do.

When they finally arrived, we had to jerry-rig connections between
each board. Since an LED strip can only be connected one-way, we have to do
some tricky arrangements to make them seem bi-directional. This meant we had
two types of boards – “hub” ones (which accepted connections from other boards)
and “spoke” boards (which connected to other boards).

### How has it changed the way you think about IoT?
Coming into this course, I didn’t really understand IoT. Large corporations pushed this “technology of the
future”, but I could only see smart watches & fridges. I had over-focused on
products relating to me and failed to consider applications within different
industries.

The research leading up to this project flipped my perspective.
Especially in farming, wireless sensor networks (enabled by distributed routing
protocols) have the potential to be transformational. In some areas of
environmental research, low-cost, low-power, wide-area sensor arrays are
important when examining environmental changes.

Though I’m still critical of certain IoT applications (smart toasters?), my perspective on the “IoT
landscape” has been broadened.

Though I can’t see a future wholly transformed by IoT, I do think it’ll play a big role in physical industries, like construction & farming. These spaces have traditionally been very low-tech, and so have a lot of room to grow.
