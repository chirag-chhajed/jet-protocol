import React from "react";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import Slider from "@/components/Home/Slider";
import Filter from "@/components/Home/Filter";

export default function LandingPage() {
  return (
    <>
      <div className="max-w-screen-xl px-4 pt-8 mx-auto leading-normal text-white bg-black sm:px-8 md:px-16 lg:px-32">
        <div className="relative z-10 flex flex-col items-stretch min-h-screen lg:h-auto">
          <Header />
          <HeroSection />
          <Slider />
          <div className="absolute left-0 w-full h-full -z-10 -top-20">
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
}
