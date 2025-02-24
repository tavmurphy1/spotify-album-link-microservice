/* 
 * Author: Tavner Murphy
 * Date: 2/23/2024

This express server microservice fetches both a spotify
link using the Spotify API. It returns the spotify link and an embed link to the calling service.

*/

const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Function to get Spotify access token using credentials
const getSpotifyAccessToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'),
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });
  // Convert the access token response to JSON then returns for validation
  const data = await response.json();
  return data.access_token;
};

// Function to search Spotify for the Album + Artist, limit one result (best match)
const searchAlbumOnSpotify = async (album, artist, accessToken) => {
  const searchQuery = `album:${album} artist:${artist}`;
  const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=album&limit=1`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }, //need the access token for authentication
  });
  // Convert the response to JSON and return array holding one album object
  const data = await response.json();
  return data.albums.items;
};

// Defines endpoint for Spotify album links (normal and embed)
app.get('/spotify-album', async (req, res) => {
  const { album, artist } = req.query;

  if (!album || !artist) {
    return res.status(400).json({ error: 'Both album and artist name are required' });
  }

  try {
    const accessToken = await getSpotifyAccessToken();
    const albums = await searchAlbumOnSpotify(album, artist, accessToken);

    if (albums && albums.length > 0) {
      const selectedAlbum = albums[0];
      // Use Spotify link from the API
      const spotifyLink = selectedAlbum.external_urls.spotify;
      // Make the embedded link using albumID
      const embedLink = `https://open.spotify.com/embed/album/${selectedAlbum.id}`;
      
      return res.json({ spotifyLink, embedLink });
    } else {
      return res.status(404).json({ error: 'Album not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Spotify Album Link Microservice listening on port ${PORT}`);
});