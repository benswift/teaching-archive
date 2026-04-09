---
title: "Portfolio Item 2" 
tagline: "Shaders and Interaction Design"
templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-2
---

## Outline {#outline}

* **Theme:** Duty of Care
* **Due:** 14 May 2025, 23:55
* **Mark weighting:** 25% total
* **Submission:** Text/PDF upload in [Wattle](https://wattlecourses.anu.edu.au/mod/assign/view.php?id=3417609) with code in GitLab.
* **Policies:** see the [policies page](/policies/)
* **Learning Outcomes Assessed:** [Learning Outcomes](/outline/#learning-outcomes-b) 2 and 3. Learning Outcome 1 is expected to be applied in creating artistic output.

The first 3 assessment tasks this year are called "Portfolio Item 1", "Portfolio Item 2" and "Portfolio Item 3". The written works and artistic responses you create will form part of your portfolio of works for EXTN1019B, along with your Final Project. All of your works will be available to view at the end of year exhibition.  For an example and for inspiration, you can view the [2024 cohorts works here](/showcase-yr12-2024/).

**TEMPLATE:** Fork and clone the [template for this portfolio item]()

## Theme: Duty of Care

Portfolio Item 2 requires you to create an artwork which aligns with the theme *"DUTY OF CARE"*.

The theme is *in part* driven by the meaning of the word ***Shader***.

A **shader** casts shade on something or someone. 

> One who or something which shades (in various senses of the verb). O.E.D.[^shader_def]

and **to shade** is to:

> To screen from light or heat, **to protect** from the glare or heat of the sun's rays. O.E.D.[^shade_def]

Shading in this light is seen as *protecting* from damaging heat or radiation. 
Protection is implicitly an action of care and compassion.

You may interpret **duty of care** in a number of ways. You will need to explain how your artwork aligns with the theme. You may wish to explore synonyms of *"care"* or *"duty"*.
<br>**DO NOT USE C.O.D. AS INSPIRATION**

## Description {#description}

The second assignment requires you to:

* implement a **Shader** as a component of your artistic response to the theme
* create and implement **interaction design** which controls the user experience of your artwork and enhances the interpretation of the theme.
* explain how your artistic response aligns with the theme (artist_statement.md)
* explain the rationale of your interaction design (interaction.md)
* explain how you have used shaders (shaders.md)
* explain how to interact with your artwork(s) (README.md)

## Specification {#specification}

| File(s) | Word Limit | Description | 
| :--- | :--- | :--- |
| `artist-statement.md` | 1000 words | explaining how your artwork embodies the chosen topic, and what other aspects of art, or meaning, you have chosen to investigate. Where relevant, you may explore your development process |
| `interaction.md` | 500 words | Explain the rationale which has informed your interaction design, and how your interactivity enhances your interpretation of the theme.  References should be included in this file |
| `shaders.md` | 500 words | Describe and explain the purpose of the shaders and how the use of shaders aligns with your interpretation of the theme.  References should be included in this file |
| `README.md` | up to 100 words | how to interact with your artwork |
| `sketch.js` <br>(multiples) | N.A. | your artistic responses. You only need one index.html | 
| `shader.vert` <br> and `shader.frag` | N.A. |  as required for your shader implementation |

## Development Process {#how-to}

Here's the process for completing this assessment task:

You need to:
* Choose an interpretation of the theme and have this approved by your teacher. <br>Await approval before starting.
* Explore possible artistic interpretations of the theme. Think about interactions. Research Shaders.
* Develop a plan for your:
   - artistic response(s)
   - interaction design(s)
   - how you can integrate a shader which enhances your interpretation of the theme
* All documentation should be written using markdown. PDF is an acceptable alternative.
* Include comprehensive referencing
* Develop a sketch as an artistic response which conveys your interpretation of the theme
   - make it interactive
   - make it meaningful
   - create at least 2 variations (sketches) for your response
* Write an artist statement which explains how your artwork represents your interpretation of the theme
* The artist statement should be called `artist-statement.md`
* Complete your shader documentation: `shader.md`
   - write about the origin of your shader (where it came from or what inspired this design)
   - explain how the shader contributes to your interpretation of the theme 
   - if your shader is dynamic (through interaction or changes over time), explain the dynamism of the shader
* Complete your interaction design documentation: `interaction.md`
   - what inspires your interaction design
   - what modes of interaction have you used
   - how does your interaction form feedback loops
   - how have you developed the [affordances](https://dl-acm-org.virtual.anu.edu.au/doi/10.1145/301153.301168) (see also [*"The Design of Everyday Things"*](https://ebookcentral-proquest-com.virtual.anu.edu.au/lib/anu/detail.action?docID=1167019))

* Write a `README.md` document which explains how to interact with your artwork (a *how to* document)
* Check against the [specification](#specification), and [submit](#process)

For each portfolio item this year, we either want you to _create_ your own sketch, or _extend_ some starter code we provide in class.  
In either case, we want you to **submit at least 2 non-trivial variations** [^variations] of your sketch. 
This is an opportunity for you to experiment and explore different ways of implementing or expressing the same idea.

## Submission Process {#process}

1. Fork and clone the [template repository]().
2. Include all files (program and documentation) in your repository
3. Regularly push and commit to gitlab. <br>We are expecting a history of commits.
4. Zip your folder and [submit to Wattle](https://wattlecourses.anu.edu.au/mod/assign/view.php?id=3417609) &mdash; <br>this will timestamp your submission, and enable marking using the rubric.

## Marking criteria {#marking-criteria}

As discussed at the [top of this page](#outline), Portfolio Item 2 makes up 25% of your overall mark for this
course. 

The marking criteria are:

* critical engagement with the theme (20%) (LO #1)
* interaction design (20%) (LO #2)
* use of shaders (20%) (LO #3)
* creativity in coding, artistic output (20%) (LO #1 and #2)
* addressing the specification (5%)
* breadth of experimentation (submit 2-3 non-trivial variations) (5%) (LO #2) 
* use of version control (gitlab commit history) (5%)
* referencing (5%) (LO #3)

## Year 12 Portfolio Item 2 Assessment Rubric

| | A Grade<br>(9-10) | B Grade<br>(7-8) | C Grade<br>(5-6) | D Grade<br>(3-4) | E Grade<br>(0-2) |
| :---     | :---    |  :---    | :---     | :---     | :---    |
| **Critical Engagement<br/>LO #1** <br>*20%* <br> artist-statement.md and sketches| deep and critical engagement with the theme | engages effectively with the theme | engages appropriately with the theme | engagement includes some references to the theme | very limited engagement with the theme |
| **Interaction Design<br/>LO #2**<br>*20%* <br> interaction.md and sketches | considers interaction/evolution as a feedback loop between user input and visuals/sound. Uses this feedback to design an engaging experience for the user/audience | explores several interactions/modes of evolution over time, includes critical reflection of design (selection of appropriate interaction/responsiveness) | explores several interactions/modes of evolution over time designs, but no critical reflection of alignment with theme | minimal exploration of interaction and/or evolution over time (only explores one interaction type) | no exploration of interaction or responsiveness or evolution over time |
| **Use of Shaders<br/>LO #3** <br>*20%* <br> shaders.md and sketches | your use of shaders connects deeply with your interpretation of the theme and/or you have developed new creative shaders using your own code | your use of shaders connects effectively with your interpretation of the theme. Your shaders are your own code, or include sophisticated changes to existing shaders converted from 3rd party sources | your shaders show some connection to the theme. You have successfully converted shaders from outside the p5.js community | your shaders show limited connection to your interpretation of the theme. Shaders are used unmodified from within the p5.js community | very limited use of unmodified shaders which distract from your interpretation of the theme |
| **Creativity<br/>LO #1 and #2** <br>*20%* <br> sketches | always employs creative thinking, drawing on a wide range of sources/influences, to develop surprising and innovative responses | uses creative thinking, drawing on a range of sources/influences, to develop innovative responses | uses critical thinking, drawing on a range of sources, to develop design solutions | uses a limited range of sources to develop basic solutions | develops very limited responses |
| **Specification Satisfaction** <br>*5%* <br> all files | All elements present and comprehensively complete (artist-statement.md, shaders.md, interaction.md, README.md  | All elements present and completed to a good standard  | All elements present and complete | Most elements present  | Significant elements (artistic statement.md, interaction.md, shaders.md, README.md) missing |
| **Breadth of Experimentation<br/>LO #3** <br>*5%* <br> sketches | 3 or more significant variations of artistic responses (sketch.js, shaders) | 2 or more non-trivial variations of artistic responses (sketch.js, shaders) | 2 basic variations of artistic responses (sketch.js, shaders) | 2 or fewer variations which demonstrate trivial variations | a single code solution which demonstrates a trivial change to the provided code, or the use of generative AI to develop the code variation |
| **Use of Version Control**<br>*5%* <br> gitlab commit history | significant use of gitlab throughout the project. Including early fork, and frequent commits | strong use of gitlab throughout the project. Including early fork, and regular commits | good use of gitlab throughout the project. a number of commits aligned with key development moments | basic use of gitlab showing few commits | no use of gitlab or other verifiable version control, or loss of code through negligence |
| **Referencing<br/>LO #3** <br>*5%* <br> interaction.md, shaders.md | comprehensive referencing using ANU approved referencing style | a good breadth of research references using ANU style or markdown standard | satisfactory referencing using a well-known academic style | basic references which are not comprehensive or using an unknown or unsupported referencing style | very limited referencing using an unsupported style, or hallucinated references |

## FAQ

### Can I work on it during the weekly labs/workshops?

Yes! So if you create something during the workshop which you want to include in your portfolio, then by all means include it. You're also welcome to use time outside of class to work on the portfolio item.

### How long should I spend on this every week?

Between 1 and 3 hours outside class time should be sufficient.  The BSSS expects that you complete 1 hour outside class for each hour spent in class.

### Can I use open-source code for my artistic response?

Yes, for sure -- as long as you provide links to any code that you used and you make some interesting changes/additions of your own to the code. Ensure you reference the open-source code in your artist-statement.md

### Can I use other artists' work as inspiration for my sketches?

I don't see why not :) You can absolutely still look for sources of inspiration and reference them in your artistic response (name of inspiration/artist, name of work, link to work). However it's not part of the marking criteria and therefore isn't mandatory.

### When will I get my marks & feedback?

I will endeavour to complete marking within 2 weeks of submission.

### Can I use generative AI to write my report, artist statement or code?

We will be exploring the development, creation and appropriate application of generative AI in generating text, image and audio this year. This is **NOT** an open-license to use generative AI to write code or your written responses.

So: how can you use it? 

1. **Be explicit** about your use: explain how and why you want/need to use generative AI to generate code or text.
2. **Write** your own ideas: **you must generate ideas from your own brain and not outsource the generation of ideas**. 
3. **Read!** You must read your sources and understand them yourself. It is no good asking _ChatGPT_ to understand for you. Reach out if you need help.
4. **Polish:** Write your ideas down and once you have a draft you might use generative AI to help finesse your work. 
5. **Be explicit:** This course is all about creativity. Tell us how you completed this process and how this made you feel. Have you learned more, or learned less? Does it help reduce pressure? Does it make you feel _unethical_? 
6. **Opt Out:** Shout it from the rooftops: You do **not** have to use generative AI! To quote from *The Incredibles*: *"No school like the old school"*.

---
**Bibliography and Footnotes**

[^shade_def]: Oxford English Dictionary (2025) [Shade](https://www.oed.com/dictionary/shade_v1?tab=meaning_and_use&tl=true#23101025) in Oxford English Dictionary. Oxford University Press. 

[^shader_def]: Oxford English Dictionary (2025) [Shader](https://www.oed.com/dictionary/shader_n?tab=meaning_and_use#23102391) in Oxford English Dictionary. Oxford University Press. 

[^variations]:
    We just want you to implement an idea and play around with your code to generate some interesting changes in the visuals/audio. Think of it like doodling -- see where your mind takes you and then, when you see an output that you like, take a screenshot/screen recording of it. The _non-trivial_ part just means your changes can't be too simple (e.g. if the only variation you make is changing the background colour from grey to pink, that's too simple)
