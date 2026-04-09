---
author: Michelle Zhou
date: 2019-02-07
title: Connect together
week: 11
---
 
## Arduino expansion board

This week I am trying to connect all the electronics together. I have three parts connecting to Arduino, the soil sensor, the wifi module, and the water pump with relay. Since Arduino just has two power pins and three ground pins, I need to use an expansion board to connect them together. 

The following picture shows the expansion boards. Since more wires are connected, it looks a bit messy.

![board](/images/posts/michelle/expansionboard.jpg)

## goals, progress, and problems

- goal: data from soil moisture sensor can be sent correctly to mobile phone

Progress: The data can be collected from the soil sensor and sent to the mobile phone through wifi shield, which means the connection is correct and works well. 

Problem: The data of the sensor seems to be incorrect and unstable. I guess it's because the sensor is using voltage as a measurement, while the connection of more electronics on the board might change the voltages. I need to research more to get the correct data that is not affected by other things.  

- goal: send command from the mobile phone to control the relay, therefore control the water pump

Progress: The data(command) can be sent from mobile phone to the board, so it's a two-way communication.

Problem: The board doesn't respond to the command. I have tested that the data that I sent from my phone can be received by the board successfully and be printed in the serial monitor. The relay should be turned on when I send an "on" and turn off when I send "off". But from the experiments so far, this hasn't been achieved. I guess the code I wrote is incorrect to perform this task, so I will keep on working and find out a way. 

For now, the hardware parts seem to be all done. The electronics can be connected and working together. Though there are still some problems, I might know what is wrong, so it will be easier to solve the problems. 

