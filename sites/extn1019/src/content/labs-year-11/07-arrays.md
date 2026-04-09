---
title: "Lab 7: Arrays and Data"
tagline: "storing data"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-lab-7
image: /images/labs/lab-8/text-sketch.png
---

## Outline

In this lab you will:

1. investigate data types
2. create (initialize) arrays
3. add elements to an array
4. update elements in an array
5. create nested arrays

## Introduction

Welcome to another week of Creative Computing! We have already explored how to draw _lots of things_ using a few lines of code. To do this we used a programming construct which repeats instructions a certain number of times; this construct is called a `for-loop`. 

This week, we will learn how to allow your program to _remember lots of things_. Things that are remembered can be used for other purposes later on. You'll recall that, up until now, we have used variables to _remember a single piece of information_. This information can be numeric data like the number `200` or string data like the text `"Hello Word!"`, but so far we have only stored one piece of data at a time. To _remember_ (or store) lots of information, we will introduce you to a concept called `arrays`.

To get started, fork and clone the [lab 7 template repo]().

## Part 1: What is Data?

This is a bigger question than you might imagine. Why do we call data _data_? Where do we get data? How do we agree with/trust the data of other people?

:::tip
**think:** in 4 minutes: write down as many ideas, concepts, thoughts you have about data. What is the history of data? How do we record data? How do we share data. What forms does data take? What are the types of data we use in our data records? Where do you find data? How do we use data? What issues might occur through or use of data?
:::

**do:** in 4 minutes: pair and share your concepts and ideas with a neighbour. Do you have a consensus view, or are there different / conflicting ideas?  Are there concepts or views that you had not considered?

