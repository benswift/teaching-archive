---
author: Chocolatier
date: 2018-12-16
title: chocolatier leaves Beijing
week: 4
---

## Last week in Beijing

I began the previous week by putting on some [weather](https://www.youtube.com/watch?v=xWkz0DF-3g8) [appropriate](https://www.youtube.com/watch?v=ajBDGwumWcA) [music](https://www.youtube.com/watch?v=Jqyr-GxFSYs) visited The Temple of Heaven again. The Cypress Grove was the first time in weeks that I was away from other humans, and did not have any cameras in sight, so I took that opportunity to relax, and enjoy the weather while listening to [good](https://www.youtube.com/watch?v=8wR6cHwoZtM) [music](https://www.youtube.com/watch?v=FGSh-kCmHWs).

Later that day, I headed off to the Gulou. While the structure itself wasn't particularly impressive, what I found nearby was GREAT. Shops selling all kinds of random crap. Multiple stores wall to wall with anime gear. A shop full of rare gunpla. Old Japan only PS Vita and NDS games. An indie music store calling itself "the best music store", with all kinds of Black and Death Metal albums. Unfortunately I wasn't carrying cash, and I refuse to use card directly where avoidable, so I made no purchases on that day (or fortunately, considering how much money I would end up wasting :p). I had been shopping in all the wrong palces.

I also stumbled onto a cat cafe (pics soon).

The other place we visited was the National Museum of China, which unsurprisingly also served as a propoganda arm. The ancient collection was great. But worth standing outside, waiting to go through security? Debatable.

Now, some rare IRL footage of me climbing the Great Wall of China.

On the study side, it was much the same as last week. Except for the Transfer Learning in IoT lecuture.

![delicious. Finally some good fucking food](/images/posts/chocolatier/food.jpg)

We also had a presentation, where [I spoke on privacy issues](https://www.youtube.com/watch?v=_nTpsv9PNqo).

## Thoughts on strong crypto

This week we said farewell to Timothy C. May, the author of the [Cyphernomicon](https://activism.net/cypherpunk/).

One of the more significant points of the cypherpunk ideologies he promoted is favouring technical solutions for anonymity and privacy over legal ones. This was pertinent in the 80s as the Americans tried to limit cryptosystems to be breakable, and with Australia's insane new Access and Assistance Bill, it is all the more pertinent now.

We have had the technology to ensure a high degree of anonymity since the 1980s, and as cypherpunks back then observed, it would only become more powerful as time progressed. We have made significant headway into the "digital cash" realm with cryptocurrencies and privacy coins, have large scale onion routing with TOR, have anonymous P2P and distributed file systems etc.

But something that they failed to realise is just how little effort the average user would be willing to put in, and how little tolerance they would have for even the slightest inconvenience.

Another aspect that we missed, living in the liberal west, is just how massive the threat posed by state level actors was. This is especially prominent in authoritarian regimes like China, where [entire populations](https://www.theguardian.com/world/xinjiang) are subject to [rubber hosing](https://www.xkcd.com/538/). It takes the slightest slip up - Not scrubbing EXIF data from images, accidentally using your IRL name as a nick, using the same ID long enough enough (correlation attacks) can allow the state to narrow in, even if the technical implementation is perfect[^unlikely].

[^unlikely]: Quite unlikely

But if we make anonymity easy or the default[^unlikely], or make the lack of anonymity positively dangerous, then users will be willing to adopt it. This can be seen with Japanese P2P software like Share or Perfect Dark. Harsh legal penalties for copyright infringement have pushed filesharers to adopt software that masks their identity by default, even though bittorrent tends to be faster.

## Artefacts (A.K.A. I rip off Cryptonomicon)

While it is easy to want to feel despair and give up (as I did in my previous post), I have realised that building something potentially useful, even if nobody adopts it, is still better than building something that is truly useless.

### Holocaust Education and Avoidance Net

Inspired by the Holocaust Education and Avoidance Pod, this would be a mechanism to distribute information to at risk populations.

This involves balancing two countervailing forces - deniability and pervasivity.

It is unlikely that a government targeting an population would allow them strong crypto, so it becomes important to be able to be able to deny it. (In fact, in the Xingjiang case, they are forced to install an [surveillance app](https://en.wikipedia.org/wiki/Jingwang_Weishi))

However, if not many people are there on the net, then it isn't very effective at distributing information.

My idea consists of an IPFS like file system on a meshnet, with two requirements.

1. Be cheap, and run on battery power so that small devices can be hidden in public. Perhaps using relays built using ESP32s or Raspberry Pi Zero Ws.

2. Be easily disguised as something innocuous, like say, a "Smart" TV.

Now, this device would not make resistance danger-free. However, it might make it easier to distribute information.

### Electromagnetic Snooping

This artefact would take the "make non-anonymity dangerous" by removing the veil of anonymity some of the most dangerous devices (Smartphones).

Inspired by the use of van Eck Phreaking in Cryptonomicon, we could employ side channel leaks to extract information from phones in public.

Either via classic Electromagnetic Snooping or by implementing something like [TouchLogger](https://www.usenix.org/conference/hotsec11/touchlogger-inferring-keystrokes-touch-screen-smartphone-motion) or [Pin Skimmer](https://www.cl.cam.ac.uk/~rja14/Papers/pinskimmer_spsm13.pdf), except only relying on remote camera and microphone data.

High Speed Cameras can extract fine grained motion data. Given we can extract sound from chips bags, as demonstrated with the [Visual Microphone](https://people.csail.mit.edu/mrub/VisualMic/), tap data doesn't seem like too much of a stretch. Which along with more direct visual cues, we can use to reconstruct a "touch map", noting locations the user touched.

By correlating it to a qwerty keyboard, and perhaps doing some dictionary assisted error correction[^pw], we might be able to read what a person is typing, even if we can't see the screen.

[^pw]: I would like to say that this would decrease the accuracy of password theft, but we both know that that's not true.