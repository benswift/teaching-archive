---
title: "Lab 4: Animation"
tagline: "Create Dynamic Sketches"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-4
image: ./images/year-11-lab-04.png
---

## Outline

In this lab you will:

- learn how to store, retrieve and change data using _variables_
- learn how to determine logical outcomes using _boolean expressions_
- learn how to design code pathways using _conditional statements_
- create changing (dynamic/animated) sketches

## Introduction

Welcome back to class! Up until now, we have mostly been working with sketches which are _static_, meaning the sketch does not change over time. In this class we are going to introduce you to a few important programming concepts. They will help you make your first _dynamic_ sketch; one which is capable of changing over time.

During the live coding session at the beginning of class, you were introduced to the following new concepts:

1. **variables**: helpful for storing data
2. **boolean expressions**: helpful for comparing data to determine outcomes
3. **conditional statements**: use _boolean expressions_ to control the behaviour of our code using boolean (binary) logic

For the rest of this class, we are going to build on the code we wrote during the live coding session.

**do:** To begin, fork and clone the [lab 4 template repo]() from git. Then open it in VSCode, or p5.js web editor,
and start the live server (click "Go Live!" in the bottom right corner) as usual.
If you're not sure how to do this, ask one of your instructors.

## Part 1: Introduce vertical motion

If you're running the code which is already in your template repo, you'll see that the circle only moves from left to right. We want to modify this code to make the circle bounce around **all** edges of our screen. As a first step, let's introduce vertical motion into this sketch.

<iframe src="https://editor.p5js.org/Ushini/full/L3B9QZzO6" style="width:100%; height:100% overflow: hidden;"></iframe>

:::tip
**talk:** Read over the code that is already in your template repo. What "information" or "data" is being manipulated in order to move the circle horizontally? Discuss this with the person next to you. Write your answer in the `exercises.md` file in your template repo under `Question 1`.
:::

:::tip
**think:** What additional information will we need keep track of to make the circle move vertically? Discuss this with an instructor if you're not sure. Write your answer in the `exercises.md` file in your template repo under `Question 2`.
:::

**do:** Modify the code to make the circle move vertically as well as horizontally. Here are a few hints to get you started:

1. You will need to create 2 variables in your code; our naming convention would suggest calling these `ypos` and `vspeed`.
2. `ypos` should be used to keep track of the y-position of the circle
3. `vspeed` should be used to keep track of the vertical speed or direction in which the circle is moving.
   You don't need to worry about making the circle bounce off of the edges of the screen just yet. Once you've finished, `commit` and `push` your code to git.

## Part 2: When to bounce

If you run your code, you should observe that the circle will eventually bounce off of the left and right hand side of the screen. You will also see that your circle now moves horizontally and vertically.

:::tip
**think:** In Part 1, you created a variable which keeps track of the y-position of the centre of the circle called `ypos`. Describe what happens to the value inside this variable as the top edge of the circle moves past the top edge of the screen. Write your answer in the `exercises.md` file in your template repo under `Question 3`.
:::

<iframe src="https://editor.p5js.org/Ushini/full/grrvC7Xm4" style="width:100%; height:100% overflow: hidden;"></iframe>

An example of a _boolean expression_ which involves the y-position of the circle is `ypos==0`. This expression becomes **`true`** only when the value of the `ypos` variable is exactly 0.

**do:** Write a _boolean expression_ which involves the y-position (i.e. `ypos`) of the circle. The expression should become true once the top edge of the circle moves past the top of the screen. Write your answer in the `exercises.md` file in your template repo under `Question 4`.

## Part 3: vertical bounce

In the previous section, you will have created a boolean expression which is only true when the circle has moved past the top edge of your screen.

We can use this expression as a way of checking if our circle has moved past the edge. Now, in order to make the circle look like it's bouncing off of the top edge of your screen, it's motion need to change.

:::tip
**think:** How should the motion of the circle change when it hits the top edge of your screen in order to make it look like it's bouncing? How will the values of `ypos` change to reflect this change in motion? Write your answer in the `exercises.md` file in your template repo under `Question 5`.
:::

:::tip
**think:** Below this box, you will find an _unfinished_ `if-statement`. Write down, in your own words, what should be written in `boolean_expr` and what should be written in `conditional_statement`. Write your answer in the `exercises.md` file in your template repo under `Question 6`.
:::

```js
if (boolean_expr) {
  conditional_statement;
}
```

**do:** Copy and paste the `if-statement` above into your code and modify it so that it a) checks if the circle has reached the top of the screen and, b) changes the direction of the circle's motion _if_ the circle has moved past the top of the screen. If you have any questions about how to do this, ask your instructor or a student next to you.

**do:** Once you have finished with this activity, commit and push your changes to git. If you're not sure how to, ask your instructor.

## Part 3: Dynamic colour

If you've finished the first two parts of this lab, have a look at the sketch below.

