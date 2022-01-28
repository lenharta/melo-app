import axios from "axios";

const instance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  },
});

export default instance;
