---
title: "Lab 10: Layers Upon Layers"
tagline: "constructing effects using layered graphics and compositional techniques"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-10
portfolio_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-2
image: /images/labs-year-12/year-12-lab-10.png
---

## Outline

In this lab you will investigate layered composition using p5.Graphics layers and p5.FrameBuffer layers (for 3D, Shaders and GPU speed).

You will:

* create graphics layers / frame buffers
* render graphics to layers / frame buffers
* compile the resulting graphics into an output layer

Fork and Clone [Lab 10 from the GitLab Repository]().

## Graphics Layers

There are many many ways to think about, and to use tools, to create graphical output.

If you are familiar with image editing programs, you many be familiar with the concept of layers. You can create layers which have different content and that blend together in different ways.

You are already familiar with the concept of colours being defined using red, green, blue and alpha: with multiple layers of graphics, transparency is vital (if you have a layer with NO transparency it will obscure all ***lower*** layers).

The p5.js object underlying our graphics layer is the [p5.Graphics object](https://p5js.org/reference/p5/p5.Graphics/)

### Create Graphics Layer

To create and use a graphics layer you need a variable to store the graphics layer in, and a call to `createGraphics()`.

You would *usually* create your graphics layers in `function setup()`, but you can run this command anytime (after `preload()`).

```js

let graphicsLayer;

function setup() {
    createCanvas(windowWidth, windowHeight);
    graphicsLayer = createGraphics(windowWidth, windowHeight);
}
```

You may notice that createGraphics() and createCanvas() kind of look the same. createCanvas() creates a graphics layer that is also drawn directly to the webpage **canvas** element.

The syntax for `createGraphics()` is:

```js
createGraphics(width, height, [renderer], [canvas])
```

Where:

| Parameter | Description |
| :---      | :---      |
| width | The width of the graphics layer (in pixelDensity units) |
| height | the height of the graphics layer (in pixelDensity units) |
| *renderer* | P2D (default) or WEBGL |
| *canvas* | If supplied, the id of an existing html canvas element on the webpage |

Note: graphics layers created through createGraphics may have different pixel densities (and thus render differently) to the base canvas.  To avoid this you can set the pixel density via: `pixelDensity(1);`.

### Draw to Graphics Layer

You can draw to a graphics layer created with createGraphics using **ANY** of the p5.js drawing commands. **HOWEVER** you have to tell p5.js to draw to your desired graphics layer as follows:

```js
function draw() {
    // ... other code prior
    // DRAW A CIRCLE TO GRAPHICS LAYER
    graphicsLayer.fill(myColour); // set the fill colour for graphicsLayer drawing
    graphicsLayer.stroke(myStrokeColour); // set the stroke colour for graphicsLayer drawing
    graphicsLayer.strokeWeight(myStrokeWeight); // set the stroke weight for graphicsLayer drawing
    graphicsLayer.circle(x,y,r); // draw a circle at x,y with radius r to graphicsLayer
    // ... other code after
}
```

It is important to consider how you want your graphics to work with multiple layers &mdash; in terms of what the alpha channel is doing.

:::info
**NOTE:** if you do not call `graphicsLayer.background(clr)` then the background colour is (0,0,0,0) &mdash; it is transparent in the alpha channel for that graphics layer.
:::

### Compile Layers into Output Layer

We *generally* want to draw the graphics layer(s) we created to the canvas eventually.

To draw the graphics layer to the main canvas we call:

```js
image(graphicsLayer,x,y,w,h);
```

If you have multiple layers:

```js
image(graphicsLayer0,x,y,w,h);
image(graphicsLayer1,x,y,w,h);
image(graphicsLayer2,x,y,w,h); // etc.
```

You can choose to draw on the canvas **after** all of the graphics layers, or **before** all of the graphics layers (or event between graphics layers). Choose a strategy that works for you.

### Blending

In general, non-transparent pixels will obscure any pixels below. Fully transparent pixels will allow all underlying pixels to be rendered.  This is because the default blending is blendMode **BLEND**. Partially transparent pixels will be blended with the underlying layers.

You can create different effects by changing the blend mode between layers using the function [`blendMode()`](https://p5js.org/reference/p5/blendMode/).

I encourage you to experiment with blend modes *again*. 

### Possibilities

Daniel Shiffman in presenting createGraphics shows how you can create multiple copies of a graphics layer, you can tile these copies, you can tint them, you can translate() and rotate() them. See [Additional Resources](#additional-resources) below.

## FrameBuffer Layers for Shaders

WEBGL has a *similar but different* concept to graphics called [**FrameBuffers**](https://developer.mozilla.org/en-US/docs/Web/API/WebGLFramebuffer)

[p5.js FrameBuffers](https://p5js.org/reference/p5/createFramebuffer/) are like p5.Graphics objects in terms of drawing, layering and compositing, but are different in that they:

* work on the GPU, not the CPU
* are much faster than p5.Graphics
* contain additional information, such as depth
* only work in WEBGL mode

The benefits of speed, and the additional information available, make them a worthwhile addition to your toolkit of skills.

The p5.js object underlying our frameBuffer layer is the [p5.FrameBuffer object](https://p5js.org/reference/p5/p5.Framebuffer/)

### Creating FrameBuffers

Similar to graphics layers:

```js
let frameBufferLayer;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // must use WEBGL
    frameBufferLayer = createFrameBuffer(); // automatically defaults to canvas size
}
```

You can create multiple frameBuffers. While they can be sized directly, it is simplest to use the same size as your canvas.

You must create them after your canvas!

### Drawing to FrameBuffers

This is a little different to p5.Graphics objects.

We tell the frameBuffer to ***begin*** drawing and to ***end*** drawing.

```js
function draw() {
    // ... code prior
    frameBufferLayer.begin(); // any drawing instructions after this will draw onto the frameBufferLayer, not onto the canvas
    push();
    translate(mouseX - width/2, mouseY - height/2, -200);
    sphere(radius);
    pop();
    frameBufferLayer.end(); // resume drawing to the main canvas
    // ... code after
}
```

### Compositing Frame Buffers

After you have drawn to a frame buffer you can use it as:

* input to a shader

```js
myShader.setUniform('tex0', frameBufferLayer.color);
myShader.setUniform('depth', frameBufferLayer.depth);
```

* as a texture on a 3D surface

```js
texture(frameBufferLayer);
```

* as an `image()` &mdash; same as for p5.Graphics

```js
image(frameBufferLayer,x,y,w,h); // remember (0,0) is the centre of the frame for WEBGL
```

### Shady Ideas

Some shaders take a graphical image as input and modify the content of the graphical layer to create effects such as:

* blurring
* camera lens bloom
* vignette
* lens distortion
* edge detection

If you investigate the [**filters** available in many graphics editing programs](https://docs.gimp.org/3.0/en/filters.html), most (if not all, and more) of these are available as shaders.

In the [p5.js frameBuffer tutorial](https://p5js.org/tutorials/layered-rendering-with-framebuffers/) Pagurek and Ferris explain how to use frameBuffering for video feedback using 2 frameBuffers which are swapped every frame.

### Going deeper

The ability to access depth information enables you to create a variety of effects.

* fog / haze that gradually obscures 3D elements that are further from the camera
* depth of field: blurring objects that are closer or further than the desired focal plane &mdash; proving a photographic or cinematographic look
* coloring / lighting based on depth
 

**DO:** Remember to commit your changes for this lab, and for Portfolio Item Two and push them up to Gitlab.

## Summary

In this lab you investigated layered composition using p5.Graphics (2D) and p5.FrameBuffer (3D + shaders).

You:

* created graphics layers / frame buffers
* rendered graphics to layers / frame buffers
* compiled the resulting graphics into an output layer
* marvelled at what you can achieve

## Additional Resources {#additional-resources}

Check out:

* [Daniel Shiffman's Coding Train Episode on createGraphics()](https://codingtrain.github.io/website-archive/Tutorials/9-additional-topics/9.23-create-graphics.html)
* [Another Daniel Shiffman createGraphics() tutorial](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/6-createGraphics)
* [p5.js reference on createGraphics()](https://p5js.org/reference/p5/createGraphics/)
* [p5.js example about createGraphics()](https://p5js.org/examples/advanced-canvas-rendering-create-graphics/)
* [p5.js createFrameBuffer()](https://p5js.org/reference/p5/createFramebuffer/)
* [p5.js Frame Buffer tutorial](https://p5js.org/tutorials/layered-rendering-with-framebuffers/)
* [p5.js Frame Buffer 3D Depth Blur tutorial](https://p5js.org/examples/3d-framebuffer-blur/)

