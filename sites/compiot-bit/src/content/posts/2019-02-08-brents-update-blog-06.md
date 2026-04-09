---
author: Brent Schuetze
title: 2 Minutes to Midnight - re:rIoT.10
week: 11
date: 2019-02-08
---

  
*Note: A fitting (almost)final song celebrating the creation and devotion to music*
<p></p>

#### *In this (penultimate) chapter, a reflection on theme and implementation, a quick look at a similar project and more Spotify API work*

### Design and(or) Implementation
I recently had a discussion with [Kieran Browne](https://kieranbrowne.com/) about my project and some ideas around design, prototyping and implementation. Some of the ideas and points that arose were quite interesting and I thought that now would be a good time, with the deadline approaching and the project progressing, to go over what I had initially planned to implement and create for the project and assess whether or not it furthers the initial design point / theme *((dis)connecting together)* of the project *(bringing people together by way of shared interests in music)*, or if it can be removed.

#### Playlist Management
Before this discussion I had planned to implement changeable rules and restrictions around playlist management that would be automated by the jukebox. Examples of this included:  
* not allowing a song to be repeated within a certain *(specifiable)* timeframe
* not allowing multiple of the same song to be added to the playlist queue
* not letting the music stop if the queue is depleted  
  
While these sound like perfectly fine restraints for a radio / event playlist, I am now considering whether they make sense or contribute to my overarching theme for the project.  
  
**not allowing a song to be repeated within a certain *(specifiable)* timeframe**  
While this is a *nice* functionality and quality of live implementation, it doesn't actually do anything for the theme, in fact it almost takes away from it, by restricting what songs people can listen to it may discourage them from interacting with the jukebox further which isn't in line with the theme.  
An example of this would be if someone had walked in soon after a song they liked had finished, and then they went to request it but the jukebox denied them. In this instance they will not be able to find out who originally played the song, and the person who did play the song originally will not know about them.  However, if this restriction is not in place then they can play the song, and while this may annoy some of the other people hearing the same song twice, there is a possibility that the person who played the song initially will seek out the one who requested it again, which would not be possible if this is implemented.  
*Status: __axed__*  

**not allowing multiple of the same song to be added to the playlist queue**  
This one is very similar to the above, creating negative feedback by denying song requests and denying interactions by not informing a listener that there are more people out there that like the same song as them.  
*Status: __axed__*  
  
**not letting the music stop if the queue is depleted**  
Now, this is a little different to the above. What do you do when user requested music runs out? Initially I had planned to use the [Spotify recommendation](https://developer.spotify.com/console/get-recommendations/) API, however after more thought on the area this idea is a wasted opportunity and again lies on the more practical side without furthering the project. So in line with this, I thought about what ideas might work around in this instance and would further encourage interactions and use of the jukebox.  
There are two ideas that have surfaced from this, one option is to play a song that might be considered annoying or 'unwanted' so that *nudges* people to actually interact with the jukebox and use it; the other, *and one I will most likely use*, is to just let the last song repeat until a new song is added. This is a bit more subtle, but still works as listening to a song you may not even like on repeat is hopefully a good motivator for people to interact with the jukebox, but is still not so annoying as to drive people away from the area like playing an annoying song might do.  
*Status: __adjusted__*  
  
#### Phone lock boxes
![](/images/posts/brent/lock-box.png)  
Initially, I had planned to have lockable boxes (automated with motors) that required the restaurant pager token to be returned before the locks would open. This would act as both a security measure (no one steals your phone) and an extra way to ensure people kept their restaurant pager on them so that the song requester can be identified.  
The lock boxes could be considered somewhat important to the central theme of the project for a few reasons:
* reluctance by users to leave phone unattended
* careless attitude towards restaurant pager because of less meaning (not required to get phone back)
* loss of meaning behind the action of physically *locking your phone away*

However, despite these points I don't think that it is a critical component for the project to work and convey the intended theme / idea. As a result of this, I will be putting this very low on the priority list and will only be completed if time permits, instead I may just use LEDs to indicate a 'locked / unlocked' box to show that the system works and would just need some extra wiring and construction.  
*Status: __on the back burner__*  
  
#### Restaurant pagers
![](/images/posts/brent/restaurant-pager-diagram.png)  
This idea initially started off as a simple modification to the restaurant buzzers you find at take-aways and various other food related places. Unfortunately they are a very closed system and are not cheap, so I [purchased my own series of components](https://cs.anu.edu.au/courses/china-study-tour/news/2019/01/25/brents-update-blog-04/#shopping) and decided to make one myself.  
The concept behind them, was that they would be able to wirelessly and immediately identify who requested the currently playing song and also work as a key for the lock boxes. The notification / identification aspect is crucial to the success of the theme of *connection over shared music interests*, if it didn't exist then there would be no way to identify anyone unless you saw them putting the song on and there were no other songs in the queue.  
As a result of this being so crucial, it is not something I am willing to remove or change drastically as it would significantly detract from the theme if I did.  
*Status: __full steam ahead__*  

### Other projects
So, in researching for traits of traditional jukeboxes, I found out that there are already a reasonable amount of projects that aim to do a kind of Spotify DJ / Jukebox thing too. One is called [Jukestar](https://jukestar.mobi/) which is a Spotify party playlist management type app. But while it shares a similar base platform, it is really nothing like my idea. Here are a few differences and reasons why it wouldn't work as an actual jukebox replacement:  
* the playlist and songs that are played are democratically managed by voting, this means that you will very rarely hear new songs or songs that are love / hate as they will never reach popularity (votes) and be picked for playing
* all of the features are stuck in the app on your phone which does 2 things:
    * means you need to download a whole new separate app just to use it (no simple browser requests etc.
    * keeps people on their phones and not encouraging interactions etc.
* it costs, this is a monetized app and as a result already loses some of the user friendliness by slamming it behind paywalls etc.

I can see the appeal behind apps like this, and why they are monetized, but it certainly doesn't fit my theme and would not be applicable to my use case.

### A-synchronous Hell
![](/images/posts/brent/remove-songs.png)  
A lot of my work on the nodeJS server (and in fact all of the javascript coding) involves a large amount of HTTP requests, it's how I interact with the Spotify API, it's how I communicate between the server and other javascript clients and it's also how I communicate locally between the nodeJS server and my python script.  
Now, one of the benefits of using the fetch API (javascript API for HTTP requests) is that the requests and responses are all done asynchronously. This is really great for performance and multi-tasking as it means that you are not blocking execution waiting for a response etc.  
However, this does create an issue when you rely on a response from a request to know what to do next or need them to be completed in order. For example, to remove every song from a playlist, I need to know what songs are in the playlist, to do that I need to make a fetch call. Oh... I can only get 100 songs at a time, okay well I'll get those 100 songs and then remove them, and after that? there's still more songs, so I need remove them too... But to remove the next lot of 100 songs I need to know what songs are on the playlist, so I need to get what songs are on the playlist, but if my previous delete isn't done yet then I will end up in an inconsistent state, what happens if one of the songs in the list of songs I try to delete isn't in the playlist? It will error and the entire request will fail *(I'm not saying this is a bad solution, but still)*.  
'Man, this sure sounds difficult' I hear you say, 'Why not just remove the playlist and create a new empty one?'. Well, I hadn't th... Just kidding, [you can't](https://developer.spotify.com/documentation/web-api/reference/playlists/remove-tracks-playlist/#frequenty-asked-questions). So, the only thing to do is to recursively make asynchronous calls that rely on the previous one having finished. Yeah...  
As a band-aid to this, I have implemented a basic *"callback"* style solution, where an argument may be passed to the function, which if it exists, it will call another function when it is done, which is pre-defined. It doesn't look great, and doesn't feel like very good code, but at this point it works and I don't have time to spend investigating nicer methods.

### Microprocessor Hell
I don't know why I thought bluetooth communication was going to be easy. I really don't. I had the thought in my head that I would just use my python script on the Pi and a [MicroPython](http://micropython.org/) script on the ESP32 with a nice library to have easy and working bluetooth communication.  
This was not the case, at all.  
As it turns out, there is not really ANY nice bluetooth libraries for Python, let alone MicroPython which has BARELY anything. And even what is there is poorly documented and contains few nice examples, or don't go deep enough for what I was needing. So, I had to look elsewhere.  
I began by asking some of my coursemates what they had been doing, [Chinmay and Adi](https://cs.anu.edu.au/courses/china-study-tour/news/2019/01/25/cg-week-9/#bluetooth) have got ESP32 bluetooth communication with their phones working using C on the ESP32, but I didn't want to look in to a whole new language environment at this stage, especially one I don't have much experience with *(like C)*.  
I have on the other hand, done some work with Arduino. So, I had a look for bluetooth code using that. There was more available than with MicroPython, but I was still having major issues with even the sample code that was provided. At this stage it was back to the drawing board.  

After thinking about it for a bit longer, I realised I had been overcomplicating the situation. I wouldn't have to worry about bluetooth communication if I instead used messaging via local ethernet, and thankfully the ESP32 has WiFi functionality as well as Bluetooth so it would be possible.  
Because I didn't want to have my Python script handling HTTP requests as well as my NodeJS server, I looked into [MQTT messaging](http://mqtt.org/), something I had already spent a little bit of time with in the [COMP3310 Networks Course](https://programsandcourses.anu.edu.au/course/comp3310). It turns out there is a decent library for MQTT clients on both Python and MicroPython *(go figure)*, so after reading through some sample code and examples I very quickly had a working publisher on my ESP32.  
It however, wasn't all good news.  
I was having MAJOR issues on my Pi where the MQTT library was not making a callback when it was making connection. I spent **HOURS** trying to fix it, and in the end? The issue was that I simply had not cast an object when doing a string concatenation inside a print statement within the callback function. And that in turn was failing silently, not giving any error messages or anything...  
WEW.  
I did get it working in the end though, here is a small capture of my Pi receiving a message from the pager with the pager's ID:  
![](/images/posts/brent/python-mqtt.png)  
To get this working, you do need a broker tunning on the Pi.
* Install the modules:
    * `sudo apt install mosquitto`
    * `sudo apt install mosquitto-clients`
* Set it to run on startup as a service:
    * `sudo systemctl enable mosquitto.service`
* Now for the Python script on the Pi, we need the MQTT library:
    * `pipenv install paho-mqtt`

### Extra tid-bits
#### Generating random numbers on the ESP32 with MicroPython
I'm not really sure why, I guess it is because there doesn't seem to be any hardware support for randomness, I had such issues with duplicated, repeatable random numbers when trying to generate unique IDs *(even persisting through resets of the board)* that I spent a decent amount of time actually figuring out a way to do it better.  
Here is my shitty better random with MicroPython solution:  
```
# import the random and network libraries
import random
import network

# connect to the WiFi
station = network.WLAN(network.STA_IF)
station.active(True)
station.connect(WIFI_SSID, WIFI_PWD)

# wait until we are connected to the WiFi (some time variance here)
loops = 0
while (not station.isconnected() and loops < 10):
  #Give some time to connect to Network and clear out log
  time.sleep(5)
  loops = loops + 1

# get the CPU ticks since execution and multiply with a largish prime number
SEED = time.ticks_cpu() * 183
# use that as the random seed
random.seed(SEED)
# generate random bits
ID = random.getrandbits(30)
```
With this code, compared to say only having the last line close to the start of execution, I now get new random IDs with every reset of the board, instead of the same ID over and over.

#### ESP32 Thing and LiPo
Something I probably should have tested earlier, but I confirmed that if the battery is connected to the ESP32, then connecting / disconnecting the USB to the Pi does not interrupt the current program execution, it simply switched from battery power to USB power and back (and charges the battery when connected to USB).

#### Bug with Spotify's API when getting available devices
There seems to be some bug with Spotify's API when getting devices. I am able to see the device on the app, but when making the [get devices](https://developer.spotify.com/console/get-users-available-devices/) API call it is not listed. However, if I select the device for playback on the app and then back to another device and *then* look for the device with the API, it will show up.  
I don't have enough time to dive in to this further, but if it is an issue on Spotify's side and when they do fix it, there is already an automated device location retry system in place.

#### Duplicating Playlists
I ran into an issue where I would keep creating the same playlist when calling the init playlist function more than once *(in the case where the playlist did not already exist)*. This would occur because it would try to update the list of known playlists after seeing that a new one had been added, however due to my confusion with the ordering it would add another copy of the oldest playlist as the newest playlist is at index 0, instead of the last index. This meant I had to work out a reverse method for grabbing the playlists instead of starting from 0 and working up, I had to start at max and work down.

#### ESP32 and Windows
Windows [needs drivers for FTDI](https://www.ftdichip.com/Drivers/VCP.htm) (for the [Sparkfun ESP32 Thing](https://www.sparkfun.com/products/13907), other chips may use [a different method](https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2102)).

#### Closing
We're fast approaching the end, and I just really hope I'll be finished. I've enjoyed this project, but it has also been a LOT of work and quite stressful.    
  
*p.s. the title is a reference to the [doomsday clock](https://en.wikipedia.org/wiki/Doomsday_Clock) which currently sits at [2 minutes to midnight](https://thebulletin.org/doomsday-clock/current-time/)