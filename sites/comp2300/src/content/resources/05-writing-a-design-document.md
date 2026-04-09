---
title: Writing a design document
summary: "tips on writing your design document for Part 2 of each assignment"
---

<div class="info-box" markdown="1">

Here's the [**TL;DR**](https://www.lifewire.com/what-is-tldr-2483633)

- you document should answer the question "why?"; after reading it, your tutor
  should understand not just *what* you did but *why* you did it that way
- this is a formal piece of academic writing---treat it professionally and with
  respect (and don't hack something together at the last minute)
- for the love of all that is good in this world **do not explain your code
  line-by-line**

</div>

Here are some helpful tips for writing your design document (DD). You'll need to
write a DD for part 2 of each assignment (so three in total) so it's worth
spending a bit of time thinking about how to do it well.

It's important to mention right at the start that this isn't a step-by-step
guide (or template) for getting the "right answer" for the DD part of the
assignment ([there's no one right answer, anyway](/deliverables/01-synth/#dd-marking-criteria)). Instead, it's a bunch of
things to think about (and warnings about how to avoid common mistakes) when
writing your DD.

There are also many things you might want to put in your DD that are not
mentioned here, and that's fine. This page is aiming to guide you if you're
struggling with this document and it should be considered a starting point
and/or a sanity check.

Finally, this isn't a checklist---you can't point to anything on this page and
say "I did *X*, so I should receive full marks". That's [not how this sort of
thing works](/deliverables/01-synth/#dd-marking-criteria). However, if you ignore the advice provided here, your
tutor may point you to this page to explain why you didn't do as well as you
hoped---so that you can learn for next time.

## Tone & style

Every piece of writing that you submit in your university career should be
considered a professional piece of writing. As such, there are a few things that
you should always do. You must use correct spelling (use a spell checker!) and
grammatically correct sentences.

Throughout your document you may discuss many distinct things. Do not submit a
giant wall of text. Break your document into paragraphs and break those
paragraphs up into sections (with section headings) which make sense.

Overall, the main point is that if the tutors cannot read your document, or
cannot understand what you are trying to say, than they cannot fairly assess you
(and you'll probably get a bad mark).

## Structure

You should always include the following in all written assessment:

- title
- your full name and university ID
- date (probably best to go with the submission date)

Apart from that, it doesn't matter so much what the structure of the DD is, the
purpose of the document is to communicate to your tutor what you've done. You've
got a lot of creative freedom in Part 2, but this means that when your tutor
opens your assignment they don't know what they're looking at/listening to. Your
job in the design document is to show/tell them the story of you've done, how
you did it, and why it's interesting.

Some *ideas* for sections (again, this is not a template!):

- **Overview**: it's usually a good idea to provide a short overview section
  which gives a "big picture" view of what you've done
- **Implementation**: how did you do what you did? This description should be at
  an appropriate level of detail---don't be too
  vague (too high-level), but don't just explain your code line-by-line
  *anywhere* in your document (too low-level)
- **Reflection**: what did you learn? What was tricky/interesting/confusing?

Remember that you're telling a story in your DD---it can't just be a list of
bullet points.

## What did you do?

Your DD must include a description of the signal your program generates, to a
level of detail where the reader could implement a program to produce the same
waveform themselves without seeing any of your source code. It's not sufficient
to just say "I generated a triangle wave." What is a triangle wave? What
properties does it have (amplitude, frequency, shape) and what values did you
use for these properties? What are the effects of these values (amplitude
affects volume, frequency affects pitch, the shape of the wave compared to a
square wave affects the tonality)?

You should include information about what you did only if it's relevant to the
overall story you're telling. For example, you might choose to include a
discussion of a failed approach you tried initially and why it didn't work.
However, including a "debugging diary" (I did this and I got that error, then I
fixed it and got this new error, etc.) is a bad idea, because most of that
process is irrelevant to the overall point you're trying to make. If in doubt,
ask yourself: would the next part of my document make no sense if this were left
out? If the answer is yes, then (maybe) it's worth keeping in, but otherwise
it's probably not relevant (in most cases the debugging process you went through
isn't relevant).

## How/why did you do it?

**I cannot stress this enough**: do not explain your code line-by-line in your
DD. Your code is *already* the best line-by-line explanation of your code that
you can possibly give. Instead, consider the specific parts of your
program---what design decisions have you made in structuring/organising it the
way you did?

You must motivate and explain the choices you made when your wrote your program.
Ask yourself the [5 whys](https://en.wikipedia.org/wiki/5_Whys): why? why? why?
why? why? And make sure you clearly distinguish between what is your opinion and
what is fact. If it is possible for your tutor to disagree with what you have
said, it is probably opinion. It's ok to state opinions in your DD, but it's
important to back things up with facts and evidence wherever possible.

For example, did you use macros instead of functions? If so, why? What are the
advantages/disadvantages of a macro instead of a function?

> Macros can be faster than a function because they do not need to push/pop to
> the stack.

This is a fact.

> Macros are harder to read.

This is an opinion. You must back it up with facts to provide a reason for that
opinion, e.g.

> Macros require `@` and `\` characters everywhere, which adds "visual noise" to
> the code

Again, notice that it *doesn't* say:

> I wrote the macro `X` and it does Y by accessing variables in registers r0 and > r2...

This doesn't tell your tutor anything that they won't know from looking at your
code. It does *not* explain why you wrote macro `X`. Do not explain your code
line-by-line!

## Pictures, graphs & diagrams

If you use pictures, graphs or diagrams (which is encouraged!) then make sure
they're either [vector-based](https://en.wikipedia.org/wiki/Vector_graphics),
or, if you need to include [raster
images](https://en.wikipedia.org/wiki/Raster_graphics) (e.g. png, jpeg) make
sure they're at a high-enough resolution that they don't look ugly and pixelated
when printed at a4 size.

Do not hand-draw a diagram and include a photo of it in your DD. That's not
professional and shows a lack of care about your work.
 
## Code snippets

Even though you should not explain your code line-by-line, this does not mean
that you cannot include code snippets. However, you should only include a code
snippet if you have a good reason to, which might include:

- The code is from a "previous attempt" at writing your program that you want to
  discuss. Because it is from a previous attempt it is not is the code part of
  your submission so including it in the report makes sense.
- You want to show an alternative implementation. For example, you read & wrote
  some values to memory for robustness but you could also (in this case) have
  kept everything in the higher registers (for performance).

If you do include a code snippet, do not include it as a low-resolution
screenshot of your code. It must be clear and easy to read, even when zoomed in.
Ideally, you should include the code as text in your document in a monospace
font (Courier New is nice, Source Code Pro if you're a hipster). Make sure you
highlight it with different colours to make it readable.

## Be clear & specific

> This function is very important.

What does this sentence actually mean? What does "very" mean? What does
"important" mean? Chances are not a single line of code can be removed from your
submission (otherwise what is it doing there in the first place?) and so every
line of your code is important. So the sentence doesn't actually say anything.

A better approach is to give a more precise explanation of the role of that
function in your program, and what you mean by "very important". Ask yourself:
why do I think it is important? By "very", do I mean it is comparatively more
important than other functions? Why is it more important? These are the
questions that you can answer that still address the idea that a function is
"very important" but actually tell your tutor something meaningful.

## What questions should I answer in my DD?

Here are a few questions the tutor might be thinking of when they come to your
design document (this is *not* a template for your document---just some
suggestions).

1. what waveform does your program generate? why did you decide on this one?

2. how is the assembly code structured---what's the basic algorithm for
   generating this waveform?

3. what are the interesting/tricky/confusing parts of your algorithm or approach
   (remember to include comments in your source code---then you can more easily
   refer to them in the design document)

4. is there anything you'd do differently if you knew more about assembly
   language & programming your discoboard?

5. what did you learn during the process?

I hope that's helpful to get you started. If you have questions, ask early on
[the COMP2300 forum]().
