---
author: Razi
date: 2018-11-29
title: Razi Week 2 Ideasation
week: 2
---

<html lang="en">
	<head>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta charset="utf-8"/>

	<style>

	-- #F2EDE1
	--

		html, body {
			padding:0;
			margin:0;
			background-color:  #F2EDE1;
		}

		a {
			text-decoration: none;
		}

		p {
			font-family: Helvetica, Arial, sans-serif;
			line-height: 170%;
		}

		.content {
			width:50%;
			margin: auto;
		}

		#homePicture {
			position: relative;
			width: 100%;
			margin: auto;
			vertical-align:middle;
		}

		#homePicture .image {
		  opacity: 1;
		  display: block;
		  width: 100%;
		  height: auto;
		  transition: .5s ease;
		  backface-visibility: hidden;
			vertical-align:middle;
		}

		h1 {
			font-family: Helvetica, Arial, sans-serif;
			font-size: 40px;
			color: #F2EDE1;
			text-shadow: -1px 0 #2C3629, 0 1px #2C3629, 1px 0 #2C3629, 0 -1px #2C3629;
		}

		h2 {
			font-family: Helvetica, Arial, sans-serif;
			font-size: 27px;
			color: #F2EDE1;
			text-shadow: -1px 0 #2C3629, 0 1px #2C3629, 1px 0 #2C3629, 0 -1px #2C3629;
		}

		h3 {
			font-family: Helvetica, Arial, sans-serif;
			font-size: 18px;
			color: #F2EDE1;
			text-shadow: -1px 0 #2C3629, 0 1px #2C3629, 1px 0 #2C3629, 0 -1px #2C3629;
		}

		.textOnPicture {
			position: absolute;
			top: 48%;
			left:50%;
			transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%)
			margin:auto;
			font-family: Helvetica, Arial, sans-serif;
			font-weight: bold;
			font-size: 50px;
			color: #F2EDE1;
			text-shadow: -1px 0 #2C3629, 0 1px #2C3629, 1px 0 #2C3629, 0 -1px #2C3629;
		}

		#quoteLine {
			font-size: 27px;
			width: 90%;
			margin: auto;
			text-align:right;
			color: #4A5C61;
			transition: .5s ease;
		}

		#quoteLine p {
				transition: .5s ease;
		}

		#quoteLine:hover #quote{
			color: #4A5C61;
			transition: .5s ease;
		}

		#quoteLine:hover p{
			color: #4A5C61;
			transition: .5s ease;
		}

		#quote {
			transition: .5s ease;
			font-size: 40px;
			text-align:left;
			color: #4A5C61
		}

		.quotation {
			color: #2C3629;
			font-size: 60px;
			font-family: mainserif;
		}

		/* everything below is for family stock photo */

		#introduction {
			margin:auto;
			padding-bottom: 70px;
			margin-top: 70px;
		}

		.container {
		  position: relative;
		  width: 45%;
		  float:left;
		  margin: 20px 40px 20px 20px;
		  padding-top: 10px;
		}

		.introductionImage {
		  display: block;
		  width: 100%;
		  height: auto;
		  border-radius: 10px;
		  box-shadow: -30px -30px 0px #2C3629;
		}

		.overlay {
		  position: absolute;
		  bottom: 0;
		  left: 0;
		  right: 0;
		  background-color: #2C3629;
		  overflow: hidden;
		  width: 100%;
		  height: 0;
		  transition: .5s ease;
		  border-radius: 0px 0px 10px 10px
		}

		.container:hover .overlay {
		  height: 10%;
		  opacity: 0.7;
		}

		.message {
		  white-space: nowrap;
		  color: #F2EDE1;
		  font-size: 15px;
		  font-family: Helvetica, Arial, sans-serif;
		  position: absolute;
		  overflow: hidden;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		  -ms-transform: translate(-50%, -50%);
		}

		.emptySpace {
			height:70px;
			color: white;
			opacity:0;
		}

		#introductionText {
			margin: 20px 20px 20px 20px;
			padding: 10px 10px 10px 10px;
			font-family: Helvetica, Arial, sans-serif;
			font-size: 17px;
			line-height: 30px;
			text-align: justify;
		}

		#introductionHR {
			background-color: #4A5C61;
			height: 2px;
			border-style: none;
			}

		</style>

		<!-- Title is the text that appears on the Tab in the browser -->
		<title> IDEAS  </title>

	</head>

	<body>
	<div id= "homePicture">

		![Idea Image taken by Harrison Turton](./images/razi/imageBlog.jpg)
		<div class="textOnPicture">
			<p> IDEAS </p>
		</div>
	</div>

	<div class = "content">

	<div id ="quoteLine">
		<p id ="quote">
			<span class="quotation">“</span>
			Small minds discuss people. Average minds discuss events. Great minds discuss ideas.
			<span class="quotation">”</span>
		</p>
		<p> - Eleanor Roosevelt </p>

	</div>

	<div id ="introduction">
	<!--	<div class="container">
		  <img src="Images/Alexander Dummer.jpg" alt = "Family Stock Photo" width=100% class="introductionImage">
		  <div class="overlay">
			<div class="message">Photo by Alexander Dummer on Unsplash</div>
		  </div>
		</div>-->

		<hr id= "introductionHR">
		<p id= "introductionText">

	<h1>What I've learned</h1>

	<h2>Computer Vision</h2>

	<p>
	Internet of things, like I have defined previosly in my last blog post, consists of interconnected things or devices. They record some particular data from their world and send this
	data to a central system which will process the data and offer some service with this data.
	The way "things" interpret and record data from the world is through sensors. One of the most common sensors is the camera. Thus, for an Internet of Things artefact, it is
	essential to understand this popular sensor and how we could maximise its utility for our purposes.<br>

	But here lies the problem. An image, to a computer, is merely a matrix of values. Each matrix entry represents a pixel and its corresponding
	value is it's colour. Therefore, we interpret the world very differently to that of a machine. Yet, children as early as 1 year old are able to differentiate
	between different objects in the world. How do we teach the machines the same thing?<br>

	Well Computer Vision offers techniques and strategies to translate this matrix of values into a definition. The goal of computer vision is to determine the "story" behind the picture
	One way we could do this is using edge detection. Edge detection uses differing values of adjacent colour pixels to determine where an object ends. Edge detection thus can be further
	expanded to determine the shape of an object which, in turn, can be further expanded into depth perception. Machine learning can help us immensely in computer vision algorithms.
	</p>

	<h2>Privacy in Internet of Things </h2>

	<p>
	Both Engineers and Computer Scientists are subject to numerous rules of ethics, and privacy is one of them.
	Privacy must be a key consideation when developing IoT devices. These devices, which tend to personal, has opened the gate for data recording from unorthodox or sources.<br>

	One of the key issues I have learned about our devices in general is that they offer a lot of information about themselves to outside sources. Our devices in our home uses
	electricity which is monitored by the electricity supplier. Each device and appliance has their own unique signature of power usage, some may use a lot of power initially when turned on
	and then slowly deteriorate, while others may use power in a rollercoaster like manner - consuming high amounts of power and then low amounts successively in a short time period.
	Given a graph of our overall power usage throughout the day in our household, an external party will be able to determine our day to day routine using these signatures. They will know when
	you turn on your TV, when you do Laundry, when you charge your phone for the night, and etc. How do we prevent this from happening?<br>

	We can use some sort of buffer that helps masks the signatures of the devices and appliances. In our case, a seperate battery pack can be used to mask this. Our devices and appliances in
	our homes can draw power from this battery instead solely relying on power from the grid. Combined with the need to recharge the battery, we are able to mask the signatures of our
	appliances with this. <br>

	This case of Privacy in a Smart Electrical Grid is similar to other privacy concerns. Our solution proposed does indeed come up in other aspects and systems, and will be vital knowledge
	when creating Internet of Things artefacts and systems.
	</p>

	<h1>Ideas</h1>

	<h2> Smart Water Meter </h2>

	<p>
	One of the most initial ideas I had before I took this course was creating a smart water meter. A water meter is used to track a household's water usage. By giving this appliance
	an internet of things twist, we can introduce further functionality to it. My idea was to have the water meter connected to an Mobile Application which will offer certain features.
	The app's primary feature would allow users to easily track their water usage. The smart meter will also be able to record much more accurate data about the water meter.
	Additional features may include a notifications, social media/gamification aspect to water tracking and saving. </p>

	<h3> Refinements on Ideas </h3>
	<p>
	From the content I learned this week  I was able to further refine this idea. When coming up with this idea I had not thought about the privacy of this system. Similar to how people
	with access to data of our power usage are able to decipher our daily routine, a similar case could be made with data on our water usage. People can determine when you take a shower,
	when you do laundry, when you use the dishwasher, etc. User's in using this proposed smart water meter system place an immense trust on the system as the data about their water usage
	(which is recorded by the smart water meter) will be in the hands of the application and can be prone to theft/exposure. A workaround of this is we could encrypt the data from the
	water meter to the application such that only authorised user's, such as the household owner, will be able to view it.

	</p>

	<h2> Smart Suitcase </h2>

	<p>
	My roommate in Beijing throughout this trip, David, had a rough time getting here. Flight delays, missed connecting flights, and to top it all off, lost luggage. Inspired by this,
	one of my ideas is to create a smart suitcase that could help in these kinds of situations.<br>

	Firstly, the smart luggage will be connected to a phone via a Mobile application. This Mobile application will have a User Interface which will primarily be used to interact with
	the the smart suitcase. To be able to locate it, it will have a GPS tracker. The GPS Tracker will send out location information which can be tracked in the mobile application. Thus,
	when a user has lost his luggage, he could easily refer to the application to be able to locate it.<br>

	Secondly, I could have a Smart Lock feature that will prevent unwanted probing or inspection of luggage. The Smart Lock will only unlock when the Mobile Application prompts it to.
	We can also add additional features such as:
	</p>

	<ul>
	 <li>Proximity Notification </li>
	<li>Regular Update Notification </li>
	<li>Scale </li>
	<li>Embedded Power Bank </li>
	</ul>

	<p>
	Most major airports have free Wi-Fi, so connectivity will not be an issue and there is always the possibility of adding a SIM card slot to ensure connectivity.

	With this device, I hope to ease the lives of people affected by luggage loss such as David.

	</p>

	<p>
	All in all, my ideas are still quite rough as I have yet to fully master what Internet of Things is and what it can do. Something I hope to change in the next coming weeks.
	</p>

	<p>
	That's the end of my blog. I couldn't come up with a good Internet of Things joke so sorry about that. I'll see you next week.
	</p>
