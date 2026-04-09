---
title: "Lab 24: L-Systems and Project Process"
tagline: "A look at L-Systems (Lindenmayer Systems) and Progress on your Project"
project_repo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-final-project
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-24
image: ./images/year-12-lab-24.png
---

## Outline

In this lab you will:

1. investigate (briefly) how Lindenmayer Systems (L-Systems) can be used to generate art
2. look at ideas for interaction using examples shown in the L-System template
3. workshop (as a group) a sketch for this project and interaction

## Introduction

We will continue working on your Final Project!

You can find all the details about the final project assessment task by visiting the [final project
deliverables](/deliverables-year-12/03-final-project/) page.

**NOTE:** You **must Must MUST fork and clone** the project template repository. A number of students are still to fork and clone, and it is now Week 4 of 9 weeks for working on your project!!! You can find the [template repository for your final project submission here.](). If there are [**blockers**](https://www.atlassian.com/blog/project-management/most-common-project-blockers) for working on your project we will work on identifying and [getting around these](https://services.unimelb.edu.au/counsel/resources/study-related-issues).

The theme for the final project this year is **"&#8230; endings &#8230; beginnings &#8230;"**.

## Part 1: L-Systems [30 minutes]

[Lindenmayer Systems](https://en.wikipedia.org/wiki/L-system) are [weirdly] a "parallel re-writing system", or a "type of formal grammar'.

L-systems were [introduced and developed a Hungarian biologist/botanist, Astrid Lindenmayer (1968)](<https://doi.org/10.1016/0022-5193(68)90080-5>). He created models of plant cells and plant growth. Simplifying complex structures to a grammar system, where components of the current sentence structure are replaced by new "grammatically correct" snippets through the "rewriting process" at each stage of growth (which I have called "generations" in the code).

The lab template repository contains an example of the code with a few changes.

**DO:** Fork and clone the [lab template repo]().

There is a [nice video explanation by Dan Schiffman in a Coding Train challenge](https://thecodingtrain.com/challenges/16-l-system-fractal-trees).

The basic ideas are:

Our grammar has a valid set of symbols. E.g.: `[FX+-]`
Our grammar has a set of rules for converting a symbol to a new phrase.
E.g. `X→X-F`, `F→F[+FX]X`

We start with an "axiom", which is a valid phrase or sentence written in the grammar.

We repeat a process:

- read the current sentence
- for each symbol, refer to the rules:
  - replace the symbol with the matching phrase from the rule book
  - if not match is found, just put the current symbol back in

We then use the current sentence to display the state of the L-System.

Amazingly, the concept of [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics) is best for this. Our standard representation is:

- `F` == Draw a line forwards 1 unit
- `-` == turn left
- `+` == turn right
- `[` == push the current transform state onto the stack
- `]` == pop the transform state on the stack back

`X` is not represented. It is a placeholder to allow different L-System transformation rules.

There is an alternative operation we are not using in the default system: Move Forward 1 unit (without drawing). This allows for gaps to be created in our art.

Follow the live demonstration and Q&A session with your instructor.

One thing to note is the speed of this implementation - it becomes slower the longer the set of instructions are. This could be an example of "slow art". :-)

You may wish to consider how L-Systems systems might be used in an artwork.

We will be talking a lot about the interactivity and ideas around this.

## Part 2: Workshopping a sketch for endings and beginnings [30-45 minutes]

As a class we will workshop and create an artefact for a project interpretation.

## Part 3: Sketching [50-60 minutes]

It's now time to move onto working on sketching out your ideas.

Your sketching can be completed using p5.js (writing code) or using pencil and paper.

When you have finished your sketching for today, make sure you stage, commit and [push your work to GitLab](). If you sketched using pencil and paper, take photographs of your pages and add these to your repository (in a folder called "documentation").

## Part 4: Documenting [10 minutes]

Write a short piece reflecting on the progress you have made.

- What did you achieve today?
- How are you tracking against your plan?
- What is working?
- What is not working/needs to be changed, scrapped, or tweaked?

Adapt your plan if necessary.

When you have finished your documentation, make sure you stage, commit and [push your work to GitLab]().

This will be completed offline following your instructors prompts.

## Summary

Congratulations! In this lab you:

1. learned a little about Lindenmayer Systems (L-Systems) and how they can be used
2. explored ideas for interaction, critically examining the interaction used for L-Systems
3. workshopped a sketch for this project

Before you leave class today, make sure you commit and [push your work to GitLab]().
