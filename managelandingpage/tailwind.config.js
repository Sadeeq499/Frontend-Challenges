/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        BrightRedLight: "hsl(13, 87%, 85%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: " hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Be_Vietnam_Pro: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
