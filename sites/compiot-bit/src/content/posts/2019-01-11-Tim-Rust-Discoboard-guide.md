---
author: Timothy Lee
date: 2019-01-11
title: A guide to writing rust on the STM32L476G-Discovery board
week: 7
---

This blog post I’ll be doing a short guide to setting up, writing and debugging Rust code on the STM32L476G-Discovery microcontroller. I’ll cover what crates you need, what you need to configure as well as how to blink the LEDs on the board using a higher level of abstraction than manually loading and storing into memory addresses. I won’t be going into huge amounts of detail with this post as there are other guides who already do that (and whom I’ll be referencing here) and because I’m still in the process of learning Rust and embedded programming. The main purpose of this guide is to streamline a lot of those guides for this specific microcontroller and to have something that works that you can then build from. I’ll have a section at the end that links to a few other resources that cover everything I mentioned and more. This guide also assumes you know basic some basic Rust, how to use the cargo build system and a bit about embedded programming on the board.

## Initial Requirements
The first thing to need to do is to install:

•	[Rust](https://doc.Rust-lang.org/1.0.0/book/installing-Rust.html)
•	[Cargo generate](https://github.com/ashleygwilliams/cargo-generate#installation)
•	Rust-std for the disco board

For installing Rust-std (the Rust standard library) that our board needs, you just need to run `rustup target thumbv7em-none-eabi` in your terminal after installing Rust.
You’ll also need to install a debugger which can be different depending on the platform you’re working on. Use the links at the bottom of [this](https://Rust-embedded.github.io/book/intro/install.html) page to find the relevant install instructions for your OS. Don’t worry about installing qemu as that’s used for hardware virtualization if you don’t have a board.
Once you’ve done that, we’ll begin downloading the repo and configuring it for the disco board.

## Repo Config
The cargo generate command allows you to generate a new Rust project using an existing git repo as a template. Therefore, we’ll be using the [cortex-m-quickstart](https://github.com/Rust-embedded/cortex-m-quickstart) repo as a template. The repo was created and maintained by the [Embedded Rust Working Group](https://github.com/Rust-embedded/wg) and the [guide](https://Rust-embedded.github.io/book/intro/index.html) they wrote to accompany the repo serves as the basis for this guide.
First thing you need to do here is to run `cargo generate --git https://github.com/Rust-embedded/cortex-m-quickstart` which generates a repo for you to use. Give the project a name and we’re good to go. There are 3 thing we need to configure:

•	Memory size and starting addresses
•	Cargo compiler target
•	stm32l4 device crate

The first step is to specify how much memory we have and where it starts on the board. The board has 1024kb of flash memory starting at the memory address 0x08000000 and 96kb of ram starting at the memory address 0x20000000. From the root directory, open the memory.x file. The first paragraph of code should contain something like this:

`FLASH : ORIGIN = 0x00000000, LENGTH = 256K`
`RAM : ORIGIN = 0x20000000, LENGTH = 64K`

You need to change the values so they match the ones I described above. You should end up with it looking like this:

`FLASH : ORIGIN = 0x08000000, LENGTH = 1024K`
`RAM : ORIGIN = 0x20000000, LENGTH = 96K`

The instruction set that our code will be compiling to is the “thumbv7em-none-eabi” set which is used for Cortex-M4 and M7 CPUs. Therefore, the next thing we’ll need to do is to change the build configurations to target that by default. In the repo there should be a .cargo folder, and inside that there is a config file. At the bottom under the [build] label, uncomment the line `target = "thumbv7em-none-eabi"` and then comment out any other line under the [build] tag that is uncommented. This tells the compiler which platform to build for so we should only have one option chosen. Then on the first line change the instruction set there to match thumbv7em-none-eabi. That is technically all we need to do to get the code to compile for the board, but because the repo also contains some config files for the openocd debugger, we’ll need to change those a bit too. In the root folder of the repo, open the openocd.cfg file, and change the line `source [find target/stm32f3x.cfg]` to `source [find target/stm32l4x.cfg]`.

If we wrote code and tried to upload it now, it should work. However, the standard cortex-m crate that come pre-loaded only provide APIs to access peripherals common across all cortex-m devices, such as the systick timers and NVIC. If we want to access some more board specific stuff like our GPIO pins and LEDs, we’ll need to add another crate that supports our board. In the root directory, open the Cargo.toml file. Somewhere below the [dependencies] label add this code:

`[dependencies.stm32l4]`
`version = "0.5.0"`
`features = ["stm32l4x6", "rt"]`

The crate supports all stm32l4 boards, so we need to specify that we only want the stm32l4x6 stuff. Next, go into the src folder and open the main.rs file. Below the line, `use cortex_m_rt::entry;`, add the line `use stm32l4::stm32l4x6;`. For more information on the crate we’re using here, head over to the crates.io [website](https://crates.io/crates/stm32l4).

## Blinking the LED
Now that we’ve configured everything, we’ll be able to try turning on the LED. All the code you write for now should go in the main function, which has been slightly modified from normal Rust. For more information on why this is, check out this [page]( https://Rust-embedded.github.io/discovery/05-led-roulette/index.html). If you remember, there are 3 steps to turning on the LED:

1.	Enable the clock for the corresponding GPIO pin
2.	Set the pin to output mode
3.	Turn the pin on

For step 1 we’ll need to use the reset and control clock (RCC), then steps two and three need the GPIO peripheral. To use these, we’ll need to create an instance of those peripherals. To start with, write: `let peripherals = stm32l4x6::Peripherals::take().unwrap();`. This creates an instance of all the peripherals available on the board. Only one of these can exist at a time so you can’t create two separate peripheral instances. We’ll then create instances of the individual peripherals that we need:

`let rcc = &peripherals.RCC;`
`let gpiob = &peripherals.GPIOB;`
`let gpioe = &peripherals.GPIOE;`

Now we can perform operations on the individual peripherals and complete the steps above. For step 1, we’ll need to modify the AHB2ENR register to enable the clocks for both GPIOB and GPIOE. crikey

`rcc.ahb2enr.write(|w| unsafe {w.bits(0b10010)});`

Note that instead of writing bits directly to the register, it is possible to use a function to set a bit for a specific bit.

`rcc.ahb2enr.write(|w| {w.gpioben().set_bit()});`
`rcc.ahb2enr.write(|w| {w.gpioeen().set_bit()});`

However, it appears that the operations here do not set a single bit and leave the rest of the register untouched, as if you have this code there you will find that GPIOB will not be enabled and I’m not sure why this is yet. Then for step 2 we’ll need to modify the individual GPIO pin’s mode register (MODER) to output:

`gpiob.moder.modify(|_, w| {w.moder2().output()});`
`gpioe.moder.modify(|_, w| {w.moder8().output()});`

Now that that’s done, you’re free to experiment with turning on the LEDs. The code for turning on the LEDs are:

`gpiob.odr.write(|w| {w.odr2().set_bit()}); //red LED on`
`gpiob.odr.write(|w| {w.odr2().clear_bit()}); //red LED off`
`gpioe.odr.write(|w| {w.odr8().set_bit()}); //green LED on`
`gpioe.odr.write(|w| {w.odr8().clear_bit()}); //green LED off`

for now, lets just try turning on the red LED, so copy the line for turning it on into your code.

## Debugging

I’m not going to go into too much detail about right now about how to use the terminal to debug embedded programs but for now, if you followed the instructions from above you should have installed openocd (Open On-Chip Debugger) and one of the following debuggers:

•	gdb-multiarch for Ubuntu
•	gcc-arm-embedded for Mac
•	arm-none-eabi-gdb for Windows

Reopen the config file inside the .cargo folder. In the second paragraph there should be commends asking you to uncomment one of the following lines to allow “cargo run” to start a GDB debugging session. Uncomment one of the lines that correspond to the debugger you installed. Uncomment:

•	`runner = "arm-none-eabi-gdb -q -x openocd.gdb" for Windows`
•	`runner = "gdb-multiarch -q -x openocd.gdb" for Ubuntu`
•	`runner = "gdb -q -x openocd.gdb" for Mac`

Once this is done and you’re happy with your code, we can try uploading it to the board. Make sure your board is plugged in and open two different terminal windows and navigate both to the project directory. In the first one, type openocd to start an openocd session. In the second terminal use cargo to build and run the project. Since we uncommented that line in the cargo config file, it should automatically link to the debugging session in terminal 1 and load the code onto the board. You should eventually see (gdb) pop up in the second terminal. Once that happens, type continue into it to let your code run. If you see the LED turn on, congrats you’ve got Rust code working on the board!

Try experimenting with loops and delays to get the LEDs to blink in a different order. If you have cables you can also try setting one of the GPIO pins to out put a signal and see if you can receive it over a wire. From here you should be able to create more complex embedded programs in Rust and more. For more information on embedded Rust and the work being done in the space, check out the links below:

•	[The Embedded Rust resource page]( https://github.com/Rust-embedded/awesome-embedded-Rust)
•	[An introduction to embedded programming with Rust on a different microcontroller]( https://Rust-embedded.github.io/discovery/)
•	[The full instructions for the cortex-m-quickstart repo](https://Rust-embedded.github.io/book/intro/index.html) (contains more detailed debugging information & instructions in chapter 2)
•	[API information for peripheral access](https://docs.rs/svd2Rust/0.14.0/svd2Rust/)
