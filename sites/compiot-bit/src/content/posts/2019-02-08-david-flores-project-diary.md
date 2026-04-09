---
author: David Flores Condezo
date: 2019-02-08
title: ★ Ripples in The Red Dragon 10 | Project Diary
week: 11
---

Last week on Ripples in The Red Dragon, I worked on my project, faced unexpected challenges and documented it on my project diary..
This week follow me in a journey as I work on my artifact & explore the field **Internet of Things**,
Delve into my mind as I share my ideas, passion, and knowledge that I steadily built upon my time and experience in Beijing.
I look forward to our time together and to exchanging invaluable concepts. :)
For **LIT** photos documenting my work see below ↓

## Artifact

### Research done this week
 This week I have been continuing researching similar IoT solutions to my current artifact.
 While researching I found an IoT company called: sigfox.
### sigofox
Sigfox is an IoT company focusing on building smart office spaces and supplying smart office equipment. Relating to my artifact are two of its solutions, 1st being their smart desk:
Smart desk monitoring solutions based on infrared technology and temperature sensors are the ideal solution for mapping and monitoring occupancy rates for your office space (desks and meeting rooms) and facilitating the move to these new ways of working. Occupancy rates will increase and real estate costs optimized as available space can be sold, rented or repurposed.

![Smart Building](/images/posts/david-flores/smartBuilding.png)

The 2nd is their employee monitoring solution:
This solution includes time clocks connected to the Internet through the Sigfox global IoT network which allow you to monitor the attendance of your workers on remote job sites. This allows to forget the hassle of SIM cards for tracking employee comings and goings with constant and real-time connected monitoring.
They're solution is very similar to mine however it is more focussed on remote job sites as opposed to just pure employee working monitoring, although the results are almost the same.

![IoT Meme](/images/posts/david-flores/sell-platform-meme.jpg)

### What i've been working on
 This week i've been trying to fix the readings the infrared sensor has been sending to my database aswell as polishing the front-end aspect of the web display. I also started working on the gamification that will be between the employees determined by the infrared sensors.

### Problems Faced
This week the problem I faced was that my Infrared Sensor was sending "strange" readings to my firebase database. After some analysing I narrowed down the problem to my solution so the only thing I could do was to debug by stepping through the code. I did this in the simplest way possible.. by grabbing a pen & paper and stepping through it myself.
![test case](/images/posts/david-flores/testCase.jpg)
Unfortunately this yielded no results and i realised i had to do a more complicated in depths analysis of the code which tested intercombinations of when there was motion detected and not detected. I will be performing these tests as soon as possible.

### Reflection on IoT
 For the following last entries in my project diaries I have decided to relate my artifact to the entire field of IoT and comment on the impacts/issues raised by IoT and how this conflicts/relates to my project.
 This week's topic will be relating to Security
### Security
One of the biggest threats, if not the greatest threat to IoT is all the strain that is put on the global system of information exchange that IoT has to rely on. The Global Risks Report of 2018 highlighted the menace of cyber-attacks and the danger to all interconnected enterprises if the IoT is compromised as a result of internal weaknesses. 
<iframe width="560" height="315" src="https://www.youtube.com/embed/_345SdQ6Nq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
I reccomend giving it a watch as it is very informtive however only some of the risks are IoT related.

Now I have to admit that having IoT security as a top gobal risk is kinda scary. We're living in a world of technological IoT advances however we are completely underresourced to deal with security attacks and a lot of bussinesses are not getting on top of this to prevent these attacks. After doing some research I found that the Annual Economic cost of cybercrime is estimated to be around 1 trillion US dollars, which even supersedes costs of natural disasters such as Hurricane Sandy and Katrina.

Just imagine how disastrous that is, we need to start thinking ahead of this and start putting more resources into this. Think about the government angencies and private angencies that respond to natural disasters as oposed to IoT Security risks and yet the amount spent in recovering security crmies is a lot more than that of natural disasters, and I am part of the problem. 

At the moment I am focusing on the development of my artifact and have set aside security. My artifact's current security is limited to a couple of lines of basic firebase rules which I quickly threw in before starting development of my artifact. Although my artifact is not a grand scale and the data picked by it will not be that of 1 Trillion US Dolars loss, this is the mindset that needs to change. We and me included need to start thinking of security before implementation and development of applications and artifacts, otherwise this threat will keep rising and resources will be continued to be wasted.

Security threats are also now encompassing Artificial Intelligence-based devices and services. I found that Experts are suggesting that malware is now becoming better at evading detection via AI. At a contrast, some are arguing that AI is limited due to the lack of human intervention in its activities, which also affects its performance when it comes to identifying cause and effect in an investigation. So, AI might not be equipped enough yet to deal with the rapidly increasing problems that are facing the cloud and IoT in the face of cyber-attacks. The bottomline is that cyber security threats are rising and I believe we need to start prioritising security and start investing more in security as well as development.

To not end on a serious note:
![Password Meme](/images/posts/david-flores/passwordMeme.png)

## Warm Regards
To conclude this post, I look forward to my progress next week in continuing programming and building my artifact.

Ciao..

![Beijing](/images/posts/david-flores/Beijing.jpg)