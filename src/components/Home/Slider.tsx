import sliderData from "@/data/sliderData"; 

const Slider = () => {
  const loopedSliderData = [...sliderData, ...sliderData,...sliderData];
  return (
    <div className="mt-20 overflow-hidden whitespace-nowrap sm:-mx-8 md:-mx-16 lg:-mx-32">
      <div className="flex gap-6 animate-sliderAnimation">
        {loopedSliderData.map((item, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={item.url}
            alt={item.alt}
            loading="lazy"
            className={`h-[${item.height}px] w-[${item.width}px] `}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
