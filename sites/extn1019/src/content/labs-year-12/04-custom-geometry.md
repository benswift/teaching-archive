---
title: "Lab 4: Custom Geometry"
tagline: "build your own 3D shapes"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-lab-4
image: ./images/year-12-lab-04.png
---

## Outline

In this lab you will:

1. Understand the components of 3D geometry
2. Understand how to create geometry from 3D primitive components
3. Learn how to create geometry from vertices
4. Understand how to define and use **uv** coordinates for texturing
5. Create your own unique 3D objects, and apply materials and textures to these

## Introduction

So far, we have created geometry through:

1. Using 3D primitive objects (plane, box, sphere, cone, torus, etc.)
2. Importing existing 3D models from other programs

Did you know you can also create your own geometry from existing objects and from vertices?

As you work through the lab, it'll be helpful to have the [p5.js 3D Shape references](https://p5js.org/reference/#Shape)
open in a new tab so you can refer to it easily.

:::info
**NOTE:** When you use models imported from other systems, you need to be aware of the sizes (how big is the model in units in the original system), the handedness, and the fact that Y points down. You will need to scale and reflect or rotate your imported model to match p5.js.
:::

:::tip
**REMINDER:** Have you chosen a research topic for your project? Have you forked and cloned the template repository for the project?
:::

**DO:** Fork, Clone and open the [template repository for lab 4]().

## Components of 3D Geometry

### Vertex / Vertices

A vertex is a point in 3D space $$ \left( x, y, z \right) $$. Not just any point, but a specific point at the end of an edge.

Technically, a vertex is defined at any point where 2 or more edges, lines, or curves intersect.

