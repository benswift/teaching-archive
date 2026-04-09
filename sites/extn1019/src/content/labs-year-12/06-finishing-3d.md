---
title: "Lab 6: Finishing 3D"
tagline: "the end of 3D, finalising your research project, exploring possibilities"
project_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-1
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-6
image: ./images/year-12-lab-06.png
---

## Outline

In this lab you will:

1. work on finishing your [3D research project for Portfolio Item 1](/deliverables-year-12/01-3d-research-topic/)
2. think about how we interact with a 3D environment
3. gain some insights into coding 3d interactions
4. explore possibilities for 3D environments in art

## Introduction

This week we are wrapping up our foray into 3D graphics before we start on the wonderful world of SHADERS next week.

Assignment #1, your [3D research project for Portfolio Item 1](/deliverables-year-12/01-3d-research-topic/) is DUE TODAY!!!

Hopefully you are making great progress towards completion.

## Portfolio Item 1

**Do:** If you haven't already, you must immediately fork, clone and open the [assignment template repository]():

Today is your last chance to ask questions or get **_in person_** help with finishing your project.

Please ensure you address all aspects of the specification, and self-assess using the rubric prior to submission.

:::tip
**THINK:** Ask any questions about the assignment now!
:::

## 3D Interactions

Interacting with 3D computer graphics involves additional challenges over 2D graphics.

:::tip
**BRAINSTORM:** What challenges might you encounter with 3D? Talk with your peers about the challenges faced. After 5 minutes we will stop and discuss as a class.
:::

### Selecting an object for interaction

If you click on an object in 2D graphics, the mouse position can be used directly to determine if you are intersecting with an object.

**Simplistic 2D selection**

```js
class TwoDObject {
  boundingBox = [];
  myColor = color(0, 0, 0, 255);
  highlight = color(255, 255, 255, 255);
  selected = false;

  constructor(minX, minY, maxX, maxY, clr) {
    this.boundingBox = [minX, minY, maxX, maxY];
    this.myColor = clr;
    this.highlight = color(
      (red(this.myColor) + 125) % 255,
      (green(this.myColor) + 125) % 255,
      (blue(this.myColor) + 125) % 255,
      200,
    );
  }

  isSelected(x, y) {
    this.selected =
      this.boundingBox[0] <= x &&
      x <= this.boundingBox[2] &&
      this.boundingBox[1] <= y &&
      y <= this.boundingBox[3];
    return this.selected;
  }

  render() {
    if (this.selected) {
      fill(this.highlight);
    } else {
      fill(this.myColor);
    }
    rectMode(CORNERS); // use 4 parameters as corner coordinates
    rect(this.boundingBox[0], this.boundingBox[1], this.boundingBox[2], this.boundingBox[3]);
    rectMode(CORNER); // the default
  }
}

let my2DObjs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    let x = random(width - 200);
    let y = random(height - 100);
    let w = random(100) + 30;
    let h = random(50) + 20;
    let c = color(random(255), random(255), random(255));
    my2DObjs.push(new TwoDObject(x, y, x + w, y + h, c));
  }
}

function draw() {
  background(80);
  for (let o of my2DObjs) {
    o.render();
  }
}

function mouseClicked() {
  for (let o of my2DObjs) {
    o.isSelected(mouseX, mouseY);
  }
}
```

**BUT WHAT HAPPENS WHEN WE GO THREE-D**

What happens to our coordinate system?

What does a perspective projection from a camera mean for objects at a distance?

How do we select an object using a mouse click. We can see it &mdash; why doesn't the click work?

This is super complicated. We need to cast a ray from the camera into the 3D world and see if it comes close to a position in 3D space.

[p5-raycast by camelCaseSensitive](https://github.com/camelCaseSensitive/p5-raycast) has a solution.

:::tip
**THINK:** How else might you need to interact with a 3D world? Think about what you can see and how that is controlled. Think about 3D games you have played. How might you like to explore a 3D world?
:::

## 3D Art

What makes for good, or even great, 3D Digital Art?

Have you explored the world of 3D Art?

What inspires you?

What would you like to build?

:::tip
**THINK:** How can you find artists who work in code building 3D art? What search terms are needed to extract the search results you are looking for?
:::

**DO:** Remember to commit your code/research writing and push it up to Gitlab.

## Summary

Congratulations! In this lab you:

1. worked towards finishing your [3D research project for Portfolio Item 1](/deliverables-year-12/01-3d-research-topic/)
2. explored interactions with a 3D environment
3. gain some insights into coding 3d interactions
4. explore possibilities for 3D environments in art
