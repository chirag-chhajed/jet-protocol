import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useState } from "react";
import "@/styles/globals.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from "@tanstack/react-query";
import { Toaster } from "sonner";
import { DefaultSeo, NextSeo } from "next-seo";

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
  dehydratedState: DehydratedState;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <NextSeo
            title="Jet Protocol"
            description="the next generation of defi governance experience open source, transparent and efficient borrowing and lending on solana."
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://jet-protocol.vercel.app/",
              site_name: "Jet Protocol",
              images: [
                {
                  url: "https://res.cloudinary.com/dz04dxsi9/image/upload/v1690876845/og_uygams.jpg",
                },
              ],
            }}
          />
          <Component {...pageProps} />
          <Toaster richColors expand={true} />
        </SessionContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
