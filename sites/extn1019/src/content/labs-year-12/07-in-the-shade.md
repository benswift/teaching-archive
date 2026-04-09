---
title: "Lab 7: In the Shade"
tagline: "starting to explore the world of shaders"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-7
image: /images/labs-year-12/year-12-lab-07.png
---

## Outline

In this lab you will:

1. Understand what shaders are and how they are used
2. Understand where to find shaders and how to include them in your project
3. Learn what vertex and fragment shader files are for
4. Start to learn the GLSL shader language and how it is used in p5.js

Fork and Clone [Lab 7 from the GitLab Repository]().

## Intro - What are Shaders?

In p5.js we have created graphics using line, circle, ellipse, box. These commands are implemented to draw pixels in the required shape at the specified location using the specified colour.

These commands run in the browser - using the resources of the CPU of the computer. Modern CPUs are fast. Graphic processing units (GPUs) are faster, have greater graphic processing capabilities, but they have limitations as well.

Shaders enable the programmer to instruct the GPU to take on the load of calculating the graphic drawing: enabling faster processing (faster graphics also means more responsive interaction), and additional graphic rendering effects. Shaders require an additional set of files/programs (2 per shader) to implement and run within a sketch.

Note: shaders are also complex, use a different programming language to Javascript, and can be difficult to debug.

Shaders can be used in 2D graphics and 3D graphics! Either way, you must use WEBGL if you want to use shaders.

## Shader Resources
The simplest and easiest way to use shaders is to find some shader resources and add them to your project.

WEBGL shaders are written in the GLSL shader language.

P5.js requires 2 files/programs per shader: a vertex shader and a fragment shader. When searching for GLSL shaders you may find a shader which has the vertex and fragment shader in a single file: this must be separated into 2 files (vertex and fragment) if you want to use it in your sketch.

