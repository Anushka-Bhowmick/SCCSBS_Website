/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightblue: "#000235",
        white: "#fff",
        whitesmoke: "#f8f5f5",
        snow: {
          "100": "#fffbfb",
          "200": "#fefbfb",
          "300": "#faf2f2",
        },
        lightskyblue: "rgba(124, 191, 252, 0.56)",
        deeppink: "#da1368",
        gray: {
          "100": "#fffefe",
          "200": "rgba(255, 255, 255, 0.99)",
          "300": "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        skyblue: "#85d5f2",
        royalblue: "rgba(98, 107, 210, 0.5)",
      },
      fontFamily: {
        "jacques-francois": "'Jacques Francois'",
        "h1-heading": "Outfit",
        poppins: "Poppins",
      },
      borderRadius: {
        "81xl": "100px",
        "131xl": "150px",
        "71xl": "90px",
      },
    },
    fontSize: {
      "109xl": "128px",
      "231xl": "250px",
      "45xl": "64px",
      "81xl": "100px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
