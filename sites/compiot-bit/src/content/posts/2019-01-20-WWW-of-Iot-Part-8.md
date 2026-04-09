---
author: William Cashman
date: 2019-01-20
title: WWW of Iot Part 8
week: 8
---
### I'm in...

Greetings all and welcome back to this blog series.
This post will be yet another project update which I am quite excited to present as I have finally connected to the internet! (a development alluded to by the title of the post).

I will summarise what has happened so far by addressing the schedule, then going into more detail afters:
- Get the software analysis working well: This was a milestone and though I have worked on it I cannot say it has been fully achieved. This is largely to do with the fact that the sensors only arrived last week and working the sensors themselves was not as simple as anticipated.
- Gain sufficient understanding about connecting the device to wifi: This task has actually be exceeded as I have not only researched it thoroughly, but also hold a working program which can connect to a wifi access point and send HTTP requests on a remote server.

#### Interrupts
This is primarily Zoey's area, so I suggest reading her blog for more information.
But on my side of the development, I have successfully configured an interrupt on one of the ESP32's GPIO pin. Although the interrupt is firing correctly, I have not implemented the actual algorithm for testing.
![Touch sensor linked to system interrupts](/images/posts/will/interrupt_firing.png)

(Though as seen in the diagram shown in last weeks blog, I am not expecting it be too difficult to accomplish) Though that is only the basic model which will serve for most of the testing purposes, we will hopefully be able to expand it to allow it to record more complex drum patterns.

#### Wifi Communications
With the tutorials I mentioned in my previous posts, I was able to connect my ESP32 to the internet and exchange HTTP requests with the (blog tutorials) author's online server.
This is a hugely promising development as it means I now have a template for general TCP communications on the ESP32 which will allow me to (relatively) choose my socket connections and request things from my own local server. I've also considered the possibility of programming a feature where the ESP32 itself can host a server to which I can directly download the musical score from, without having a centralised server acting as the middle man.
Of course, this runs in opposition to idea of having the centralised server act as a social media-like platform to which you can easily share with your friends but still. Perhaps in testing it might prove to be the simpler option and so I will strive to investigate that avenue in this coming week.

#### So whats next?
Alongside configuring the ESP32 to host its own server I will also look into fleshing out my local server (on my computer) so that it can process the ESP32's requests and receive the musical scores it uploads. I already have the database setup but I'm not sure how I can link it to HTTP requests. Though I have a feeling that it will involve a bit of SQL programming, so that is another thing I will have to become acquainted in by the end of the week.
