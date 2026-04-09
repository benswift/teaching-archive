---
title: "Lab 9: Data Visualisation"
tagline: "visualise data of your choosing"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-9
image: ./images/beads-by-amelia-bobbin.png
---

## Outline

1. explore different forms of data visualisation
2. select a data source you want to visualise
3. create a sketch which translate this data into visual elements

## Introduction

Welcome back creative coders! The plan for this week is to explore data visualisation.

As always, let start by forking and cloning this week's template repo.

To start, fork and clone the [lab 9 template repo]().

## Part 1: What is data visualisation?

The term "data visualisation" can have several interpretations and I'm sure each of you have your own understanding of what data visualisation is. In this first activity, you are going to spend a few minutes brainstorming what comes to your mind when you think of data visualisation.

**do:** On the piece of paper in front of you, write down as many things as you can think of that relate to "data visualisation". Don't worry about how 'relevant' your word associations are, just write down as many things as you can in the next few minutes. This is an individual activity, so work alone to begin with.

:::tip
**talk:** Now that you've had some time to brainstorm on your own, we're going to come together as a class and talk about some of the associations you came up with.
:::

:::tip
**inspirations:** It can be worthwhile to look at how others have visualised data. [Information is beautiful](https://informationisbeautiful.net/), [r/Data Is Beautiful](https://en.wikipedia.org/wiki/R/dataisbeautiful), [TED Talk: David McCandles](https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization?subtitle=en), [Payman Taei: 15 Stunning Data Visualisation](https://towardsdatascience.com/15-stunning-data-visualizations-and-what-you-can-learn-from-them-fc5b78f21fb8)
:::

## Part 2: Create your own data visualisation sketch

For the rest of this lab, you're going to create a data visualisation sketch using a source of data. The _type_ of data you use really isn't the focus here. This lab is more about how you choose to represent the data using visual elements, so select a data source you're comfortable playing with.

**do:** Select a form of data from the options below and download any forms of data you intend to use for this lab.

Not sure which dataset to use? Here are some ideas:

### So you want to use _images_?

Well, you're in luck! Your template repo for this week already has an example of how to use and draw with the pixel values of an image. 

You will work with `sketch-image.js`.

You will just need to:

1. Change `index.html` to use `sketch-image.js`
2. Download an image from the internet
3. Drag and drop the image into the `/images/` folder of your template repo.
4. In your `sketch-image.js` you will see a `preload()` function. Inside this function, you will see a line which says `/images/test.jpeg`. Replace the `test.jpeg` with the name of the image file you downloaded.
5. Change the name of either `draw1()` or `draw2()` to `draw()`
6. Run your sketch and see what happens

### So you want to use user _interaction data_?

Choice! P5.js already captures the position of your mouse in the `mouseX` and `mouseY` keywords. So you can _store_ and _draw_ with this mouse-position data. If you wan't a refresher on how to store data in an array of your own, have a look at [Part 2 of Lab 7](https://comp.anu.edu.au/courses/extn1019/labs-year-11/07-arrays/#part-2-introducing-collections).

You will work with `sketch-interaction.js`.

You will need to:
1. Change `index.html` to use `sketch-interaction.js`
2. Capture interaction data and store in an array
3. Add data visualisation code to visually represent the captured interaction data

### So you want to use _text data_?

Awesome! Have a look at [Project Gutenberg](https://www.gutenberg.org/). This site hosts a huge range of books which you can download as `.txt` files and use in your sketch.

Loading text data into p5.js uses the `loadStrings()` function. Have a look at the p5.js [references](https://p5js.org/reference/#/p5/loadStrings) to see how to use the `loadStrings()` function.

You will work with `sketch-textual.js`. The function `preload()` has an example of how to load data from a text file using `loadStrings()`. 

1. Change `index.html` to use `sketch-textual.js`
2. Download a text file from Project Gutenberg (or elsewhere)
3. Put the file in your `/images/` folder
4. In the `preload()` function, find `/images/test.txt` and replace `test.txt` with the name of the text file you downloaded.
5. Running the sketch should load the file and report the number of lines and words in the console, but you will need to add your own visualisation code.

### So you want to use _tabular data_?

Excellent! Tabular data is just data which is represented as a table -- think excel `.xlsx` or comma separated value `.csv` file formats. [Kaggle](https://www.kaggle.com/datasets) is a great place to look for tabular datasets.  You will have to create a free account on Kaggle if you want to download their datasets.

There are also many Open Government Data Portals which also have tabular data you can use - including the [ACT Government Open Data Portal](https://www.data.act.gov.au/). No account is required to use this data.

When we load tabular data into p5.js, we will need the `loadTable()` function. See the [references here](https://p5js.org/reference/#/p5/loadTable)

:::tip
**Note:** you can also load data using `loadJSON()` if you have JSON formatted data [reference here](https://p5js.org/reference/p5/loadJSON/). Your data will be loaded as a JavaScript Object. If your data is located on a remote web server, you might choose to use `loadData()` with a url (when working with csv tables) or `httpGet()` to load dat from a web API [reference here](https://p5js.org/reference/p5/httpGet/). 
:::

You will work with sketch `sketch-tabular.js`. The function `preload()` has an example of how to load data from a csv file using `loadTable()`. 

1. Change `index.html` to use `sketch-tabular.js`
2. Download a csv file from Kaggle (or elsewhere). Note - you can use a URL to the web address of the csv data file, but if you download it, you can expect faster load times.
3. Put the file in your `/images/` folder
4. In the `preload()` function, find `/images/filename.csv` and replace `filename.csv` with the name of the csv data file you downloaded.
5. Running the sketch should load the file and report the column names, the number of rows and columns, and the first row of data in the console, but you will need to add your own visualisation code.

:::tip
**think:** So those are some different sources of data you can use in this lab. Once you've selected which source of data you want to use and you've downloaded any data files you'll need, let's have a go at reading that data from p5.js.
:::

**do:** If you are using a data file (`.txt`, `.xlsx`, `.csv`, `.jpg`, `.png`), drag and drop this file into the `/images/` folder of your template repo. If you're not using a data file e.g. you're using user interaction data, you can skip this step.

**do:** Delete the sketches from the folder which you are not using. You could change the name of your chosen sketch to `sketch.js` and restore `index.html` to its original state.

**do:** Following the p5.js references linked above, write some code which a) loads your data into p5.js and b) prints some of this data to your console using `console.log()`. Remember that you'll need the [loadTable](https://p5js.org/reference/#/p5/loadTable) function for tabular data and the [loadString](https://p5js.org/reference/#/p5/loadStrings) function for text data. Ask your instructors if you need a hand with this.

Awesome work! If you've completed the instructions in the do-boxes above, then you can make a start on using this data to draw with. Most of the data you'll be working with will either be `numbers` or `text`. Think about how you can use this data to influence visual elements in a sketch.

**do:** Create a sketch which visualises some aspects of your data. If you're using a large dataset, you don't need to visualise all of it and you can keep your visualisations simple (Simple can be very effective!). Remember that we are just sketching with code -- it's totally ok if things don't quite end up working by the end of the lab or things don't look the way you expect. If you have any questions or want to discuss some ideas, reach out to one of your instructors :)

Here are some ideas:

- can you use your data to influence colour or transparency?
- how about motion? (speed, rotation, the smoothness/predictability of motion)
- can you interact with your data and explore it?
- what types of motion or changes to colour best suit your data and what _you_ want to communicate about the data? Circular motion? Grayscale? Jittery motion?

:::tip
**extension:** Last week, there were a few activities which focussed on highlighting local maxima/minima in data or finding the maximum or minimum values in a dataset. Can you implement some of these ideas with the dataset you're using today?
:::

:::tip
**extension:** Expression. Think of as many ways that you can communicate a single aspect of your data, e.g. the intensity of neighbouring pixels in an image, and implement this visualisation in as many ways as you can. Get abstract with it! Your visualisation doesn't need to be for educational or exploratory purposes.
:::

## Part 3: What to include in your blog post?

You will be discussing what you created in class in your blog post which is due at _17:00_ on Wednesday 24 July.

**A reminder that we are not assessing the "quality" of the sketches you present in the blog post.** The blog posts are just a way for you to regularly sketch with code and _reflect_ on your work.

### Screenshots and/or screen recordings

We want to see the thing! Add **at least one** screenshot/screen recording of your data visualisation. If you tried out several variations, include a screenshot/screen recording of each variation.

### Discussions

We want to read the thing! Write a short paragraph which covers the following discussion points:

1. Describe the data you chose to visualise.
2. Discuss your approach to developing your visualisation.
3. Discuss what you were trying to communicate through your data visualisation.
4. Did you have an audience or user in mind for your visualisation? If so, who?
5. If you made several variations, discuss which one was your favourite and why?
6. Were there any ideas which you didn't have time to implement? Briefly discuss them.

:::tip
**Contexts:** This blog post, your reflection and analysis should focus on the meanings of visual design language in data representation: How do we understand visual data representation? Why do we have conventions / standards / norms of data representation?
:::

## Summary

Congratulations! In this lab you:

1. explored different types of data visualisation
2. selected a data source you want to visualise
3. created a sketch which translated this data into visual elements
