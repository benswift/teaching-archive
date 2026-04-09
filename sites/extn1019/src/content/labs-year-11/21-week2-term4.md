---
title: "Lab 21: Finishing Mini Projects + JS Expressions"
tagline: "Week 2, Term 4 – Finalising Mini Projects"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-11/extn1019-2024-year-11-mini-project
image: /images/banners/remainders-by-jason-xu.jpg
---

## Outline

In this lab you will:

1. finish building your Mini Project
2. revise JavaScript concepts around expressions

## Introduction

Welcome everyone! This week you will finish your Mini Projects for submission on Friday. 

We will also have a quick look over JavaScript expressions.

And finally, we will have a sneak peak at the theme for your Final Project.

It is very late to start, but if you haven't done so already...

**do:** ...`fork` and then `clone` the [Mini Project Template
Repo]() and open it in VSCode.

## JavaScript Expressions

As noted on the [Resources Books and Links page](/resources/03-books-links/), the [Mozilla Developer Network (MDN) Web Docs JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the ultimate source of truth for all things JavaScript.

This week we are looking at [**expressions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

The starting point is the [Guide chapter on Expressions and Operands](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

### [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

All year you have been using expressions, but we have never talked about expressions.

Expressions are the "calculation engines" of programming languages. They get things done. In formal words "they can be evaluated to determine a value".

`let x = 1;`

This **statement** includes a variable declaration `let x` and an assignment operation `x = 1;` The expression in this case is the number `1`.

The effect of executing this statement is the a binary data representation of the Number `1` is moved to a memory location referenced by the variable `x`.

### Where are expressions used?

Expressions are found in:

| Statement Type | Form of Expression in Statement |
| --- | --- |
| assignment statements | `VARIABLE_NAME = EXRESSION;` |
| variable declaration with assignment | `var VARIABLE_NAME = EXRESSION;`<br>`let VARIABLE_NAME = EXPRESSION;`<br>`const CONSTANT_NAME = EXPRESSION;` |
| if statements | `if (LOGICAL_EXPRESSION) STATEMENT else STATEMENT` |
| for loop statements | `for (INIT_EXPR; LOGICAL_EXPR; DELTA_EXPR) STATEMENT` |
| for ... in object | `for (VARIABLE in OBJECT_EXPRESSION) STATEMENT` |
| for ... of collection | `for (VARIABLE of ITERABLE_OBJECT_EXPRESSION) STATEMENT` |
| while statements | `while (LOGICAL_EXPRESSION) STATEMENT` |
| do while statements | `do STATEMENT while (LOGICAL_EXPRESSION)` |
| function calls | `myFunction(EXPR1, ...)` |
| switch ... case statements | `switch (EXPRESSION)`<br>`{`<br>`    case EXPR1: STATEMENTS1;`<br>`    case EXPR2: STATEMENTS2;`<br>`    ...`<br>`     default: STATEMENTS `<br>`}` |
| object property declarations | `let someObject = { propertyName: EXPRESSION }` |
| class property declarations | `class myClass { `<br>`    propertyName = EXPRESSION;`<br>`    ...`<br>`}` |
| return statement | `return EXPRESSION;` |
| throw statement | `throw ERROR_EXPRESSION;` |
| expression statement | `EXPRESSION;` |
| --- | --- |

### Elements of Expressions

Expressions can be built from the following elements:

* **literal values**
* **variables** (and **constants**)
* **operators**
* **functions**
* **objects** and **classes**
* **initializers**
* **others**

#### literal values

A literal value is a fundamental building block for expressions, and for almost everything that is created by our programs. They represent ACTUAL data values.

There are literals for each of our datatypes.

**Numeric literals** represent numbers. 
```js
1  // the number ONE
-12.02 // floating point decimal number with a negative sign
+123e32 // floating point decimal number with exponent
.231E-23 // floating point literals may start with decimal point. Sign of exponent is allowed`
1e99 // Fractional part is optional
42n // BigInt number with value 42
0117 // Octal number. May also be specified as 0o117 or 0O117. Only digits 0..7 are valid for Octal numbers (base 8)
0xA1  // Hexadecimal number. May also be specified as 0XA1. Digits 0..9ABCDEF are valid (base 16)
0b0100110 // A binary number. May also be specified using 0B. Only digits 0 and 1 are valid (base 2).
```

Note: All JavaScript numbers will be represented using the JavaScript Number type, unless they are specified with an `n` making them a BigInt type. You can add the `n` to Decimal, Octal, Hexadecimal and Binary literals to make them BigInt. Numbers have the same internal representation regardless of literal. BigInts have the same internal representation regardless of literal. But BigInts and Numbers do not have the same internal representation.

**Boolean Literals** have only 2 values.

```js
true // and
false
```

**Null Literal** represents the null data type
```js
null
```

**Array Literals** are delimited by square brackets, with values separated by commas.

```js
[1, 'two', [3.1, 3.2]] // an array literal with 3 values
```

**Object Literals** are delimited by curly braces, with a sequence of name: value pairs separated by commas.

```js
{ priority: 1, name: "Jaya", cubic: function(x){return x**3} } // an object literal with 3 name: value pairs
```

**String Literals** represent text data.

```js
"Enclose with double quotes" // or
'Enclose with single quotes'
"Special characters are escaped such as \n new lines"
"Can include \xA9 hexadecimal escape sequences"
"Can include \u00A9 Unicode escape sequences"
"Can include \u{2F804} Unicode code point escape sequences"
```

[**template literals**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) are enclosed in backticks: `` 

```js
`Template Literal with substitution ${EXPRESSION}`
```
* template literals allow multiline strings
* template literals enable special characters to NOT be escaped
* template literals enable variable substitution:

```js 
let name = "Kim";
let greeting = `Hello ${name}!`
```

* Tagging in template literals is an advanced concept that we will cover later.

**[Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) Literals**

Regular expressions are patterns which match character sequences in strings (text data). This is a powerful pattern matching system, and deserves more time for exploration. Regular exploration literals are delimited by the forward slash character `/`.

``` js
/^(\d{2})[- ]?(\d{2})[- ]?(\d{2})[- ]?(\d{1})[- ]?(\d{3})$/g // a regular expression for matching Australian phone numbers in text`
```

### Types of Expressions

we can classify the type of an expression based on what it is built from and/or the datatype returned when the expression is evaluated.

#### literal

An expression can be a literal value. Just that. Nothing else. This is the simplest form of expression.

See above for the format of literal expressions for a range of datatypes and purposes.

#### variables in expressions

Once we assign a value (or object, or function) to a variable, this can be used in an expression.

```js 
let x = 10;
let y = x // the expression is the variable "x". The value of x will be put into y (if x is an object, then the pointer to x will be assigned to y – x and y will then point to the same object instance);
```

#### numeric operators

We can combine literals, variables, and expressions, using operators to perform calculations. Operators include:
* addition `+`
* subtraction `-`
* multiplication `*`
* division `/`
* remainder `%` – returns the remainder after integer division
* exponentiation `**` 
* grouping `()` imposes order of operation
* postfix increment/decrement `x++`
* prefix increment/decrement `--y`

Note: when creating expressions, ensure both sides of the operator are the same type: Number with Number, BigInt with BigInt.

The order of operations is:
* grouping ()
* object member access, chaining, function calls
* postfix increment/decrement
* prefix increment/decrement
* exponentiation (evaluated right to left)
* multiplication, division, remainder (evaluated left to right)
* addition, subtraction (evaluated left to right)
* assignment (including numeric operator assignments)

#### string operators

Strings can be concatenated using the `+` operator. It has the same operator precedence as addition. Other operations on strings are performed via function calls.

#### logical operators

For flow control in programs we need to ask questions and make decisions about which path of a branch to follow. This includes conditional branching using if+else, and conditional looping using for, while and do..while. For this purpose we construct logical expressions – expressions which evaluate to `true` or `false`.

Usually, with datatype which are numeric, we can compare the values using:

* `a > b` : is the value of `a` greater than the value of `b`?
* `a >= b` : is the value of `a` greater than or equal to the value of `b`?
* `a < b` : is the value of `a` less than the value of `b`?
* `a <= b` : is the value of `a` less than or equal to the value of `b`?

We also test for equivalence. Do two expressions evaluate to the same value? Do they point to the same object?

* `==` [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) – expressions are cast to the same type before comparison: `"1" == 1` evaluates to `true`
* `!=` [inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality) – expressions are cast to the same type before comparison: `"1" != 1` evaluates to `false`
* `===` [strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) – compares values of 2 operands. Different types cannot be equal. `"1" === 1` evaluates to `false`
* `!==` [strict inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/strict_inequality) – compares values of 2 operands. Different types cannot be equal. `"1" !== 1` evaluates to `true`

We can combine multiple logical expressions using logical operators.

* `&&` – Logical AND. evaluates to `true` if and only if both operands evaluate to `true` 
* `||` – Logical OR. evaluates to `false` if the left and/or the right operand evaluate to `true`.
* `!` – Logical NOT. A unary operator placed before its operand. evaluates to `false` if the operand evaluates to `true`, and `false` if the operand evaluates to `true`. It flips `true` to `false` and vice-versa.  

#### bitwise logical expressions

Bitwise operators combine values at the bit level. This only works with numeric datatypes. You can use these on Number with Number or BigInt with BigInt. A bit value of 1 is regarded as `true` and 0 as `false`. Working with Number type – the result is a 32-bit value. For BigInt, the return value is the size of the larger BigInt.

* `&` – bitwise AND
* `|` – bitwise OR
* `^` – bitwise XOR
* `~` – bitwise NOT (unary operator)

#### function expressions

A function expression returns a function. While the function may be named, it can also be anonymous.

```js

let f = function(x,lambda,amp) {return amp*Math.sin(2*Math.PI*x/lambda)};
```
In this example, the variable `f` points to an anonymous function of 3 variables.

Anonymous function expressions are completely valid, and represent an earlier implementation of anonymous functions. The more recent alternative it to use **Arrow Function Expressions**, often called _lambda_ functions (this is not strictly true[^1], but you can achieve functional programming goals in JavaScript).

An arrow function expression takes a number of forms.

We will apply a breakdown to the function shown above to transform it into an arrow function expression:

```js
// Traditional anonymous function
let f = (function(x,lambda,amp) {
    return amp*Math.sin(2*Math.PI*x/lambda)
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
let f = ((x,lambda,amp) => {
    return amp*Math.sin(2*Math.PI*x/lambda)
});

// 2. Remove the body braces and expression parentheses and word "return" — the return is implied.
let f = (x,lambda,amp) => amp*Math.sin(2*Math.PI*x/lambda);

// 3. ONLY if you have only one parameter to your function, you can remove the parameter parentheses
let f = x => 2.0*Math.sin(2*Math.PI*x/100.0);
```

#### object expressions

An object expression is an expression which uses an object literal.

```js
let jaya = { 
    priority: 1, 
    name: "Jaya", 
    cubic: function(x){
        if (typeof x === 'number')
            return x**3;
        else if (typeof x === 'bigint')
            return x**3n;
        else
            return undefined;
        } 
} // an object literal with 3 name: value pairs
```

## Mini Project

**do:** Review the assessment criteria for the [Mini Project](/deliverables-year-11/02-mini-project/). Ensure that you have Conformed to the Specification and addressed the Assessment Criteria. 

## Final Project

The assessment rubric for your Final Project will be introduced next week.

As your Mini Project is **due on Friday 25 October**, it is inappropriate to start working on your Final Project before you submit your Mini Project.

Some of you may be keen to get started on the Final Project. At this stage – do not start constructing. But you can start your planning and ideation for the project.

The project theme for your Final Project will be **Other Minds**. This is inspired by the book [***"Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness"***](https://www.harpercollins.com.au/9780008226299/other-minds/) by [Peter Godfrey-Smith](https://en.wikipedia.org/wiki/Peter_Godfrey-Smith).

You are not expected to make a work about Octopuses!  You are expected to engage with ideas that all living beings have minds – minds which are different to yours.  

This can possibly link to your Mini Project – as an extension, branching, or re-imagining of the concept of "More Than Human".

---

## Summary

Congratulations! In this lab you:

- continued implementing your prototype
- investigated JavaScript expressions

---

[^1]: JavaScript is not optimised for anonymous functions which are self-referential, which has performance implications if you try to use a [Y-combinator for self-referencing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee#recursion_of_anonymous_functions_with_a_y-combinator). Of course you can make a function non-anonymous by giving it a name, and then self-referencing is easy