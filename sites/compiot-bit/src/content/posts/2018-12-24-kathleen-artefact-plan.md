---
author: Kathleen Qian
date: 2018-12-24
title: Kathleen's Artefact Plan
week: 5
---

This is my artefact plan for final IoT individual project.

## Project Brief Description

Luckily, I kept my initial idea in Week 3 until now about the **_Intelligent Pet Tortoises Feeding_**.

![feeding my tortoises](./images/kathleen/tortoise-feeding.jpg)

In the current stage, the theme and most detailed functions for the project are both _fixed_ through the past three weeks... The **inspired background introduction** and my **expected functions** for the final project can be found in [my Week 3 Rough Project Idea post](https://cs.anu.edu.au/courses/china-study-tour/news/2018/12/06/kathleen-w3-project-idea/) **"Happy Aquarium" Project** section~

To conclude, I want to make an artefact which can be used for common tortoises' tank and mainly considering the tortoises' living requirements:

- land-water swap
- feed
- temperature
- lighting
- water changing (_maybe_ considered) -- depends on the detection of water turbidity

As the whole artefact can be seen as an union of multiple functions, in my following _implementation plan_ and _timeline_, my main idea is to **finish a whole function first and then come to the next different function**.

## Detailed Implementation

### Whole Requirements

Hardware is my most confusing part as said in previous posts. While through recent researches, I know more. :)

For _microcontroller_, I decide to use **Arduino Mega 2560** or **Arduino UNO R3**. As _mega_ has more pins, it satisfies huge I/O requirements. Given multiple functions, many sensors and operators could be used, _mega 2560_ gives enough support for my IoT project. While if through future precise counting for required pin number, _UNO_ is also enough, I will use classic _Uno r3_ as my beginning~

For _Internet communication_, I will use **ESP32** board, as an advanced version of _ESP8266_, although I don't think I will use Bluetooth and other special support in it.

Considering the most common cases, I think I will use **C (C++)** for most _programming_ part. It's the time to systematically learn the language... :-P

### Multiple Functions

Every function build can be divided into 3 sections, and I **_plan to follow the 3 steps for each function design / build_**:

- receiving data from sensors
- PC data handling:
  - make sensors' data (human-being) readable
  - _better_ to show and record data in website
- sending commands to operators through:
  - automatically analysis from real-time data (pre-defined central command codes)
  - real-time remote commands through Terminal _or better_ through my own website

I will introduce my brief implementation idea for each function following the above 3 sections. [ No detailed design or diagram will be shown this time (although I draw a bit)~ ==> Just to keep the whole project mysterious and make you more excited for my future *project diaries*~ ↖(^ω^)↗ ]

- **_Land-water swap_**:
  - _sensor_ : **photoresistor**: stronger brightness shows it is "basking time", and then we need to incline the tank and thus make the "stone" side above water.
  - _pc data_ : record brightness & corresponding data for the physical operator; automatically adjust the slope.
  - _operator_: mainly use physical principles, such as **lever principle, pulley system**.
- **_Feed_**:
  - _sensor_ : **turbidity sensor** and real-time clock.
  - _pc data_ : record turbidity & corresponding data for the physical operator; better to allow _both_ automatic command and human-being remote command.
  - _operator_: may use lever principle or existed automatic feeding device.
- **_Temperature_**:
  - _sensor_ : **water-proof temperature sensor**.
  - _pc data_ : record temperature; automatic command -- heating if lower than the default temperature.
  - _operator_: heater -- while not sure whether directly control the heating function or physically control the switch of a traditional heater.
- **_Lighting_**:
  - _sensor_ : **photoresistor**.
  - _pc data_ : record brightness; human-being remote command.
  - _operator_: lamps -- can choose several different power ones to make multiple brightness levels.
- **_Water changing_**:
  - _sensor_ : **turbidity sensor**.
  - _pc data_ : record turbidity; automatic command -- changing water if turbid than default.
  - _operator_: water changing device -- may need to control "squeeze" for the device use.

## Detailed Timeline

Except the 1st BIT teaching month, less than 2 months are left for the IoT project. I divide the time into 2 main parts: in the _first 3 weeks_ I will stay in _China_, finishing ideal framework design for all functions and at least finish **one whole** function build; and then I will come back to _Canberra_, finishing all other functions and final conclusions in the _left 1 month_.

Detailed timeline is shown below: [ *Stage* is used as "intermediate milestones" to better check my task completion conditions ~ ]

| **Stage** | **Week** | **Start** | **End** | **Main Tasks**                                                                                                                                                        |
| --------- | -------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _CHINA_   | 1        | 24 Dec    | 30 Dec  | device shopping & detailed design for each function & GitHub preparation                                                                                              |
| _CHINA_   | 2        | 31 Dec    | 6 Jan   | begin "land-water swap" function build _(simplest PC command, without making website)_                                                                                |
| _CHINA_   | 3        | 7 Jan     | 11 Jan  | finish "land-water swap" function & _(if time left)_ begin "feed" function                                                                                            |
| _CBR-1_   | 4        | 15 Jan    | 20 Jan  | finish "feed" & begin "lighting"                                                                                                                                      |
| _CBR-1_   | 5        | 21 Jan    | 27 Jan  | finish "lighting", (if enough time) water changing                                                                                                                    |
| _CBR-2_   | 6        | 28 Jan    | 3 Feb   | finish "temperature" function                                                                                                                                         |
| _CBR-2_   | 7        | 5 Feb     | 10 Feb  | optimize codes, remote control website interface and final artefact appearance & final debug & multi-function arrangement                                             |
| _CBR-2_   | 8        | 11 Feb    | 14 Feb  | final check the artefact and codes (especially for _15 Feb_ **GitHub**) & begin writing _18 Feb_ **design rationale** & prepare _o-week_ **exhibition** (slides, ...) |

Looking forward to the artefact design / build process in the future! See u next year~ All best wishes! ^\_−☆

![merry christmas](./images/kathleen/merry-christmas.jpg)

---

## Reference

_The "merry-christmas.jpg" in the end is from https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=圣诞节快乐&step_word=&hs=0&pn=80&spn=0&di=30470&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2721463595%2C3277845195&os=251961676%2C686707389&simid=0%2C0&adpicid=0&lpn=0&ln=1863&fr=&fmq=1545648887460_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F30%2F20151130003842_wkY4c.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3D9lclnnb0a&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=._
