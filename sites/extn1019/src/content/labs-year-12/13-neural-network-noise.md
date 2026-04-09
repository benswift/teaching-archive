---
title: "Lab 13: neural network noise"
tagline: "Generating drone music with machine learning"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-13
project_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-3
image: /images/banners/sound-flowers-by-lily-campbell.jpg
hidden: false
---

## Outline

In this lab you will:

1. get introduced to ml5's neural network
2. create your own data set and train a model
3. make a cool interactive drone synthesizer using machine learning

## Part 1: Portfolio 3 is out! 

Congratulations on getting Portfolio 2 in! It's now time for Portfolio 3. Make sure to have a read of the specification page and let me know if you have any questions about what is expected. We'll spend the first portion of today's lab doing some work in interpretation. 

:::tip
This portfolio's theme is *"Natural Intelligence / Biological Learning"*. What do those words mean separately? How does the meaning change when they're together? 
:::

We'll start with a brainstorming activity. Get a piece of paper and something to write with. 

In 2 minutes, write down as many words that capture any associations/synonyms/reminders/interpretations to the theme. They don't have to make sense to anyone else but yourself. 

Now consider the words individually. What do the words 'natural', 'biological', 'intelligence', 'learning' make you think about? 

In groups of 2-3, share your responses and any stories that may have come to mind during your brain storm. 

## Part 2: neural network

You might have heard of neural networks before. But what are they exactly?
Neural networks are modeled from the human brain, mimicking the way neurons in
our brain signal to each other. Neural networks have three main layers: the
input layer, hidden layer and an output layer. Neural networks, just like our
brains, learn and improve their accuracy over time. They are used in image and
speech recognition. We aren't doing anything as complicated as that but we are
going to train and make predictions with a neural network.

Fork and clone the [lab 13 template repo]() for this week.

Oh my! Thats quite a bit of code. Its okay, we don't expect you to understand
everything. We are going to walk through the key concepts. The idea is to get a
feel of creating your own data set and using that data set to generate sound.

Define the model variable: You might remember from previous labs where we used
imported models that you have to define the machine learning model you are
using. As mentioned we are using the ml5 neural network. Copy the following into
the set up function.

```javascript
model = ml5.neuralNetwork(options);
```

## Part 3: data plotting

:::info
There are three stages to making a machine learning model:
:::

1. collect data
2. train the model
3. prediction/inference---use the model to make new predictions (sometimes
   called "inference")

Let's start at the start and collect some data.

In this lab the data we are collecting are "notes" and their placement. We are
going to plot down some letters creating a kind of map to train our model. The
model is going to predict what letter you click on is and play the coresponding
piano note with an oscillator.

Click the mouse; a **C** should appear. Click around the screen and mark some
**C**s down. Press the <kbd>D</kbd> key and click; a **D** should appear. Mark
some **D**s down in a cluster. Press the <kbd>E</kbd> key and do the same.

Once you have created your data its time to move onto the next step; training!

## Part 4: training your model

Press the <kbd>t</kbd> key to train the model. Make sure you don't have caps
lock on

You will notice a graph pop up. This graph shows you the number of 'epoch' and
'loss'. Epoch refers to number of passes the entire training dataset the neural
network has completed. The more epoch the greater the accuracy. Similar to when
you are studying if you look over the same content over and over you are more
likely to identify it accurately. Also similar to studying the more epochs the
more time it takes to process. 'loss' is a function that quanitifies the
difference between the expected outcome and the outcome produced by the model.
In other words it assess the accuracy of the model. You want the loss to go down
over time.

Model is trained? Time to generate some sound!

## Part 5: sound

Now that we have trained our model, we want to generate some sound that
corresponds to the data.

Add a call to the `env.play()` method inside your `gotResults()` function.

Now click around the screen. You should hear some musical notes created by the
oscillator. If you click where you have placed a **C** you should hear a middle
C note, if you click where you have placed a **E** you should hear an E note.
And if you click in between the **C** and the **E** you should hear a note that
sounds in between the C and the E notes.

:::info
If you're using Chrome or Safari, you might need to put `userStartAudio();` in
the `mousePressed()` function if you aren't hearing any sound.
:::

It's cool, but its only three notes---not that exciting. Let's make some more
notes!

In `setup()` there is a object called `notes`. What's happening is oscillators
create sound with frequencies. Every note has a corresponding frequency. For
example F#3 (we say "F-sharp 3") has a frequency of 184.9972Hz.

- use this [table of piano
  frequencies](https://en.wikipedia.org/wiki/Piano_key_frequencies) in to
  complete a C major scale (C, D, E, F, G, A ,B)

- plot more data using the 'C', 'D', 'E', 'F', 'G', 'A' and 'B' notes

- train your model with the new data and play another C Major scale

C Major is a classic but let's change it up. Look up some scales and choose one
that you like. Find the corresponding frequencies for the notes and write it
into the template.

## Part 6: saving the model

At this point you might have gotten sick of clicking a billion times to plot
data and wish you didn't have to do it everytime you reload the page. Well the
good news is that you don't have to---there is a way to save the data you
collect and the model you have trained.

The ml5js neural network object has a `.saveData()` method (docs are
[here](https://learn.ml5js.org/#/reference/neural-network?id=methods)) which
will save the data you've used to train your model as a
[json](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
file.

For example, if your neural network object is in the `model` variable, then you
can save the data to a json file with `.saveData("mouse-notes.json")` To load it
back in, you want to make sure to move that json file back into your lab repo,
otherwise when you `.loadData()` it won't know where it is.

Remember that this just saves the data points, it won't draw anything on the
canvas. You have to write a few more lines of code to have it draw something
too.

[This video by Dan Shiffman](https://www.youtube.com/watch?v=q6cwxORPDo8&t=593s)
goes into more detail and explains saving data and saving models.

<div class="extension-box" markdown="1">

As an extension exercise, try explore one or more of the following: 

1. Instead of using a p5 oscillator, try using mp3 files to as sound sources.
   This might be from a instrument sample pack so you can play instead of an
   oscillator, a violin. Experiment with different sounds.

2. Create different data inputs to train your model. [This
   sketch](https://editor.p5js.org/ml5/sketches/NeuralNetwork_musical_face) uses
   face recognition and the webcam as an input. What other data input can you
   think of?

3. Change the `circle` object so that the colour changes depending on the note.

</div>

## Summary

In today's lab you:

1. were introduced to ml5's neural network
2. created your own data set and train a model
3. made a cool interactive drone synthesizer using machine learning

Remember that neural networks are _super common_ in modern AI stuff, and you'll
definitely encounter them in all sorts of ways as you move through school and
life. Some of the details are different in each case, but the basic "collect
data/train/predict" pattern is the same, and having an understanding of that
process is pretty useful. We'll continue thinking about this stuff next week.

Before you leave class today, make sure you commit and push your work to git.
