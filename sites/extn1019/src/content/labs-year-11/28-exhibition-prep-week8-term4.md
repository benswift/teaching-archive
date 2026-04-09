---
title: "Lab 28: Exhibition [and Year 12] Prep"
tagline: "Finalising your exhibition pieces"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-27-solution
image: ./images/year-11-lab-28.png
---

## Almost Done

Thanks to all of you for hanging in for the _wild ride_ of ANU Extension Creative Computing, Year 11, in 2024.

You should have received feedback for your Final Projects - check your ANU email or Wattle for details.

Next week we have our **Year 11 Creative Computing Exhibition**.

<div id="yr11-final-exhibition-details" class="warn-box" markdown="1">

## Creative Computing Final Exhibition {#yr11-final-exhibition-details}

The final exhibition will be held Wednesday 11 December at the [Birch Building](https://maps.app.goo.gl/CjqF68WcVc3bUFi59), Innovation Space, Level 2, from 5pm to 7pm. All students are required to attend (as this occurs during regular scheduled class time) - attendance will be recorded.

The details are:

- **Time**: 5:00pm - 7:00pm
- **Date**: Wednesday 11 December
- **Location**: [Birch Building](https://www.anu.edu.au/maps?search=Birch), Innovation Space, Level 2

The exhibition will run from 5-7pm. Feel free to invite your friends and parents if you'd like! We will order some pizza's just for the class members before the exhibition starts (around 4:30pm) to celebrate your hard work.

### The Setup

We will have a dozen computers (at least 12) setup in the exhibition space. You can bring your own computer along if you have special requirements - though all projects should work well on the provided platforms. You'll be able to interact with any of your classmates' artefacts through any of these computers, so there wont be 'installations' which only exhibit a single person's work. We'll have a main screen set up in the exhibition space. We'll also have a number of large screens set up for students to give a live performance or demo of their project artefact.

If you have any questions, [email Matthew](mailto:matthew.phillipps@anu.edu.au).

</div>

**Please note the _venue_ for our _Exhibition of Works 2024_ has _changed_ from the original venue.**

It will now be in the Innovation Space of the Birch Building.

## Schedule of Classes

Classes continue!

- Wednesday 4 December HN 1.23 (this week)
- Wednesday 11 December Innovation Space (exhibition)

## What will the Exhibition Look Like?

We will have an "entry page" with each student listed with a link to their final project. There will also be a link to your portfolio PDF.

- [Year 11 Projects 2023](https://comp.anu.edu.au/courses/extn1019/showcase-yr11-2023/)
- [Year 12 Projects 2023](https://comp.anu.edu.au/courses/extn1019/showcase-yr12-2023/)
- [Year 12 Projects 2024](https://comp.anu.edu.au/courses/extn1019/showcase-yr12/)

## What do I need to do to prepare?

To prepare for the exhibition you need to check a few things.

### Work Title

Your work should have a name - check that your work has a name.

Your name should be on display - although subtly. The place that this should be displayed is in the `index.html` file.

Check `index.html`. You will see the following code at the top of `index.html`:

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Work Title :: Other Minds</title>
  </head>
</html>
```

You should edit the words `My Work Title` to reflect the actual title of your work.

### Hosted on extn1019.cecs.anu.edu.au

You should have pushed your code to CECS GitLab. If your project included the file `.gitlab-ci.yml`, and this was the latest version of this file, then your work should be published to: https://extn1019.cecs.anu.edu.au/u9999999/extn1019-2024-year-11-final-project/ (change u9999999 to your ANU id).

This is important, as this is where the thumbnail image will link to your project (and all your content will be stored).

### Check for bugs / errors / improvements

If there are issues with your code, your instructor will have let you know through the feedback for your Final Project. Please check feedback and address any issues. You may wish to incorporate changes to improve the look, feel, interactivity: but it is most important that your code works. If you do make any changes - please stage, commit and push your code, and check that it is working as expected on the extn1019.cecs.anu.edu.au site.

Your computer may be more forgiving than the ANU web server. File names must match case (this is especially an issue with images, fonts and sounds which are loaded into your projects). AND **PLEASE** never have space characters in file names.

### Portfolios

For Year 11 you are expected to have a single `portfolio\fp-portfolio.pdf` file.

This should include:

1. Your Project Title
2. Your Name
3. An **Artist Statement**
4. An explanation of how to interact with your work
5. Your connection to the theme/elaboration of your interpretation of the theme.
6. Your portfolio content illustrating your journey through Creative Computing, your Mini Project and your creative process for the Final Project.

Please consolidate your content into a single file.

Please ensure you have all of the elements listed above, preferably in this order.

The requirement for instructions is a change from what was requested for submission &mdash; it is expected that everyone will need to edit their PDFs.

You must use path and filename `portfolio/fp-portfolio.pdf`.

#### Presentation Matters

Please present your portfolios creatively using appropriate backgrounds, fonts, images and layout. The screens are oriented in a landscape orientation for the exhibition, so you may wish to consider your page layout accordingly.

Use a spell and grammar checker to ensure a professional presentation. VSCode has language checking extensions - I use [LTex Grammar Tool](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex).

### Thumbnail Images

The exhibition web page will use thumbnail images for the hyperlink to your working code artefact. If you would like to choose a thumbnail image - please either send it to me via email, or add a file `"assets\thumbnail.png"` to your project which is **300 pixels wide** by **240 pixels tall**.

If you do not choose a thumbnail before Friday 6 December, then your instructor will choose a thumbnail.

The thumbnail must be an image taken from your work (a screenshot), but it does not have to be the full screen &mdash; you can focus in on an area or element.

## Revisiting Particle Systems

You may wish to fork and clone the Lab 27 template, or - if you would like to see Matthew's code, fork and clone the solution.

**do:** `Fork` the [Lab 27 Template Solution]() and `clone` onto your computer.

Once you have your template forked, you can test it locally using the live server. Once tested, `stage` the changed files, `commit` your changes, and `push` to gitlab.

After you have done this you should be able to view your artefact in a web browser using the URL format: https://extn1019.cecs.anu.edu.au/u9999999/extn1019-2024-year-11-lab-27/

Change u9999999 to your UniID!

### Effects

You may wish to try rendering smoke, fire, fountains, fireworks, rain, bubbles, or something fun and unusual. Investigate examples and see what you may need to generate something amazing. Play around with the code. Experiment.

## Getting Started with 3D

In Year 12 Creative Computing we will be using the [3D graphics capabilities of p5.js](https://p5js.org/tutorials/#webgl), we will be looking at what we can do with [Shaders using p5.js](https://p5js.org/tutorials/intro-to-shaders/), and we will be investigating some of the capabilites of Machine Learning through the [ml5.js library](https://docs.ml5js.org/#/).

During the break it might be a good idea to get started with understanding 3D. The concepts go well beyond adding a `z-coordinate` to our `(x,y)-coordinates` in drawing our graphics.

There are other JavaScript libraries which are more established for 3D graphics, such as [3js](https://threejs.org/) and [Babylon.js](https://www.babylonjs.com/). We will **NOT** be using these, as we wish to build on our existing knowledge of p5.js.

You are encouraged to build your familiarity with the concepts, through experimenting with 3D modelling, animation, and texturing using [Blender 3D](https://www.blender.org/).

You can also follow the [3D chapter in Coding Train](https://codingtrain.github.io/website-archive/Tutorials/18-webgl/).

Or you may wish to explore other concepts of algorithmic beauty through Daniel Shiffman's book ["The Nature of Code"](https://natureofcode.com/introduction/) &mdash; which is associated with content in [Coding Train](https://thecodingtrain.com/).
