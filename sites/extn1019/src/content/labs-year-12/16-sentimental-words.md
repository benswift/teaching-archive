---
title: "Lab 16: sentimental words"
tagline: "explore the ml5 sentiment model"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-16
image: ../images/banners/sound-flowers-by-lily-campbell.jpg
hidden: false
---

## Outline

In this lab you will:

1. be introduced to the ml5 text sentiment model
2. create a face that reacts to your text input
3. continue working on portfolio 3

## Introduction

In the last few weeks, we have explored ml5 models that have focused on some sort of physical input. Today, we'll be looking at the ml5 sentiment model that has a text focus. 

Fork and Clone the [lab template]() for this week. 

From the website:

:::info
Sentiment is a model trained to predict the sentiment of any given text. For example, it can predict how positive or negative a review is with a value between 0 ("negative") and 1 ("positive"). The model is trained using IMDB reviews that have been truncated to a maximum of 200 words, and only the 20000 most used words in the reviews are used.
:::

## Text Input
There's a lot going on here so let's break it down. There's three main parts of this template---the `ml5.sentiment()` model, the text input code that tracks what you're typing, and a `drawFace()` function that conveniently draws a smile at position `x,y` with a smile or a frown depending on their `emotion` factor (scales from 0 to 1). 

There are a few other ways to do text input in p5, namely with HTML DOM elements, but I thought it'd be nice to show you an instance of text input purely in p5. 

Let's start with making a prediction. The method `sentiment.predict()` is used to predict the sentiment of a given text. It returns a confidence value between 0 ("negative") and 1 ("positive").

```js
  {
    confidence // value between 0 and 1
  }
```

Add code in the `keyPressed()` function to predict the sentiment of `userInput` when the user presses `ENTER`. Recall that ml5 models often have a customised callback function that will be called when the `predict` method makes a predicition. Once the sentiment is predicted, the output `prediction` will be passed to `gotResult`, and then log the confidence in the console.

## Let's turn that smile upside down
As mentioned above, the `drawFace()` function draws a simple face where their mouth angle is determined by their `emotion` factor. 

Add some functionality in your code that draws a face reflecting the sentiment of `userInput`. Hint: the `currentSentiment` variable has been declared but is unused. 

## Portfolio 3
If you haven't already, go back and finish the tasks from last week's lab to get a start on your portfolio 3 work. 

You have now ideally done an introductory sketch in each of the following models:
* [ImageClassifier](https://comp.anu.edu.au/courses/extn1019/labs-year-12/12-image-classifier/)
* [NeuralNetwork](https://comp.anu.edu.au/courses/extn1019/labs-year-12/13-neural-network-noise/)
* [HandPose](https://comp.anu.edu.au/courses/extn1019/labs-year-12/14-gestural-sounds/)
* [Sentiment](https://docs.ml5js.org/#/reference/sentiment)

It's time to consider how the differences in interaction type can help contribute to the overall experiences of your viewer. 

Compare and contrast how users are intended to interact with each model. What other tools are needed to facilitate this interaction?

Now consider your interpetation of the portfolio 3 theme. What models may complement your intended stories or scenes? What sorts of interactions can you create for your viewer to be immersed in your interpretation and stories? 

## Summary

Congratulations! In this lab you:

1. created a fact that reacts to your text input with the ml5 text sentiment model
2. continued working on portfolio 3
