# Jet Protocol

## Live Demo

[https://jet-protocol.vercel.app/](https://jet-protocol.vercel.app/)

## Description

Jet Protocol is an internship assignment project for TweepBooks. It is a web application built with Next.js, React Query, Tailwind CSS, Next SEO, and uses Supabase as the backend. The project is hosted on Vercel.

## Table of Contents

- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [About the App](#about-the-app)
- [Explaning the Codebase](#explaining-the-codebase)
- [Special Features](#special-features)

## Installation

To run the Jet Protocol project locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/chirag-chhajed/jet-protocol
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=<supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase_anon_key>
```

4. Run the development server:

```bash
npm run dev
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next SEO](https://www.npmjs.com/package/next-seo)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)

## About the App

- **Landing Page**
![Landing Page](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896240/Landing_Page_clnqrm.png)
![LightHouse Score](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896239/LandingPageLH_rvoqrc.png)
It's a completely static page. I have tried to make it responsive. I have used Tailwind CSS for styling. I have used Next SEO to add meta tags to the page and also added an Open Graph image.

- **Auth Pages**
![Sign In](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896238/signin_page_ivdchk.png)
![Sign Up](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896242/signup_page_ix7n8r.png)
![LightHouse Score](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896231/authLH_kmueho.png)
The authentication pages include both Sign In and Sign Up pages. They are responsive and utilize Supabase for authentication. To ensure security, email verification is required for new sign-ups.

- **Movies Page**
![Movies Page](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896250/MoviePage_amahks.png)
![LightHouse Score](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896233/MoviePageLH_ol2f7z.png)
The Movies page is accessible only to authenticated users. It displays a list of movies fetched from an API using React Query. The page features Infinite Scroll, allowing users to load new movies as they reach the end of the page. Additionally, Next SEO has been implemented to optimize the page with meta tags and an Open Graph image.

- **Movie Detail Page**
![Movie Detail Page](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896250/DetailPage_wy4w1o.png)
![LightHouse Score](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690896232/DetailPageLH_fwfmtq.png)
The Movie Detail page is accessed by clicking on a movie title from the Movies page. It provides detailed information about the selected movie.

The project uses Tailwind CSS for styling, providing a modern and visually appealing user interface.

## Explaining the Codebase

The codebase of Jet Protocol follows the Next.js Pages directory structure. Initially, the project used the "app" directory, but due to some issues, it was moved to the "pages" directory.

To fetch data from various APIs, a combination of Axios and React Query is used. The project implements functions and custom hooks to write boilerplate code for fetching different APIs, ensuring code reusability and avoiding repetition.

```ts
// src/lib/axios-config.ts
// axios config for base url and api key
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org",
  params:{
    api_key: process.env.API_KEY
  }
});

export default instance;

```

```ts
// src/hooks/api/post.ts
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

```

Additionally, the project leverages Server-Side Rendering (SSR) at various places to optimize the initial loading performance and improve SEO.
Moreover, the project uses a custom `useScrollPosition` hook to implement infinite scrolling on the Movies page. This custom hook is designed with reusability in mind, allowing its potential usage in other pages for infinite scroll functionality.

## Special Features

The Jet Protocol project includes several unique features that enhance user experience and functionality:

1. Toast Components: To provide real-time feedback to users, the project incorporates toast components. These components display non-intrusive notifications for actions like successful login, logout, or any other important updates.
    - **Info Toast:** ![Info Toast](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690897101/toast_component_normal_jzqmjj.png)
    - **Error Toast:**![Error Toast](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690897092/Error_toast_ebaxjz.jpg)
    - **Success Toast:**![Success Toast](https://res.cloudinary.com/dz04dxsi9/image/upload/v1690897080/info_toast_cxyqch.png)

2. Smart Redirect: On the landing page, clicking the "Launch App" button intelligently redirects users to the appropriate page. If the user is already authenticated, they are redirected to the Movies page directly, streamlining the user flow.

3. Server-Side Rendering (SSR): Jet Protocol extensively utilizes Next.js's built-in Server-Side Rendering (SSR) capabilities. SSR ensures better performance, SEO, and enhanced user experience, as initial page loads include data from the server.

The incorporation of these special features showcases your effort to make Jet Protocol unique and user-friendly within the limited time frame.