### Data types and variables

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) is known as a [_dynamically typed_](https://en.wikipedia.org/wiki/Type_system#DYNAMIC) language, and a [_weakly typed_](https://en.wikipedia.org/wiki/Strong_and_weak_typing) language. These are deliberate design decisions &mdash; not accidents. Dynamic typing means that variables in JavaScript do not require type declarations before assignment to a value, and can be reassigned from their initial assignment to values of any and all types. Weak typing means that data values are automatically/_implicitly_ converted to compatible types when operations involve mismatched types. It is important to fully understand these concepts. This requires a foundational understanding of data types.

### JavaScript Primitives

type | typeof | Object Wrapper | Description 
:--- | :--- | :--- | :---
Null | object | | absence of an object
Undefined | undefined | | absence of a value for the variable
Boolean | boolean | Boolean | true / false
Number | number | Number | [double precision 64-bit binary format IEEE 754 value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)
BigInt | bigint | BigInt | integer with arbitrary magnitude
String | string | String | text data encoded using [UTF-16 code units](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)
Symbol | symbol | Symbol | A unique Symbol value (required for keys)

**ALMOST** all other data objects are built from these elements. But we apply meaning to these values which can give them special capabilities.

Notice the word **Object** above? _Almost all_ contemporary programming languages are object-oriented (they enable programming using the concepts of object and class). JavaScript is object-oriented. _Most_ variables values are not simply primitives - they can be accessed using object wrappers.

Objects are a collection of attributes (data) and methods (functions / capabilities). You may see elements of this in code examples.

```js
  const max = 550;
  // what type is max
  console.log("The type of max is: ", typeof max);
  console.log("Is max an integer? ", Number.isInteger(max));
  console.log("Is max a finite number? ", Number.isFinite(max));
  console.log("Is max NaN? ", Number.isNaN(max));
  console.log("max is now " + max.toString());
```

## Part 2: Introducing Collections

### Initializing arrays

An array is a type of _data_, just like a string (`"hello"`), a
number (`1.0`) or a boolean (`true`). Except, the value it stores
is a list of other values. The syntax for arrays looks like:

```js
let arrayOfNumbers = [100, 24, -2, 18, 106, 42, 1, 8];
let arrayOfStrings = ["clap", "along","if", "you", "feel", "like", "a", "room", "without", "a", "roof"];
let arrayOfBooleans = [true, false, true, true, false];
// the example below creates an empty array
let yetToContainSomething = [];
```

Everything in between the `[` and matching `]` makes up the elements of the
array. Each element is separated by commas `,`.

Each element has a position in the array, we call this the index. The first
element has an index of `0`, the second has an index of `1`, etc.

### Accessing elements in an array

We can access the elements inside an array using an "indexing" syntax. "Indices" are just a convenient way of referring to a single item among a collection of items. Why do we use indices? Good questions. Let's compare indices to variable names...

When we create variables, we have to give them a variable name e.g. `let radiusSize` where `radiusSize` is the variable name. If we had to keep track of 1000 radius sizes, it's much more convenient to refer to each one using a number from 1-1000 (well...in computing we index from zero, so 0-999), otherwise we would need to come up with 1000 names.

```js
let groceryList = ["potato", "onion", "capsicum"];
```

Suppose we have an array like the one above. The array is being stored in a variable called `groceryList`. The reason p5.js interprets the value assigned to `groceryList` as an _array_ and not a _string_ is the square brackets `[]` and the comma separated values `"potato", "onion", "capsicum"`.

If we wanted to access the first element in the array, we:

1. first _need_ make a reference to the array variable name we want to access i.e. `groceryList`, otherwise p5.js wont know where to look
2. Then we _need_ to follow the variable name with a pair of square brackets `[]` to tell p5.js that we are about to access elements in the array
3. then we need to tell p5.js which element we want to access. Since we want the first element and we start indexing from zero, we include a zero between the square brackets

The example below shows you how we might use elements from an array to draw with.

```js
text(groceryList[0], 100, 100)
```

The example below shows you how we might update the value of the first element in the `groceryList` array to `sweet potato`.

```js
// change first element ("potato") to "sweet potato"
groceryList[0] = "sweet potato";
```

### adding to an array

It's also common to want to add elements to an array, we do this with the `push`
function. This adds elements to the end of the array (the right-hand side).

```js
let items = ["keyboard", "mouse", "monitor"];
items.push("headphones");

// items is now ["keyboard", "mouse", "monitor", "headphones"]
```

If we continue to _add_ elements to an array, the total number of elements in the array can change over time. Lucky for us, there is an easy way to access the number of elements in an array at any given time. The information is held in the `length` of an array. If we take the `items` array above, we can access its length by using `items.length`.

## Part 3: Working with Arrays

Now that you've been introduced to arrays, let's have a go at using them in a sketch.

![Text sketch](/images/labs/lab-8/text-sketch.png/)

**do:** Create a variable called `my_texts` which holds an array of 20 `strings`. Remember `strings` are just text data. The strings can be anything you want; single characters or phrases and quotes from literature or media. Once you've created your array, `commit` and `push` your code to git.

Now, if we were to draw each of these strings using the `text()` function, we would need to specify the `x` and `y` position for each string. To make things a little easier for us, lets go a head and make a few more arrays.

**do:** Create two more variables; one variable called `x_positions` should store an array containing the `x` positions of your text and the other variable called `y_positions` should store an array containing the `y` positions of your text. Once you're done, commit and push your code to git.

Nice work! Now we need to access the strings **and** the positions within a `for-loop`. You might remember from the last few weeks that `for-loops` repeat a set of instructions a certain number of times. This is all controlled by incrementing a variable which we conventionally call `i` (see the `for-loop` below for reference).

```js
for(let i=0; i<8000; i++){

}
```

If you increase the value of this `i` variable from zero up to the number of elements in our array, we can use `i` as the index to access elements in our array.

**do:** Write a `for-loop` in your `draw()` function which accesses the appropriate elements in each of your arrays (`my_texts`, `x_positions` and `y_positions`) and uses them in the `text()` function.

## Part 4: An alternative approach

Each element in an array can be of any data type. It could be a number, text, boolean and it can even be another array. The example below shows an example of an array where the elements of the array are themselves arrays.

```js
let twoDArray = [[30, 35, 40], [45, 50, 55], [60, 65, 70]]
```

The second element of the `twoDArray` is `[45, 50, 55]` and the first element of this array is `45`. If I wanted to use this value to draw with, I would do the following:

1. reference the array variable name `twoDArray`
2. follow this by two square brackets `[]`. We include the element of the `twoDArray` we want to access between the square brackets . In this case, we want to access the second element, so we use the index `1`
3. we must then include another set of square brackets `[]`. We include the index of the _inner_ element we want to access between the second set of square brackets. Since we want to access the first element of the inner array, we use the index `0`. See the example below.

```js
circle(twoDArray[1][0], 200, 200)
```

**do:** Rewrite your code from the previous exercise so that it uses only **one** array. Your new array should still have 20 elements, but each element should be another array with exactly three elements. Once you've finished, commit and push your work to git.

## Part 5: Interactive

For the next activity, we will be recreating the interactive sketch below.

![Interactive](/images/labs/lab-8/interactive-sketch.png/)

There are two keywords in p5.js that hold the current `x` and `y` position of your cursor. These keywords are called `mouseX` and `mouseY`. Copy the code below into your template repo so you can get a feel for how this works.

```js
circle(mouseX, mouseY, 50)
```

The sketch we are going to create in this activity will allow us to place a circle on your screen each time we click on it with our mouse.

In order to do this, we need to store the position of our mouse each time we click on the screen. To start us off, let's create an empty array in which we can store the positions of the mouse.

**do:** Create an empty array called `mousePositions` at the top of your code. Once you're done, commit and push your code to git.

You will see that your template repo includes a new function called `mousePressed()`. Any code you write between the opening curly bracket `{` and the closing curly bracket `}` of the `mousePressed()` function will only be executed when you click your mouse.

**do:** Between the curly brackets of the `mousePressed()` function, write some code which adds the `mouseX` and `mouseY` values to the `mousePositions` array you created. You should add them as a 2-element array which looks like this `[mouseX, mouseY]`. If you're not sure how to add elements to an array, jump back to Part 1 of this lab, or ask an instructor. Once you've done that, commit and push your code to git.

We're getting there! We have our array which stores our mouse positions, but we're not drawing with them at the moment. We need to draw a circle for each element in our array.

Up until now, we have been accessing elements in arrays using a `for-loop`, but since we are continuously adding to our array `mousePositions`, how will we define a boolean statement which terminates the `for-loop`. Remember that when the boolean statement within the `for-loop` becomes `true`, the `for-loop` terminates.

:::tip
We are about to write a for-loop which accesses each element in our `mousePositions` array. Each time we press our mouse, another element will be added to this array. With the person next to you, discuss what the boolean statement should be which terminates a `for-loop`.
:::

**do:** Write a `for-loop` which draw a circle at _each_ pair of `[mouseX, mouseY]` coordinates stored in the `mousePositions` array. Commit and push your code to git.

Awesome work, there's just one last step. We want the circles to slowly start fading away after we have created them with our mouse clicks.

:::tip
**talk:** When you get to this stage, call over one of your instructors and discuss how you might go about making the circles become more translucent over time.
:::

**do:** Modify your code so that once each circle is drawn, its colour slowly starts to become more and more transparent until it completely disappears. Remember to ask your instructors if you need help with this. Once you're done, commit and push your code to git.

## Part 6: Extensions

:::tip
**extension:** We usually have extension activities in these _orange_ boxes, but this time we have a section dedicated to ideas for extensions. If you have completed all of the activities above and you have `committed` and `pushed` your progress after each activity, then you can move on to implementing some of these ideas.
:::

Later (for the next blog post), we will be doing some _data visualisation_ so exploring some of the ideas below can equip you with some extra tools. Having said that, you don't need to use any of the extension activities to make a cool data visualisation sketch, so don't worry if you don't complete this section :)

**do:** Implement some of the ideas below, or create your own sketch which utilizes arrays in some way. If you choose to work through each of the ideas below, remember to commit and push your code after you feel like you have completed each one.

Here are some ideas for sketches you can start implementing:

1. Create a sketch which allows the user to draw lines on the screen with their mouse.
2. extending the idea above, the longest line at any given time should be a different colour to the rest of the lines.
3. initialize an array with random numbers and then draw a landscape using those numbers. You must draw a flag on any "hills" in your landscape. The "hills" will be _local maxima_. Local maxima are elements in your array which have a higher value than all it's surrounding elements.

## Summary

Congratulations! In this lab you:

In this lab you will:

1. learned about data types in JavaScript
2. created (initialize) arrays
3. added elements to an array
4. updated elements in an array
5. created nested arrays