Some good shader resources can be found at:
* [p5.js shaders](https://itp-xstory.github.io/p5js-shaders/#/)
* [Adam Ferris' p5.js Shader Repo](https://github.com/aferriss/p5jsShaderExamples)
* [Shadertoy](https://www.shadertoy.com/)
* [The Book of Shaders](https://thebookofshaders.com/)
* [WebGL shader examples by Javier Gracia Carpio](https://webgl-shaders.com/)

## How to Use a Shader

Follow along in the demonstration:

1. download shader files to your assets folder
2. load the shader files in the preload function
3. pass any needed information to the shader
4. instruct p5.js to use the shader when drawing something
5. run and enjoy

### loadShader()
The function [`loadShader()`](https://p5js.org/reference/p5/loadShader/) creates a shader by loading the content of 2 separate shader files: one for the vertex shader and one for the fragment shader.

```js
// Preloading a Shader
let funkyShader;

function preload() {
  // load the shader file
  funkyShader = loadShader('/images/funky-shader.vert', '/images/funky-shader.frag');
}
```

### createShader()
The function [`createShader()`](https://p5js.org/reference/p5/createShader/) creates a shader through defining the vertex shader and fragment shader as String variables within the JavaScript sketch.

```js
// Creating a Shader
let funkyShader;
// Create a string with the vertex shader program.
// The vertex shader is called for each vertex.
let vertSrc = `
precision highp float;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}
`;

// Create a string with the fragment shader program.
// The fragment shader is called for each pixel.
let fragSrc = `
precision highp float;
uniform vec2 mxy; // the caller should pass the [mouseX, mouseY] position as an array 

void main() {
  // Set each pixel's RGBA value to a colour determined by the mouse position (vec2 mxy).
  gl_FragColor = vec4((mxy.x+mxy.y)/2.0, mxy.x, mxy.y, 1.0);
}
`;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Create a p5.Shader object.
  funkyShader = createShader(vertSrc, fragSrc);
}
```

### Applying a 2D shader

```js
// Applying a Shader 2D
function draw() {
  background(0);
  // pass any required data to the shader
  funkyShader.setUniform("mxy",[mouseX/width, mouseY/height]);

  // shader() sets the active shader.  It is used what is drawn next (until no shader)
  shader(funkyShader);
  // apply the shader to a rectangle 
  rect(0,0,width,height);
}
```

### Applying a 3D shader

```js
let shaderTexture;

// Setting up a 3D Shader
// Create a new canvas to match the browser size using WEBGL for rendering
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // WEBGL needed for shaders
    // initialize the createGraphics layers (for the shader texture)
    shaderTexture = createGraphics(width, height, WEBGL);
    shaderTexture.noStroke();
}

// Applying a Shader 3D
function draw() {
    // setup the shader and shader texture
    // send information to the shader
    shaderTexture.shader(funkyShader);
    funkyShader.setUniform("u_time", millis()/1000);
    // draw the shader (not on the screen, but in the texture layer)
    shaderTexture.rect(-width/2, -height/2, width, height);  

    background(0); // a black background 
    // define which texture we will use for rendering our 3D surfaces
    texture(shaderTexture);

    ambientLight(100, 100, 100);  // the lightness of the world
    pointLight(180, 180, 180, 3*width/4, height / 4, 400);  // like a torch

    push(); // save our transform state
    translate(0, 300, 0); // move down the screen
    rotateX(PI / 2); // rotate 1/4 of a circle around X-axis
    ambientMaterial(250, 150, 200);  // create a material which is "flat" but responds to light
    plane(1000, 1000);  // draw a 2D plane in 3D space of dimensions 1000 * 1000 units
    pop();  // restore transforms to state prior to push()

    translate(mouseX / 2 - width / 4, mouseY / 2 - height / 4, -20);
    rotateZ(frameCount * 0.02); // rotate around the Z-axis with speed determined by frameCount
    rotateY(frameCount * 0.004);
    //specularMaterial(100, 200, 200); // create a shiny material with a colour
    shininess(30); // define the level of glossiness of the material
    torus(200, 40, 36, 20); // draw a torus(outside radius, tube radius, detail in X, detail in Y)
}
```

## Vertex Shader
Vertex shaders define how the spatial components of the output will be rendered. They transform coordinate systems from the external application (in this case our p5.js sketch is the ***"external"*** application from the perspective of the shader) to normalized coordinate systems used in the GLSL program, and vice-versa. The spatial coordinate systems can be 2D or 3D. In a 2D context &mdash; vertex shaders convert from the canvas or shape coordinates to GLSL normalised coordinates. In a 3D context &mdash; vertex shaders transform 3D coordinates into different 3D coordinates: mapping from geometry to shader coordinates. 

### Normalised coordinates
In shader coordinate systems the minimum value is $$ -1.0 $$, and the maximum value is $$ 1.0 $$.  In a cartesian plane sense $$\left(0.0, 0.0\right)$$
is the centre of the space, $$\left(1.0, 1.0\right)$$ is upper right, and $$\left(-1.0, -1.0\right)$$ is lower left.

Values are floating point numbers. Even when working with 2D coordinate systems, shaders always use 3D coordinates for vertices. We can also use the vertex shader to do some basic processing on the vertex attributes. We can manipulate/distort the coordinates.

```glsl
// position info for gl_Position
attribute vec3 aPosition;

// texture coordinates
attribute vec2 aTexCoord;

// automatic uniform parameters for the Model View Matrix and Projection Matrix
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

// the varying variable will pass the texture coordinate to our fragment shader
varying vec2 vTexCoord;

void main() {
  // Apply the camera transform
  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);

  // Tell WebGL where the vertex goes
  gl_Position = uProjectionMatrix * viewModelPosition;  

  // Pass along data to the fragment shader
  vTexCoord = aTexCoord;
}
```

An **`attribute`** enables us to send and receive vertex coordinates between the shader and the p5.js sketch. It is a **`vec3`** - it has 3 dimensions [x,y,z]. p5.js sends vertex information automatically from `rect()` or `vertex()`.

**`varying`** means that the information acts as an automatic parameter (shared data) between the Vertex shader and the Fragment shader

The `void main()` function comes from the C-language family. `void` means it does not return a value. `main()` means that this is the main function, called once when we invoke the shader.

Vertex shaders require that `gl_Position` is assigned a value. Usually this is the last thing we do in the vertex shader. It is a proxy return value! This defines our map between the input aPosition and the shader coordinates.

## Fragment Shader
Fragment shader determine how pixels (or, more correctly - positions on surfaces) are coloured. They require the vertex positions from the vertex shader, and a set of instructions about how to colour/shade each position at and between vertices.

Fragment shaders **must** set a value to **`gl_FragColor`**. This is the proxy return value for a fragment shader, and is usually the last thing we do in the fragment shader.

```glsl
precision mediump float;

varying vec2 vTexCoord;

void main() {
  // now because of the varying vTexCoord, we can access the current texture coordinate
  vec2 uv = vTexCoord;

  // and now these coordinates are assigned to the color output of the shader
  gl_FragColor = vec4(uv,1.0,1.0);
}
```

**`precision`** determines the level of precision in calculating and applying textures. It can be `lowp`, `mediump` or `highp`.

**`varying`** means that the information acts as an automatic parameter (shared data) between the Vertex shader and the Fragment shader

## GLSL
We have already seen some of [GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) looking at vertex shaders and fragment shaders above.

**GLSL** stands for Open**GL** **S**hading **L**anguage.

It is a high level shading language with a syntax based on the [C programming language](https://en.wikipedia.org/wiki/C_(programming_language)).

Technically, WebGL uses a subset of GLSL known as GLSL ES (embedded systems).

WebGL version 2.0 uses GLSL ES v 3.00.6 (based on GLSL 3.30). The latest version of GLSL is 4.60.5

The **C Programming Language** is strongly typed, which means that every variable is declared as containing a specific type of data (or object).

The most relevant types for us are:
| Type | Description |
| :--- | :--- |
| `float` | a number with decimal points and an exponent |
| `int` | whole numbers, 0 and  negative whole numbers |
| `bool` | a boolean value |
| `vec2(x,y)` | a Vector of 2 floats |
| `vec3(x,y,z)` | a Vector of 3 floats |
| `vec4(r,g,b,a)` | a Vector of 4 floats |
| `mat2(x0, y0, x1, y1)` | a 2*2 matrix |
| `sampler2D` | a reference to a texture object |

Every statement **must** be separated by a semi-colon (end of line is acceptable in Javascript - not in C or GLSL)

`int` and `float` cannot be used interchangeably: you must explicitly convert the types.

In the examples above we have seen how **`attribute`** and **`varying`** are used to enable some automatic transfer of data between the p5.js sketch (for attribute) and between vertex and fragment shaders (for varying).

What if you want to pass more information - for additional control. You might want to use the passing of time to control a texture. Or you might want to use mouse position data. Or pass any other information.

For this purpose we declare a variable as `uniform`. The **`uniform`** qualifier is used to declare global variables whose values are the same across the entire primitive being processed. All uniform variables are read-only. This unchanging nature of uniforms applies within the Shader. Uniforms can receive new information through `myShader.setUniform(uniform_variable_name, value)` in your sketch.

You must, of course, send the same shape of data as required by the uniform variable declaration.

Remember to commit your code and push it up to Gitlab.

## Summary

Congratulations! In this lab you:

1. Learned what shaders are and how they are used
2. Found some shaders and how to include them in your project
3. Learned the difference between vertex and fragment shader files
4. Started to experiment with the GLSL shader language

