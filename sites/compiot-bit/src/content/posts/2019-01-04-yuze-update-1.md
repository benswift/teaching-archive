---
author: Yuze Gong
date: 2019-01-04
title: Porject Diary 1
week: 6
---

Frustration.

Everything is great before reality hits you in the face. That's how I felt after browsing www.taobao.com for quite a while -- Most of the RFID Readers are either oversized(too big/clumsy for handheld by the group leader) or overpriced($200+, some have been to \$600, can't afford it)😞. The most annoying fact is that most of them are quite developed. That being said there is no much room for me to adapt them into a easily-carried-around mobile device. I did find some RFID modules that could connect to Arduino boards or Raspberry Pi but the transmission range isn't listed on the product site and I am currently asking the salesman. Something I've found out is that some RFID reader could only read one RFID tag at a time -- that means it could not track who's present very effectively, and the RFID modules that could connect to the developer boards may suffer this problem.

I did find out a few modules that is not quite expensive(~$50) and still capable of being customized (lots of ports for communications) but if that't the way I'm going after, I would need to figure out how to pass the data read from the RFID module to the mobile phone in a customized way since it the manufacturer only considered a direct communication via USB at the moment.

On the other hand, I am quite happy with the price of UHF RFID tags. They are very affordable (less than $1 for each) and have an acceptable transmission range. The active RFID tag is a bit less affordable (~\$5 each) and the transmission range for that would be an overkill in this scenario. However, if I couldn't find an appropriate (priced and designed) RFID Reader Module for passive UHF tag, I may consider using the active tag if that can bring down the overall cost.

So the plan for next week:

* Investigate into potential way to communicate between the RFID Reader Module and mobile phone, either wirelessly or wiredly
* Keep looking for an appropriate RFID Reader