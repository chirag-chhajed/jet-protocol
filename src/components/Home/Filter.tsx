const Filter = () => {
  return (
    <div className="grid w-full md:w-[44rem] h-[33rem] grid-cols-2 grid-rows-[3fr,1fr] mx-auto my-4 relative">
      <div className="col-span-1 md:pr-20 bg-conicGradient -scale-x-100"></div>
      <div className="col-span-1 md:pr-20 bg-conicGradient"></div>
      <div className="col-span-2 h-[14rem] w-full absolute bottom-0 bg-black bg-opacity-5 blur-[1.25rem] backdrop-blur-xl"></div>
      <div className="absolute top-[11.7rem] h-[6rem] w-[17.75rem] bg-filter left-1/2 -translate-x-1/2 rounded-[17.75rem] blur-[8rem]">
        <div className="w-[17rem] bg-black h-3 blur-[10px]"></div>
      </div>
    </div>
  );
};

export default Filter;
