# Spotify Album Link Microservice
**Author:** Tavner Murphy
**Date:** 2/24/25

This microservice retrieves a Spotify album link (and an embed link) using the Spotify API by searching for an album using its name and artist. It uses Node.js and Express.
 
# Installation

# 1. Clone or Download the repository
Open terminal to desired directory and enter the following:
    
	git clone https://github.com/tavmurphy1/spotify-album-microservice.git
	cd spotify-album-microservice
 

# 2. Install Dependencies
	npm install

# 3. Configure .env Environment Variables (optional)

	Open .env in /spotfiy-album-microservice
	Enter desired port #
	Enter desired spotify client ID
	Enter desired Spotify Secret

# 4. Start the service
	npm start


# Communication Contract - Requesting Data From the Spotify Album Link Microservice

Make an HTTP GET request to the /spotify-album endpoint. This endpoint requires two query parameters:

	- album
	- artist
    
Example HTTP GET Request URL: 

	http://localhost:3001/spotify-album?album=In%20Rainbows&artist=Radiohead

# Receiving Data From the Spotify Album Link Microservice
The microservice will respond with a JSON object containing two keys.
		
  	- the spotify link
	- the spotify link converted to an embed link

example response:

	{
  	"spotifyLink": "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
  	"embedLink": "https://open.spotify.com/embed/album/5vkqYmiPBYLaalcmjujWxK"
	}

<img width="831" alt="Screenshot 2025-02-24 at 7 22 33 PM" src="https://github.com/user-attachments/assets/feb34c7c-5fb4-4202-b819-e98abfdf2a55" />








