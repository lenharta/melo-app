import axios from "axios";

export const getTopUsCharts = () =>
  axios.get("https://deezerdevs-deezer.p.rapidapi.com/playlist/1313621735", {
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  });

// export const getArtistData = async () => {
//   try {
//     const { data } = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/artist/392180', {
//       headers: {
//         'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
//         'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//       }
//     })

//     console.log(data)
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const getTopUsCharts = async () => {
//   try {
//     const { data } = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/playlist/1313621735', {
//       headers: {
//         'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
//         'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
//       }
//     })

//     console.log(data)
//     return data

//   } catch (err) {
//     console.log(err)
//   }
// }

// Deezer Links
// Top 100 USA Playlist id = 1313621735
// Top 100 Worldwide Playlist id = 3155776842
// Tests (freddie Gibbs = 392180)
// bandana id = 101778542
// crime pays id = 703804172

// Genius
