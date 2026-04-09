---
title: Website style guide
---

This is a style guide for authors of the website, it's not visible to students
(although there'd be no harm in making it visible in the future). As we have
more folks contributing to the website, it's nice to have this stuff written
down so that we can maintain a consistent style across the site.

:::warning
There are parts of the current site which don't follow this style guide---so if
you see them (and can think of easy ways to change them to bring them in line
with the style guide) then feel free to do so.
:::

If you've got suggestions for the style guide *itself*, then probably best to
discuss with Ben first. It's certainly possible to make tweaks here, but we want
to make sure that the content and the style guide stay in sync as much as
possible, and having Ben as a gatekeeper will hopefully help to manage this.

Finally, none of this stuff is *that* important. No-one's gonna die if you don't
follow it exactly. But it's nice to be consistent about it, and so we write this
stuff down.

## Product names

This is mostly about capitalisation of these specific product names.

### Git

Use "Git" when talking about the version control tool in general, and `git` when
referring to executing specific commands (at the CLI) with the `git` binary.

:::info
There are *heaps* of places in the site where this rule isn't followed (and the
lowercase "git" is used where it should say "Git" according to this style
guide). If you see any of these, feel free to fix them up, but don't stress
too much about it---we can fix it gradually.
:::

### GitLab

Make sure you use the proper GitLab capitalisation (capital G, capital L).

When referring to the [CECS GitLab server](https://gitlab.cecs.anu.edu.au)
specifically (i.e. the one where the students submit all their assignments) then
try to refer to it as "the GitLab server" rather than just "GitLab" unless it's
really clear from the context.

### javascript

All lowercase "javascript" is preferred, and the abbreviation "js" is fine as
well.

None of the cool kids call it "JavaScript" anymore.

## Voice

Prefer the second person "you" rather than the inclusive "we" (this comes up a
lot in lab content). Here's an example:

"Finally, **you're** going to push your changes to the GitLab server" is better
than "Finally, **we're** going to push your changes to the GitLab server".

## Formatting

### Whitespace

Leave spaces before *and* after headings in markdown content, e.g.

```md
... here's the end of some body text.

### Here's a new heading

And here's some more body text.
```

Same rules (leave spaces before and after) goes for all content, e.g. source
code blocks, etc.

### Line wrapping

Hard wrap lines to 80 chars (this is the default in Emacs/Spacemacs, if that's what
you're using). If you're in Emacs/Spacemacs you can easily do this for the
current paragraph with `M-q`.

### Code blocks

Use the "three backtick" code block style (which comes from GitHub-flavoured
markdown, but is supported by the markdown renderer we're using). Specify the
programming language by name wherever possible, e.g.

```javascript
let x = 10;
let my_array = [1, 2, 3];
```

### Letter case

Use [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)
(e.g. `this-is-the-name`) rather than snake case (`this_is_the_name`) or camel
case (`ThisIsTheName`), except where that leads to syntax errors (e.g. C doesn't
support kebab case, because it parses the hyphens as minus signs).

This also goes for naming of Git repos, filenames in template repos, etc.

### Keyboard shortcuts

When describing keyboard shortcuts in prose, use backticks (just like inline
code) and use uppercase for letter keys but lowercase, abbreviated names for
modifier keys. e.g.

"Save your work with `ctrl+S`" rather than "save your work with `Control+s`" or
some variant.