Each edge is defined by 2 [vertices](https://p5js.org/reference/p5.Geometry/vertices/).

### Edge

An edge is a line segment (or a Vector, _or sometimes a curve_) connecting 2 vertices.

Edges also delineate faces. Three or more connected edges define a face. Connected edges share 1 vertex.

### Face

A [face](https://p5js.org/reference/p5.Geometry/faces/) is a planar surface in 3D space delineated by a number of connected edges. Often, for efficiency, the number of edges that define a face is set at 3 &mdash; that way we can optimise our drawing algorithms for triangular faces.

Faces do not exist in isolation. Joined faces (faces which share an edge) form a 3D shape.

A cube has 6 faces, all of them square, with the same length edge.

:::tip
**THINK:** How many edges does a cube have? How many vertices? Is there a relationship between the number of faces, edges and vertices for a 3D shape?<br>If you wanted to use triangular faces, what is the minimum number of triangular faces needed to draw a cube?
:::

### Normals / Vertex Normals

A [**_normal_**](<https://en.wikipedia.org/wiki/Normal_(geometry)>) is a vector that indicates a direction which is perpendicular [*at right angle to*] a given object.

Vertices, as 3D points, have no direction which could indicate "perpendicular to". But, vertices, as shared points between edges and faces, do have a perpendicular direction. In fact, they have 2 perpendicular directions. In computer graphics, we use one of these directions to indicate the orientation of the **outside** surface to a light source when calculating shading.

p5.Geometry objects have [vertex normals](https://p5js.org/reference/p5.Geometry/vertexNormals/) for vertices.

There are many algorithms for calculating vertex normals, but we can just ask [p5.js to `calculateNormals()`](https://p5js.org/reference/p5.Geometry/vertexNormals/) for our custom geometries.

## Geometry from Objects

p5.js has a number of ways to create custom geometries.

The first we will look at creates new geometry from existing geometry using [`beginGeometry()`](https://p5js.org/reference/p5/beginGeometry/) and [`endGeometry()`](https://p5js.org/reference/p5/endGeometry/).

The example given on the p5.js reference page looks like this:

```js
let arrow3D; // for holding our custom geometry
beginGeometry(); // start building our custom geometry

// Add shapes to create an arrow using a cylinder and a cone
push(); // save transform state
cone(10); // add a cone, radius 10
translate(0, -10, 0); // move up 10 in y
cylinder(3, 20); // add a cylinder, radius 3, length 20
pop(); // restore transform state

// Finish building the p5.Geometry object and save it in a variable
arrow3D = endGeometry();
```

:::info
**NOTE:** inside the `beginGeometry()` and `endGeometry()` you issue commands to **_draw_** a 3D shape.
But the shape is not drawn at that time. Instead &mdash; the commands are saved in an object, and are later used to draw the object (see below).
The important thing to consider are the relative positions and sizes of the parts of a 3D shape when constructing it.
It might help you to draw your object first.
:::

Once you have created your geometry, you can render it _(draw it)_ using the command:

```js
model(myArrow);
```

:::tip
**THINK:** What can you add to a custom geometry using [`beginGeometry()`](https://p5js.org/reference/p5/beginGeometry/) and [`endGeometry()`](https://p5js.org/reference/p5/endGeometry/)?<br>
This can be a research or practical task. You can definitely add built-in shapes such as cube, cone, cylinder, torus.<br>
Can you add in an externally created 3D model _[such as Suzanne]_, and combine this with built-in shapes?<br>
Can you include custom geometry inside another custom geometry?
:::

#### Material Thinking

You can apply materials and textures to your geometry during geometry creation.

```js
beginGeometry();
fill(desiredFill);
specularColor(desiredSpecular);
shininess(desiredShiny);
// continue with the creation of the geometry
```

:::tip
**THINK:** What if you want to apply a material to a custom geometry shape after you have created it?<br>
What if you want to combine materials applied during construction with materials defined when rendering? What are the limits and boundaries?
:::

**DO:** Create your own custom geometry shape. Then add a number of them to a scene.<br>
Apply different transformations over time for each of the objects.

## Alternative Method

The second method for creating custom geometry is to use the function [`buildGeometry()`](https://p5js.org/reference/p5/buildGeometry/).

buildGeometry takes a function as a parameter. The function include the commands to define the geometry. It does not require the `beginGeometry()` and `endGeometry()` methods.

Apart from that it is very similar.

```js
let my3DArrow = buildGeometry(arrow3D); // for holding our custom geometry

function arrow3D() {
  // start building our custom geometry

  // Add shapes to create an arrow using a cylinder and a cone
  push(); // save transform state
  cone(10); // add a cone, radius 10
  translate(0, -10, 0); // move up 10 in y
  cylinder(3, 20); // add a cylinder, radius 3, length 20
  pop(); // restore transform state

  // Finish building the p5.Geometry object and save it in a variable
}

// to draw the arrow
model(my3DArrow);
```

:::info
**NOTE:** Although very similar, buildGeometry() does not allow for parameters to be passed to the callback function.<br>
This removes some flexibility. Materials do not appear to be passed through to the built geometry.
:::

## Geometry from Vertices

The third method for creating custom geometry is to create a list of vertices for your object.

The commands to do this are found in the sketch sketch-wavy.js.

```js
let w = 500;
let h = 500;
let geometry = new p5.Geometry(detailX, detailY, function () {
  // these nested for loops create a simple grid of vertices
  // NOTE within this function, the variable this. refers to the instance of the p5.Geometry object we are creating
  for (let x = 0; x <= detailX; x++) {
    for (let y = 0; y <= detailY; y++) {
      this.vertices.push(new p5.Vector((x * detailX) / w, 0, (y * detailY) / h)); // replace 0 with an expression to create varying heights
      this.uvs.push([x / detailX, y / detailY]); // assumes texture mode normal
    }
  }
  // this will attach all our vertices and create faces automatically
  this.computeFaces();
  // this will calculate the normals to help with lighting
  this.computeNormals();
});
return geometry;
```

Read more about [this method here](https://p5js.org/reference/p5/p5.Geometry/).

## Building Shapes

The fourth method for creating shapes is to use the `beginShape()` and `endShape()`

See the sketch-tetrahedron.js for an implementation example.

`beginShape()` and `endShape()` can be used for creating 2D and 3D shapes.

For a well-implemented 3D shape, you can define the surface normal vector for shading purposes (assuming flat-shading).

To add a face (for example):

```js
// Face 1.
// Add vertices for face 1
beginShape(); // start building the shape
normal(n1); // add a normal vector
vertex(p1.x, p1.y, p1.z, 0.5, 0); // add a vertex as vertex(x,y,z,u,v)
vertex(p2.x, p2.y, p2.z, 0, 1);
vertex(p3.x, p3.y, p3.z, 1, 1);
endShape(CLOSE); // finish building the shape
```

Technically, this may just be a bunch of 3D faces which are disconnected, but adjacent.

Read more about [this method here](https://codingtrain.github.io/website-archive/Tutorials/18-webgl/18.8-custom-shapes-in-webgl-with-p5js.html).

## UV Coordinates

For flat shading, each face must have a surface normal defined.

For smooth _curvy_ shading, each vertex must have a vertex normal defined.

p5.js (apart from the exception noted above for `buildShape()`) uses vertex normals for both smooth shading and flat shading.

You can choose to use smooth or flat shading through calling `myGeometry.computeNormals(SMOOTH)` or `myGeometry.computeNormals(FLAT)`. The default shading is **FLAT**.

For applying images, or textures, or shaders to a surface, each face needs uv coordinates defined for each of the vertices.

UV coordinates are automatically created for the built-in geometry.

We can define our own uv coordinates through `beginShape()` and `vertex(x,y,z,u,v)`.

For custom geometry created using `new p5.Geometry(detailX, detailY, function())` we need to add uvs as we add our vertices.

It is important to map these correctly.

As noted in Lab 3, textures can be mapped using `textureMode(NORMAL)` or `textureMode(IMAGE)`.<br>  
When you define your uv coordinates, it is best to use textureMode(NORMAL) so you are not restricted to a coordinate space which is dependent on fixed image sizes. But you can choose to use textureMode(IMAGE) if your application works best with this &mdash for example, you may have a single texture map you slice into pieces.

**DO:** Modify sketch-wavy.js to create your own height-mapped surface. Think creatively about how you might define a height and where you can get height data from.

**DO:** Remember to commit your code and push it up to Gitlab.

## Summary

Congratulations! In this lab you:

1. Gained an understanding of the components of 3D geometry
2. Created geometry from 3D primitive components
3. Created geometry from 3D Vectors (vertices)
4. Defined and used **uv** coordinates for texturing on custom geometries
5. Created your own unique 3D objects, and applied materials and textures to these

## Additional Learning Resources

### p5.js

- [Creating custom geometry](https://p5js.org/tutorials/custom-geometry/)
- [p5.Geometry](https://p5js.org/reference/p5/p5.Geometry/)
- [uvs](https://p5js.org/reference/p5.Geometry/uvs/)

### coding train

- [WebGL Track](https://thecodingtrain.com/tracks/webgl)
