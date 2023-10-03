/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#000235",
        black: "#000",
        gray: {
          "100": "#fffefe",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(255, 255, 255, 0.99)",
        },
        whitesmoke: "#f8f5f5",
        snow: {
          "100": "#fffbfb",
          "200": "#fefbfb",
          "300": "#faf2f2",
        },
        lightskyblue: "rgba(124, 191, 252, 0.56)",
        deeppink: {
          "100": "#da1368",
          "200": "rgba(218, 19, 104, 0.5)",
        },
        skyblue: {
          "100": "#85d5f2",
          "200": "rgba(139, 206, 240, 0.5)",
        },
        plum: "#c38edd",
        royalblue: "rgba(98, 107, 210, 0.5)",
        darkslateblue: "#77438b",
      },
      fontFamily: {
        "h1-heading": "Outfit",
        "jacques-francois": "'Jacques Francois'",
        poppins: "Poppins",
      },
      borderRadius: {
        "31xl": "50px",
        "131xl": "150px",
        "71xl": "90px",
      },
    },
    fontSize: {
      "231xl": "250px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      "21xl": "40px",
      "29xl": "48px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
