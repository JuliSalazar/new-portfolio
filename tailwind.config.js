/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#0A0A0C",
      white: "#F7F7F7",
      "gray-light": "#F3F3F3",
      violet: "#1A042C",
      purple: "#3E0A9B",
      yellow: "#EAB600",
      blue: "#72C5E4",
      pink: "#B92E4E",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
