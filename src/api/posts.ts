import axiosConfig from "@/lib/axios-config";
const apiKey = process.env.NEXT_PUBLIC_MOVIEDB_API_KEY;

export const getMovieDetail = async (id:string) => {
  // console.log(id,"getMovieDetail",apiKey)
  const { data } = await axiosConfig.get("3/movie/" + id,{
    params: {
      api_key: apiKey
    }
  });
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

