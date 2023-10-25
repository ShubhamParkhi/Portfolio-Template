/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#11071f",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        "shade-2": "#b3b3b3",
        darkslategray: "rgba(64, 64, 64, 0.2)",
        "shade-3": "#3b3b3b",
        blueviolet: "#9b5dff",
        shade1: "#fff",
        darkorchid: {
          "100": "#7127ba",
          "200": "rgba(113, 39, 186, 0.1)",
          "300": "rgba(113, 39, 186, 0.2)",
        },
        lightsteelblue: "#ccd6f6",
        "custom-level-2-background-cards": "#1e2235",
        darkslateblue: "rgba(105, 59, 147, 0.5)",
        "glass-morphism": "rgba(110, 191, 244, 0.05)",
        mediumorchid: "#9757d3",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        sm: "14px",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      "5xl": "24px",
      "29xl": "48px",
      lg: "18px",
      "17xl": "36px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
