---
author: Brent Schuetze
title: Screens, Ports and Control - re:rIoT.06
week: 7
date: 2019-01-11
---

  
<p></p>

#### *In this chapter, hosting a web server on and setting up a screen with a Raspberry Pi*

As the project progresses, I will be posting more how-to's as I complete them with the Pi, so for now this blog will be mostly only technical. When I have the barebones structure, I will move on to some more design aspects and real world interactions with the project.

### The Technical
Before we being we'll need some packages etc. on the Pi to make sure things run okay. So far what you will need is as follows:  
* Install node on the Pi `sudo apt-get install nodejs`  
[NodeJS](https://nodejs.org/en/) will be used as the webserver for the project, it will handle web requests as well as do most of the heavy lifting with javascript code.
* Install [npm](https://www.npmjs.com/) (nodejs package manager) on the Pi `sudo apt-get install npm`
* Install socketio `npm install socket.io --save`  
*Note: I haven't used socketio yet, however it may come in handy in the future*
* Optional: install screen on the Pi `sudo apt-get install screen`  
Screen allows us to have multiple command lines when ssh'd on to the Pi, for example with a screen I am still able to access git while also running the webserver. [Below](#screen-how-to) is a simple how-to.
* Forward a port for your Pi if needed
    * for me this did require port forwarding and this will be different for everyone, I logged in to my router at `192.168.0.1` and navigated to the port forwarding menu and added a rule to forward a specific port to the local IP of my PI  
    ![port forward](/images/posts/brent/port-forward.jpg)  
* Clone my [example repo](https://github.com/bschuetze/catalyst-jukebox/tree/1fa674a91809496fc218b12b1ec05d131edfd0fb) or find some other [example web servers](https://www.w3schools.com/nodejs/nodejs_raspberrypi_webserver_websocket.asp)
* cd into the repo directory and run the server with:  
`node webserver-test.js`
* Visit via local ip (if on same network) or public ip (if on a different network)  
eg. if the Pi is on 192.168.0.4 with port 1234 forwarded and [my public ip](https://www.myip.com/) is 203.214.2.55, then I would visit:  
    * http://192.168.0.4:1234 if on the same network
    * http://203.214.2.55:1234 if on different networks
* If all has been set up correctly, you should now see a page with a small red square

#### Screen how to
So before we get to the physical screen, let me give you a little how to on the screen application.  
To start a new screen, simply enter `screen` and then press enter when prompted. After this you will be redirected to a new 'screen', a good example of when this is handy is to use something that continues to run (*like our nodejs server*). Once you have executed a command that requires an interrupt to stop, you can:  
* use `ctrl + a, d` to disconnect from this screen
* use `ctrl + a, shift + K` then `y` to confirm, to kill the screen  
If you disconnect from the screen, you can reconnect by simply entering `screen -r`.

### Connecting a 5inch screen to the Pi
*Note: the following guides are based on instructions from the supplied cd and other online resources (this includes some pictures used)*  
Screen used: 5" HDMI 800*480 resistive touch screen (identifies on the Pi as ADS7846 Touchscreen), [purchased here](https://www.ebay.com.au/itm/5-Inch-LCD-Touch-Screen-HDMI-Display-800-480-Raspberry-Pi-3-2-eParcel-Sydney/152408334219?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2057872.m2749.l2649).
#### First use and setup
On the Pi:  
* Clone the LCD driver repository at the [LCD-show](https://github.com/goodtft/LCD-show) repo
* cd into the LCD-show directory
* For this specific screen, we will use the 'LCD5-show' script
* Run `chmod 744 LCD5-show` to make the script executable
* Run the script with `sudo ./LCD5-show`  
*Note: your Pi may restart after running this script*  
  
At this point the Pi should be all ready to go, now plug in the screen via the header like so:  
*Note: the following 2 images were provided in some of the 'documentation' with the screen and are not my own*  
![Pi Screen Pins](/images/posts/brent/display-pins.jpg)  
and then attach the included hdmi connector:  
![Pi Screen HDMI](/images/posts/brent/display-hdmi.jpg)  
and you should have display!  
![Pi Screen On](/images/posts/brent/display-on.jpg)  

#### Calibrating the display
* If not already, boot into the visual display from headless mode with `startx`
* cd into the LCD-show directory you cloned in the [previous section](#first-use-and-setup)
* Run `sudo dpkg -i -B xinput-calibrator_0.7.5-1_armhf.deb` and wait for it to finish
* Run the calibrator with `DISPLAY=:0.0 xinput_calibrator` and follow the prompts on the screen with the stylus
    * once finished the screen should output something like this:  
    ```
    Calibrating standard Xorg driver "ADS7846 Touchscreen"
    current calibration values: min_x=0, max_x=65535 and min_y=0, max_y=65535
    If these values are estimated wrong, either supply it manually with the --precalib option, or run the 'get_precalib.sh' script to automatically get it (through HAL).
    --> Making the calibration permanent <--
    copy the snippet below into '/etc/X11/xorg.conf.d/99-calibration.conf' (/usr/share/X11/xorg.conf.d/ in some distro's)
    Section "InputClass"
    Identifier  "calibration"
    MatchProduct    "ADS7846 Touchscreen"
    Option  "MinX"  "3049"
    Option  "MaxX"  "63589"
    Option  "MinY"  "3108"
    Option  "MaxY"  "63287"
    Option  "SwapXY"    "0" # unless it was already set to 1
    Option  "InvertX"   "0"  # unless it was already set
    Option  "InvertY"   "0"  # unless it was already set
    EndSection
    ```
    * This may be the new way of formatting the file, however mine did not work, instead I followed a different calibration value using the tool below
* Install evtest with `sudo apt-get install evtest`
    * Run evtest with `sudo evtest`
    * Touch the top left of the screen with the stylus and note the x and y values of the second to last line (the non 0 values)
    ```
    Event: time 1547204968.948348, -------------- SYN_REPORT ------------
    Event: time 1547204968.968264, type 3 (EV_ABS), code 0 (ABS_X), value 183
    Event: time 1547204968.968264, type 3 (EV_ABS), code 1 (ABS_Y), value 299
    Event: time 1547204968.968264, type 3 (EV_ABS), code 24 (ABS_PRESSURE), value 65114
    ```
    * Repeat for the bottom right hand side
    ```
    Event: time 1547205103.758308, -------------- SYN_REPORT ------------
    Event: time 1547205103.778335, type 3 (EV_ABS), code 0 (ABS_X), value 3916
    Event: time 1547205103.778335, type 3 (EV_ABS), code 1 (ABS_Y), value 3947
    Event: time 1547205103.778335, type 3 (EV_ABS), code 24 (ABS_PRESSURE), value 64952
    ```
    * Based on these results my values are as follows:
    min_x: 183
    min_y: 299
    max_x: 3916
    max_y: 3947
* Using these values, we can edit the configuration file with:
`sudo nano /etc/X11/xorg.conf.d/99-calibration.conf`
to look like this:
```
Section "InputClass"
 Identifier      "calibration"
 MatchProduct    "ADS7846 Touchscreen"
 Option  "Calibration"   "183 3916 299 3947"
 Option  "SwapAxes"      "0"
EndSection
```
* To ensure this works with newer versions of raspbian run:  
`sudo apt-get install xserver-xorg-input-evdev`
* Then:  
`sudo cp -rf /usr/share/X11/xorg.conf.d/10-evdev.conf /usr/share/X11/xorg.conf.d/45-evdev.conf`
* Finally, reboot the Pi with `sudo reboot`  
Your screen should now be calibrated correctly!

#### Reflection on a cheap screen

*Note: this was NOT easy*  
I purchased this screen as it was cheap and local, there are other more 'officially supported' options as well as better quality one, but for a prototyp they seemed overkill. Still, with these things there are always issues.  
To start with, the screen is resistive, not capacitive *(think very early touch screens)*, that means there is no multi touch and you have to press with a reasonable amout of force before they register. Fortunately it does come with a stylus! Which solves all of these issues *(this is sarcasm)*.  
Thankfully the screen slotted onto the Pi very easily, but next came the real issue, the screen was way out for the calibration, and the included instructions had no affect, I guess that's what you get when they come on a physical disk that appears to be from the early 2000's *(it isn't but it may as well be)*.  
Great, now how do I search for 'unbranded touch screen calibration raspberry pi'? Actually something kinda like that, and then that lead me to find some commands to find out what the display is called (on the pi) and then that lead me to a bunch of posts about similar screens of varying sizes. Unfortunately a lot of them were not relevant as they were for older versions of Raspbian etc. and were different issues.  
I was about to give up when I stumbled upon a thread that wasn't actually out of date, and provided some instructions I was able to follow and finally get the screen calibration actually responding. Then it was just a matter of trial and error (and a *lot* of restarts) before I had a passable calibration going.  
It isn't perfect, but it works.  
  
Until next week.