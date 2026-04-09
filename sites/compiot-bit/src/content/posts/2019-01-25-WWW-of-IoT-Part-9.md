---
author: William Cashman
date: 2019-01-25
title: WWW of Iot Part 9
week: 9
---

### Tying things together

Hello everyone and welcome back to this blog series.
I am nearing the end of this project and am now focusing on tying all the aspects of the project together.

So to summarise the software so far:

- Interrupts that respond to GPIO input - Check
- Can connect to a wifi access point - Check
- Can make HTTP requests - Check

Phew that was a lot. But most of the work was mainly in research, seeing as I could get the bulk of the code off piecing together [online tutorials](http://esp32.net/) and [Espressif System's](https://github.com/espressif/esp-idf/tree/master/examples) (makers of ESP32) example programs (yet still with moderate amounts of debugging...this isn't Arduino after all).

But quickly to address the schedule:

- The software analysis is functioning at a basic level, it is able to register drum beats and log them. I'm not sure if this counts as fully achieving the milestone status, but it is developed enough to allow testing of other parts of the program such as the internet upload so I'm calling it a small win.
- As mentioned in the previous post, the connections between the ESP32 and a server have been established and a rudimentary server has been launched.

### Current Focus

I am now commencing the penultimate stage in my design plan which is to enable the ESP32 to upload musical score to the server. Since the musical score is comprised of a finite (and relatively small) lexicon, the data that will be uploaded and stored will likely be an array of integers that have some mapping onto the drum's score lexicon.

One viable option for the upload is to use a 'Query String'.
To summarise, a 'query string' this is a method of passing data into the backend of the website by appending a variable definition onto the URL of the site.

**_For example:_** *www.example.eg.php?var=Passed_Value*
Here the PHP script receives the variable 'var' with the string "Passed_Value" as its contents to which it can then perform operations on.
Using this system it seems possible that I could pass the musical score to server in the form of a query string. I already have working code that can create HTTP requests so this shouldn't be too difficult to implement on the ESP32's side of things.

The server-side's program will need to:

- Receive this score and update an SQL database with it
- Be able to display the musical score on request.

Though I have no experience with SQL, I have briefly looked through some [tutorials](https://the-eye.eu/public/Books/IT%20Various/SitePoint.Pty.Ltd.Build.Your.Own.Database.Driven.Website.Using.PHP.and.MySQL.Second.Edition.eBook-KB.pdf) and it doesn't appear to be too difficult to accomplish.

However, The main problem with query strings is that anyone can upload to the server.
To solve this, I could make it so that the ESP32 also has to pass an account name and password. So even though I shouldn't have to worry about the security aspect at the moment, it's nice to know that this method it isn't too vulnerable (at least in my wildly unprofessional opinion).
