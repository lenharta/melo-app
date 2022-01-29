const requests = {
  fetchTopUS: "/playlist/1313621735/",
};

export default requests;

// // Returns top 10 Albums, Artists, playlists, podcasts, and Tracks
// export const getChartsEditorial = () =>
//   axios.get("https://deezerdevs-deezer.p.rapidapi.com/editorial/0/charts", {
//     headers: {
//       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   });

// Top 100 USA - Playlist
// export const getChartUS100 = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://deezerdevs-deezer.p.rapidapi.com/playlist/1313621735",
//       {
//         headers: {
//           "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//           "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//         },
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// Top 100 Global - Playlist
// export const getChartGlobal100 = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842",
//       {
//         headers: {
//           "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//           "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//         },
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Example -- https://developers.deezer.com/api/explorer?url=artist/27
// // Info -- https://developers.deezer.com/api/artist
// export const getArtistPage = () =>
//   axios.get("https://deezerdevs-deezer.p.rapidapi.com/artist", {
//     headers: {
//       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
//       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//     },
//   });

// Deezer Links
// Top 100 USA Playlist id = 1313621735
// Top 100 Worldwide Playlist id = 3155776842
// Tests (freddie Gibbs = 392180)
// bandana id = 101778542
// crime pays id = 703804172

// Example --
// Info --
