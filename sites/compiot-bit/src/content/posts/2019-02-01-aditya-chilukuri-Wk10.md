---
author: Aditya Chilukuri
date: 2019-02-01
title: Drawing Meaning from Data
week: 10
---

Earlier, Chinmay and I managed to get the MQ-3 Alcohol sensors to send readings to the ESP32, and use one of the ESP32's Analogue-Digital Converters (ADCs) to measure the voltage signal from the sensor. This week, we tasked ourselves with taking these raw voltage readings and converting them to BAC estimates.

## From Raw Sensor Voltage to Blood Alcohol Content

There are a few blogs that detail setting up and using the MQ-3 sensor. There are two theoretical approaches, by Pelayo and Hymel we found and considered that converted the readings to BAC estimates. At the crux of both methods is finding a trend between the raw readings and BAC data, and estimating this trend to the $n^th$ degree polynomial.

We first implemented Pelayo's algorithm (see below), and consistently measured BAC readings of around 300% in clean air.

```C++
    sensor_volt = sensorValue/1024*5.0;
    RS = (5.0-sensor_volt)/sensor_volt; //RS is the resistance of the MQ3 sensor measuring alcohol
    R0 = RS/60.0; // 60 is found using interpolation; R0 is the resistance of the MQ3 sensor measuring air.
    Serial.print("R0 = ");
    Serial.println(R0);


```

After some research, I found that most Arduino boards use only a 10-bit memory mapped register to read the voltage from an analog input, and so achieve raw readings between 0-1023, while the ESP-32 is capable of reading the input in 12-bit format (with a raw reading range of 0-4095). I updated the formula offered by Pelayo to suit our larger reading register, but still the readings were implausible.

Chinmay and I searched for clues on what we ought to do to get sane alcohol content readings, and read Namitha's (a fellow excellent IoT blogger on the China Tour) blog. Namitha is also using the ESP32 board, and linked to [this](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/peripherals/adc.html#_CPPv217adc1_config_width16adc_bits_width_t) resource by Espressif, which had instructions on using the Attenuation of the ADC hardware.

Attenuation is used in ADCs to vary the dynamic voltage range of the ADC. As a default, the attenuation is set to setting 0, which explained why the [default use of the ADC](https://github.com/espressif/esp-idf/blob/master/examples/peripherals/adc/main/adc1_example_main.c) in the ESP IDF examples would only read to a maximum of 1100mV, before reaching the maximum reading threshold.

We used the highest attenuation setting to be able to measure voltages between 0-3.9V. Using this, we measured far smaller raw readings, and fixed the problem of very easily reaching the maximum reading threshold of our sensor.

As I was doing further reading to improve the quality of our data collection and processing methods, I encountered this [blog](https://tutorials-raspberrypi.com/configure-and-read-out-the-raspberry-pi-gas-sensor-mq-x/), which explains a calibration mechanism for the MQ-2 sensor. While this is a different sensor, I will investigate if another calibration method can be used to get higher quality readings.

## Next Steps

We are attending induction sessions for the Makerspace next week, and will be able to start building the artefact — making a band and a button to be used to control the power to the alcohol sensor.

Chinmay and I will also start app development this weekend to control the internet based communication of alcohol readings between the users' mobile phones.
