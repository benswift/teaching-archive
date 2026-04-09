---
author: Ushini Attanayake
title: + Childish Arduino - "A Cable, My Love!"
date: 2019-01-11
week: 7
---

To quote Childish Gambino, "Stay woke, people creepin'. They sell broke cables, gon' catch you weepin'". I have paraphrased a bit, but I get the feeling that 'Bino has flipped a few tables over one of these little suckers.

![Childish Arduino](./images/ushini/childish_arduino.jpg)

Its a bit sad that it took me this long to realise I couldn't load any programs onto my board because the USB cable wasn't working. When I connected the board to my computer, it powered up and the in-built LED blinked once. But the device wasn't appearing in my device manager. So I suspected the USB cable only had power wires and no data wires. After a cable glow-up(buying one priced over $5), it was all good. I could see that the device driver was installed properly. I did however run into another problem when using the recommended upload rate of 9600baud for the Lolin NodeMCU ESP-12E. The error message I received was a series of "_.error: failed sending 1040 bytes_" followed by a "_error: espcomm_upload_mem failed_". This was fixed by using a higher upload rate. 57600baud worked for me.
Made the LED blink. Pretty flash stuff. Only the "LED_BUILTIN" pin in the example code I was using did not work. I believe it defaults to GPIO0. The built in LED is connected to GPIO2.

### Creating Problems to Solve Next Week:

I had a skim over the ESP8266 Wifi docs and tried to connect the device to a Wifi network. There are a few steps to this procedure:

- Establish a connection to the Wifi network
- Creating a Wifi client
- Sending a message to the server (a python script listening on the appriopriate port running on my laptop)

Here's some foreshadowing for you. In classic Ushini fashion, I haven't been able to get past the first step. :)
In order to establish a connection to the network, the network name and password must be passed to the Wifi.begin() method as strings upon setup. I verified that the connection was successful by refering to Wifi.status() in the condition of a while loop. Wifi.status() returns the state of the connection which can be in 1 of 8 states. WL_CONNECTED is the return value which terminates the while loop. Also, just a note for debugging purposes, when using 'Serial.begin(desired_baud_rate)' and 'Serial.print("waiting for connection...")', the baud rate on the Serial Monitor in the Arduino IDE should be set to the same value at which the board is sending to the computer.
Unfortunately, the board fails to connect to the network. It remains in the while loop. I don't believe I've misspelled the network name and password so I'm not sure why this is happening. I will try with another network perhaps and get back with some solutions (and hopefully have the full communication working) by next week.

### Data Aggregation:

Eeeeks. Yes I haven't look into any of the papers I linked last week about data aggregation methods. But give me the weekend? :p
See you next week :)
