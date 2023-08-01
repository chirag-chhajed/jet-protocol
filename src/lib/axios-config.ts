import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params:{
    api_key: process.env.API_KEY
  }
});

export default instance;
