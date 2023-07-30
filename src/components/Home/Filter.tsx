const Filter = () => {
  return (
    <div className="grid w-[697px] h-[524px] grid-cols-2 grid-rows-[3fr,1fr] mx-auto my-4 relative">
      <div className="col-span-1 pr-20 bg-conicGradient -scale-x-100"></div>
      <div className="col-span-1 pr-20 bg-conicGradient"></div>
      <div className="col-span-2 h-[225px] w-full absolute bottom-0 bg-black bg-opacity-5 blur-[20px] backdrop-blur-xl"></div>
      <div className="absolute top-[187px] h-[94px] w-[284px] bg-filter left-1/2 -translate-x-1/2 rounded-[284px] blur-[125px]">
        <div className="w-[273px] bg-black h-3 blur-[10px]"></div>
      </div>
    </div>
  );
};

export default Filter;
