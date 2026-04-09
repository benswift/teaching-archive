---
author: Chocolatier
date: 2019-01-20
title: chocolatier's Project Diary - Part 3
week: 8
---

![I have no idea what I'm doing](/images/posts/chocolatier/no_clue.jpg)

## All Wired Up, and No Place to go.

I spent most of my time mucking around on the hardware side. The setup turned out to be incredibly simple in the end, but not before I had wasted a fair amount of time (and money).

The wiring turned out to be simple enough that I should not have need a breadboard to prototype it. But my first attempt at wiring did end up melting the wires and the plastic around the power strip on the breadboard. But better melting a breadboard than frying an Arduino.

![I have no idea what I'm doing](/images/posts/chocolatier/gore_shot.jpg)

Turns out that if nothing is happening, increasing the number of batteries pumping juice in is __not__ a good idea.

This is what it everything looked like when connected[^staged].

[^staged]: This is a staged shot taken after Ben's feedback that I should include more images. At no point during actual development was everything actually wired up like this.

![All wired up, and no place to go](/images/posts/chocolatier/all-wired-up.jpg)

### Wiring

1. Raspberry Pi connected to power bank via USB
2. Pi Connected to DFRobot Romeo (Arduino) via USB
3. Cam and TFT display connected to Pi. Screen connected to power bank via USB.
4. Romeo has additional power in via the motor in terminal.
5. Pan and tilt connected to the servo control pins 1 and 4.
6. Motors connected to Motor Terminals M1 and M2. Motors for the left wheels in M1 and right to M2.
7. HC-SR04 Ultrasonic Sensor wired up. VCC to 5V, GND to Ground, Trig to Analog Pin 4, and Echo to Analog Pin 5.

Here's a closer look[^staged-obv] at the wiring for the Arduino.

![A closer look at wiring](/images/posts/chocolatier/closer-look.jpg)

Note: I might not even include the screen in the final set up. I'm considering displaying some information, but I don't know if displaying it on robot will be better than displaying it on laptop/projected.

I will also need to engineer my way out of simply not having enough space on the rover to mount it.

[^staged-obv]: Same staged setup, obviously.

### Ultrasonic Sensors

Now, I had planned to have my robot moving independently by now. While the basic face tracking via the PiCam works okay, I haven't been able to get collison avoidance working.

I wrote the following snippet to detect if an object was in 100 cm of the sensor, as suggested by the data sheet for the [HC-SR04](https://www.electroschematics.com/wp-content/uploads/2013/07/HCSR04-datasheet-version-1.pdf).

```arduino
#define trigPin A4
#define echoPin A5

void setup() {
  Serial.begin (9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  analogWrite(trigPin, LOW);
}

void loop() {
  long time, distance;

  // Trigger the ultrasonic pulse
  analogWrite(trigPin, HIGH);
  delayMicroseconds(10);
  analogWrite(trigPin, LOW);

  // wait for response
  time = pulseIn(echoPin, HIGH);
  distance = time/58;

  // O is out of bounds - pulseIn recieved in no response.
  if (distance > 0) {
    Serial.print(distance);
  }
  delay(1000);
}
```

It sets the trig pin to high for 10 uS to trigger an echo pulse, and then waits for the echo, calculating the distance based on the time for response.

This works well, to within about 1 cm for flat surfaces like walls or books, but it seems to miss uneven objects like human bodies or figurines completely. I am guessing that it has to do with them either letting the ultrasonic wave through or by them dispersing the wave too far apart.

Whatever the case, it means that if I actually let the rover drive itself, it will run into objects with abandon.

One option is to try and detect collision risk simlply using the PiCam, but I don't expect that to work very well, not on the compute power the Raspberry Pi has. So I will probably experiment with Infrared Obstacle detection.

## Next Time on Chocolatier's Project Diary

### Communication between Pi and Arduino.

Transfering data over serial is simple enough, but there is no inbuilt way to call functions across devices. The only solution in my head right now is having the Pi decide which function to call, and the Arduino read it in via serial.

The read function would then call the function by translating the 1s and 0s the Pi fed it via some kind of lookup table. Pretty gross. I would like to do better.

### Code

I've mostly written tiny snippets to test various disaparate components so far. I ought to start gluing everything together. To that effect I've set up a [GitHub repository](https://github.com/chocolatier/cocteau), which I will begin to fill next week.

_The content of this blog post is licensed under CC0_
