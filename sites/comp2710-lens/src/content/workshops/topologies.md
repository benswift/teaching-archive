---
title: "Week 10: topologies"
summary: "Thinking about the parts of your performance and how they fit together"
---

**Solo AVD**: imitation is the sincerest form of flattery---do something in the
style of one of your classmates (you'll be assigned a specific classmate via
Teams)

This is the final AVD entry for the semester.

<span style="font-size:2rem;font-weight:900;">topology</span> (təˈpɒlədʒi)

_noun_

1. the way in which constituent parts are interrelated or arranged: using
   distances determined in this manner ignores existing road conditions and
   topology that can potentially affect travel time and costs | the topology of
   a computer network.

2. _[mass noun]_ Mathematics the study of geometrical properties and spatial
   relations unaffected by the continuous change of shape or size of figures.
   - _[count noun]_ a family of open subsets of an abstract space such that the
     union and the intersection of any two of them are members of the family,
     and which includes the space itself and the empty set.

(definition from the [Oxford English Dictionary](https://www.oed.com))

There's no new content this week; instead we'll step back and think about the
topology of a laptop ensemble performance (with a specific eye to your plans for
your final performance).

Before this week's workshop, have a think about:

- **what are the components of your final gig topology?** this includes people
  (your ensemble-mates, audience), software (Pd, Extempore, Processing, web
  things) hardware (laptops, midi controllers, Goon-a-trons) and the
  infrastructure required to connect them all

- **what are the flows of information in this topology?** this includes audio
  signals (both digital and carried over wires, plus what's coming out of the PA
  loudspeakers), data/control messages (MIDI, OSC, FB Messenger chats), visual
  information (HDMI streams, data projectors and audience eyeballs, non-verbal
  communication protocols you set up with your ensemble-mates)

## Goals for this week

1. to examine (and analyse) the work of other computer musicians with a view to
   emulating it

2. to think about the parts of your [final performance](/deliverables/lens-performance/) and how they fit together

## Resources

This is mostly pointers to things we've already covered, but hopefully these are
helpful reminders of the things you already know. Also, these are some good
suggestions about ways to do things, but they're not iron-clad rules. If you're
unsure about the best way to achieve your creative goals, discuss it with Ben &
the rest of the LENS during the workshop slot.

### Code

- if you want to collaboratively edit code (i.e. multiple cursors in the same
  window) then [VSCode live
  share](https://code.visualstudio.com/learn/collaboration/live-share) might be
  a fun thing to try

- as some folks have explored already, manually sharing code through a chat
  window (which is displayed to the audience) can be fine (great, even!) but
  still requires some careful thought

### Data/control messages (software)

- OSC (in [Pd](/workshops/networks-collaboration/#pd-resources),
  [Extempore](https://github.com/digego/extempore/blob/eeed3fc6c19bfa247198c5a0ee3c3d04b66aae41/examples/core/osc_101.xtm),
  [js](https://github.com/colinbdclark/osc.js)) is probably going to be your
  best bet for sending data/control messages between pieces of software,
  _especially_ if you want to do it over a network

### Data/control messages (software/hardware)

- if you're trying to connect a piece of hardware (i.e. a MIDI controller) to a
  piece of software, then MIDI might be a good option if both "ends" of the
  connection can speak MIDI (less flexible than OSC, but most musical hardware
  devices speak MIDI by default, and only the more esoteric ones speak OSC)

### Networking (hardware)

- if you can manage it (i.e. if all the devices have Ethernet ports) then using
  a simple wired router/switch is the most stable way to connect things, and
  then just typing in the IP addresses manually (there are usually few enough
  devices that this manual process isn't too tiresome)

- if you need wireless connections (i.e. you've got mobile devices involved)
  then using a separate wireless LAN (with no devices on it other than the ones
  you need for your performance) is the next best thing---much safer than trying
  to use the gig venue's (or ANU's) wifi

I've had a few requests for me providing a LENS wireless router for the final
gig---I'm looking into it and will let you know what the plan is ASAP.

### Video

- video mixing can be done either in software (using
  [OBS](https://obsproject.com)) or hardware (using the LENS's
  [V-1HD](https://code.visualstudio.com/learn/collaboration/live-share))

### Audio

- as discussed in [week 5](/workshops/networks-collaboration/)
  there are several ways to send audio over the network, but (as you _also_
  figured out in putting together your week 5 AVD) some of them are hard to get
  working

- we'll have a mixing desk at the gig, and if you want a line _in_ to your
  machine (e.g. a mixdown of the output of the other participants) then there
  are ways to handle audio input in Pd/Extempore

## Things to think about

- you still get to exercise your own creative agency in your AVD---you get to
  select which specific aspect(s) of your classmates' work you'll try and pay
  homage to

- sketch out a diagram of the flows of audio/code/control messages/visuals/human
  communication in your planned LENS performance---if you have any questions
  about how to make it happen (either technically or aesthetically) then now is
  a good chance to ask them

- how are the audience going to perceive what you're doing? are there flows of
  information you can add (or remove) from your topology to communicate more
  clearly with your audience?
