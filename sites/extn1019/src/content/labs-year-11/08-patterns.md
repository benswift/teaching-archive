---
title: "Lab 8: Patterns"
tagline: "create your own wallpaper or screensaver"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-8
image: /images/labs-year-11/year-11-lab-08.png
---

## Outline

1. create a geometric patterns
2. exchange patterns with someone next to you
3. create some variations of your classmate's pattern

## Introduction

Welcome back to another creative computing lab! 

### What are Patterns?

Think about it. What drives you to call the visual data you are receiving with your eyes a "pattern"? Do patterns occur naturally, or are they a human construct? 

Patterns, [as understood conventionally](https://en.wikipedia.org/wiki/Pattern), consist of repeated design elements. Usually with a regularity that we can interpret holistically. We can also look for patterns in data.

Geometric patterns are constructed from a repetition of geometric shapes.

### What we've already done
We have already learned how to write code which repeats a set of instructions every frame (i.e. with each iteration of the `draw()` loop). 

We have also learned how to repeat a set of instructions using a [programming construct called a](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) `for-loop`.

And we have learned how to use the data structure called an [array](). You should be able to create an array using something like `let myarray = [];`, add items to an array using `myarray.push(newitem)`, access items using indices: `myarray[0]`, or `myarray[i]`, and process items of an array using for loops:

```js
for (let i = 0; i < myarray.length; i++) {
    process(myarray[i]);
}
```
### Aside - Alternative Iterations

This is called "iterating over the elements of an array". There are alternative methods of iterating over the elements of an array in JavaScript. [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) operates on iterable objects, including arrays.

```js
for (const element of myarray) {
  process(element);
}
```

Because we should not be limited to these methods 😆 there is also an [iterator method/function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) available to arrays called `forEach()`.

```js
myarray.forEach((element) => process(element));
```

These three methods **do the same thing**. They all (in this example) called the function `process(element)` for each element of the array.

### For Loop Patterns

This week, you will use `for-loops` to create a static or dynamic pattern. The pattern can be for whatever you like; some wallpaper, a kaleidoscope, fabric/clothing or a screen saver.

To start, fork and clone the [lab 8 template repo]().

## Part 1: Create your own Pattern

For this activity, you are going to create your own pattern using `for-loops`. You can either use one of the patterns you made last week as a starting point. If you want to start from scratch, have a look at some of the patterns on [open processing](https://openprocessing.org/browse/?time=anytime&type=all&q=pattern#). Open Processing includes patterns that were created using the Java library from which p5.js was derived; that library is called _processing_.  The Open Processing site also includes patterns that were generated using p5.js :-).  You could also try using the search term [**"iteration"** on open processing](https://openprocessing.org/browse/?time=anytime&type=all&q=iteration#) if you are interested in patterns generated using repetition/iteration.

Have a go at creating your own pattern and remember to ask your instructors if you have any questions. Your pattern can either be static or dynamic. Remember that a pattern is simply a sketch where certain visual elements are _repeated_.

<iframe src="https://editor.p5js.org/Ushini/full/jl20ZMsHI" style="width:100%; height:100%;"></iframe>

<iframe src="https://editor.p5js.org/Ushini/full/aWkOoJGIS" style="width:100%; height:100%;"></iframe>

**do:** Once you're satisfied with your pattern, make sure you commit and push your code to git before you move on to the next section of this lab.

## Part 2: Variations

In the second part of this lab, you will be swapping your code with one of your classmates. Your task for this activity is to use your classmate's pattern as a starting point and create your own variation of their pattern by modifying their code.

:::tip
If you haven't already, introduce yourself to someone next to you :) You will be working together for the rest of this lab.
:::

The first thing you'll need to do is share your code with your classmate. You can send your classmate a direct message via Teams and either attach your `sketch.js` file in the message or copy-paste the code in your `sketch.js` file into your direct message.

**do:** Send your classmate the code from your `sketch.js` file either by attaching the file in a direct message on Teams, or you can copy-paste the code into a direct message. Once you receive your classmate's code, you can either drag and drop the `sketch.js` file into your template repo directory **OR** you can just paste their code into your `sketch.js` file. Once you've done this, call over your instructor to make sure you can both access and modify each other's code.

**do:** Before you start making any changes of your own, commit and push to git. This commit and push should include your classmates code in its original state.

Open your classmate's code and run the live server. While the live server is running, try introducing some of your own changes to their code. If you're not sure how it works, you can always ask your classmate. Alternatively, you can just start changing the code and observe what the effects are in your browser.

<iframe src="https://editor.p5js.org/Ushini/full/C8D3zq4lb" style="width:100%; height:100%;"></iframe>

<iframe src="https://editor.p5js.org/Ushini/full/cQqfhrTiM" style="width:100%; height:100%;"></iframe>

**do:** Generate _at least one_ variation to your classmate's pattern. When you create a variation you like, 1) take a screenshot of the pattern so you can include it in your blog post and 2) commit and push your changes to git. Your commit message should include a number to indicate the version of the variation e.g. `pattern-ver-1.jpg`.

:::tip
**talk:** Before we finish up for the day, spend a few minutes sharing the changes you made with your classmate. Ask them what their approach was for generating changes to your pattern and share your own approach for generating changes to theirs.
:::

**do:** Add all your screenshots to the `assets\` folder of your template repo and make one final commit and push to git.

## Part 3: Arrays and Patterns

It can be helpful to store data used for constructing patterns - such as position, size, orientation, colour, stroke, so that we can use these programmatically for animation and interaction. In other programming environments we might save and restore the data in a file. We can read data into arrays and interpret the data visually. 

Have you used arrays in developing your patterns?

Can you modify your code to use arrays?

Create a variation of your original code that employs arrays in a way in which you haven't done so far!

:::tip
**Discuss:** Discuss your ideas on the use of patterns in art and design with your partner. Talk about the processes you could use for creating patterns with code: how you have used iteration/repetition/loops to generate patterns and the effect of changing looping structures.
:::

## Summary

Congratulations! In this lab you:

1. created your own geometric pattern
2. created some variations to your classmate's pattern
3. investigated the role of patterns in art and design
4. explored ways of storing pattern data in arrays