import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '@fontsource/playfair-display'

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="max-w-screen-xl px-4 pt-8 mx-auto leading-normal text-white bg-black sm:px-8 md:px-16 lg:px-32">
          {children}
        </div>
      </body>
    </html>
  );
}
