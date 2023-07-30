/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: "#64AE9D",
        filter: "#32A5D3",
      },
      backgroundImage: {
        conicGradient:
          "conic-gradient(from 270deg at 50.00% 50.00%, rgba(0, 0, 0, 0.00) 2.3409034498035908deg, rgba(84, 192, 160, 0.10) 2.5281363911926746deg, rgba(0, 0, 0, 0.00) 181.31576299667358deg, rgba(84, 192, 160, 0.00) 240.43158435821533deg, #54C0A0 359.23537731170654deg)",
      },
      animation: {
        sliderAnimation: "sliderAnimation 9s linear infinite",
      },
      keyframes: {
        sliderAnimation: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      boxShadow: {
        buttonShadow:
          "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
        activeButtonShadow:
          "0px 1px 1px 0px rgba(255, 255, 255, 0.48) inset, 0px -1px 1px 0px rgba(0, 0, 0, 0.48) inset",
        buttonShadow2:
          "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset;",
        activeButtonShadow2:
          "0px 1px 1px 0px rgba(255, 255, 255, 0.48) inset, 0px -1px 1px 0px rgba(0, 0, 0, 0.48) inset;",
      },
      fontFamily: {
        playFair: ["Playfair Display", "sans serif"],
      },
    },
  },
  plugins: [],
};
