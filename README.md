# Spotify Album Link Microservice
**Author:** Tavner Murphy
**Date:** 2/24/25

This microservice retrieves a Spotify album link (and an embed link) using the Spotify API by searching for an album using its name and artist. It uses Node.js and Express.
 
# Installation

# 1. Clone or Download the repository
Open terminal to desired directory and enter the following:
    
	git clone https://github.com/yourusername/spotify-album-microservice.git
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


# Requesting Data From the Spotify Album Link Microservice

Make an HTTP GET request to the /spotify-album endpoint. This endpoint requires two query parameters:

	album
	artist
    
Example Request URL: 

	http://localhost:3001/spotify-album?album=In%20Rainbows&artist=Radiohead



# Receiving Data From the Spotify Album Link Microservice
The microservice will respond with a JSON object containing two keys.
		
  	the spotify link
	the spotify link converted to an embed link

example response:


	{
  	"spotifyLink": "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
  	"embedLink": "https://open.spotify.com/embed/album/5vkqYmiPBYLaalcmjujWxK"
	}


# Team Communications Contract/Ground Rules
1) We use Discord for primary means of communication and use tags when getting someone’s attention.

2) Our team uses Asana for a task management system.

3) 24 hours is our general expectation for a response if a group-mate asks you a direct question or tries to get in touch.

4) If a group-mate knows they’re going to be unavailable for more than 24-48 hours then that should communicate that with the group ahead of time.

5) As an absolute last resort email is for contacting if group mate is unresponsive after 72 hours. Otherwise communication should be kept to Discord.

6) If a group member remains unresponsive after 72 hours and contact has been attempted through Discord and email, then a backup plan for microservices will go into effect.








