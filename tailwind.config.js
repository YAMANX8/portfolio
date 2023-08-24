/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33007D",
        light: "#E4D4FC",
        dark: "#13032B",
        secondary: {
          DEFAULT: "#EDE3FD",
          dark: "#0F0F0F",
        },
        accent: {
          DEFAULT: "#6EE0F5",
          dark: "#FAFEFF",
        },
      },
    },
  },
  plugins: [],
};
