import axios from "@/lib/axios-config";
import { useMovies } from "@/hooks/api/posts";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useEffect } from "react";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


const MoviesPage = () => {
  const { fetchNextPage, data, isLoading, isError, hasNextPage, isFetching } =
    useMovies();
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition > 90 && hasNextPage && !isFetching) {
      void fetchNextPage();
    }
  }, [scrollPosition, hasNextPage, isFetching, fetchNextPage]);
  // You can check isLoading and isError to handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log(hasNextPage, "hasNextPage");

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  console.log(data.pages, "data");

  return (
    <div className="bg-gray-900">
      {data.pages.map((page) =>
        page.results.map((movie:Movie) => (
          // create a card with tailwind classes which has image, title
        JSON.stringify(movie)
        ))
      )}
    </div>
  );
};

export default MoviesPage;
