/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        mobileRegister: "url(/src/assets/fundo/fundo-mobile-registration.svg)",
        catAndDog: "url(/src/assets/fundo/cat-dog.svg)",
        paws: "url(/src/assets/icons/Patas.svg)",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      colors: {
        creme: {
          100: "#FCF0E3",
        },
        gray: {
          light: "#F7F7F7",
          medium: "#BCBCBC",
          hard: "#737380",
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
