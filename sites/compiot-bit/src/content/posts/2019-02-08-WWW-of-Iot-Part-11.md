---
author: William Cashman
date: 2019-02-08
title: WWW of Iot Part 11
week: 11
---
### Pimp my Site 

Welcome back, you'll be glad to hear that things have changed since you last left. 
All the core functions have been put together, now it is time to add some...client side.

Now I won't lie. Despite being a project centered around accessabilities for those who have little to no programming experience, I completely forgot that the common man does not in fact have have admin priviledges on my server, not is it good to start spreading it around the internet. So this week I needed to equip the project with at least the most fundamental consumer features. 

Addressing the schedule:
- Debugging: The core features of the project have been debugged successfully, things such as uploading data from the ESP32 to the server, and updating a database. The more user friendly features were mostly developed this week and are ongoing in development.

Now, allow me to walk you through this lump of code I call a development stack.
Like any stack, it is divided into several areas, each sporting their our programming language:
 - HTML for the content of the website
 - CSS to format the website elements
 - JavaScript to handle the interactive aspects of the website e.g. buttons, selection highlighting.
 - PHP to act as the interface between the JavaScript and the MySQL server
 - MySQL to manage the database

Although all of these are used somewhere in the development stack, some are used much more than others. MySQL and CSS for example only have a couple of paragraphs to their name, whereas JavaScript and HTML makeup the bulk of the stack (at this stage).

Now we are going to focus on what I consider at the moment to be the most important two features: 
- Responding to queries about the data uploaded from the ESP32.
- Rendering the muscial score from the database on request.

### Handling General Queries
In order to see the MySQL records, there is a button on the website which when pressed sends a query to the MySQL server and processes the response into a table. The table is pretty standard, and only contains meta-data, time being the most important feature for the musican. Though it would be great to put something akin to a commit message with every recording, this is simply too impractical with the ESP32.

![Table Rendered](/images/posts/will/table_rendered.png)

The above is an example of a generated table containing the data in the MySQL database.

###  Rendering the Musical Score

To do this I used the JavaScript library [VexFlow](http://www.vexflow.com/) to render the muscial score that a client requests.

![Musical Notes](/images/posts/will/fancy_request.png)

Fortunately, VexFlow contains a module they call 'EasyScore' which can convert a whole bar of notes at once. The notes are encoded into a small (4 char or less) string in an array. This is particulary useful as it is in a convenient form to process large sets of musical sheets automatically.

![Snippet of EasyScore](/images/posts/will/easyscore_snippet.png)

