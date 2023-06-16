/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          Orange: "hsl(25, 97%, 53%)",
        },
        Natural: {
          White: "hsl(0, 0%, 100%)",
          LightGray: "hsl(217, 12%, 63%)",
          Medium: "hsl(216, 12%, 54%)",
          DarkBlue: "hsl(213, 19%, 18%)",
          VeryDarkBlue: "hsl(216, 12%, 8%)",
        },
      },
      fontSize: {
        15: "15px",
      },
      fontFamily: {
        Family: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
