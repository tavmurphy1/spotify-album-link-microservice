/* 
 * Author: Tavner Murphy
 * Date: 2/23/2024

This is a simple test program to demonstrate the microservice is working correctly.
You can enter any artist/album into the fields below. 
Note that they have to actually exist or you will get an error/unexpected behavior.
*/
(async () => {
  try {
    const album = 'In Rainbows';
    const artist = 'Radiohead';
    const url = `http://localhost:3001/spotify-album?album=${encodeURIComponent(album)}&artist=${encodeURIComponent(artist)}`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      console.log('Spotify Album Link Microservice Response:', data);
    } else {
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Error calling Spotify Album Link Microservice:', error);
  }
})();