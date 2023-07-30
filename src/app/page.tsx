import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import Slider from "@/components/Home/Slider";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-stretch min-h-screen">
        <Header />
        <HeroSection />
        <Slider />
      </div>
    </>
  );
}
{
  /* <div className="w-[697px] h-[524px] mx-auto relative top-0">
        <div className="w-[288px] h-[94px]  bg-filter mx-auto absolute top-1/3 left-1/2 -translate-x-1/2 -transalte-y-1/2 z-10 blur-[125px]">
          <div className="bg-black h-[7px] w-[273px] mx-auto blur-md "></div>
        </div>
        <div className="flex justify-center h-[393px] gap-0">
          <div className="w-[275px] h-[393px] left-gradient"></div>
          <div className="w-[275px] h-[393px] right-gradient"></div>
        </div>
        <div className="w-[697px] h-[225px] absolute bottom-0 backdrop-blur-xl blur-xl"></div>
      </div> */
}
