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
// 0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset,
//                 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset