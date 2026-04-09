---
author: Ushini Attanayake
title: + Da Art of Panickin' (Pt.1)
date: 2019-01-25
week: 9
---

It's a well known fact that hot weather induces lethargy. My internal temperature regulation system has exploded and glucose levels are dangerously low. So, I think its completely reasonable for me to blame the slow progress I have made on the heatwave hitting Australia. Justified!

![A meme?](./images/ushini/panic_on_the_inside.jpg)

Ok, it wasn't the weather, it was me. I feel like I have been working consistently over the last few weeks, but lets just say that my understanding of computer networks has a few 'structural holes' in it and it has really slowed down debugging. So I'm severly behind schedule. How about I just recall the events of last week, hmm? Aight, walk with me.

### Baby's first words

I finally got my wifi module to communicate with my computer. I'm a proud mama. When I left you last week, I was using my computer as a hotspot to connect my module to my network (I live on campus, strictly edu network zone, and didn't have my own router so). After much frustration I read that, if my computer was acting as a hotspot and as the server, it could be a possibility that my network card wouldn't route any network packets internally, to my own computer. This started to sound like the cause of my problem because I could send get requests and receive from Google's server. So, I tradded my soul for my friends' router and tried once more on their network. It still didn't work. Cool cool.
Then I thought, maybe the problem was that the the local IP of the module was not on the same subnet as computer. I then tried configuring my module's IP to have the same first 3 bytes, only changing the last byte. I was fairly sure it wasn't due to anything on server side, because I set up two devices, client and server, on the same network and ran two python scripts to communicate via network sockets and it all worked as expected. It turns out this was the problem in the end and when I used my phone as the hotspot, the module's IP would would be on the same subnet as my computer. In the other cases I would have to configure the module's IP.

I think I wasted a lot of time looking at exmples of code when debugging, which usually helps, but the ESP8266 libraries are very poorly documented (if at all) and the online communities are small. In situations like this, having a good understanding of basic computer networks theory would have atleast made troubleshooting faster. Having said that, even if I had understood that both devices needed to be on the same subnet, I would have assumed the library took care of all this and assigned an appropriate IP to the module upon connection to the network. In hindsight, I could have invested some time into reviewing protocols and how what neeeds to be established in order for devices to communicate on a wireless network. I could have acquired this from example projects and research papers, though most papers hardly go into any details about the implementation. In the future, when I get bogged down on a problem, I should try to gain a systemic understanding of what could go be going wrong by either brushing up on my knowledge in a certain area or asking my peers/lecturers.
Another thing I need to improve on is developing a rough sketch of the subproblems I need to tackle in my project. This would have greatly helped with estimation and I could have kept adding to it the more I learned about the hardware. Still not too late to start :)

So I tried both the WiFiClient library and the WebSocketsClient to establish communication. The WebSocketsClient has a few more functions which are part of the websocket protocol. This includes things like handshakes with the client which upgrade the connection to a websocket connection, allowing the server to communicate on e.g. port 80 with both websocket clients and HTTP clients. So I could potentially use a websocket client as a wrapper for a WiFiClient and give it some extra functionality in establishing a session etc. but it seems unecessary at the moment. Reading the raw byte stream should be fine. Ooff or this could be a major oversight on my part. I'll find out in due time.

And shout out to Brent for a) reading my blog and b) telling me I'll probably need port forwarding set up if my server will be connected to the uni network. My accomodation techinically doesn't allow personal routers, even if they aren't connected to the uni network, so I'll have to make do with my lil' hotspot. And as for the showcase, If I haven't emailed you by the time you read this Ben, I'll need port forwarding please! :B

Oh yes, and the fetal code is now available at [beatclay](https://github.com/Ushini/beatclay). beatclay; 'cause you can mold a beat with it. Yea, not proud of the name, but it'll do for now.

### Serving Up Phat Beats

I havent talked a lot about the server side, mostly because there isn't a lot to talk about. At the moment I have a python script on my laptop which handles each client connection on a new thread. I'm using the websockets library (although, I assume the net socket library would work just as well) and the \_thread library for this.

I'll be implementing the aggregation methods discussed in [last week's blog](). I'm not sure if I'll be able to aggregate all the data in real-time. I'm imagining two possibilities here. In one scenario, I have the data read in at short time intervals from each client, I aggregate and then send this out to the Extempore text editor extension from where I'll be able to control the execution of the code generating the music. Or I can maintain a buffer and aggregate sets of data at a time, in case the aggregation is time consuming. I will vectorise as many operations as possible for the aggregation to minimise time spent on this task.

### Rejig The Plan

- Since I would like to have at least 3 bracelets, I need to order another Wifi module and 2 more accelerometers. These should arrive within a week (please).
- draw out a rough diagram outlining the subproblems in aggregating the data and sending it to the Extempore extension.
- While I wait for the extra components to arrive, I will:
  - try to read some accelerometer data. I've got it all wired up and ready to go.
  - finish the code for aggregation on the server side.
  - Have a plan of attack on how to send this to and execute changes in the Extempore extension.

See you next week :)
