import Button from "./Button";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center text-center place-self-center px-11 max-w-[75%] mt-40">
      <p className="uppercase font-bold text-xs md:text-sm text-[#54C0A0]">
        jet protocol
      </p>
      <h1 className="font-medium leading-[125%] text-3xl md:text-5xl px-5">
        the next generation of <br />
        <span className="italic font-semibold font-playFair">
          defi governance
        </span>
      </h1>
      <p className="pt-5 text-base font-normal text-white md:text-xl opacity-60">
        experience open source, transparent and efficient borrowing and lending
        on solana.
      </p>
      <div className="flex flex-col gap-5 pt-10 sm:flex-row">
        <Button text="read docs" />
        <button className="rounded-[100px] border border-solid border-white border-opacity-50 bg-black px-5 py-2  text-xs lowercase font-semibold text-[14px] text-center self-start shadow-buttonShadow2 backdrop-blur-[6px] active:shadow-activeButtonShadow2 transition">
          how it works
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
