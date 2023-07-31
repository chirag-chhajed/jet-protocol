import { useQuery,useInfiniteQuery } from "@tanstack/react-query";
import * as api from "@/api/posts";

export const usePost = (id:string) => {
  return useQuery({ queryKey: ["post", id], queryFn: () => api.getPost(id) });
};

// hooks/api/posts.js


export const useMovies = () => {
  return useInfiniteQuery(
    ["movies"],
    ({ pageParam }) => api.getMovies(pageParam),
    {
      getNextPageParam: (lastPage) => {
        
        const nextPage = lastPage.page + 1;
        // console.log(lastPage)
        if (nextPage <= lastPage.total_pages) {
          return nextPage;
        } else {
          return lastPage.page; // No more pages to fetch
        }
      },
    }
  );
};


