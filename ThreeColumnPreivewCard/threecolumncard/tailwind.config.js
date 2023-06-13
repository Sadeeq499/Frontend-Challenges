/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          BrightOrange: "hsl(31, 77%, 52%)",
          DarkCyan: "hsl(184, 100%, 22%)",
          VeryDarkCyan: "hsl(179, 100%, 13%)",
        },
        Neutral: {
          TransparentWhite: "hsla(0, 0%, 100%, 0.75)",
          VeryLightGray: "hsl(0, 0%, 95%)",
        },
      },

      fontFamily: {
        Family1: ["Lexend Deca"],
        Family2: ["Big Shoulders Display"],

        plugins: [],
      },
    },
  },
};
