/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        catAndDog: "url(/src/assets/fundo/cat-dog.svg)",
        paws: "url(/src/assets/icons/Patas.svg)",
        forma1: 'url("/src/assets/fundo/Forma1.svg")',
        forma2: 'url("/src/assets/fundo/Forma2.svg")',
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
