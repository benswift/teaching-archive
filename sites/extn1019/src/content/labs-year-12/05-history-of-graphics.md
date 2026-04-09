---
title: "Lab 5: Exploring Histories of Graphics"
tagline: "conducting research into 3D graphics"
project_templateRepo: https://gitlab.cecs.anu.edu.au/extn1019/2024-2025/year-12/extn1019-2025-year-12-portfolio-item-1
---

## Outline

In this lab you will:
1. Gain a helicopter view of the history of computer graphics
2. Discuss research strategies
3. Explore a topic in computer graphics that interests you
4. Write a sketch that embodies the concepts you explored

## Inspo

Today I discovered the JavaScript frameworks [Hydra](https://hydra.ojack.xyz/?sketch_id=ritchse_2) and [Screamer](https://charlieroberts.github.io/screamer/).  These are more advanced than we will use, but are inspiring examples of what is possible with JavaScript and [livecoding](https://researchportalplus.anu.edu.au/en/publications/coding-livecoding). [Also here](https://comp.anu.edu.au/courses/comp4350/lectures/07-live-coding/).

## Introduction

:::info
**NOTE:** Histories are contested. [Historiography](https://en.wikipedia.org/wiki/Historiography) teaches us that when histories are written
they embody the biases and agendas of the writers of that history. They highlight events the writers perceive as significant at the time
of writing. There are always alternative histories.<br>
**NOTE ALSO:** Journals also privilege certain sources adding additional layers of biases to the general confusion.<br>
*You do not necessarily have to do anything about this now. I am just asking you to be aware!*
:::

:::tip
**REMINDER:** Have you chosen a [research topic for your project?](/deliverables-year-12/01-3d-research-topic/)<br>
Have you cleared this topic with your teacher?<br>
Have you forked and cloned the [template repository]() for the project?
:::

## History Overview

Rather than write a history, I am borrowing [this timeline from Ohio State University](https://ohiostate.pressbooks.pub/graphicshistory/back-matter/cg-historical-timeline/). This timeline ends in 2013 &mdash; *so I guess there have been no developments in graphics since then, right?*

Another way to get an overview is to look at all of the [SIGGRAPH conference proceedings](https://www.siggraph.org/).

**SIGGRAPH** started as the **ACM** (Association for Computing Machinery) **S**pecial **I**nterest **G**roup for Computer **Graph**ics.

SIGGRAPH has been around for over 50 years, and has established a [history community](https://www.siggraph.org/siggraph-365/history-community/) 
to [preserve the thinking and achievements behind key developments in computer graphics](https://history.siggraph.org/). 

### Narrowing it down
Feeling overwhelmed? That's not surprising &mdash; the field is huge.

To focus on a single topic, you might choose a topic that interests you from:
* what we have discussed in class
* from the timeline of graphics
* from SIGGRAPH history
* from a journal article or conference paper
* something you've encountered in other contexts (online reading, Wikipedia, computer games)

## Research Techniques

The research you are conducting for this assessment task is not original research (setting up a research question, devising a strategy 
for probing your research question, conducting experiments, collecting data, analysing data,
presenting your findings &mdash; **OR** writing new code to achieve something never before done)

Instead, you are telling a story about the history of an aspect of **3D computer graphics**.

Your research is into the archives of 3D computer graphics to thoroughly examine and explain/teach the reader about this aspect of 
3D computer graphics.

:::tip
**THINK:** How can you conduct this research?<br>
Where can you find reliable sources of information for your topic?<br>
How can you verify this information?<br>
How can you synthesise this information into a story?
:::

**DO:** Discuss your research strategies in groups of 2-3<br> 
(i.e. with the people at your *"pod"*).<br> 
Write down ideas that you find useful.

### Role of Wikipedia
Can Wikipedia be a source of useful information?

As Wikipedia effectively tells a story for each entry, it is doing the job you need to do. Also, it might be a good source for ideas 
and for possible research pathways.

Wikipedia should not be your main source, but you may include a Wikipedia reference if you have found useful information there.

### Advice to a Student
I mainly use Google Scholar to search academic articles.

If you do this on campus (or using ANU's VPN via Global Protect - instructions here)
then you can access the full text of most articles you find (it depends on whether ANU has a subscription to the journal).

You can also search for journals of interest and articles in journals via the ANU library website (you should sign in for full access).

(Sign in - top right corner of page of search results on the library)

Or find an appropriate journal and use keyword search within the journal.

So - my first search is for "low polygon modelling"
* [Scholar](https://scholar.google.com.au/scholar?hl=en&q=low+polygon+modelling&btnG=)
* [ANU Library](https://anu.primo.exlibrisgroup.com/discovery/search?query=any,contains,low%20poly%20modelling&tab=Everything&search_scope=MyInst_and_CI&vid=61ANU_INST:ANU&lang=en&offset=0)

But &ndash; maybe its a bit technical &ndash so I'll look for "low polygon art"

Google's search algorithm suggest "low polygon art movement" and "low polygon art history" as search terms.

I found this article:[Computational Aesthetics of Low Poly: [Re]Configuration of Form . Aysegul Akcay Kavakoglu. 1 . 1 . Istanbul Technical University, Turkey . akcaykavakoglu@itu.edu.tr](https://pdf.blucher.com.br/designproceedings/sigradi2021/235.pdf)

It is an obscure journal/conference, but it looks good from an aesthetics perspective.

This prompts me to think me think that "low polygon art aesthetics" might be a good search term.

This is how my search process works.  You can also go to the ANU library to ask a librarian &ndash they are very helpful.

Of course, [Wikipedia is always available](https://en.wikipedia.org/wiki/Low_poly). It should not be your main research source, but can be a good starting point to define your terms and organise your thinking and suggest areas or search terms.

**DO:** <br>
**Choose** a research topic in 3D computer graphics (if you haven't already)<br>
**Find** some reliable sources for your topic<br>
**Write** some notes about this (and save your sources)

## Codifying Your Topic

OK &mdash; so you've chosen an amazing topic, found some fantastic resources to tell your story, and made a start on your narrative for this topic.

How do you turn this into a sketch? Great question.

Let's look at Low Polygon modelling.

In Lab 2 you were introduced to Suzanne (the Blender 3D monkey) through the process of importing 3D geometry into p5.js using the function **`loadModel()`**.

Suzanne, as provided in that lab, is a low poly model. How do we make it look ***low poly***?  It comes down to shading.

Rather than smooth shading (such as Phong/Gouraud shading), we want to use flat shading. We may also want to use **`stroke()`** to highlight
the facets of the model.

You could try:

* Place geometry inside a custom geometry builder (as per Lab 4)
* tell the geometry builder to `myGeometry.computeNormals(FLAT)`
* add a stroke to highlight polygons, e.g.: `stroke(200,220,230)`
* increase the level of ambient lighting and reduce the contribution of directional lighting (do not remove altogether).

Flat shading for Low Poly Art may require advanced shading through the use of GLSL shader language,
which we have not yet covered in this course. 

:::info
**REMINDER:** You are expected to make more than one sketch to illustrate your topic.<br> 
Your sketches may highlight different aspects, or the evolution of your project.<br>
You should reference your sketches in your **artist statement**.
:::

**DO:** Remember to commit your code/research writing and push it up to Gitlab.

## Summary

Congratulations! In this lab you:

1. Gained a broad overview of the history of computer graphics
2. Explored research strategies
3. Identified an researched a topic in computer graphics that interests you
4. Wrote a sketch that embodies one of the concepts you explored

