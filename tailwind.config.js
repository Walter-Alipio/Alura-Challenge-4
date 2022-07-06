/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url(/src/assets/fundo/fundo-mobile.png)",
        catAndDog: "url(/src/assets/fundo/cat-dog.svg)",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      colors: {
        creme: {
          100: "#FCF0E3",
        },
        gray: {
          100: "#F7F7F7",
          500: "#BCBCBC",
          900: "#737380",
        },
        coral: {
          hover: "#FF9D9E",
          normal: "#FC7071",
        },
        green: {
          secondary: "#36D6AD",
        },
        blue: {
          logo: "#3772FF",
        },
      },
    },
  },
  plugins: [],
};
