import Button from "./Button";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center text-center place-self-center px-11 max-w-[75%] mt-40">
      <p className="uppercase font-bold  text-xs text-[#54C0A0]">
        jet protocol
      </p>
      <h1 className="font-medium leading-[125%] text-5xl px-5">
        the next generation of <br />
        <span className="italic font-semibold font-playFair">
          defi governance
        </span>
      </h1>
      <p className="pt-5 text-xl font-normal text-white opacity-60">
        experience open source, transparent and efficient borrowing and lending
        on solana.
      </p>
      <div className="flex gap-5 pt-10">
        <Button text="read docs" />
        <button className="rounded-[100px] border border-solid border-white border-opacity-50 bg-black px-5 py-2  text-xs lowercase font-semibold text-[14px] text-center self-start shadow-buttonShadow2 backdrop-blur-[6px] active:shadow-activeButtonShadow2 transition">
          how it works
        </button>
      </div>
    </main>
  );
}

export default HeroSection
