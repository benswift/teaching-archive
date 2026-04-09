---
author: William Cashman
date: 2019-02-18
title: Drum Transcriber - Will
week: 12
---

# Drum Transcriber - Will

The Drum Transcriber is an internet-enabled musical development system which assists the user in transcribing and publishing personal drum compositions without any expensive or invasive equipment. It was designed in response to the theme "(dis)connecting together", in which our primary focus was on disconnecting through creative licence and connecting through remote access social collaboration services; namely uploading and sharing transcribed musical score.
The result is a light-weight, portable and highly customisable drum-kit transcriber with built in wifi capabilities, which (after transcribing has concluded) and uploads the generated musical score to an online server. The server can be accessed through an interactive website where the uploaded data can be rendered into a professional musical sheet format and be easily shared among the website's users. The website only properly supports viewing and sharing of the musical score, but it is made with the intention of being easily expanded to facilitate more features such as: profile pages and teacher-student connections.

Though not all design criteria were met with flying colours, the project was a overall success. With the core functionality of the system eclipsing its cosmetics. This was due to time restrictions, overall breadth of the project itself and the prioritisation of myself and Zoey throughout the design process (More on that later).

## Beginning

The project's genesis spawned from the Zoey's personal longing for a convenient method of automatically transcribing her impromptu drum compositions in her small apartment room. We then combined this my preference for open source, for-everyone-with-a-computer-and-5-dollars style devices to flesh out the ideas and features we would like to see in such a device. However by the end of the discussion, our singular "device" had grow into more of a full on integrated transcribing system. As part of this decision we unanimously agreed in favour of a web-centric (not a word, but you know what I mean) system in order to completely satisfy our criteria for promoting creative freedom by making the reviewing and publishing stages of musical development as painless as possible. This is the heart of our pitch and epitomises our interpretation of the theme: Disconnecting physically through the integration of wireless communications, and disconnecting figuratively by providing a safe, painless musical development platform to engender creativity and productivity.

As part of our design process we deliberately unconfined our scope to include as every facet imaginable with an integrated platform such as this, something that we knew that we would most likely not be able to handle. This as done with the intend of narrowing the project down as we progressed based on where our personal interests laid and the unforeseeable difficulties that arise as the project evolves.

The project's design can be broken into three core sections:

- Transcription
- Wireless Communication
- Server/Website interactions

### Transcription

This is a part that was prioritised the most due to its functionality. Our criteria for this section was simplicity and flexibility, since it is intended to be easily ported into many different environments. Because of this, the software cannot be hardcoded and needs to encourage the user to assist the transcriber to adapt to the user's unique performance environment.

There were three main challenges with this when attempting to determine whether a specific drum was struck:

- Interference from other drums
- External interference e.g. footsteps
- Ensuring accuracy of the hit detection algorithm

Unsurprisingly, the location of the sensors of the drum's body can drastically affect these factors to varying degrees. Some locations completely eliminating one factor but exacerbating another.

Another avenue of research that were considering early on in the project's development, was investigating whether or not it was feasible (in the time we have to work with) to detect **how** the drum was hit, not simply **when** it was hit, as these hits should be transcribed differently. However, approximately halfway through the project we decided not to incorporate this feature as there were other features of the transcriber and the system as a whole that demanded attention. It is unfortunate that this feature was not implemented, however hindsight would suggest that this was not the worst decision as we were not adequately prepared to deal with the third section (Server/Website Interactions) at the time, and it much more effort than the others.

### Wireless Communication

Wireless communication is useful to ensure that the musical score can be uploaded as conveniently as possible.
To power the data uploading mechanism, I chose to use the simplest method at my disposal. I used a URL string in a HTTP request to upload the score (encoded in an efficient char-based lexicon) onto the online database. This is opposed the uploading to the MySQL server directly or transmitting a raw byte stream to the server. I did this because there is a nice safe HTTP API library in the ESP toolchain which I trusted to be more simple and reliable than the normal approach to this problem.

### Online Interaction

This is where the real _(dis)connecting_ happens. Once on the website a user can log into their account (very crude implementation of personal accounts) and view the musical scores they have uploaded. They can then easily send the scores to other users with a little message, or render the score into a proper musical sheet image format.

#### Beyond the current implementation (Future Work)

As mentioned previously, we were only able to implement the bare bones of a social platform. This is where we would love to see users and developers take the initiative and help realise this potential locked away here. With the current sharing features you can only send your scores to your friends. However, there is a potential here to do more than that, a couple of ideas are:

- A publishing page (or profile page) where people can access the scores you choose to share without requiring you to send it.
- A teacher-student setup where students can submit "homework" for evaluation.

The fleshing out of this social media platform was classed as a lower priority task for two reasons:

- Neither of us have any full-stack development experience whatsoever, that part would have undoubtedly taken a lot of time an so it was time better spent on solidifying the core functionality; specifically the transcribing and uploading.
- If we make the functionality really well, then this would serve as a greater incentive for people to care about and contribute to the project than if we didn't have the proper functionality but a pretty website.

The aim of this part of the project to showcase the beauty of IoT's integration in common day-to-day problems (for musicians at least) to encourage people to make music more freely for themselves. Though it is also imperative that we encourage the use of the uploading and sharing capabilities, rather than using the platform as an unnecessarily complicated filing system.

## Reflections and Conclusion

Overall I believe the chosen design served the interests of both Zoey and I quite well, whilst also as resonating soundly with the theme. If I think back to my initial vision of the end product I admit that I was hoping that we would have a bit more features on the social platform working by now, but I am glad as to how we prioritised the different aspects of the project in response to the difficulties that arose.

My view of IoT as a whole has not undergone any profound change, but through my experience with this project I have perhaps gained a greater insight into as to where I think _my_ applications lie in the realm of IoT; that is, how I envision myself incorporating it into solutions in my future research endeavours. Prior to this projects commencement, you would probably extract "connect to internet so more information can be gathered and shared" as my definition of IoT from me; now when faced with the same question I would likely respond with "bridging the gap between resources". The focus being on resources and automating tasks by making data and services more readily accessible. Even when introducing the social media platform here I always seems to only found its pragmatic sense rather than social. I would also like to see people branching this project away from drums and bring more members of the orchestra into the social platform.

To conclude, I hope the success of this project with foster an interest among the developer/musician community in small IoT projects such as this so that people can go about undertaking their own IoT projects; born out of personal interests and grown into something greater.