<iframe src="https://editor.p5js.org/Ushini/embed/86C1G-dgY" style="width:100%; height:100% overflow: hidden;"></iframe>

:::tip
**talk:** Describe this sketch in your own words. Write your answer in the `exercises.md` file in your template repo under `Question 7`. Discuss your observation with a person next to you.
:::

**do:** Modify your bouncing circle sketch to also fade from black to white like the rectangle in the "Dynamic colour" sketch above. You can choose different colours to animate if you wish. If you're not sure how to get started, ask one of your instructors.

**do:** Once you have finished, commit and push your code to git.

## Part 4: Combining boolean expressions

Up until now, we have only been using a single boolean expression within our `if-statements`. If you completed Part 3 of this content, you will have also created a variable to _store_ the current value of the circle's colour. What if we want to change the direction of the circle based on it's y-position **OR** it's colour.

Below is an expression which _combines_ two boolean expressions. The first expression being `ypos == 0` and the second being `circ_colour == 150` where `circ_colour` can be interpreted as a variable which stores the current colour of the circle. The symbol `||` (created by using two pipeline characters) should be read as a logical **OR**. In other words, the expression below can be read as "`ypos == 0` is true **OR** `circ_colour == 150` is true".

This means that the _entire_ expression below will become **true** in the following scenarios:

1. `ypos` has a value of 0 and `circ_colour` has a value which is **not** 150
2. `circ_colour` has a value of 150 and `ypos` has a value which is **not** 0
3. `ypos` has a value of 0 and `circ_colour` has a value of 150

In logic, and in programming, **OR** is inclusive: it returns `true` if one or both of the expressions are `true`. In natural languages
we often use **_or_** as an **exclusive** operation: for example: "_the weather in this town is rainy or it is sunny_" would be taken to mean that
it is either raining, or the sun is shining, but not both at the same time.

If we wish to use **Exclusive OR** or **XOR**, we must do so explicitly. Exclusive OR returns true if one of the two expressions provided are `true`, but not both.

JavaScript has a **binary XOR** operator only: `^`, and does NOT have a **logical XOR** operator.
You can implement **XOR** as a logical operation through:

1. `(bool_expr1 != bool_expr2) // compare results of 2 boolean expressions: XOR is true if the expressions do NOT evaluate the same`
2. `(!expr1 != !expr2) // convert/coerce non-boolean expression to boolean and compare as per #1`
3. `(!expr1 ^ !expr2) // convert/coerce non-boolean expression to boolean and use binary XOR`

Getting back to the **standard inclusive OR** we use **most** of the time:

```js
ypos == 0 || circ_colour == 150; // logical inclusive OR
```

Similarly, a logical **AND** can be expressed using the symbol `&&`. The _entire_ expression below will only become **true** when:

1. `ypos` has a value of 0 and `circ_colour` has a value of 150

```js
ypos == 0 && circ_colour == 150; // logical AND
```

**do:** Modify your code so that the bouncing circle changes direction if it either hits an edge of your screen **OR** it reaches the maximum or minimum colour value. Once you have finished, commit and push your code to git.

:::tip
**extension:** If you've worked through Part 1-4 of this lab, have a go at implementing some of the sketches described below:

1. create a sketch with multiple circles bouncing off of each other as well as off of the edges of the screen
2. create a sketch with multiple circles such that, under certain conditions, the several circles merge into each other **or** a circle splits into multiple circles
3. create a sketch where the circles follow different trajectories of motions (e.g. circular, hyperbolic, quadratic) based on time
4. what can be made dynamic in your sketch? In other words: what is fixed and unchanging, and what can be changed over time?
   :::

:::tip
**NOTE:** as mentioned previously, [p5.js](https://p5js.org/) is a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) implementation of the [Processing](https://processing.org/) language system.
Processing imposes a specific way of working with code: we first [`setup()`](https://p5js.org/reference/#/p5/setup) our environment,
and then we [`draw()`](https://p5js.org/reference/#/p5/draw) the canvas repeatedly in a loop.
The specifics of this implementation are hidden from us. P5.js provides access to some [environment variables and functions](https://p5js.org/reference/#group-Environment)
which can be useful for directing and controlling animations:

1. [frameCount](https://p5js.org/reference/#/p5/frameCount) tells us which frame of animation we are on;
2. [deltaTime](https://p5js.org/reference/#/p5/deltaTime) tells us the number of milliseconds elapsed while drawing the last frame;
3. [frameRate()](https://p5js.org/reference/#/p5/frameRate) sets the desired number of frames to draw per second (default is 60).
   JavaScript also provides functions for measuring time: [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) and [`Performance.now()`](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/High_precision_timing).
   :::

## Summary

Congratulations! In this lab you:

- learned how to write your own variables
- learned how to write boolean expressions
- created an animated bouncing circle woohoo
- had a go at creating dynamism with colour
- combined multiple boolean expressions
