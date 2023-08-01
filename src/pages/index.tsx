import React from "react";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import Slider from "@/components/Home/Slider";
import Filter from "@/components/Home/Filter";

export default function LandingPage() {
  return (
    <>
      <div className="bg-black">
        <div className="relative z-10 flex flex-col items-stretch max-w-screen-xl min-h-screen px-4 pt-8 mx-auto leading-normal text-white bg-black lg:h-auto sm:px-8 md:px-16 lg:px-32 ">
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
