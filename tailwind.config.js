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
        user: "url(/src/assets/icons/Usuario.svg)",
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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        nb: "1360px",
        //NoteBook
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
