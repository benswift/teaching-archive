---
author: Brent Schuetze
title: If you really are who you say you are... - re:rIoT.07
week: 8
date: 2019-01-19
---

<p></p>

#### _In this chapter, getting familiar with the Spotify API and Authentication_

After having [Raspotify](https://dtcooper.github.io/raspotify/) successfully running Spotify in headless mode and being controllable by [Spotify connect](https://www.spotify.com/us/connect/), I have been progressing with this playback method and investigating how I can go about controlling it externally.

_A note on Raspotify:_ As I have mentioned briefly earlier, Raspotify has proven to be the best option currently, as it uses Spotify connect which is a new and still currently supported feature of Spotify, and the fact that it is able to run in headless mode (and non), without any user action. It hasn't however, been without issue.  
It sometimes takes a while for a song to beigin playing when requested on a Spotify client which sometimes seems to lead to problems where very intermittently and rarely, a song will be cut short and will begin the next item in a playlist while there is still some remaining audio time on that song. I have checked the [bugs](https://github.com/dtcooper/raspotify/issues) on the gitlab and there seem to be others with [a](https://github.com/dtcooper/raspotify/issues/98) [similar](https://github.com/librespot-org/librespot/issues/210) [issue](https://github.com/dtcooper/raspotify/issues/103) but no mention of it finishing songs early, so whether these are connected or not remains to be seen. Personally I believe it is, as the client probably thinks the song is over and sends info on what to play next to Raspotify, which then ends the current playback and loads the next song (but again, not sure if that is the case).

Thankfully, Spotify has a rather nicely documented section all about [developing with Spotify](https://developer.spotify.com/) that has a lot of functionality. Specifically, I have been looking into two sections:

- The [playlist](https://developer.spotify.com/console/playlists/) console gives me functionality to
  - check songs in a playlist
  - add / remove songs from a playlist
  - reorder a playlist
- The [player](https://developer.spotify.com/console/player/) console gives me functionality to
  - play, pause and skip from the current player
  - get information about the current playback
  - change the play mode (shuffle, repeat etc.)
  - change the volume of the current player

There is more functionality in the console than this, however these are the sections I believe will be required the most to make the jukebox function at a basic level. And the best thing about it is that they are all API requests, which makes it easy to transfer functionality if Raspotify is not usable in the final product.

But before that, we need to access the linked Spotify account, and to do that we need to go through one of the [authorization methods](https://developer.spotify.com/documentation/general/guides/authorization-guide/) that Spotify provides. Currently all of them require the user to login via the web, eventually I would like a separate page that a user will be able to use to do this process remotely, but that will require HTTPS to prevent any man-in-the-middle attacks as the data will not be securely transported from website to server.  
For now, I will be using the "Temporary user authentication" which basically requires a http request, which redirects you to the Spotify login page and after successful authentication you're returned a token to use with the API, which lasts about an hour and is not renewable.

### Javascript Web Requests

To begin using the Spotify authentication system, we need to be able to make http requests from our web server. There are a number of ways to do this, however after some research on the topic I found that the 'fetch API' is one of the better and more popular ways of accomplishing this (you can find the docs [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)).  
The basic premise is that you make a http request which returns a promise, this promise allows us to handle the request and response in an asynchronous manner, which is important for not blocking other resources while the request is being processed.  
A basic request has the form:

```
fetch(url, { // Provide the url to visit
            headers: { "Content-Type": "application/json; charset=utf-8"}, // Specify any request headers
            method: "GET" // Make a 'GET' request
        })
        .then(response => response.json()) // Parse response into JSON format
        .then(data => console.log(data)); // Print the data to the console
```

### Authorizing your Spotify account and app

![Who are you?](./images/brent/spiderman.jpg)  
_Note: image [sauce](https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man)_  
Before you start on this, you need to have a registered application, [here](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app) is a guide on how to do this if you have not already.  
Once you have an application, and its client ID, you can now proceed with one of the authorization flows.  
As mentioned earlier, there are 3 methods for accomplishing this, however I will be going through the temporary method here (Implicit Grant Flow).  
To begin we will need to formulate a correct URL and request for our application, this will have a few parts to it, all of which will be embedded in the URL itself (as a query parameter):

- Client ID _(required)_
  - The unique identifier for your application, provided to you by Spotify
- Response type _(required)_
  - The field that identifies what kind of authorization flow you are following, for us this will be set to 'token'
- Redirect URI _(required)_
  - The location to redirect to after the user has logged in and provided access to the app, this will also need to be [whitelisted](https://en.wikipedia.org/wiki/Whitelisting), as mentioned in the initial step when registering your application.  
    \*Note: for the difference between a URL and a URI [click here](https://danielmiessler.com/study/url-uri/)\*
- Scope _(optional)_
  - This is a list of what the application will have access to do, for a detailed list of scopes and what they do [click here](https://developer.spotify.com/documentation/general/guides/scopes/)
- State _(optional)_
  - An extra level of security, basically a string that you can include in the request that will be passed back to you, used to ensure that the request is one you generated and not an external source.

With this, let's generate an example for controlling playback:

```
clientID = example123
redirectURI = http://redirectme.com/here
state = aBcd9876
scope = user-modify-playback-state
url = "https://accounts.spotify.com/authorize?client_id=example123&response_type=token&redirect_uri=http://redirectme.com/here/&scope=user-modify-playback-state&state=aBcd9876"

// now the request, you can have a GET like this:
fetch(url, {
            method: "GET"
        })...
// or you can just visit the link and wait for the redirection to bring you back
```

After a successful redirection, your access token will be present in the current URL, to continue from our example, this would be the new URL:

```
http://redirectme.com/here/#access_token=qwerty5678&token_type=Bearer&expires_in=3600&state=aBcd9876
```

Congratulations! You now have an access token to use with your application for the next hour.

### Interacting with the Spotify API

Before I go, let's have a look at an example request using the token we've just acquired:

Let's say we want to pause the current playback, the request we would form would look like this,

```
fetch("https://api.spotify.com/v1/me/player/pause, {
        headers: {"Content-Type": "application/json",
                  "Accept": "application/ json",
                  "Authorization": "Bearer qwerty5678"},
        method: "PUT"
    })
```

On a success, the response you receive won't matter, but what if it fails? Let's see an example where we try to access our recently played tracks using the same token as before,

```
fetch("https://api.spotify.com/v1/me/player/recently-played, {
        headers: {"Content-Type": "application/json",
                  "Accept": "application/ json",
                  "Authorization": "Bearer qwerty5678"},
        method: "PUT"
    }).then(response => response.json()) // Catch the response this time
      .then(data => console.log(data));
```

We would see a console entry as such:

```
{
  "error": {
    "status": 403,
    "message": "Insufficient client scope"
  }
}
```

This happened because we tried to access something outside of our current token's scope, looking at the [doc page for 'recently played tracks'](https://developer.spotify.com/documentation/web-api/reference/player/get-recently-played/) we can see that the scope `user-read-recently-played` is required for us to successfully make this request.  
To make this work we would need to request a new token with increased scope using a new url, additional scope can be added by simply adding a space to the end of the last scope item followed by the new scope item like so,

```
url = "https://accounts.spotify.com/authorize?client_id=example123&response_type=token&redirect_uri=http://redirectme.com/here/&scope=user-modify-playback-state%20user-read-recently-played&state=aBcd9876"
```

_Note: %20 is a URL encoded space (20 in hex)_  
Using the token provided by this URL would then allow us to access the recently played tracks from a user, where the response would be a JSON object containing that info.

#### Finishing up

The above is a very brief introduction into using javascript to make web requests and interact with the Spotify API, it is by no means exhaustive but should provide enough foundation to begin building web apps to interact with the API!
