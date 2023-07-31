import axios from "@/lib/axios";
import axiosConfig from "@/lib/axios-config";
const apiKey = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;

export const getPost = async (id:string) => {
  const { data } = await axios.get("/posts/" + id);
  return data;
};

export const getMovies = async (page = 1) => {
  const { data } = await axiosConfig.get("/3/trending/movie/day", {
    params: {
      api_key: apiKey, 
      page,
    },
  });
  return data;
};

