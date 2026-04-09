---
author: William Cashman
date: 2018-12-16
title: WWW of Iot Part 4
week: 4
---

### Trip Conclusion ... Kind of

Last week was the final week as part of the tour in the Beijing Institute of Technology. Many farewells were made over the parting days though it was not all sad as due to the miracle of social media, we all knew it was not truly goodbye.
Okay thats about as much sentiment as I can handle for one night. But seriously, overall the trip has been a really great experience and ended up being even better than I expected. It seemed to focus less on the actual study and more on the sight seeing and cultural experience (an itinerary scheme of which I was a huge fan of). A big thank you to BIT for giving me this opportunity and also a big thank you to all the student helpers that coordinated all the events very well!

Now if you're still wondering about the title of this blog, I put the '... Kind of' there because I am actually continuing to travel in China for another week yay!

### Project Details

At long last the project specifications have been solidified. The plan to go ahead with the last blogs idea of a music transcriber, with the exception that it will only cater towards drums (not guitar). The device will record which drums were struck and relay the score back to a centralised server on the internet.

The guitar score transcriber was dropped because it is a lot more difficult to accomplish and this was more focus can be allocated to the internet-of-things aspect of the project rather than the musical analysis.

So now I will give a brief outline of how I think the project development will be structured:

#### Control Flow

1. Drum is hit
2. Sensor transmitted this data to a micro-controller
3. Micro-controller records all this data until instructed not to
4. Micro-controller sends recording to a centralised sever over the internet
5. User can access the music score over internet

#### Hardware

- Sensors: Detect when a drum is hit
- Micro-controller: Can process the sensor data into a musical score, and then send the score to the internet.

Sensor: Ideally should simply relay a boolean value based on some threshold value. Though the threshold value would have to be calibrated for every type of drum, it isn't too difficult to achieve. This kind of sensor is quite common and i've found a decent one for under $6 [here](https://www.digikey.com/product-detail/en/te-connectivity-measurement-specialties/1005940-1/MSP6915-ND/726374)

Micro-controller: To achieve this I will likely use the ESP32 micro-controller as it has wifi capabilities already built into it, and so I should be able to side step a lot of the problems associated with connecting a normal micro-controller to a wifi module.

#### Software

This might get a little tricky here. To receive the sensor data we could set an interrupt on the GPIO pins of the micro-controller and connect those pins to the individual sensors. When the interrupt is triggered, it logs the score in its database. But this is not the best solution as it makes careless use of the GPIO pins and is not very scalable. This method will be sufficient in the testing phase but I would like to implement a cleaner method before the project’s conclusion.
We also need to configure the message transmission functionality to send the music score to the centralised database. I would expect that this will take a fair bit of time and will probably require quite a bit of research as I have never configured such a thing before (I will most likely address the problems in greater depth next week).

P.S. There is no 'Problem of the Week' here because all of my problems at the moment are not really problems but rather, tedious management issues which are not interesting at all. Though prepare yourself for next week as that is where the fun begins...
