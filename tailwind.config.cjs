/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    primary: {
      100: "#FFFFFF",
      200: "#FAFAFA",
      300: "#F5F5F7",
    },
    secondary: {
      100: "#141522",
      200: "#54577A",
      300: "#8E92BC",
    },
    tertiary: {
      100: "#546FFF",
      200: "#BAC8FF",
    },
    extend: {
      maxWidth: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
