import axios from "axios";

export const getTopUsCharts = () =>
  axios.get("https://deezerdevs-deezer.p.rapidapi.com/playlist/1313621735", {
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  });

export const getTopGlobalCharts = () =>
  axios.get("https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842", {
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  });

// Deezer Links
// Top 100 USA Playlist id = 1313621735
// Top 100 Worldwide Playlist id = 3155776842
// Tests (freddie Gibbs = 392180)
// bandana id = 101778542
// crime pays id = 703804172

// Genius
