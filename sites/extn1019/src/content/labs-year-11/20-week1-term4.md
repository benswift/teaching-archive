---
title: "Lab 20: Mini Project Completion  + JS Review"
tagline: "Week 1, Term 4 &ndash; Getting it all together"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-mini-project
image: /images/banners/remainders-by-jason-xu.jpg
---

## Outline

In this lab you will:

1. continue building your mini project
2. revise JavaScript concepts around data, variables and scope

## Introduction

Welcome back everyone! I hope you had a great break.

This week you will continue working on your mini projects on the theme **_More Than Human_**. 

We will also have a quick look back at JavaScript concepts around data, variables and scope of variables.

If you haven't done so already...

**do:** ...`fork` and then `clone` the [Mini Project Template
Repo]() and open it in VSCode.

## JavaScript Datatypes, Variables and Scope

As noted on the [Resources Books and Links page](/resources/03-books-links/), the [Mozilla Developer Network (MDN) Web Docs JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the ultimate source of truth for all things JavaScript.

This week we are looking at Datatypes, Variable Declarations, and Scope.

The starting point is the [Guide chapter on Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types).

### [Data Structures and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types)

* [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean): true and false (for binary classification and decision making)
* [null](https://developer.mozilla.org/en-US/docs/Glossary/Null): a variable that is "empty". It points to nothingness, but nothingness is itself, an object.
* [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined): the value automatically assigned to a declared variable prior to initial assignment. 
* [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number): contains numeric data. Surprisingly, all numbers are floating point numbers in JavaScript.
* [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt): contains arbitrary precision integers. Yes, INTEGERS.  You put an "n" at the end of an integer literal to make it a BigInt. Like 42n. For more detail [read this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type).  Note: it is not always possible to sensibly compare _Number_ and _BigInt_.
* [String](https://developer.mozilla.org/en-US/docs/Glossary/String): contains text data, a sequence of characters. There is a subtle yet important difference between String primitives (created directly from literals, e.g. `let myString = "this is a string";`) and String objects (created from invoking a String constructor like this: `let strObject = new String("Character Data");`)
* [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - we haven't encountered a need for Symbols yet. They are unique. They are not Strings. They have a number of use-cases in programming, especially around creating guaranteed unique property names for objects.
* [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object) - OK Objects are not really _primitives_ and some _primitives_ are objects. Objects have named properties which contain data made from the other types (and even objects).  BTW - functions are also objects.  [More info here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

More complex data is built using these basic building blocks. Colours, shapes, sounds, textures are all built from numeric, text, or boolean data &mdash; which is combined as collections or objects.

### [Declaring Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

This page says that there are 3 types of variable declaration in JavaScript. Actually, there are four 😄 but one is heavily discouraged. Or is it truly 3 - as "const" are constants, and so not technically _variable_.

* [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) declares variables which are **scoped to a function**, or when outside a function, with global scope.
* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) declares variables which are scoped to **their containing block**.
* [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) - declares **unchangeable** variables (that is, their value remains **constant**, they cannot be reassigned or updated after initial declaration), which are also **block scoped**. **HOWEVER** only primitive values will be protected from change: the properties of a **const** _**object**_ can be reassigned or updated. 
* direct use without declaration: The reference says: "Variables should always be declared before they are used. JavaScript used to allow assigning to undeclared variables, which creates an [undeclared global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#description) variable. This is an error in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) and should be avoided altogether."

```js
let size;
console.log(size, typeof(size));
size = 42;
console.log(size, typeof(size));
```

### [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

Scope in Computer Science and Programming refers to a set of rules, which are _usually_ strictly enforced, about which variable names are valid within the current context of program execution, and which pieces of computer memory they refer to.

In JavaScript scope is created by functions, and by code blocks. There is also a Global context and Module context.

Scope enables you to use the same name for a local variable within the current context without impacting variable values in a wider context. It allows the programmer to manage and avoid name collisions, and unintended changes to the values of a common piece of data.

It is _**highly recommended**_ that you use local scope wherever possible. Using **Global scope** should be used carefully. As [Wikipedia](https://en.wikipedia.org/wiki/Scope_(computer_science)#Global_scope) puts it: _"Variable names with global scope—called global variables—are frequently considered bad practice, at least in some languages, due to the possibility of name collisions and unintentional masking, together with poor modularity, and function scope or block scope are considered preferable"_.

* **Block scope**: A [**code block**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) is delimited by **"{"** and **"}"**. Variables declared using **let** or **const** are valid _**only**_ within the containing {...}. When used outside any {...}, they will have Global scope. Code Blocks may apply to functions, or other flow control statements (for, if, while, do..while, switch, try...catch, throw)

* **Function scope**: [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) have special status in JavaScript. Variables declared using **var** within a function are scoped to that function. Variables declared using **var** have either **Function scope** or **Global Scope**.

* **[Global scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)**: Variables declared outside code blocks (using let or const), or outside functions (using var) have global scope. They are valid anywhere within the context of a running script. The context is the "window" for JavaScript running in a web browser. Note: local block or function scope will have precedence over global scope.

* **[Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) scope**: the name is valid within the context of the Module the code is defined in. We haven't yet looked into modules. Modules enable namespaces for variables, classes and functions to be separated for code libraries.

```js
/* Anything declared out here has "global scope" */
let globalvar = "Mx Cosmopolitan";

/* blocks can be declared for no reason - but this is discouraged */
{  
    /* arbitrary code block */
    let localvar = 0b101;
    console.log(globalvar, localvar);
}
console.log(globalvar, localvar);

/* blocks are usually attached to functions, flow control (if, for, while, switch), and classes */
/* objects also use block notation {} */
```

## Summary

Congratulations! In this lab you:

- continued implementing your Mini Project
- revisited JavaScript Datatypes, Variables and Scope

---
## More-Than-Human 

The Project Provocation/Theme for this year's project is _"More-Than-Human"_, inspired by the book _"The Spell of the Sensuous"_ by David Abram.[^Abram_1996]

---
This week I have been inspired by Ferris Jabr's book "Becoming Earth" [^Jabr_2024], which takes a different look at the More Than Human world.

... "Earth and life are bound in reciprocal evolution. Over billions of years, this process of coevolution transformed a lump of orbiting rock into a cosmic oasis with a breathable atmosphere, a balanced chemistry, and an ecological pulse. Many experts agree that life’s most important defining quality is a capacity to sustain itself. Earth has an innate ability to regulate its climate over great spans of time, gradually recovering from extreme hothouse states and deep freezes. Life is an integral part of this self-regulation. Despite repeated catastrophes, our living planet has demonstrated astonishing resilience, enduring for more than four billion years. Thus, Earth is not simply a planet with life on it, but rather a planet that came to life: a vast, interconnected, self-regulating, living system."

---
## قلب 

A programming language in Arabic by Ramsey Nasser.

> > "قلب is a programming language exploring the role of human culture in coding. Code is written entirely in Arabic, highlighting cultural biases of computer science and challenging the assumptions we make about programming. It is implemented as a tree-walking language interpreter in JavaScript." [^Nasser]

---
[^Abram_1996]: Abram, D. (1996). [The Spell of the Sensuous: Perception and Language in a More-Than-Human World](https://projects.iq.harvard.edu/files/retreat/files/abram_the_spell_of_the_sensuous_perception.pdf). Vintage Books. eISBN: 978-0-307-83055-5

[^Jabr_2024]: Jabr, F. (2024). [Becoming Earth: How Our Planet Came To Life](https://www.ferrisjabr.com/book). Random House. ISBN: 978-0593133972 

[^Nasser]: Nasser, Ramsey. (2012) [The قلب Programming Language.](https://nas.sr/%D9%82%D9%84%D8%A8/) 
