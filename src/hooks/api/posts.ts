import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import * as api from "@/api/posts";

export const useMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ["detail", id],
    queryFn: () => api.getMovieDetail(id),
  });
};

export const useMovies = () => {
  return useInfiniteQuery(
    ["movies"],
    ({ pageParam }) => api.getMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextPage = lastPage.page + 1;
        if (nextPage <= lastPage.total_pages) {
          return nextPage;
        } else {
          return undefined;
        }
      },
    }
  );
};
