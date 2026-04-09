---
title: "Generative AI and Computer Music"
description: "The robots who steal our jobs may be disappointed."
---

<!-- _class: banner -->

# COMP2710 LENS

---

![bg](./assets/genai/rohan-performance-2-performance.JPG)

## vision

_Intelligent Musical Instruments_ become a normal part of musical
performance and production.

---

![bg](./assets/genai/2015-11-28-Electrofringe-Workshop-2.jpg)

## why?

Assist professional musicians & composers

Engage novice musicians & students

Reveal _creative interaction_ with intelligent systems

Create _new kinds of music!_

---

![bg](./assets/genai/musical-performance-predictions.jpg)

## making intelligent musical predictions

# History


---

![bg](./assets/genai/don-banks-ANU.jpg)

## Digital Musical Instruments (1979ish-)

---

![bg](./assets/genai/GeorgeLewis-1999-credit-IanCummings.jpg)

## Voyager - George E Lewis (1986-)

---

![bg](./assets/genai/continuator-francoispachet.jpg)

## Continuator - François Pachet (2001)

---

![bg](./assets/genai/rebecca-fiebrink-wekinator.jpg)

## Wekinator - Rebecca Fiebrink (2009-)

---

![bg contain](./assets/genai/magenta-demos.jpg)

## Magenta Project - Google (2016-)

# where are all the intelligent musical instruments?

<!-- here's where I come in -->

---

![bg contain](./assets/genai/charlesmartin-background.jpg)

## Performance data is diverse

![](/assets/lectures/genai/imps-nimes-examples.jpg)

| **Music Systems**               | **Data**                           |
|---------------------------------|------------------------------------|
| Score / Notation                | Symbolic Music, Image              |
| Digital Instruments             | MIDI                               |
| Recording & Production          | Digital  Audio                     |
| New Musical Interfaces          | Gestural and Sensor Data           |
| Show Control                    | Video, Audio, Lighting, Control Signals |

## Predicting sequences

![](/assets/lectures/genai/sequence-learning.png)


## Interacting with predictions

![](/assets/lectures/genai/predictive-interaction-motivation.png)


# creating an orchestra of intelligent instruments...


<!-- Interactive RNN Instrument -->


## Interactive RNN Instrument

![Physical Intelligent Instrument](/assets/lectures/genai/physical-intelligent-instrument2.png)


- Generates endless music with a melody RNN.
- Switchable Dataset.
- Controls for sampling "temperature".

<!-- Gesture RNN -->

## GestureRNN

![Gesture RNN](/assets/lectures/genai/gesture-rnn.png)

- Predicts 1 of 9 "gestures" for three AI performers.
- Trained on labelled data from 5 hours of quartet performances.
- Actual "sounds" are chunks of each gesture played back.


<!-- Robojam and Microjam -->


## Robojam and Microjam

![Robojam Interaction](/assets/lectures/genai/robojam-interaction.png)

- Predicts next touch location in screen (x, y, dt).
- Trained on ~1500 5s performances.
- Produces duet "responses" to the user.


## Mixture Density Network

![](/assets/lectures/genai/mdn-motivation.png)

<!-- IMPS -->

## IMPS System

![](/assets/lectures/genai/IMPS_connection_example.png)

- Opinionated Neural Network for interacting with NIMES.
- Automatically collects data and trains.
- "Wekinator" for deep learning?


## Three easy steps...

- **Collect some data:** IMPS logs interactions automatically to build up a dataset
- **Train an MDRNN:** IMPS includes good presets, no need to train for days/weeks
- **Perform!** IMPS includes three interaction modes, scope to extend in future!

## Experiment: Is this _practical_?

- Is it practical for real-time use?
- How do the MDRNN parameters affect time per prediction?
- What are "good defaults" for training parameters?
- Do you need a powerful/expensive computer?


## Test Systems

![Test computers](/assets/lectures/genai/imps-test-computers.jpg)


## Results: Time per prediction

![Time per prediction vs LSTM units](/assets/lectures/genai/prediction_time_against_units.png)

