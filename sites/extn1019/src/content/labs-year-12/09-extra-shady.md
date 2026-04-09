---
title: "Lab 9: Extra Shady"
tagline: "filters, base colours, materials, normals, stroke shaders"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-9
portfolio_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-2
image: ./images/year-12-lab-09.png
---

## Outline

In this lab you will look into the p5.js **special** shader functions to create shaders for:

1. Filters
2. Base Colour
3. Base Material
4. Base Normal
5. Base Stroke

You will also work on developing your response to [Portfolio Item Two](/deliverables-year-12/02-interaction-shaders/)

Fork and Clone [Lab 9 from the GitLab Repository]().

## Intro
p5.js has added new functions from July 2024 that allow individual shaders to be assigned to base colour, material, normal and stroke. Documentation and examples are still a work in progress. 

Filter shaders have been a part of p5.js for longer and have better documentation and a range of examples.

Let's dive into it!

## Filter Shaders

A filter shader is special because:

* it does not require a **vertex shader**
* it is applied through the [**filter function**](https://p5js.org/reference/p5/filter/)
* it is applied to the whole canvas

:::info
**ASIDE:** [Filters in p5.js](https://p5js.org/reference/p5/filter/) change the appearance of the drawn objects across the entire canvas. There are 8 built-in filters. They are: BLUR, DILATE, ERODE, GRAY, INVERT, OPAQUE, POSTERIZE, THRESHOLD. Under the hood, they always use WEBGL mode for processing speed. The name Filter refers to [image filters](https://www.devx.com/terms/image-filter/). Filters are powerful fast way of radically altering the appearance of an image. Filters have been available in image editing programs (P*Shop, Gimp, Inkscape) for many decades. Check out the filters available to you through your favourite image editing program. 
:::

The steps to create a filter shader are:

1. Write the fragment shader for the effect you desire
2. Assign the fragment shader, to a string constant or variable.
3. Call `let fs = createFilterShader(fragmentString);` to create the shader, and assign the result to a variable (in this example `fs`)

To use a filter shader

4. Set any uniforms you have defined for your filter shader
5. Call filter with the filter shader you created: `filter(fs);`

Steps 2,3,4 and 5 are relatively easy. The complexity lies in step 1. Writing and debugging shaders is a difficult process.

It is a good idea to try to find example code. 

### Where are the edges?

Edge detection is a common filter, and the algorithms are well known.

The sketch.js in your code has two filter shader examples, BLUR and EDGE. Follow the demonstration.

:::tip
**THINK:** <br>What are the required outputs for a Fragment Shader?<br>How do you get access to the canvas contents to modify them?<br>What has been *parameterised* through uniforms?<br>What other changes were made to the [ShaderToy source shader](https://www.shadertoy.com/view/sdcSz2) for Edge Detection?<br>What has become *janky* compared with the original?
:::

**DO:** Adapt the code to change colours and thickness of line edge.

## Base Shaders

In p5.js version 1.10 new functions have been created to allow the programmer to access and modify individual shaders for Base Color, Base Material, Base Normal and Base Stroke.

These are used for 3D shape rendering (**NOTE:** base stroke and color also impact 2D shape rendering).

:::tip
**WARNING:** This is an experimental API and behaviour may change with future implmentations.
:::

### Base Color Shader 
The function [`baseColorShader()`](https://p5js.org/reference/p5/baseColorShader/) gets the shader used when no lights or materials are applied to a shape (2D or 3D).

You can then modify the shader through [`baseColorShader().modify()`](https://p5js.org/reference/p5.Shader/modify/) to change the available hooks.

You can find the available hooks to change by calling (and console logging) [`baseColorShader().inspectHooks()`](https://p5js.org/reference/p5.Shader/inspectHooks/)

Modifying a shader **does not** change the shader in place. It returns a copy which has the modifications of the specific hooks you changed.

You need to apply the modifications by calling as follows:

```js
  /* get and modify the colorShader (NOTE - best to do this in setup
                          or on a rare event, not in the draw loop) */
  let colorShader = baseColorShader().modify({
    uniforms: { // add a new uniform
      'float time': () => millis()
    }, // change the texture coordinates
    'vec3 getWorldPosition': `(vec3 pos) {
      pos.y += 20. * sin(time * 0.01 + pos.x * 0.05);
      return pos;
    }`
  });
  background(130); // grey background
  shader(colorShader); // apply the modified color shader
  fill('cyan'); // fill with a color (for the color shader)
  circle(0,0,100); // draw a circle
```

## Base Stroke Shader
The function [`baseStrokeShader()`](https://p5js.org/reference/p5/baseStrokeShader/) gets the shader used when drawing the strokes of shapes, both 2D and 3D - when using WEBGL for 2D.

Like baseColorShader() you can modify the available hooks and add uniforms.

The code for inspecting, modifying and applying is very similar, but the hooks are different for stroke shaders.

Modifying the base stroke shader can add a range of effects to your strokes!

:::tip
**THINK:** Can you modify both color and shader? How would you apply these separate changes?
:::

Watch the provided demonstration of how to modify shaders.

## Base Material Shader
The function [`baseMaterialShader()`](https://p5js.org/reference/p5/baseMaterialShader/) gets the shader used when rendering the material (diffuse and specular) colour of a 3D shape. The material shader responds to lights (unlike color shader) and also impacts how textures are rendered.

Like baseColorShader() you can modify the available hooks and add uniforms.

The code for inspecting, modifying and applying is very similar, but the hooks are different for material shaders.

You can modify multiple shaders (color shader and material shader), but make sure that if you modify vertex positions that you do so for both 
color and material, or otherwise the rendering of the combined output shaders will not align.

## Base Normal Shader
The function [`baseNormalShader()`](https://p5js.org/reference/p5/baseNormalShader/) gets the shader used when rendering the [`normalMaterial()`](https://p5js.org/reference/p5/normalMaterial/) of a 3D shape. 

Normal materials render the colour of a shape based on the direction of the surface normals at each point on a surface.  You can control how shapes rendered using normal material are coloured (and, you can also alter the vertex positions, and surface normals).

Normal Materials **do not mix** with color shader or material shader.

**DO:** Modify some of the base shaders. Try both 2D and 3D shape modifications. What works? What problems do you find?

**DO:** We are finished with the lab content, so it is time to commit your code and push it up to Gitlab.

## Portfolio Item Two
If you haven't already done, please **Fork, Clone and Open** the [template repository for Portfolio Item Two]() right now!

If you haven't already done, spend the next 5 minutes workshopping ideas for the Portfolio Item Theme **Duty of Care**.

You need to have your interpretation of the theme approved by your instructor. Please email your ideas for approval to your instructor.

Add some details about the theme to the `artist-statement.md` file. Stage the changes, and commit them. We want to see regular use of git for this Portfolio Item.  Do not worry if it is not final &mdash; it is important to get ideas down, and to have the history of your ideas tracked for this assessment task.

Workshop ideas for how you might use shaders in your artistic response. Search for shaders using the provided resources. If you find another good resource, please share with everyone via Teams.  Write some notes in your `shaders.md` file.

Workshop ideas for how your sketch may be interactive, and what form of interaction you will use. Think about the affordances. Does your shader need to be interactive? How can you make a shader interactive? Write some notes in your `interaction.md` file.

:::tip
**THINK:** Do you have any questions about the assessment task Portfolio Item Two?  Ask them now. Or ask via Teams, or via email.
:::

**DO:** Remember to commit your changes for Portfolio Item Two and push it up to Gitlab.

## Summary

Congratulations! In this lab you investigated and tried out the new p5.js shader functions to create and modify shaders for:

1. Filters
2. Base Colours
3. Base Materials
4. Base Normals
5. Base Strokes

You also further developed your response to [Portfolio Item Two](/deliverables-year-12/02-interaction-shaders/)

Next class we will look into the use of frame buffers for developing layered effects.
