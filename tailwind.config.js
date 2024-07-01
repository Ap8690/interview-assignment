/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          100: "#868686",
          200: "#1e1e1e",
          300: "rgba(0, 0, 0, 0.8)",
        },
        darkslategray: {
          100: "#464646",
          200: "#00554b",
        },
        white: "#fff",
        teal: "#03796a",
        dimgray: "#666",
        blueviolet: "#9945ff",
        "zinc-50": "#fafafa",
        aquamarine: "#6dffdc",
        springgreen: "#6dff8a",
        salmon: "#ff6d6d",
        royalblue: "#3980ff",
        darkorchid: {
          100: "#b35eff",
          200: "rgba(179, 94, 255, 0.09)",
        },
        tomato: "#ff5454",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xs: "0.75rem",
      base: "1rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "31xl": "3.125rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1080: {
        raw: "screen and (max-width: 1080px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