Time per prediction (ms) with different sizes of LSTM layers.


## Results: Time per prediction

![Time per prediction vs MDN dimension](/assets/lectures/genai/prediction_time_against_dimension_64units.png)

Time per prediction (ms) with different MDN output dimensions. (64
LSTM units)


## Results: Training Error vs Validation Set Error

![](/assets/lectures/genai/training_loss_12K_lightpad_model.png)

12K sample dataset (15 minutes of performance)

Takeaway: **Smallest model best for small datasets.** Don't bother training for
too long.


## Results: Training Error vs Validation Set Error

![](/assets/lectures/genai/training_loss_100K_lightpad_model.png)

100K sample dataset (120 minutes of performance)

Takeaway: **64- and 128-unit model still best!**


## Results: Exploring Generation

![](/assets/lectures/genai/robojam_temperature_sampling_0.png)

Takeaway: Make Gaussians **less diverse**, make categorical **more diverse**.


<!-- EMPI -->

## Embodied Predictive Musical Instrument (EMPI)

![](/assets/lectures/genai/EMPI-system-diagram.jpg)

- Predicts next movement and time, represents physically.
- Experiments with interaction mappings; mainly focussed on call-response
- Weird and confusing/fun?


## Training Data

![Human Data](/assets/lectures/genai/training_human.png)
![Sine Data](/assets/lectures/genai/training_sine.png)
![Square Data](/assets/lectures/genai/training_square.png)
![Saw Data](/assets/lectures/genai/training_saw.png)
![Noise Data](/assets/lectures/genai/training_noise.png)

## Generated Data

![Human Generation](/assets/lectures/genai/generation_human_4500points.png)
![Synth Generation](/assets/lectures/genai/generation_synth.png)
![Noise Generation](/assets/lectures/genai/generation_noise.png)

---

![bg](./assets/genai/study-image.jpg)

## Improvisations with EMPI

- 12 participants

- two independent factors: _model_ and _feedback_

- model: human, synthetic, noise

- feedback: motor on, motor off

## Results: Survey

![](/assets/lectures/genai/survey_boxplot_results.jpg)

Change of ML model had significant effect: Q2, Q4, Q5, Q6, Q7

## Results: Survey

- human model most "related", noise was least

- human model most "musically creative"

- human model easiest to "influence"

- noise model not rated badly!

Participants generally preferred human or synth, but not always!

## Results: Performance Length

![](/assets/lectures/genai/performance_length.jpg)

Human and synth: **more range** of performance lengths with motor on.

Noise: **more range** with motor off.


## Takeaways

Studied self-contained intelligent instrument in **genuine performance**.

Physical representation could be **polarising**.

Performers work hard to **understand** and **influence** ML model.

Constrained, intelligent instrument can produce a **compelling experience**.


<!-- what's next -->

---

![bg](./assets/genai/ipad-ensemble-2015.jpg)

## How can intelligent instruments help us make music?

Emulate or enhance ensemble experience

Engage in call-and-response improvisation

Model a performer's personal style

Modify/improve performance actions in place

---

![bg](./assets/genai/metatone-20170529-ifi.jpg)

## Research questions...

Are ML models practical for musical prediction?

Are intelligent instruments useful to musicians?

What happens when musicians and instrument _co-adapt_?

Can a musical practice be represented as a dataset?

What does a intelligent instrument **album / concert** sound like?

<!-- Neurofeedback 2020 video  -->

---

<iframe width="1120" height="630" src="https://www.youtube.com/embed/WumtMGHAuV8" frameborder="0" allowfullscreen title="GenAI video"></iframe>

<!-- https://youtu.be/WumtMGHAuV8 -->

## Thanks!

![](/assets/lectures/genai/charlesgif.gif) 

- IMPS on [GitHub](https://github.com/cpmpercussion/imps)
- creative ML: [creativeprediction.xyz](https://creativeprediction.xyz/)
- Twitter/Github: [@cpmpercussion](https://www.twitter.com/cpmpercussion)
- Homepage: [charlesmartin.com.au](https://charlesmartin.com.au)



