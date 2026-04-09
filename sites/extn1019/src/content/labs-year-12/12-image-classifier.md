---
title: "Lab 12: ml5.js and image classifiers"
tagline: "an introduction to ml model in ml5.js"
project_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-2
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-12
image: ../images/banners/sound-flowers-by-lily-campbell.jpg
hidden: false
---

## Outline

In this lab you will:

1. load a pre-trained ml model into p5 and use it to classify images
2. train your own ml model on a classification task of your choosing

## Introduction

This term, we will be working with a new Javascript
library called [ml5.js](https://ml5js.org/). It's a very approachable way to
learn about machine learning and, more importantly, it integrates easily with
p5.js. This means we can harness these models in our visuals and music.

As you work through the lab, it'll be helpful to have the ml5.js [references](https://learn.ml5js.org/#/reference/index)
open in a new tab so you can refer to it easily.

## But first... Portfolio 2

Portfolio 2 is due tonight!

**Do:** If you haven't already, you must immediately fork, clone and open the [assignment template repository]():

Today is your last chance to ask questions or get **_in person_** help with finishing your project.

Please ensure you address all aspects of the specification, and self-assess using the rubric prior to submission.

:::tip
**THINK:** Ask any questions about the assignment now!
:::

## Overview of ML models

For the purposes of this workshop, we will think of the machine learning model
as a black box (don't worry, we will peek into the black box---at least a little
bit---in the coming weeks). The "function" of a machine learning model is to answer
a question e.g. "What is this a picture of?". The model will then predict an answer
based on the information you give it (in this case, the picture) and "knowledge" it
has acquired from pictures it has seen in the past.

If we were to create a machine learning model from "scratch", you would first
need to create a hollow black box (I'm stretching the analogy, but stay with me).
Then we need to teach the model how to answer a specific question. This process
is called _training_. Training involves giving the model examples of
data to inform its prediction. With each example of data, we also provide the
correct answer to the question.

After training, the model will have built up a "knowledge representation". The black box
is no longer hollow :3 We can then test the quality of the model's knowledge representation
by providing it more example-data, only this time we withhold the answers and ask our model
to predict an answer. This is called _testing_. The model is only capable of predicting an answer
from the pool of answers it was given during training. This means if we only show the model pictures
of cats and dogs during training and we tell the model that the correct answers are
"cat" and "dog" respectively, regardless of what pictures we show the model during testing,
it is only capable of predicting either "cat" or "dog".

The training and testing phase each have a dataset associated with it. We will return
to this idea of training and testing in the second activity, where you will train your
own model.

Let's get started with the lab. Fork and clone the [template repo]()
for this week's lab.

## Part 1: Image classification

The model you will be using in this first activity is called an image classifier. Its
function is to answer the question "What is this a picture of?". We will be using a
pre-trained model (not hollow) which has been trained on a popular dataset called
[ImageNet](https://www.image-net.org/). ImageNet has millions of images; ones that you
might easily find with a quick Google search. The pre-trained model we will use is capable of
detecting (therefore predicting) 1,000 different subjects in pictures.

We will start by stepping you through the process of loading a model into p5. To do this,
we use the `imageClassifier()` function which takes two arguments. The first argument specifies
the _name_ of the model. We will be using 'MobileNet' which is optimized to run on mobile phones.
The second argument specifies something called a _callback function_.

Since working with ml models (loading, training and predicting) can involve operations which happen 'behind
the scenes', getting responses from the model might take a few second longer
than you might expect. So when we initialise the model, we give it the name of a
function which it will call upon finishing all of these 'behind the scenes'
operations. In this case, once the model has finished loading, it calls the
'modelLoaded' function.

```js
mnet = ml5.imageClassifier("MobileNet", modelLoaded);
```

Copy the line of code above and paste it at the bottom of your `setup()` function.
You'll notice that the `modelLoaded` function is not defined yet. Write a function
called "modelLoaded" which takes no arguments and prints "Finished Loading!" to the console.
Run your code and check your console to see if the model has loaded.

Now that the model is loaded, we can feed it some images and see what it predicts.

Open a new tab in your browser and find some example images. You may want to
find a range of different subjects - animals are a safe bet. The predictions work best if
there is only one subject in the image. Save the images into the `images` subfolder in your
lab template repo.

Once you've found some images, we can load them into p5. You might recall that we need to
create an image object in order to load images into p5. Here is the
[p5 reference](https://p5js.org/reference/#/p5/loadImage) for
loading images if you need a refresher on how to to that.

Load one of the images you've chosen and store it in a variable.

The last step is to request a prediction from the model. To do this, we use the
`predict()` method. The `predict()` method is associated with the model which we
stored in the `mnet` variable. This means we can call the `predict()` method
using the dot operator `.` followed by the name of the method i.e. `predict()`.

```js
mnet.predict(img_variable_name, gotResults);
```

The line of code above will print the results of the prediction to the console.
You will need to replace `img_variable_name` with the name of the variable you are
storing your image in.

Add the line of code above to the bottom of the `modelLoaded` callback function to make
a prediction.

:::tip
Why do you think we make the prediction inside the `modelLoaded` callback function
instead of the bottom of the `setup()` function?
:::

You might have noticed that the `predict()` function has a second argument which is
also a callback function. This is already defined in your template.

Run your code and check the results of your prediction in the console.

## Part 2: Train your own image classifier

In this section of the lab, we will be using [Teachable
Machine](https://teachablemachine.withgoogle.com/train/image) to train our own image classifier.

Follow the link above to Teachable Machine's training workspace. You should see
four rectangular cells; the left-most cells are for input data (one for each class),
centre cell is for the model and the last cell is for the output. The default view
only shows input cells for two classes, but you can add more if you'd like.

You can create an image database for each input cell either via file upload
or webcam. If you are using a personal laptop with a webcam, you can use the webcam to provide your data.

:::tip
Before we start training, let's decide what sort of question we want our classifier
to answer. What are the possible answers to this questions (what will the classes be)?
Discuss your ideas with the person sitting next to you. Once you've decided on the
classes your classifier will distinguish between, it's time to gather some
sample data.
:::

Open a new tab in your browser and search for some images for each of the
classes in your classification problem. Download the images and save them
in a designated folder.

By selecting either the `File upload` or `webcam/microphone` options on
Teachable Machine, add in **one** image into each of the input cells.
Note that the image files are cropped to a square automatically. Then click `train model`.

When your model has finished training, you can then test it
by uploading a test-image.

:::tip
**think:** Can you think of a way to solve this image classification problem using only the programming concepts you have learned so far? Things like `if-statements`? Discuss this with someone sitting next to you.
:::

Choose a new image which represents one of the classes and upload it as
a test-image in the right-most cell. What are the output probabilities
for each class? Is it what you expected? Discuss the results with the person
next to you.

:::tip
**think:** What output-probabilities would you expect if you used an image from your training set as a test-image? Is there a range of output-probabilities which you would consider to be _"good"_? Discuss this with someone sitting next to you and/or your instructors.
:::

Generally, we are going to get a pretty lousy classifier if we only train our
model on one image per class. Let's go ahead and add a few more examples to
each input cell. You can also rename the input cells to something more
meaningful than "Class 1" and "Class 2".

:::tip
You'll see an `Advanced` drop-down menu under the training cell. If you'd like to
have a go at fine tuning the training parameters, change some of the parameter
values and train your model again. How does it affect the accuracy of the prediction?
The best way to monitor its accuracy is to navigate to `Advanced>under the hood`.
This will open a panel on the right-hand side of the screen with an accuracy plot.
If you have any questions about how these parameters affect training, ask one of your
instructors.
:::

:::tip
When finding images for training, you could just browse the internet and
select whatever images take your fancy. How can you effectively select
images for your training (and perhaps your testing) examples? If you
need some ideas, discuss with the person next to you.
:::

## Summary

Congratulations! In this lab you:

- used a pre-trained image classifier to make predictions

- gained a stronger intuition about what affects the model's certainty when predicting
