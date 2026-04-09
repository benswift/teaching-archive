---
title: "Lab 8: Out of the Shade(r)"
tagline: "locating and translating shaders for use in p5.js"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-8
image: ./images/year-12-lab-08.png
---

## Outline

In this lab you will:

1. Find shaders from reliable sources
2. Adapt them to p5.js
3. Experiment with changing aspects of the shader
4. Start developing ideas for Portfolio Item 2

Fork and Clone [Lab 8 from the GitLab Repository]().

## Intro
There are a range of types of WebGL shaders available on the web. Some require little effort to use, and some require a little bit more.

The types we will be looking at are:

* p5.js Shaders
* Processing Shaders
* Shadertoy Shaders
* Other WebGL Shaders

A word of caution: many shaders are incredibly complex. Some are intended for use as a complete canvas on their own and may not be easily adapted to project onto 3D geometry, nor interact with the lights you establish in a 3D world. Determining how you want to incorporate shaders into your project is not a simple process. The benefits are the processing speed and rendering capabilities of GLSL. The benefits can be worth the effort, with many beautiful, interactive and highly engaging outputs possible. 

## Finding Shaders

Here are some suggested places to find shader examples for your project.

### p5.js Shaders
Some shaders are already available for p5.js, and some good resources can be found at:
* [p5.js shaders](https://itp-xstory.github.io/p5js-shaders/#/)
* [Adam Ferris' p5.js Shader Repo](https://github.com/aferriss/p5jsShaderExamples)
* [p5.js examples](https://p5js.org/examples/)
* [p5.js showcase](https://showcase.p5js.org/#/)
* [The Book of Shaders](https://thebookofshaders.com/)

### Processing Shaders
p5.js is a subproject of [Processing](https://processing.org/). Processing also [enables the use of shaders](https://processing.org/reference/PShader.html). Shaders are a little different in Processing &mdash; but can be easily adapted for use in p5.js.

Sources for Processing Shaders include:
* [Open Processing](https://openprocessing.org/discover/#/shader)
* [Gene Kogan's shader examples](https://genekogan.com/works/processing-shader-examples/) and [repository](https://github.com/genekogan/Processing-Shader-Examples)
*  [Greg Borenstein's Processing Shader Examples](https://atduskgreg.github.io/Processing-Shader-Examples/) and [repository](https://github.com/atduskgreg/Processing-Shader-Examples)
* [The Book of Shaders](https://thebookofshaders.com/) is also a resource for Processing.

### Shadertoy Shaders
Shadertoy is a website which enables shaders written in GLSL-ES/WebGL to be displayed and discovered by a community of creative coders and shader developers.

As the shaders are written in WebGL they can be reasonably simply ported to p5.js.

* [Shadertoy](https://www.shadertoy.com/) is the official site and contains many many shaders
* [Shadertoy Unofficial](https://shadertoyunofficial.wordpress.com/2023/10/27/galleries-and-collections/) by Fabrice Neyret is a great resource for understanding Shadertoy shaders, and finding examples.

### Other WebGL Shaders
WebGL is not limited to p5.js, Processing and Shadertoy. There are many, many examples of WebGL GLSL shaders. It is a wilderness.

I encourage you to explore and discover.

One resource previously mentioned is:
* [WebGL shader examples by Javier Gracia Carpio](https://webgl-shaders.com/)

Suggestions for implementing shaders are provided below.

## Adapting Shaders

They way shaders are adapted depends on the type of shader.

### p5.js Shaders

It should simply be a matter of "plug and play". 
1. Download the `.vert` and `.frag` files to your project folder. 
2. Load them into your code in the `preload()` function using `theShader = loadShader("filepath.vert", "filepath.frag");`
3. Apply the shader as shown in Lab 7.

:::info
**NOTE:** p5.js has changed over time, and the method of implementing a shader has also changed. Shaders may require changes. 
Ask for help if it doesn't work straight away, or change the version of p5.js to match your found code.
:::

What could go wrong?
* shader is written for an earlier unsupported version of WebGL / p5.js / browser
* shader code does not work as specified
* Vertex shader is not intended for use in 3D (or 2D)
* You do not set the required uniform parameters
* The shader is not *pushed* to the geometry (often we use a `rect()` to push the shader)

### Processing Shaders

Processing uses the same foundations for shaders as p5.js. The code is **almost** identical. However there is one significant difference.

Processing has an automatic vertex shader. Only the fragment shader is specified. In a Processing Shader, vertex data can be obtained through glFragCoord.xy. For example:

```
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;
```

Some minor differences include:

| Processing Shader | p5.js Shader |
| :--- | :--- |
| requires `#define PROCESSING_COLOR_SHADER` at the top of the shader file | no `#define` required |
| no precision definition | requires a specification of floating point precision, <br>such as `precision mediump float;` |
| automatic vertex shader | vertex shader required.<br>Must set a value to vec4 variable `gl_Position`, for example:<br>`gl_Position = pos;` |
| automatic vertex shader | Sharing of data between vertex shader and fragment shader via a `varying` variable declaration. For example:<br>`varying vec2 vTexCoord;` |
| no need to declare `attribute` variables | data is passed from p5.js to shader via use of `attribute` declared variables. For example:<br>`attribute vec3 aPosition;`<br>`// texture coordinates`<br>`attribute vec2 aTexCoord;` | 
| `uniform` declares parameters to fragment shader | `uniform` declares parameters to fragment shader |
| fragment shader must set a value to variable `gl_FragColor` | fragment shader must set a value to variable `gl_FragColor`|

Once you have implemented these changes, your Processing shader should work in p5.js.

Some of the same caveats apply:
* Which version of p5.Shader are you working with?
* Which features/language changes have been implemented in WebGL/GLSL-ES that impact on the shader?
* Are there other `automatic` parameters which are need to be explicitly passed?

### Shadertoy Shaders

Shadertoy uses WebGL, or GLSL-ES. The syntax is largely similar to the fragment shader of p5.js. 

Like Processing, there is no need for a separate vertex shader file &mdash; the vertex shader is [**handled for you**](https://itp-xstory.github.io/p5js-shaders/#/./docs/examples/shadertoy) in the words of Casey Conchinha and Louise Louise Lessél.

Differences in code:

| Shadertoy | p5.js Shader |
| :--- | :--- |
| Automatic handling of vertex shader<br>This also means that `attribute` and `varying` variables are not needed. This is the same as for a *Processing* shader. | specific vertex shader file required |
| no precision definition | requires a specification of floating point precision, <br>such as `precision mediump float;` |
| Shadertoy has built-in uniforms and a naming standard: `iUniform` | p5.js can pass any data as uniform. Convention names these as `u_uniform` |
| iUniforms are implicit | uniforms need to be declared and set |
| Vertex Output: `fragCoord` | Vertex Output: `gl_FragCoord` |
| Fragment Output: `fragColor` | Fragment Output: `gl_FragColor` |
| Definition of `main`<br>`void mainImage(out vec4 fragColor, in vec2 fragCoord)` | Definition of `main`<br>`void main()` |

It is **vital** that you understand which `iUniform` variables are available for you to use. Of course &mdash; you can name your own uniforms and pass in ny data you wish from p5.js. But &mdash; your code will not work the same unless you pass in the required/expected data from p5.js.

Here are the common `iUniform` variables of Shadertoy:

| Input Uniform | Description |
| :--- | :--- |
| `uniform vec3 iResolution;` | for window and buffers.<br> .x, .y is the width and height,<br>.z is the pixel ratio, but is always set to 1.0.<br>Values are expected to be in the range -1 to 1, with 0,0 the centre of the image space.<br>In order to ensure that the image is correctly scaled, it is advisable to:<br>`vec2 uv = (2.*fragCoord-iResolution.xy ) / iResolution.y ;`  |
| `uniform float iTime;` | This is intended to represent the seconds(+fracs) since the shader (re)started.<br> You can set this using:<br>`theShader.setUniform("iTime", millis()/1000.0);` |
| `uniform float iTimeDelta;` | duration since the previous frame, again in seconds. |
| `uniform int iFrame;` | frames since the shader started |
| `uniform float iChannelTime[4];` | current time in playback of video or sound. There are 4 possible source inputs. |
| `uniform float iFrameRate` | average FPS of shader rendering |
| `uniform vec4 iDate` | year-1, month-1, day, seconds(+fractions) since midnight in timezone of browser |
| `uniform vec4 iMouse;` | .xy: last mouse click or current mouse drag position<br>.zw: used for events. Read [this](https://shadertoyunofficial.wordpress.com/2016/07/20/special-shadertoy-features/) for details |
| `uniform float iSampleRate;` | The sampling rate for audio input. |
| `uniform vec3 iChannelResolution[4];` | for texture input of any type. Notes for iResolution apply. |
| `uniform sampler2D iChanneln;` | Shadertoy defines the type of this as samplerXX &mdash; so other types of sampler may be permitted. But sampler2D is the most common type. Again, multiple channels are permitted, but the user interface of Shadertoy implicitly limits this to 4 channels. This is where you attach an image, video file, audio file, or *shader* as an input you can use for your shader.  |

Not **all** Shadertoy shaders may be appropriate for p5.js. There are audio output shaders, and VR output shaders, which will present an additional level of challenge, and, obviously, cannot be simply mapped onto 3D geometry.

Follow the example given, trying the steps to see what is required and how it all works.

### Other Shaders

We cannot provide a guide for all WebGL shader variations. But, be brave, life is joyous!

You need to note:

* p5.js requires vertex shaders (and the associated `attribute`s and `varying` variables to share data between vertex and fragment shader). Most WebGL shaders you find will not use this paradigm. But they will need to establish vertex coordinates and texture coordinates &mdash; so look out for these.
* p5.js uses `gl_FragCoord` and `gl_FragColor` for output. You should look for how the WebGL shader sets FragCoord and FragColor and adapt accordingly.
* p5.js explicitly passes `uniform` values. Only `attribute` variables are automatic/implicit. If there is a variable which is used, but not defined anywhere are set with a value, it is probably some sort of automatic/implicit value.

## Experimenting with Shaders

Values can be changed &mdash; any fixed values can be modified. You can replace these with values defined by uniform variables &mdash; to pass in data from your p5.js sketch. You can drive values using interaction data (mouse, keyboard) or other naturally varying data (time, frame, timedelta, framerate).

You can use sampler2D to bring in images and video to use as data to transform.

You can use audio to drive textures!

You can use web camera input as a video source.

You can combine shaders. Shadertoy has a neat model of enabling shader output to be input into another shader.

Blender 3D's Shader editor uses the concept of shader nodes to construct complex shaders from a range of source shaders. It might be good to watch a few shader tutorials to understand what can be combined and how they fit together. Most of Blender's capabilities can be replicated using WebGL shaders.

### Shady Ideas

**Bump it up**: Bump mapping displaces surface normals to gve the appearance of a bumpy or rippled or uneven surface. This can be highly effective in creating complex looking surfaces without the need to have an incredibly high number of vertices (high vertex count can slow down rendering)

**Obscured by Clouds**: Clouds and fog pose a number of challenges. They are partially transparent or translucent, and they can have wispy edges.

**All at Sea**: Water and fluids pose a range of challenges. Light is reflected (defined by angles) and refracted (defined by the refractive index) by light transmissive fluids (incl. water). Water also moves in amazing and strange ways.

**Self Similarity**: Fractal objects are self-similar across a range of scales. The "similarity" means that there are differences &mdash; and this different/same nature gives rise to incredible complexity and beauty.  Many natural objects have a fractal aspect.

**The valley of shadows**: 3D shapes which are lit using fast algorithms (viable for p5.js) do not cast shadows, or reflect light accurately. What can shaders provide in terms of more realistic lighting &mdash; with shadows and reflections?

**Below the surface**: Surfaces are complex in the way they interact with light. Sub-surface scattering is a complex process where light bounces around near the surface of an object before being absorbed or transmitted. This subtle behaviour is important to replicate for realism.

**React diffusely**: Reaction diffusion. Look it up.

**Automate those cells**: Cellular automata &mdash; faster on a GPU.

Remember to commit your code and push it up to Gitlab.

## Summary

Congratulations! In this lab you:

1. Found some shaders
2. Adapted the shaders for use in p5.js
3. Started experimenting with changing aspects of the shader
4. Began to develop ideas for Portfolio Item 2
