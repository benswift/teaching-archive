---
title: "Week 10: Starting your major project"
templateRepo: https://gitlab.cecs.anu.edu.au/comp1720/2024/comp1720-2024-labs
---

## Task 0: make a start!

For this weeks task 0, start a "sketch" in p5 of _one aspect_ of your major project. Here's what you need to do:

0. fork the [major project repository](/assessments/05-major-project/) and clone it to your computer.
1. take **one aspect** of your major project from the storyboard and ideas you have been working on. (this could be a scene, a character, an interaction, an animation, any one part of your major project plan).
2. try to implement it in p5.js in your MP repository - it doesn't have to be "finished", it's just a sketch
3. commit and push your sketch to gitlab
4. answer the following questions:

> How does this **sketch** reflect the major project theme? How does this **sketch** engage the viewer? What is the address of your **sketch** on the test server?

Your sketch should be done in `p5` in your major project repository (so that you have actually made a start on your project).

## Lab Tasks

Welcome to lab 10! In task 0 you forked and committed some code to your major project and that means:

> 🌟🌟🌟 Congratulations! You've started the major project for COMP1720/6720!! 🌟🌟🌟

The content in this lab is to help you start to frame the interaction and context for your major project. We will be considering what viewers will experience in your project, and what recent developments in interactive art inform your work.

To get started, form a small group of two or three in your lab and show off your major project sketch to the others in your group.

After the first two tasks in this lab, we have a **long** list of extra revision topics, extensions and code ideas. You're not meant to "complete" this list, just to browse and find topics that appeal to you. If you are unsure of anything in a previous lab, now would be a good time to talk to your tutor about it and maybe go back to have another go.

**If you have a question about anything to do with the course (labs, major
projects, etc.), ask your tutor---they _want_ to help you**

This lab is about ideas, not code, but you still need to submit something. You will find markdown files for each lab task in this week's folder in your lab repository. As you are completing your lab tasks, make sure that you actually write down your ideas and put them in these files to complete the lab.

### Task 1: Thinking about interaction

Your sketch might, or might not, have had some interactive elements. Either way, you should know by now that "interactivity" is a key expectation for the major project. In this task, you're going to set down some thoughts about how your artwork is going to include interaction.

(To be clear, these should be your thoughts **today**, they may change or evolve over up until your project is completed which is totally fine.)

Here's your task

> Write 100 words about how you are going to use interaction in your major project to enhance the experience of your artwork.

(N.B.: please write **no more** than 100 words! It can be a challenge to be both clear and concise!)

Show your 100 words to your group. Try and get this done quickly, if you've spent more than 1/2 an
hour on it---stop and show it anyway, go work on something else.

If responding to the prompt has brought up some existential questions, or just
made you confused---please ask one of your tutors!

### Task 2: Thinking about "recent developments"

You might have noticed that the major project spec refers to "recent developments in Art and Interaction Computing". To be precise, it is a **requirement** for students in COMP6720 to include a reflection on _"recent developments"_, but it's a good idea for COMP1720 students to think about this as well.

In this exercise, you're going to do some research about recent artworks, technologies, or movements, that you build on in your artwork. For the sake of clarity, let's define a "recent development" to be something that has _occurred within the last **15 years**_.

Here's your task:

> Make a list of three "recent developments in Art and Interaction Computing" (last 15 years) that inform the creation of your major project. If nothing comes to mind, look back through the lectures, books, and resources provided to you and do some **research** to get some ideas.

Talk with your group about your list of recent developments. Why are these developments part of "Art and Interaction Computing". If you're a 6720 student, make sure you talk to your tutor to make sure that you're on the right track.

### Task 3: Recap

The rest of this lab is a recap of things you've learned already, especially
things which might be useful as you're putting your major project together.
That doesn't mean that you should just take this code and copy it straight into
your major project, instead think of it like a bunch of "tools" which you might
need in your toolbox.

The things listed below aren't really "exercises" that you **need** to complete, but ideas and inspiration that might give you some inspiration or encouragement to help with your project.

Have a read of the coding and interaction explainers below. Choose one that appeals to you and discuss it with your group. Why did you choose that one? How could it be incorporated into your project?

<div class="info-box" style="margin-top: 5px; margin-bottom: 15px;" markdown="1">

Make sure if you use anything from this lab in your major project you mention it
in your `references.md`.

</div>

## Functions & parameters

By now you've all used functions in the lab content and most of you have used
functions in the assignments. But because functions can do so many things it's
easy to get a bit confused about what they're really for---so let's revise a
definition:

> A function is a set of statements that performs a task or calculates a value.

### Defining a function

A function in javascript has four main components:

1. the `function` keyword: this lets javascript know that what follows is a
   function
