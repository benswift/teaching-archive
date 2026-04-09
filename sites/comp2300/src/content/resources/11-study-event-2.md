---
title: Study Event 2
summary: Questions and other content from Study Event 2
published: false
---

# Functions

1: The following function is technically not incorrect, but could do with a bit
of cleaning up.

```ARM
@ --arguments--
@ r0: base address
@ r1: offset
@ r2: bit index
set_bit:
  @ save the previous position
  push {lr}

  @ calculate address (base + offset), store in r0
  add r0, r1

  @ load current register value, store in r1
  ldr r1, [r0]

  @ align the "1" bit into the correct slot in r4
  mov r3, #1
  lsl r3, r2

  @ set the desired bit
  orr r1, r3

  @ write the data back
  str r1, [r0]

  @ return to where we came from
  pop {lr}
  bx lr
```

2: What would we need to add to the following macro in order to transform it
into a function?  What would be the trade-off for turning this into a function,
as opposed to 

```
.macro delay
delay\@:
  subs r0, #1
  bmi end_delay\@
  b delay\@
end_delay\@:
.endm
```

# Code and data

We've talked a lot about code and data -- in particular, that "code is data" and
"data is code".  But even though they may be represented as ones and zeroes,
on a semantic level, there is most certainly a difference between the "text",
which is executable, and the "data", which is modifiable.

- What do the `.data` and the `.text` directives actually do?
- What is the stack part of?  How do we know this?
- What is the maximum size of the stack?  What might happen if the stack gets
  too big?
- Where is the "0x300" stored in the `mov r0, #0x300` instruction?  What about
  `ldr r0, =0x300`?  What's the difference between the different
  representations, and when should each one be used?

# Data types

There are many different (and slightly misleading) categorisations of the
different types of data that we can represent.  Nevertheless, for this study
event only, we will explore some different categorisations of data types.

Recall that, when we strip away all else (and reach the level of assembly
language), there is really nothing interesting or unique about the
_appearance_ of any kind of data.  It all looks the same, as a sequence of
bits and words in memory.  So in order to manage different kinds of data, we
will need to be clever in one, or possibly both of the following:

- the representation of data (in order to distinguish different kinds of data
  from each other)
- the conventions of working with the data (so that you can assume different
  properties of the data)

## Variation of Length

The classic variable length data type is the list.  Write a function that takes
a list of word-sized unsigned integers and calculates their sum.  You will need
to think about the following:

- How will you represent the list?  How will you know how long it is?
- How will you pass in the list as a parameter to your function?

If you need inspiration: consider the `morse_data` table in lab 7.

## Variation of Kind

In many programs, it makes sense to have "rich" kinds of data types, which can
represent multiple possibilities.  For each of the following data types,
consider an implementation of them, possibly writing it out.

- **Option types**: represent a value that either exists, or does not exist and
  has no useful value.  Task: design a type that encapsulates unsigned
  integers, but also includes the value of NaN, "Not a Number"
  (e.g. the result of n/0).
- **Variant types**: represent a value that can appear in multiple forms.  Task:
  design a type that represents length, which might be in centimetres, or in
  inches.  Also write a function which converts between the two (1cm = 0.39in).

You will need to think about the following:

- How much space will you require?  How much extra space is needed, compared to
  the "base" data type (e.g. the underlying unsigned integer)
- How will your function tell the different kinds of data apart?

Special note: it may be tempting to represent the "empty" variant by using
a value of 0.  Remembering that there's nothing special about data in assembly
(or any very low-level language), and we can interpret any block of memory
however we like.  What might the ramifications be if the memory is interpreted
the wrong way?

<!-- purpose: illustrate the difference between stack-allocated and
heap-allocated memory.  There's nothing really special about each one (they both
exist in RAM, there's no special CPU stack in our case), but memory lookup is
expensive! -->

<!--
# All your base

(intended to be a recap of the "LCD" question from the midsemester exam)

- conversion of base
- interface with artificial hardware
- analyse some excessive function code
-->
