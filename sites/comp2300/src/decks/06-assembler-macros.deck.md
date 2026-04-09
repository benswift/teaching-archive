---
title: "Assembler macros"
---

<!-- _class: banner -->

# COMP2300


# Week 6: Assembler Macros

## Outline

- [Godbolt compiler explorer](#godbolt-compiler-explorer)
- [assembly macros](#what-are-macros-for)

## Godbolt compiler explorer

<https://godbolt.org/>: a super-cool interactive resource for exploring stack
frames (and code generation in general)

A few tips:
- in the compiler select dropdown, select one of the `ARM gcc` options
- in the *Compiler options...* box, try `-O0` (unoptimised) vs `-O3` (optimised)
- try modifying the C code on the left; see how the asm output on the right changes
- remember the [stack frames](/lectures/05-functions/#function-prologue-epilogue)!

---

<!-- _class: impact -->

just a short topic today

---

![bg](./assets/all/cpm-rain.jpg)

## Macros are for automatically copy-pasting code

---

![bg](./assets/week-6/running-with-scissors.jpg)

## Like this...

## `as` macro language

The macro language is defined by the [assembler](/lectures/02-alu-operations/#assembler) (`as`)

Two steps:
- define a macro (with `.macro`/`.endm`)
- call/use a macro (using the name of the macro)

The assembler copy-pastes the macro code (replacing parameters where present)
into your program *before generating the machine code*

## General macro syntax

```ARM
.macro macro_name arg_a arg_b ...
  @ to use the argument, prefix with "\"
  @ e.g. adds r0, \arg_a, \arg_b
  @ ...
.endm
```

## Example: `swap`

```arm
@ swap the values in two registers
@ assumes r12 is free to use as a "scratch" register
.macro swap reg_a reg_b
  mov r12, \reg_a
  mov \reg_a, \reg_b
  mov \reg_b, r12
.endm
```

## Calling the `swap` macro

If you use `swap` in your assembly code

```arm
swap r0, r3
```

the assembler sees it an "expands" it to

```arm
mov r12, r0
mov r0, r3
mov r3, r12
```

it's **exactly** like you had used this code in your `main.S` file in the first place

---

<!-- _class: impact -->

the CPU doesn't know **anything** about your macros

## Recap: if statement

Remember the [best if statement](/lectures/04-control-flow/#the-best-if-statement)

``` arm
if:
  @ set flags here
  b<c> then

  @ else
  b rest_of_program

then:
  @ instruction(s) here
  
rest_of_program:
  @ continue on...
```

## An `if` macro

```arm
.macro if condition_code condition then_code else_code
  \condition_code
  b\condition then

  \else_code
  b end_if

then:
  \then_code

end_if:
.endm

@ usage
if "cmp r1, r2", eq, "mov r3, 1", "mov r3, 0"
```

## Things to note

Macros can "splice" parameters into the middle of instructions, e.g.
`b\condition` becomes e.g. `beq` or `blt`

Whole instructions can be treated as a single macro parameter (e.g. `"cmp r1,
r2"` as the `condition_code` parameter) as long as they're surrounded by double
quotes (`"`)

This is a blessing and a curse!

## The `\@` macro "counter" variable

The `\@` variable contains a counter of how many macros executed so far which
you can use in your macro output

```arm
.macro if condition_code condition then_code else_code
  \condition_code
  b\condition then\@

  \else_code
  b end_if\@

then\@:
  \then_code

end_if\@:
.endm
```

## A basic `for` macro

```arm
.macro for register from to body
  mov \register, \from
for\@:
  cmp \register, \to
  bgt end_for\@
  \body
  add \register, 1
  b for\@
end_for\@:
.endm

@ usage
for r1, 1, 100 "add r3, r1"
```

## Advanced macro syntax

- optional parameters (`arg1=500`)
- check if parameters are present (`.ifb`)
- conditionals (`.if`) and loops (`.loops`)
- macros can be recursive

Read the [docs](https://sourceware.org/binutils/docs-2.24/as/Macro.html)

## Macro gotchas

- hard to debug (can't step through)
- need to be careful with names (e.g. clashing labels)
- for [labels](/lectures/03-memory-operations/#labels-and-branching) as parameters, use `\()` as a separator, e.g.
  `\labelname\():` (it gets removed, but stops the assembler thinking the `:` is
  part of `labelname`)
- they might generate a lot of instructions
- the documentation kindof sucks

---

![bg](./assets/all/cpm-beach.jpg)

## Debugging with the disassembler

If you really need to see what instructions your macro is generating, use the
disassembler

Don't forget the `.type <func_name>, %function` and `.size <func_name>,
.-<func_name>` directives

---

<!-- _class: impact -->

they look like functions in a higher-level language---**don't be fooled**

---

<!-- _class: talk-box -->

## talk

How would you explain the difference between functions and macros to your
Grandma?

---

![bg](./assets/all/cpm-rain.jpg)

## Further reading

[`.macro` **as** directive docs](https://sourceware.org/binutils/docs-2.24/as/Macro.html)

[Useful assembler directives and macros for the GNU
assembler](https://community.arm.com/processors/b/blog/posts/useful-assembler-directives-and-macros-for-the-gnu-assembler)
on community.arm.com

---

![bg](./assets/all/charles-ipads.jpg)

## Macros by request

---

![bg](./assets/all/cpm-stairs.jpg)

## Questions?
