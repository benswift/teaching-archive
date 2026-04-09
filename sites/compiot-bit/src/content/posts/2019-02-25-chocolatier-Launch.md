---
author: Chocolatier
date: 2019-02-25
title: chocolatier's Launch Post
week: 13
---

I'm done building `cocteau`. 

The code and build instructions available on [GitHub](https://github.com/chocolatier/cocteau). 

It was meant to be a rover that tracks you and displays advertisements, but that is far from complete. 

Even as a prototype. The main idea - having the bot follow you around - remains entirely unimplemented. 

The only bit that is even remotely successful is the audio transcription. It's quite simple - I use the pre-existing code Google has provided to transcribe audio, and then use their APIs to perform sentiment analysis, entity detection and then use the Azure Image Search API to look up images. 

Nothing to write home about. 

I also did not get the communication between devices truly working - one of the main elements of the theme of the Dossier Society. 

I did plan a demo where I pipe the data from a Raspberry Pi A and Zero over SSH into my laptop, but somehow they fell apart while in my bag. Of course, it did not require any additional code. I needed to comment out the line where images are displayed, but that's it. 

The Raspberry Pi scripts dump everything to stdout, so I could just read that over ssh. But a proper protocol to share the data should have been implemented. 

## TODO

So, if I wanted to continue on with my original plan, our main list of TODOs is 

* We need to add more and better sensors to the robot, so that it can move around without bumping into obstacles or falling off.

* Scene analysis. I am not at all comfortable with this, but it is possible to use Google's Cloud Vision API or Microsoft's Cognitive services to analyse the camera input. 

* Object tracking - Follow the object MS/Google detect around. With some backup local code in case the connection drops.

* Communication - The devices should be able to share data independently

## Further thoughts

But I think I took the wrong approach entirely, and the rover became the proverbial albatross around my neck. The project would have worked better if it focused on content analysis. Audio and Video. And got rid of the motion entirely. 

And then showed people what was going on under the hood, along with the "advertisements". Displaying their actual conversations, the entities and sentiment detected and so on, and exactly how the relevant "ads" would have worked.[^dc] 

In such a context, I would have been able to get rid of my main constraint - computational power. A Mini-ITX PC with a monitor would have worked just as well. 

But welp, too late now. 

[^dc]: Having some of it dumped to the terminal doesn't count. 