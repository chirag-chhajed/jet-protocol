import { useMovies } from "@/hooks/api/posts";
import useScrollPosition from "@/hooks/useScrollPosition";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Header from "./Header";

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

interface Page {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
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
    return (
      <div className="flex items-center justify-center h-screen bg-[#141414]">
        <div className="flex items-center justify-center space-x-1 text-sm text-white">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule={"evenodd"}
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
      <div className="px-4 py-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:py-3 md:py-4 lg:py-6 xl:py-8 bg-[#141414] ">
        <Header />
        <div className="grid items-center justify-center gap-4 auto-rows-auto gap- grid-cols-auto ">
          {data.pages.map((page: Page) =>
            page.results.map((movie: Movie) => (
              <div
                key={movie.id}
                className="card bg-[#ffffff1a] h-auto  w-64 rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex flex-col justify-center h-full card-content">
                  <div className="relative w-64 h-2/3">
                    <img
                      className="object-cover w-64 h-2/3"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title + "poster"}
                    />
                  </div>
                  <div className="max-w-full px-3 py-2 mt-2 font-semibold text-[#f0f0f0] flex flex-col gap-2">
                    <h3
                      className="text-xl font-bold text-left truncate"
                      title={movie.title}
                    >
                      <Link
                        className="cursor-pointer"
                        href={`/movies/${movie.id}`}
                      >
                        {movie.title}
                      </Link>
                    </h3>
                    <p className="line-clamp-2 text-[#ffffff80] text-base cursor-default">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {isLoading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default MoviesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);
  const { data: session } = await supabase.auth.getUser();
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signup",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
