---
title: "Week 3: maths to machine code"
summary: "Translating mathematical expressions into assembly sequences & an introduction to branching"
templateRepo: https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-lab-3
---

## Outline

Before you attend this week's lab, make sure:

1. you understand how simple assembly instructions are executed by the
   discoboard (and can read the cheat sheet to figure out what they do)
2. you're able to follow the execution of your program in the debugger, and
   inspect registers to see what's going on
3. you have read the laboratory text below

In this week's lab you will:

1. translate simple mathematical expressions into sequences of assembly
   instructions
2. watch the status register and monitor the condition flags
3. branch (jump) around in your program, including conditional branches

Useful reference material:

- [ARM assembly cheat sheet](/assets/manuals/ARMv7-cheat-sheet.pdf)
- [ARM®v7-M Architecture Reference Manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf)

And here's the conversion widget again, because it always comes in handy:

## Introduction

[Hearthstone](http://us.battle.net/hearthstone/en/) is a card-game-style
computer game where you kill monsters and win internet points, and it seems to
be pretty popular with the kids these days. In this week's lab, you're going to
create our very own game---a (much) simplified version of Hearthstone that we'll
call **Hearthpebble**.

:::tip
In this lab you'll be working in pairs, so say hi to the person sitting next to
you---they'll be your partner for this lab. Ask them what their favourite card
game is, and whether they've ever thought of writing a computer-program version
of it?
:::

You'll also submit today's lab code a bit differently. One of you (doesn't
matter who) will submit the code you worked on together---this person should
make a note at the top of their submission with both your names. The other
partner's submission should just say e.g. "I worked with _Gladys_ and she
submitted our code under her name". If there are an odd number of students in
your lab, then your tutor will put one of you into a group of three.

To help us keep track of who's working with who, the [lab 3
template]() contains a [yaml](/resources/01-faq/#yaml) file called `statement-of-cooperation.yml`,
although it's "blank". This is where you'll add (and commit) yours and your
partner's info. If you're in a group of three, you'll have to add a couple of
extra keys to the yaml file for the "third" partner. Here's an example of what
it should look like after you've added the info:

```yaml
name: Alfonso McGuff
uid: u9876543

partner_name: Gladys Jones
partner_uid: u1234567
```

Fork & clone the [lab 3 template]() to your machine and
let's get started.

## Exercise 1: characters and health potions

```ARM
.syntax unified
.global main

main:

@ your code goes here

@ a simple infinite loop
end_loop:
  nop
  b end_loop
```

:::tip
But before you write any more code, think: what are the _minimum_ features that
you'll need to put in your program to create a game like this?
:::

At the very least, the game needs:

1. a **character**, with some number of hit points
2. an **action** that our character can perform

:::tip
This stuff is so common in computer games that you probably don't even think of
it, but discuss with your partner: using what you've learned so far about
programming your discoboard, how might you keep track of your character's hit
points (HP), and how could you represent an action in your program?
:::

Given what you've covered so far, you probably decided to use a **register** to
store the character's HP---good choice. Remember in last week's lab you used
registers and instructions to perform your `2`+`2` operation? This is the same
idea. From the computer's perspective the register is just a bunch of bits
(well, a bunch of logic gates which store a bunch of bits) but as long as _you_
know that that particular register really represents your character's HP and
treat it accordingly, then your game will play just fine.

:::info
With your partner, write a program to store the character's HP in the register
`r1` with an initial value of `100`. In addition, fill out the
`statement-of-cooperation.yml` file in the template. Commit the files and push
everything up to GitLab.
:::

You're also hopefully by now starting to get the hang of the way things can go
wrong in assembly programming. For example, if you try to write an instruction
which branches to _itself_:

```arm
my_label:
  b my_label
```

then your board will stop talking to you (that's why we put a `nop` in the
middle). And if you set a breakpoint on a label (like `my_label` above) then
it may end up breaking one instruction _later_ than you'd expect (this is a gdb bug). All of this stuff is a bit painful at first, but you get the hang of it.

If all else fails, un-plug and re-plug your board (but once you get used to the
pitfalls you shouldn't have to do that too often).

## Exercise 2: dealing with condition codes {#condition-codes}

Now that you're storing the HP, here's the first action in the game:

- **healing potion**: add 50HP (hp := hp + 50)

With your partner, write an assembly instruction for this action. Remember to
look at the [cheat
sheet](/assets/manuals/ARMv7-cheat-sheet.pdf)---nobody expects
you to recall this stuff perfectly from memory.

Step through your program---what's the value in the hit point register after
your "action" instruction has occurred? Does that seem right?

At this point, the Hearthpebble world only has one action, so the only way for
the game to proceed is to keep performing that action. We can do that with a
**branch** instruction: `b` (hint: check page 2 of your cheat sheet). This
instruction tells your discoboard to "branch" (sometimes called a jump on other
CPU types) to a different part of the code. You can specify the "destination" of
the branch in a bunch of different ways, including using a label, or a constant
value (if you know exactly what address you want to go to ahead of time) or even
the address in a register. If you've wondered how to get your program to do
something other than just keep following the instructions from top to bottom,
branching is the answer.

Add a label and a branch instruction to modify your program so that the
character keeps drinking healing potions (one after the other) indefinitely.

Hit the continue (play) button in the debug toolbar and let the program run for
a while, pausing every now and again to check the players HP value---what do
you notice?

:::tip
What do you think is going on here?
:::

How can you deal with this problem? The answer lies is in the program status
register in every ARMv7 CPU (including our little discoboard). You can see it in
the _cortex registers_ viewlet in VSCode under `cpsr`:

![Current](./images/lectures/week-2/cpsr-viewlet.png)

Remember we talked about these status flags in the [week 2
lectures](/_lectures/02-alu-operations/#program-status-register) (go and have a look if you need to refresh your
memory).

[This stackoverflow post](http://stackoverflow.com/a/24002847/1510867) also has
a nice "clock" animation to show how all the condition codes in the status
register work.

When the discoboard executes any instruction with an `s` suffix (e.g. `adds`) it
updates these status flags according to the result of the operation. That's all
the `s` does---`add` and `adds` will leave the exact same result in the
destination register, but `adds` will update the flags to leave some
"breadcrumbs" about the result (which can be helpful, as you'll soon see).

In addition to this, if you look at the _Tests_ section of the
[cheat sheet](/assets/manuals/ARMv7-cheat-sheet.pdf) then
you can see that there are some instructions specifically used to update the flags without
changing the values in the general purpose registers (`r0` - `r12`).  
For example, `cmp r0, 10` is the same as `subs, r0, 10` except that the value in r0 is left
untouched.

:::info
Sometimes the status flags are called status bits, or condition flags, or
condition codes, or some other combination of those words. They all refer to the
same thing---the bits in the program status register.
:::

It's time to see this in action. Go back to your "healing loop" program from
Exercise 1 and step through, but this time keep an eye on the `cpsr` register.
As a tip, you probably want to bump up the "healing amount" to something like
`0xF000000` so that it doesn't take you a million steps before you overflow :)
What do you notice about the status register bits when the HP register switches
to a negative (when viewed as a signed decimal number) value?

With your partner, write a series of simple programs (e.g. `mov` some values
into registers, then do an arithmetic operation on those registers) to set (a)
the negative flag bit (b) the zero flag bit (c) the carry flag bit and (d) the
overflow flag bit. Your program should look like this:

```arm
@ set the negative flag

... your instruction(s) go here ...

@ set the zero flag

... your instruction(s) go here ...

@ set the carry flag

... your instruction(s) go here ...

@ set the overflow flag

... your instruction(s) go here ...
```

:::info
If you're getting bored of stepping through every instruction, don't forget you
can set breakpoints, these control exactly where your debugger will pause after clicking
'continue' (the green button). You can do this by clicking in the left-hand
“gutter” (or margin) of the code view. You should see a little red dot appear:  
![A](./images/lab-1/vscode-breakpoint.png)
:::

:::info
Push up your program for Exercise 2.
:::

:::tip
The program status register `cpsr` is a bit different from the other registers,
and you can't use it in all instructions. You can access it with special
instructions, though---check out `MRS ` and `MSR` in the [ARMv7 reference
manual](/assets/manuals/ARMv7-M-architecture-reference-manual.pdf).
Can you think of a way (or an addition to your program) to make your life easier
in reading the program status register?
:::

It might seem like this carry/overflow stuff isn't worth worrying about
because it'll never happen in real life. But that's not true. In 2013 the actual
Hearthstone game was [found to contain an integer overflow
bug](https://us.battle.net/forums/en/hearthstone/topic/9792930444). It can cause
more serious problems too, like literally [causing rockets to
explode](http://www.bbc.com/future/story/20150505-the-numbers-that-lead-to-disaster).
So understanding and checking the status flags really matters :)

## Exercise 3: enriching our game world

At the moment, Hearthpebble is pretty boring. Let's add
[mana](<https://en.wikipedia.org/wiki/Magic_(gaming)>) and stamina attributes to
the character---pick a couple of registers (`r2` and `r3` are probably good
choices) and initialise them to some values. Pick some values which seem good to
you, you're the game designer now!

Even these small additions open up some interesting new actions, for example:

- **fireball**: remove 20HP
- **frenzy**: remove 20HP, but add 40 stamina
- **magic poison**: do _double_ the character's mana attributes in damage (hp := hp - 2 \* mana)
- **strength from weariness**: (hp := hp + (mana - stamina)^2)
- **eye of Zardok**: (stamina := (hp \* stamina) / 100; mana := (mana / 16)^3)

Write the assembly code for each of these actions.

Note that these ones (unlike the simpler actions from the previous section)
might require more than one instruction, so feel free to use whitespace and
comments (any text on a line following the `@` character is a comment) to make
things clearer. You can use whatever registers you like, but make sure that the
**destination** register of each instruction isn't already holding something
important (like your HP!). For more complex mathematical expressions, you need
to break it down into smaller steps. Use a pencil and paper if that helps.

Now, create _at least_ one action of your own. Give it a name, figure out what
it does to the game state and implement it in assembly code.

:::info
With your partner, submit your program with your new action---describe exactly
what it does (give it a story!) in a comment. Remember that one of you should
submit the program, and the other should just leave a note saying who your
partner is and where to find your submission.
:::

## Exercise 4: enter player 2

You've now got the building blocks for Hearthpebble in place, but there's still
one thing clearly missing---an opponent to play against! To add a second player
you'll have to set 3 more registers aside to hold the second player's health,
mana and stamina. Be careful about which registers you use---make sure that any
of the "action sequences" don't accidentally clobber player 2's stuff. You can
make the structure of the code by adding some labels to the code, something
like:

```ARM
main:

player_1_init:
@ player 1 init code

player_2_init:
@ player 2 init code

player_1_actions:
@ player 1 actions code

player_2_actions:
@ player 2 actions code
```

To make the 2-player version of the game work properly, you'll really need to
use the branch (`b`) instruction. Your program should initially execute the init
instructions (first for player 1, then for player 2) and the 'ping-pong' between
the player 1 and player 2 actions until one of the players is dead. If you're
doing lots of copy-pasting of the same (action) instructions, then you're doing
it wrong!

:::tip
Pair up with your partner and decide on some "house rules", e.g. no actions
which are _too_ powerful. Remember, it's not about winning, but about
_understanding_ what's going on.
:::

Once you've agreed on how your 2-player game will work, create your 2-player
game by filling out the above "code skeleton" with your partner.

Together you can play (run) the program as many times as you like, watching the
all-important HP registers to see how the game evolves. When you've figured out
what the outcome is in the current version of the game, work together with your
partner to find new actions for each other to take so that you end up with
a different outcome.

:::info
Commit and push your 2-player version of Hearthpebble.
:::

## Exercise 5: conditionals and branching

You're probably getting good at watching registers in the register view to
figure out who's winning and who's losing. But that's really the sort of thing
your program should be doing for you automatically. In the final part of this
lab, you'll pick up on the status register stuff we were looking at in step 1 to
find out about conditional execution.

You've seen in lectures (and every time you look at the cheat sheet) that most
of the ARM assembly instructions can be made to execute "conditionally" using a
one or two letter suffix.

:::tip
Discuss with your partner: what does this instruction do? You can look at your
cheat sheet if you like.
:::

```ARM
bne end_loop
```

Go back up to the top of your program (just under the `main` label) and add
the following instructions. Keep the rest of your hearthstone code further down,
as long as this stuff is at the top.

```ARM
movs r0, #100
beq end_loop  @ conditional branch 1
subs r0, #200
beq end_loop  @ conditional branch 2
adds r0, #100
beq end_loop  @ conditional branch 3
```

:::tip
Which of the `beq` instructions do you think will actually trigger the branch to
the `end_loop`?
:::

Then, step through and see what happens. Can you change the condition (i.e.
change the `eq` to something else) to execute conditional branch 2? How about
branch 1? Have a look at the "Condition codes" section of the cheat sheet to
familiarise yourself with all the options.

Delete the above lines from your program and (with your partner) discuss how you
can now use this "conditional branching" behaviour to make Hearthpebble work
like a proper game:

1. at the end of player 1's turn, check if player 2 is dead---if so, branch to a
   `player_1_victory` loop at the end (you'll have to add this in, too)
2. do the same (in reverse) at the end of player 2's turn
3. if both players are still alive at the end of player 2's turn, branch back up
   to the start of player 1's turn and start again

:::tip
Congratulations! Play with your partner, find a new partner if others are
finishing up, try to win, try to lose, try to last for exactly 3 turns, try to
cheat---use your imagination!
:::

:::info
With your partner, submit the final game you played.
:::

## Summary

Congratulations! In this week's lab you learned how to

1. translate maths into assembly sequences
2. structure your code with labels and branches
3. use the status register to only execute branches in certain circumstances

:::info
Make sure you logout to terminate your session, and pack up your board and USB
cable carefully.
:::

<div id="new-template-info-box" class="extension-box" markdown="1">

Using registers to hold all the game state doesn't really scale past two
players. We've just started (in the week 3 lectures) to look at how we can
load and store data in **memory** rather than just in registers.

If you're up for a challenge, try refactoring your Hearthpebble program to
include a [`.data`
section](https://sourceware.org/binutils/docs/as/Data.html#Data) to store some
data in your discoboard's memory (perhaps with more `.word`s). Then you can load
and store the game data (e.g. HP and mana) using the `ldr` and `str`
instructions.

You'll also need a slightly different startup file (`src/startup_stm32l476xx.S`) for
this with a bit of extra code to initialise any static data you're putting in
memory. Clone the [lab 5
template](https://gitlab.cecs.anu.edu.au/comp2300/2019/comp2300-2019-lab-5),
which includes the extra code. Just a heads up: this means on startup you'll
need to step through a bunch more code (or, better yet, set a breakpoint on
`main` and continute until you hit it). It's not too complicated, but it's worth
being aware of the fact that it'll be a bit different from your startup
experiences with the week 1, 2 and 3 lab templates.

**Remember that this is extension content at this stage---don't worry if you
don't get to it in this lab.**

</div>
