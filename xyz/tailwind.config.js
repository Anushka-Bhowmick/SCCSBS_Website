/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#000235",
        gray: {
          100: "rgba(255, 255, 255, 0)",
          200: "rgba(255, 255, 255, 0.99)",
        },
        whitesmoke: "#f8f5f5",
        snow: {
          100: "#fffbfb",
          200: "#fefbfb",
          300: "#faf2f2",
        },
        lightskyblue: "rgba(124, 191, 252, 0.56)",
        deeppink: "#da1368",
      },
      fontFamily: {
        outfit: "Outfit",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
