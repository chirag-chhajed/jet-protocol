import Image from "next/image";
import sliderData from "@/data/sliderData"; 

const Slider = () => {
  const loopedSliderData = [...sliderData, ...sliderData];
  return (
    <div className="overflow-hidden whitespace-nowrap sm:-mx-8 md:-mx-16 lg:-mx-32">
      <div className="flex gap-6 mt-20 animate-sliderAnimation">
        {loopedSliderData.map((item, index) => (
          <Image
            key={index}
            src={item.url}
            width={item.width}
            height={item.height}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