2. the _name_ of the function
3. the function's parameters, enclosed by brackets `(` and `)` and separated
   with commas (you need to include the parentheses even if the function takes
   no parameters)
4. the _body_ of the function: one or more lines of code that the function will
   perform enclosed by squiggly braces (`{}`)
5. (optional) the function can include a final `return` statement, which makes
   the function _return_ a value

```javascript
function myFunction(x, y) {
  return x + y;
}
```

In the above example you can see a simple function (called `myFunction`) which
takes two (number) parameters, adds them together and returns the result.

### Calling a function

Calling a function looks a lot like parts 2 and 3 of the function definition.
This is because you need to pass in one value for every parameter required by
the function.

```javascript
var x = myFunction(1, 2);
// x is now equal to 3
```

In the above example the first value `1` has been passed as the `x` parameter of
the function and the second value `2` has been passed as the `y` parameter.
Also, notice that `myFunction` returns a value (in this case `x + y`) which you
can use it directly or assign it to a variable just like any other variable in
your code, including passing it as a parameter to another function call.

<div class="think-box" style="margin-top: 5px; margin-bottom: 15px;" markdown="1">

What value would `x` be after this statement;

```javascript
var x = myFunction(myFunction(3, 2), 1);
```

</div>

Many p5 functions that you use regularly return a value, e.g.
[`random()`](https://p5js.org/reference/#/p5/random),
[`sin()`](https://p5js.org/reference/#/p5/cos) and
[`cos()`](https://p5js.org/reference/#/p5/cos). Can you think of some more?

### Functions that do things

Functions don't _have_ to return a value, though---they can be useful just for
the things that they do. For example, the
[`ellipse()`](https://p5js.org/reference/#/p5/ellipse) function doesn't return
an ellipse as a value (you don't write `var x = ellipse()`). Instead, it makes
something happen---it draws an ellipse to the canvas.

You can define your own functions to do more complex things:

```javascript
function window(x, y, w, h) {
  // draw window pan
  fill(255);
  rect(x, y, w, h);
  // draw window cross
  stroke(0);
  line(x, y + h / 2, x + w, y + h / 2);
  line(x + w / 2, y, x + w / 2, y + h);
}
```

For more information have a look at the [MDN article on
functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

## Typography

[Typography](https://en.wikipedia.org/wiki/Typography) can make a big difference
to the appearance of your sketch. Great typography can be hard to achieve but a
little bit of effort goes a long way.

### Getting font files

One good place to look for (usable) font files is the [Google Fonts GitHub
repo](https://github.com/google/fonts) (it's the place where all the files which
power <https://fonts.google.com/> are stored).

If you want to use one of these fonts, here's the process:

1. find a font you like (perhaps using the main [Google Fonts
   interface](https://fonts.google.com/))

2. find the corresponding `.ttf` file in the [GitHub
   repo](https://github.com/google/fonts) and download it (for example, if you
   want to use the [Akronim typeface](https://fonts.google.com/specimen/Akronim)
   then the relevant subfolder in GitHub is
   [`ofl/akronim`](https://github.com/google/fonts/tree/master/ofl/akronim))

### Loading fonts

p5 can load fonts just like it can load images---here are the steps:

1. save your font file to your `assets` folder
2. load the font with the
   [`loadFont()`](https://p5js.org/reference/#/p5/loadFont) function. Because
   font files can be large, it's best to load your files in the
   [`preload()`](https://p5js.org/reference/#/p5/preload) function.

```javascript
var myFont;
function preload() {
  myFont = loadFont("/images/my-font-file.otf");
}

function setup() {
  textFont(myFont);
  text("p5*js", 10, 50);
}
```

### Laying fonts out

Its important to consider size, colour, style and position for the textual
content of your sketch.

Text colour can be set in the same way as any visual element in p5. Use the
[`fill()`](https://p5js.org/reference/#/p5/fill) and
[`stroke()`](https://p5js.org/reference/#/p5/stroke) functions to set the
colours of the text and its outline.

Text size also makes a big difference to how we understand text content. Use the
[`textSize()`](https://p5js.org/reference/#/p5/textSize) function to establish a
heirarchy of content, i.e. the more important content should be larger than the
less important content.

Text style (bold and italics) can be used to _emphasise_ certain **content**.
You can achieve this with the
[`textStyle()`](https://p5js.org/reference/#/p5/textStyle) function:

```javascript
textStyle(ITALIC);
textStyle(BOLD);
```

Text is also useful for arranging textual content. For example, if you set the
[`textAlign()`](https://p5js.org/reference/#/p5/textAlign) to:

```javascript
textAlign(CENTER, CENTER);
```

this will mean that the position parameters will mark the centre point of your
text. See the [`textAlign()`](https://p5js.org/reference/#/p5/textAlign)
reference for more alignment options.

## Buttons

There are plenty of ways to make a button in p5, each has its own pros and cons.
If you have your own preferred way then feel free to skip over this section.

We'll revise the method of button building from the lectures. This method is a
function which both draws the button and returns a boolean value representing
whether or not the button has been clicked.

To implement this we define a function which takes 5 parameters, the first 4 are
the position and size of the button, the last is the text the button will show.
If you wanted buttons of varying colours or something else you may wish to add
one (or more) `colour` parameters.

```javascript
function button(x, y, w, h, buttonText) {
  //draw the button
  rect(x, y, w, h);
  text(buttonText, x + 5, y + 5);
  // return whether the button is pressed.
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h && mouseIsPressed;
}
```

:::info
Note that the `return` statement above is split across multiple lines---this is
just to make it more readable (for a human), p5 doesn't care whether it's all on
one line or spread across several lines like this.
:::

With this function defined we can easily make many buttons while keeping our
code short and simple.

To use our button we can simply put it inside an if statement. In the example
below, the score variable is incremented every time the user clicks the button.

```javascript
if (button(40, 40, 60, 20, "Click me")) {
  score = score + 1;
}
```

However, there are some downsides to this method. Because the button function
draws _and_ returns the value, the button will be drawn before the action the
button triggers. This can cause problems---if you want to draw something (e.g. a
different background) while the button is pressed you might end up drawing over
the button itself.

The simplest solution to this kind of problem is to call the button function
again at the end of the draw loop.

```javascript
if (button(40, 40, 60, 20, "Click me")) {
  // call to background will draw over the button
  background(255, 0, 0);
}
// call again to redraw.
button(40, 40, 60, 20, "Click me");
```

:::tip
What other ways of drawing a "button" can you think of? What are the pros and
cons, and how do they compare to the one described above?
:::

## Scene management

Scene management is important when you're creating a game or interactive artwork
that needs more than one stage/section/scene. Scene management might seem like a
challenge, but you can build it out of the tools you already know.

To keep your code readable it's best to keep the code for each of your scenes in
separate functions. Create a global variable to keep track of the scene number,
and use it to switch between scenes in your `draw()` function.

Here's the basic structure:

```javascript
var sceneCounter = 1;

function draw() {
  if (sceneCounter == 1) {
    drawScene1();
  } else if (sceneCounter == 2) {
    drawScene2();
  }
}

function drawScene1() {
  // scene 1 draw code...
}
function drawScene2() {
  // scene 2 draw code...
}
```

Now you need to define the conditions for changing the scene counter. This might
happen after a certain number of frames or when a user clicks a button.

```javascript
if (frameCount > 80 && sceneCounter == 1) {
  sceneCounter = 2;
}
```

The code above changes to scene two after 80 frames **if** the scene counter
is still on 1. It would also be possible to set the scene counter back to zero
with another condition, for example if the user clicks a restart button. Because
our draw function just draws the scene based on the `sceneCounter` variable, we
don't need to do anything except change the value of `sceneCounter`.

## Responsive design {#responsive-design}

"Responsive design" sounds fancy, but it really just means that your sketch will
still look good regardless of what screen size it is viewed on, _including tiny
smartphone screens!_. To make this work, the first thing you'll want to
implement is the p5
[`windowResized()`](https://p5js.org/reference/#/p5/windowResized) callback
function which is called when the user resizes their window.

For example, you might have noticed that with all the p5 sketches you've written
so far that if you re-size your browser window your p5 canvas doesn't resize
with it. To make that happen, you can call the
[`resizeCanvas()`](https://p5js.org/reference/#/p5/resizeCanvas) function inside
your [`windowResized()`](https://p5js.org/reference/#/p5/windowResized)
callback:

```javascript
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

This means that the canvas size will change whenever you resize the browser
window (try it and see!).

That was pretty easy, but to make your sketches truly responsive you need to
define _all_ the sizes and positions in terms of `width` and `height`. You have
already used p5's `width` and `height` variables to position things e.g. in the
center of the canvas. It's a good idea to position and size all your elements as
a fraction of the `width` or height`. Take for example a regular button:

```javascript
function notResponsiveButton() {
  rect(150, 150, 140, 50);
  textSize(22);
  text("CLICK ME", 165, 182);
}
```

The button above would look just fine on a normal laptop screen where it would
take up about a quarter of the width of the screen. But if you looked at this
sketch on a smartphone screen it might run all the way off the screen.

You can fix this by defining the position in terms of the `width` variable:

```javascript
function semiResponsiveButton() {
  rect(width * 0.1, width * 0.1, width * 0.3, width * 0.1);
  textSize(width * 0.05);
  text("CLICK ME", width * 0.13, width * 0.17);
}
```

By defining the button in relation to the `width` of the canvas it will now
shrink and grow in scale with the window. The above function is called
`semiResponsive` because although it will fit on any screen it will likely
become too small to use on mobile devices.

The last trick in the "responsive design" book is to create a break point. This
is where the size and position of a particular object is changed when the window
is resized to above or below a certain size.

```javascript
function responsiveButton() {
  if (width > 400) {
    // large screen breakpoint
    rect(width * 0.1, width * 0.1, width * 0.3, width * 0.1);
    textSize(width * 0.05);
    text("CLICK ME", width * 0.13, width * 0.17);
  } else {
    // mobile screen breakpoint
    rect(width * 0.1, width * 0.1, width * 0.8, width * 0.1);
    textSize(width * 0.05);
    text("CLICK ME", width * 0.36, width * 0.17);
  }
}
```

Going _all_ the way with "responsive design" isn't 100% necessary for your major
project. The [requirements](/assessments/05-major-project/#requirements) state that your major project
must

> run smoothly in **fullscreen** at the [test URL](/resources/01-faq/#test-url)
> on any canvas size from 1920x1080 (in the CSIT labs) to 2560x1440 (in the PK
> iMac labs) **make sure you test it out in the labs**

So it can't only work on one size screen (so make sure you use `width` and
`height` and not just hard-coded numbers like `1920` or `1080`), but it doesn't
have to work on tiny screens (so you don't necessarily need to do the
"breakpoint" thing described above).

Still, this stuff is really important if you want to publish your work online.
The internet runs on screens of all shapes and sizes, it's estimated that 60% of
all internet traffic is now from mobile devices. If you want all users to be
able to have see your work, responsive design is an important consideration.

## push() and pop()

The p5 drawing model involves calling a bunch of functions to set various
"settings" (colours, lines, transformations, alignment, etc.) which will affect
the shapes that you draw.

As an example, if you're using the "loop a `drawMyObject(obj)` function over a
collection of objects" technique that we've been using a lot in the labs, you've
probably seen something like:

```javascript
function drawMyObject(obj) {
  fill(200);
  noStroke();
  translate(obj.x, obj.y);
  rectMode(CENTER);
  // more drawing code goes here...
}
```

Let's assume that the `drawMyObject(obj)` function doesn't "clean up after
itself", it just leaves the stroke/fill/translate/rectMode settings the way it
set them at the beginning

This will work ok if there's only one type of object in your sketch, because the
`drawMyObject(obj)` settings are the only ones you'll need. However, if there's
another type of object in your sketch (and therefore a
`drawMyOtherObject(otherObj)` function), then you may well need to reset all the
drawing settings at the end of drawing each type of object.

You _could_ do this manually, by saving the previous colour/strokeWeight/etc. to
variables and reset them when you're done. However, a much easier way is to use
the [`push()`](https://p5js.org/reference/#/p5/push) and
[`pop()`](https://p5js.org/reference/#/p5/pop) functions to do this for you
automatically. Check the reference for more info.

Have a look back over the [kaleidoscope](/labs/05-kaleidoscope/) lab for more information.

## Content licences

Whenever you're coding or making anything which includes stuff that other people
have made it's crucial that you only use content with an appropriate licence.
All creative work (including the stuff you make in this course) is automatically
covered by copyright in Australia. Authors can choose to publish their work
under another licence such as [Creative Commons](http://creativecommons.org.au/)
or [Public Domain](https://wiki.creativecommons.org/wiki/Public_domain). The
Creative Commons licences provide a simple, standardised way for individual
creators, companies and institutions to share their work with others on flexible
terms without infringing copyright. The licences allow users to reuse, remix and
share the content legally.

If you wish to use the content (images/audio/text/etc.) of other creaters in
your work you must credit it in your `statement-of-originality.yml` and ensure
that the creator has released it under a licence which allows you to use it in
that way.

There are a number of websites that publish only Creative Commons content. In the Major project you are only permitted to use content from the following sources (unless you create it yourself):

- [Unsplash](https://unsplash.com/) posts images which can be used freely.
- [Freesound](http://freesound.org/) contains free audio files (e.g. sound
effects, background music)
<!-- - [The Newgrounds Audio Portal](https://www.newgrounds.com/audio/) contains
  heaps of background music which can be used under various creative commons
  licences. The licence for each track can be viewed under the "Licensing Terms"
  section in the sidebar. -->

<!-- It's also possible to search google images for Creative Commons content. To do
so, open up google images and enter your search term. Click on "Tools" on the
right side under the search bar; some drop-down menus will appear. Now click on
"Usage Rights" and select one of the options other than "Not filtered by
licence". This will return only results licenced under the selected option. -->

:::info
**Don't forget** that even if you use appropriately licenced content you still
need to credit it in your `statement-of-originality.yml`.
:::

## Extra Tasks

none today! work on your project!
