---
title: "Lab 6: Time Will Tell"
tagline: "design a visual representation of time"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-6
image: ./images/year-11-lab-06.png
---

## Outline

1. research different methods of timekeeping and ways of observing the passage of time.
2. explore personal, historical, social connotations of time.
3. create an animated sketch which depicts a personal, novel or unconventional notion or representation of time.

## Introduction

Welcome back to another creative computing class! As we have mentioned before, every other week in this course, we will be dedicating the entire workshop to creating a creative code sketch in response to a _provocation_. You will then go on to talk about your creations in our creative computing blog. You'll remember that for the last blog post we asked you to create your own version of an album cover or film poster of your choosing. You _all_ did a **fantastic** job!

This week, your task is to design an animated representation of the passing of time (I hesitate to use the word clock, because we do not want conventional clocks). Up until week 3, we were only been working with _static_ sketches (i.e. sketches that don't change over time). In week 4 we introduced you to a few concepts which enabled you to make _dynamic_ sketches i.e. ones that change over time.

**do:** If you didn't get a chance to work through the content from week 4, you can find the content through the [lab 4 web page](https://comp.anu.edu.au/courses/extn1019/labs-year-11/04-animation/) on the course site. Feel free to spend a bit of time going over it before you come back to this week's content.

## Provocation of the day

As you'll remember from last week, the code sketches you make today must be in response to the _provocation_ below. A _provocation_ is a word or phrase which can be interpreted and used as a source of inspiration in creative activities.

:::tip
**think:** "Time will tell". Your provocation of the day is to design an animated representation of passing time (i.e. a type of clock) which depicts either a _personal_, _unconventional_ or _novel_ representation of time. The clock **must** be _animated_ -- meaning it must change over time. The clock **should** be _personal_, _unconventional_ or _novel_ -- these aspects are up for interpretation (you MUST avoid conventional, numeric and radial clock-face based representations of time).
:::

## Part 1: What even is time?

Well...you tell me. As with any good design process, we will spend the first quarter of this class doing a "research sprint". This involves brainstorming and finding examples of the different ways time is represented, observed, or recorded. Below are some questions to get you started on your research.

1. List as many ways as you can think of for representing time?
2. Are there different granularities of time? If so, what are they?
3. How do you _personally_ perceive time? Does your perception of time change?
4. Do you associate any emotions, imagery or symbols with specific moments of time?
5. How do different cultures measure/record time? How have they recorded time in the past?
6. How does time influence its observer?
7. Are there any fictional or fantastical interpretations of time?
8. How is time perceived in the _more than human_ world?

**do:** For the next few minutes, write down as many interpretations/connotations as you can in relation to **time**, keeping in mind that we are aspiring to make a representation of time which is unconventional/novel/personal. You can use the questions above to help you. This is a **timed** activity. It is also an **individual** activity, so work on your own (I promise you'll be able to talk to your classmates soon!). Your instructors will tell you when to start and when time is up.

:::tip
**talk:** share some of the interpretations you wrote down with the person next to you. Talk about how some of these interpretations might look as a visual dynamic sketch in p5.js.
:::

## Part 2: make a blueprint

Now that you have generated a few ideas and shared them with a classmate, select one representation of time which you think is personal/novel/unconventional. Flip your piece of paper over, we are going to draw a rough blueprint of what your idea will look like in a p5.js sketch.

**do:** Draw a rough blueprint (by hand) of what you want your sketch to look like and how you expect it to change over time (maybe draw several sketches of what your clock will look like over time).

## Part 3: make your clock

Fork and clone the [lab 6 template repo]().

You will see that there is already some code in your template repo which utilises the Date and Time functions [second()](https://p5js.org/reference/#/p5/second), [minute()](https://p5js.org/reference/#/p5/minute) and [hour()](https://p5js.org/reference/#/p5/hour). You will _probably_ have to use at least one of these functions to drive the dynamism in your sketch.

### How do the Time and Date functions work?

Each time you see the `hour()` function appear in your code, you can picture it being replaced by the current hour of the day. You can use the `hour()` function anywhere where p5.js _expects_ you to give it **data**. For example, in the `circle()` function below, p5.js expects you to provide **data** as arguments of the function, namely `xposition`, `yposition` and `radius` and it interprets this data as **numbers**. Since the `hour()` function gives us a the current hour-of-day as numeric data, we can replace any of the slots below with the `hour()` function call. In this case we are multiplying the current hour by ten, `hour()*10`, which will still be a number :)

```js
circle(xposition, yposition, hour() * 10);
```

**do:** Make a start on coding your clock sketch. If you're not sure how to implement an idea in code or you want to discuss some ideas you've had, ask one of your instructors. You can replace the code in your template. The code which is currently in there is just to show you how to use the Date and Time functions.

:::tip
**think:** In addition to [hour()](https://p5js.org/reference/#/p5/hour), [minute()](https://p5js.org/reference/#/p5/minute) and [second()](https://p5js.org/reference/#/p5/second) there are additional date and time functions provided by p5.js including [day()](https://p5js.org/reference/#/p5/day), [month()](https://p5js.org/reference/#/p5/month), [year()](https://p5js.org/reference/#/p5/year) and [millis()](https://p5js.org/reference/#/p5/millis). `day()`, `month()` and `year()` refer to expected values from our common Gregorian calendar based on the clock accessed from the browser environment. `millis()` derives its value from the number of milliseconds elapsed since the sketch started running! P5.js includes a global variable [frameCount](https://p5js.org/reference/#/p5/frameCount) which increments by one for every frame that is rendered. As frames are rendered _over time_, you can use this to monitor and represent the passing of time - although without much accuracy! The rate at which frames are to be drawn can be set using the p5.js function [frameRate()](https://p5js.org/reference/#/p5/frameRate). When `frameRate()` is called without a parameter, it answers the current number of frames rendered per second. To dive deeper, and help give **much more accuracy** to movement over time, p5.js provides the global variable [deltaTime](https://p5js.org/reference/#/p5/deltaTime). `deltaTime` holds the number of milliseconds it took to render the last frame. For even greater accuracy (if this matters to your representation of time), JavaScript provides the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance). How might you use these functions to shape your representation of time?
:::

## Part 4: What to include in your blog post?

You will be discussing what you created in class in your blog post which is due at _17:00_ on Wednesday 19 May.

**A reminder that we are not assessing the "quality" of the sketches you present in the blog post.** The blog posts are just a way for you to regularly sketch with code and _reflect_ on your work.

### Screenshots and/or screen recordings

We want to see the thing! Add at least one screenshot/screen recording of what you made. Since your sketch is dynamic, include 2-3 screenshots of what you made taken over time (your screenshots should be distinct from each other). Alternatively you can take a 30 second screen recording of your sketch. You can also include pictures of _representations of time_ that inspired you.

### Discussions

We want to read the thing! Write a short paragraph which covers the following discussion points:

1. tell us a bit about how you chose to represent time and how it changes over time?
2. talk about whether your sketch draws on any personal, historical, social or cultural connotations of time.
3. discuss any challenges you found when coding your sketch
4. discuss something you like about your sketch

:::tip
**Contexts:** This blog post, your reflection and analysis should focus on the social aspects of the perception of time through visual media. What are the meanings of time in our society? How does time structure our lives? How important is time to our social behaviours? You may use your findings from the research sprint questions to inform your discussion about the contexts.
:::

**do:** Once you’ve finished with the lab, make sure you commit and push your work to git so that it's safe and sound on the ANU servers.

## Summary

Congratulations! In this lab you:

1. brainstormed different methods of timekeeping and ways of observing the passage of time.
2. explored personal, historical, social connotations of [time](https://www.youtube.com/watch?v=Qr0-7Ds79zo).
3. created an animated sketch which depicts a personal, novel or unconventional notion of time.
