---
title: "Lab 22: Project Planning and Cellular Automata"
tagline: "Planning out your project implementation"
project_repo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-final-project
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-22
fractal_repo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-21
image: /images/labs-year-12/year-12-lab-22.png
---

## Outline

In this lab you will:

1. investigate (briefly) the concept of **cellular automata** (and revisit **fractals**)
2. plan your project - including
   - write your final interpretation of the theme
   - write a list of tasks which need to be completed for you to reach your goal
   - write a schedule of work (what you will commit to do each week) assigning tasks to a timeline
3. start on the tasks

## Introduction

We will continue working on your Final Project!

You can find all the details about the final project assessment task by visiting the [final project
deliverables](/deliverables-year-12/03-final-project/) page. 

You can find the [template repository for your final project submission here.]()

The theme for the final project this year is **"&#8230; endings &#8230; beginnings &#8230;"**. 

But first, let's have a quick look at ***Cellular Automata*** and revisit ***Fractals!***

## Part 1: Cellular Automata

### Part 1A: Revisiting Fractals from Lab 21

Here's a Romanesco Broccoli spotted in Canberra over the weekend (fractals in the wild):
![Broccoli](/images/resources/romanesco_broccoli.jpg/)

Follow the demonstration. Try some changes.

:::info
**ASIDE:** to get the updated content for lab 21 you can pull from the upstream (parent) repository as shown here:
:::

```bash
# add an upstream reference
git remote add upstream https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-21
# verify the upstream
git remote -v
# fetch from upstream
git fetch upstream
# pull from upstream
git pull upstream main
```

if you have changes that you wish to discard (to simplify a merge) you can reset **hard**

```bash
git reset --hard
```

**DO:** Fork and clone (or update from upstream) the [lab 21 template repo]().

**DO:** Think about how you might change this system. The Mandelbrot function? Colour mapping? User interface? Write down a few ideas.

### Cellular Automata

Cellular Automata are: 
*a grid of cells, each in one of a finite number of states, such as on and off. The grid can be in any finite number of dimensions. Each cell of the grid has a set of cells called its neighborhood. An initial state (time t = 0) is selected by assigning a state for each cell. A new generation is created (advancing t by 1), according to some fixed rule (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighborhood. Typically, the rule for updating the state of cells is the same for each cell and does not change over time, and is applied to the whole grid simultaneously, though exceptions are known, such as the stochastic cellular automaton and asynchronous cellular automaton*

Automata can be [one-dimensional](https://www.wolframalpha.com/input?i=rule+110), [two-dimensional](https://en.wikipedia.org/wiki/Cellular_automaton) or defined by higher dimensions.

Stephen Wolfram investigated automata in detail in the book [A New Kind of Science](https://www.wolframscience.com/) in 2002.

Automata patterns can also be observed in nature:
![Molluscs Automata](http://ca.olin.edu/2005/cellular_automata/molluscs.png)

(From [Cellular Automata and Computing](http://ca.olin.edu/2005/cellular_automata/))

**DO:** Fork and clone the [lab template repo]().

We will look at:
* how [Conway's](http://www.ibiblio.org/lifepatterns/october1970.html) [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) works  (see the [Coding Train Challenge](https://thecodingtrain.com/challenges/85-the-game-of-life))
* Interface design
* Further Ideas

Follow the live demonstration and Q&A session with your instructor.

## Part 2: Planning

This will be completed offline following your instructors prompts.
For those who are not physically present in class, here's a run-through of what we will do:

1. disconnect from all internet connected devices and all electronic user interfaces
2. grab a notepad and pencil (yes, pencil is preferred)
3. answer the questions:
  - what is your final interpretation of the theme?
  - how will this look/sound like in an artwork?
  - how will users interact with the artwork (or how will it evolve over time)?
  - how will the interaction/evolution strengthen your communication of the theme?

Now that you have completed your ideation and first part of your designs, let's think about planning out the tasks:

1. list the tasks required to develop your project:
   - you need a sketch which generates your art
   - you need an `interpretation.md` which describes your artwork for an audience
   - you need a `README.md` which describes how to interact with your artwork
   - you need your project documentation ([read the spec](/deliverables-year-12/03-final-project/#project-documentation))
   - your code will need to be tested, and refined
   - you can break your coding tasks down into simpler elements
2. we have 6 weeks remaining. Map the tasks to weeks.<br/>Some tasks may take more than 1 week.

OK &ndash; Great work.  Now we can go back online.

If you haven't already, fork and clone the [final project repo]().

## Checking In

You should now have:

* an interpretation of the theme to work with
* some ideas for how this will work in code
* some ideas for interacting with your artwork
* a list of tasks you need to complete
* a mapping of tasks to dates

This is **not just in your head**.  You have solid project documentation.

Make sure you add this evidence (even as photos of handwritten notes) to your repository.

## Getting down to business

Now you have the required elements for your project - it is time to get to work.

Your instructor will be asking about your plan, your tasks, and help you resolve any issues.

Be sure to commit and push your work to gitlab.

## Summary

Congratulations! In this lab you:

1. looked at fractals and cellular automaton
2. read through the [final project deliverables page](/deliverables-year-12/03-final-project/)
3. finalised your interpretation of the theme and the representation of this interpretation
4. planned out the tasks required to complete your project
5. worked on some of the tasks for your project

Before you leave class today, make sure you commit and [push your work to GitLab]().
