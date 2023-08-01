import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="rounded-[100px] mx-auto sm:mx-0 border border-solid border-white border-opacity-25 bg-buttonColor px-5 py-2 text-black text-xs lowercase font-semibold text-[14px] text-center self-start shadow-buttonShadow active:shadow-activeButtonShadow transition ">
      {text}
    </button>
  );
};

export default Button;
