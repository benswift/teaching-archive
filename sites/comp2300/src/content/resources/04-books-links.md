---
title: Books, links and other good things
summary: Useful resources for this course (and beyond)
---

## [COMP2300 ARMv7 cheat sheet](/assets/manuals/ARMv7-cheat-sheet.pdf) {#cheat-sheet}

Sometimes it's nice to not have to keep flipping back and forwards through the
whole reference manual---this cheat sheet covers all you'll need for this
course. It's a bit terse (so that everything fits on two pages), and don't
stress out too much if you don't understand it all right at the beginning of the
course. Still, it's really important that you learn to read and *understand*
this cheat sheet (including what all the different special characters mean in
the syntax & semantic sections). You'll get lots of practice doing this in the
labs, so feel free to ask any questions you have there.

## [ARM®v7-M Architecture Reference Manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf) {#armv7-reference}

This is pretty readable as far as reference manuals go---and it's the official
manual for the ARM Cortex-M4 CPU in your discoboard. Make sure you know how to
search & bookmark this document in your pdf viewer of choice.

## [STM32L476G Discovery *Reference* Manual](/assets/manuals/stm32-L476G-discovery-reference-manual.pdf) {#discoboard-reference}

This **reference** manual contains all the nitty-gritty details about your
discoboard. We'll step you gently through various parts of it as appropriate,
but if you want to get the full picture then this reference manual is the place
to go.

## [STM32L476G Discovery *User* Manual](/assets/manuals/stm32-L476G-discovery-user-manual.pdf) {#discoboard-user}

Surprisingly, the discoboard **user** manual isn't that helpful---it's more like
an advertising pamphlet which just lists the features of the board, but in
general to use these features you need to read the reference manual. Still,
there are some useful tidbits in here, like the diagram of which GPIO pins are
connected to which of the built-in peripherals, e.g. the LEDs and the joystick.

## [Introduction to Computer Organization](http://bob.cs.sonoma.edu/IntroCompOrg-RPi/intro-co-rpi.html) by Robert G. Plantz {#plantz}

This (free, online-only) book is for a similar course at a different university.
There are a couple of reasons why we don't use it as an official text for this
course, but it's still a good resource if you're looking for another angle in
understanding this stuff.

The earlier chapters have some good material on the logic gates material that we
cover at the beginning of COMP2300, although there's not as much content
covering the later COMP2300 material (interrupts, concurrency, etc.).

One final point---the book is based on a different board (a raspberry pi) which
uses a different ISA to your Discoboard. It's an ARMv8 chip, although most of
the code samples in the book are for the 32-bit version of this instruction set
(AARCH32) which is mostly compatible with the ARMv7 ISA your Discoboard
understands, but whenever you're looking at that content it's worth keeping in
mind that it might not work as-is on your discoboard.

## [GNU Assembler documentation](https://sourceware.org/binutils/docs/as/index.html) {#gas} 

The
[System Workbench IDE](/labs/01-intro/index.html#system-workbench) that
you'll use in this course uses the **GNU Assembler** (often abbreviated to
**GAS**) to actually turn your assembly code into machine instructions. So, if
you're having syntax troubles with your programs then the online docs for GAS
are a good place to look. A few specific parts of the documentation you might
find helpful are:

- [Symbols](https://sourceware.org/binutils/docs/as/Syntax.html#Symbols)
- [Syntax](https://sourceware.org/binutils/docs/as/Syntax.html#Syntax)
- [Assembler directives](https://sourceware.org/binutils/docs/as/Pseudo-Ops.html#Pseudo-Ops)
- [ARM-specific directives](https://sourceware.org/binutils/docs/as/ARM-Directives.html)

## [*Patterson & Hennessy* - Computer Organization and Design (ARM edition)](https://www.amazon.com/Computer-Organization-Design-Interface-Architecture/dp/0128017333) {#patterson-hennessy}

This textbook is a good one, the authors really know their stuff and this book
has been a standard of university-level CS courses for a long time. However,
it's not the set textbook for this course for a couple of reasons:

- it covers much more material than we'll cover in COMP2300
- it uses a different version of the ARM instruction set (v8 rather than our v7)
  so the code examples would require some (or a lot) of tweaking to run on your
  discoboard

Still, if you want to understand the *concepts* it covers then it's worth trying
to find a copy in the library.

## [Davespace ARM tutorial](http://www.davespace.co.uk/arm/introduction-to-arm/) {#davespace}

This online reference material is a bit more chatty than the official arm
reference, and has some more explanatory text. It does mention some stuff that
we won't cover in this course (and it's not specific to the CPU on your
discoboard), so I won't refer to it often. Still, it might be useful if you're
looking for alternative ways of explaining things, or just want to dive deeper
in to ARM assembly programming.

## [Godbolt compiler explorer](https://godbolt.org/) {#godbolt}

The Godbolt compiler explorer is an interactive online tool for turning C code
into assembly instructions using the `gcc` compiler. It has support for various
architectures, including ARM. To see the code which would be generated for a
Cortex-M processor like your discoboard, make sure you select the `ARM GCC 5.4`
compiler (or similar) and specify the `-mcpu=cortex-m4` compiler option.

This tool doesn't give you anything you can't technically pull out yourself with
`gcc` and a few commandline shenanigans, but it has a few nice touches like
using colour-coding to show which bits of C match up with which bits of assembly
code, and a few other things like that.

:::tip
We won't be talking about C in detail in this course, so this tool is mostly
useful if you want to explore how compilers like `gcc` turn code in higher-level
languages into assembly code (and sometimes to see how you can do it better
yourself!).
:::

<!-- ### Macros -->

<!-- (https://community.arm.com/docs/DOC-9652) -->
