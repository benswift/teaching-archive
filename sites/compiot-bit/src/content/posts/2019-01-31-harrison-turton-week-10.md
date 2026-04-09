---
author: Harrison Turton
date: 2019-01-31
title: SASS and Ownership
week: 10
---

Development is _finally_ underway. We still haven't received our final boards,
but armed with our Discoboards & [Distance-Vector routing](), we can march on.

I'm going to touch on two technical topics today - SASS & Rust. _SASS_ is a CSS
preprocesser, which makes stylesheet development much more enjoyable. I'll give
a broad overview of the Rust borrow checker & variable lifetimes, because I
think they're the most interesting parts of the language.

**Index**

This blog post is kinda long, so here is a mini index:

- [Intro to CSS Preprocessors](#css-preprocessors)
- [Custom Layouts & Styles in Jekyll](#custom-styles-in-jekyll)
- [SASS Preprocessor Syntax](#syntactically-awesome-stylesheets)
- [Rust Ownership & Borrow Checking](#ownership-borrow-checking--variable-lifetimes)

## CSS Preprocessors

Though I love styling websites, lets face it – CSS isn't great. The CSS
standard only added native variables _in 2018!_ Computer Science has worked
with variables since FORTRAN, developed in _1956_. There is still no support
for style hierarchies, mixins, or color functions (except hacky stuff with
`calc()`).

To solve this, _CSS preprocessers_ were developed. These are [mini-languages](https://en.wikipedia.org/wiki/Domain-specific_language)
that compile to CSS. The preprocesser can give us all the fancy bells-and-whistles
of a modern language, without having to wait for browser compatibility.

If you've every used (or heard of) Typescript, it's a similar concept. Or
Babel, for that matter -- preprocessors can automatically provide CSS polyfills
and prefixes to support the different browsers & versions.

There are two main preprocessors: [Less](http://lesscss.org/)
(Leaner style sheets) and [SASS](https://sass-lang.com/) (Syntactically Awesome
Stylesheets). I've used both, and I'm a bigger fan of SASS.

Less lets you embed a simple script to do the compilation at runtime, which can
be handy if you don't want to download the SASS binary.

Let's explore SASS, since it's what I'm using for this blog.

## Custom styles in Jekyll

If you're reading (and not marking) this blog post, you probably want to style
your blog. Here is the best way to do it.

The Jeyll [frontmatter](https://jekyllrb.com/docs/front-matter/) (the slice of
[YAML](https://yaml.org/) at the top of every page) can indicate an alternative
"layout" for your post.

My frontmatter looks like this:

```
---
title: SASS and Ownership
week: 10
---
```

You can put anything in here, even custom properties to use in your layout. I
used to have a "description" property, which I used as a subheader in my
layout.

For this to work, you'll also need a layout file. Put this in
`_layouts/my-layout.html`. Here is a basic example:

```
---
---

<!doctype HTML>

<html>
  <head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
  </head>
  <body>
    <div class="content">
    <h1>{{ page.title }}</h1>
    <div class="divider"></div>
      {{ page.content }}
    </div>
  </body>
</html>
```

This template that Jekyll uses to generate the webpage. Jekyll interprets this
"template" to generate the webpage. It's not raw HTML - it includes a small
templating language, called [Liquid](https://shopify.github.io/liquid/).

Note the different variables, like `title` and `page.content`. `title` comes
directly from the frontmatter we defined in our blog post markdown. `page` is a
_global_, which holds page-specific information and frontmatter. You can read
more about this [in the Jekyll
documentation](https://jekyllrb.com/docs/variables/).

Almost done – we're just missing a stylesheet. When Jekyll generates the webpage,
it compiles the stylesheet into a seperate file with a hashed name. This makes it
difficult to reference, since we don't know the name in advance. Initially, I just
wrote my stylesheet in the `<head>` - super gross!

Fortunately, Ben came to the rescue and showed me the light. We can put a SASS file
under the `_assets/` folder and include it with the html template.

I put my stylesheet at `_assets/harry-styles.scss`, and added this line:

```
![](/images/scss/harry-styles.scss)
```

To my layout file, above `<!doctype HTML>`.

## Syntactically Awesome Stylesheets

> Sass. noun.
> To be cheeky or rude to (someone).
> "the kind of boy that wouldn't give you any sass"

**Variables**

When I started using preprocessors, CSS variables didn't exist. Maintainability
was my biggest draw - I didn't want to "find-and-replace" hex values, I wanted
to easily define (with readable names, not comments) reusable color values.

```
$font-color: #363D41;
```

You can do more than just colors - SASS variables can contain almost anything!

```
$font-color: #363D41;
$sans-serif: "SF UI Text", "Roboto", sans-serif;
$font-size-default: 17px;
```

**Mixins**

Lets imagine you have 3 different divs, each with custom styles. You want them
all to have the same font style, but (for whatever reason), they cannot inherit
this from a parent.

The "dumb" solution is to just add:

```
font-family: $sans-serif;
color: $font-color;
font-size: $font-size-default;
```

To each selector. This is repetitive, and in the future, we'd need to make
changes in 3 different places. Instead, we can create a _mixin_:

```
@mixin withSansSerif($size) {
	font-family: $sans-serif;
	font-size: $size;
	color: $font-color;
}
```

Now, we can just put this line in each div:

```
@include withSansSerif(17px);
```

To include the styles. Mixins are handy little macros - they can even take
parameters!

**Nesting**

One of my favourite Sass features is nesting. Instead of littering
`blockquote .author` or `ul li` around your code, you can give the styles
_mental context_ (by associating nested styles with their parents).

For example:

```
nav {
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
  }
  &::hover {
    background-color: green;
  }
}
```

Will compile to:

```
nav ul {
  margin: 0;
}
nav li {
  display: inline-block;
}
nav::hover {
  background-color: green;
}
```

## Ownership, Borrow-Checking & Variable Lifetimes

In most recent language, we have two options for memory management:

1. Do it manually (`malloc` and `free`). Prone to bugs, annoying, but maximum
   flexibility.
2. Automatically, through garbage collection. Slower, requires a larger
   runtime.

Rust wants to minimize its runtime overhead, and so they decided not the
include a garbage collector. Interestingly, the programmer is not forced to
call `malloc` or `free`. How is this possible?

Rust does it through something called _ownership_ and _variable lifetimes_.
Ownership is a finicky beast, but it becomes natural over time. Consider the following snippet:

```
fn main() {
  let message = String::from("Hello world!");
  let new_message = message;
  println!(message); // ERROR!
}
```

This fails! It _won't even compile_. This is frustrating at first - why do it
be like this?

First, this is more efficient. `String::from()` puts the `string` data on the
heap, and returns a smart pointer to the memory location. `new_message` then
copies the _pointer_, not the data itself. The data is never copied.

The _ownership_ of `message` is transferred to `new_message`. To make this
compile, change the `println!` statement:

```
println!(new_message);
```

But forget speed. That stuff is basic pointer concepts. The main motivation
behind ownership is _safety_. Imagine if the `message` data was dropped (freed)
before `println!` used it:

```
fn main() {
  let message = String::from("Hello world!");
  let new_message = message;
  message.drop();        // Free memory
  println!(new_message); // Accessing freed data!
}
```

`println!` would be accessing unknown data. Strict ownership rules avoids these
errors. An un-owned variable is automatically freed by the Rust runtime. This
has handy implications within standard programming, but also enables static
compile-time guarantees about concurrency, which is fantastic.
