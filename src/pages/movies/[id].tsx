import { GetServerSideProps } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getMovieDetail } from "@/api/posts";
import { useMovieDetail } from "@/hooks/api/posts";
import { useRouter } from "next/router";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/dist/server/api-utils";
import Header from "./Header";
import { NextSeo } from "next-seo";
interface Params extends ParsedUrlQuery {
  id: string;
}
interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const MovieDetail = () => {
  const {
    query: { id },
  } = useRouter();
  const { data: movie, error } = useMovieDetail(id as string);
  if(error){
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <>
      <NextSeo
        title={movie.title + " | MovieMania"}
        description={movie.overview}
        openGraph={{
          title: `${movie.title} + " | MovieMania`,
          description:
            `${movie.overview}`,
          images: [
            {
              url: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            },
          ],
          siteName: "MovieMania",
        }}
      />
      <div className="bg-[#141414]">
        <div className="container max-w-screen-xl px-4 py-8 mx-auto">
          <Header />
          <div className="flex flex-col justify-center gap-4 text-white md:gap-8">
            <img
              className="object-cover w-full rounded-lg h-80 md:h-96 lg:h-auto"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title + " Poster"}
            />
            <h1 className="text-3xl font-bold md:text-4xl">{movie.title}</h1>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Tagline:</span>
              <br />
              <span className="text-gray-300">{movie.tagline}</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Overview:</span>
              <br />
              <span className="text-gray-300">{movie.overview}</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Release Date:</span>
              <br />
              <span className="text-gray-300">{movie.release_date}</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Runtime:</span>
              <br />
              <span className="text-gray-300">{movie.runtime} minutes</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Genres:</span>
              <br />
              <span className="flex flex-wrap gap-2">
                {movie.genres.map((genre: Genre) => (
                  <span
                    key={genre.id}
                    className="px-2 py-1 text-white bg-gray-600 rounded"
                  >
                    {genre.name}
                  </span>
                ))}
              </span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Homepage:</span>
              <br />
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                {movie.homepage}
              </a>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">IMDb ID:</span>
              <br />
              <span className="text-gray-300">{movie.imdb_id}</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Vote Average:</span>
              <br />
              <span className="text-gray-300">
                {movie.vote_average} (based on {movie.vote_count} votes)
              </span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Status:</span>
              <br />
              <span className="text-gray-300">{movie.status}</span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Production Countries:</span>
              <br />
              <span className="text-gray-300">
                {movie.production_countries
                  .map((country: ProductionCompany) => country.name)
                  .join(", ")}
              </span>
            </p>
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-bold">Spoken Languages:</span>
              <br />
              <span className="text-gray-300">
                {movie.spoken_languages
                  .map((language: SpokenLanguage) => language.name)
                  .join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);
  const {data:session} = await supabase.auth.getSession()
  console.log(session)
  if (!session.session)
    return {
      redirect: {
        destination: "/auth/signup",
        permanent: false,
      },
    };

  const { id } = ctx.params as Params;
  const queryClient = new QueryClient();
  console.log(id)

  await queryClient.fetchQuery(["detail", id], () => getMovieDetail(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
