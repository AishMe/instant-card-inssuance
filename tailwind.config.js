/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: {
          "100": "#edf1f7",
          "200": "#edf0f7",
          "300": "#e6eff5",
          "400": "#dfebf2",
          "500": "#dfeaf2",
        },
        whitesmoke: {
          "100": "#f5f7fa",
          "200": "#f5f5f5",
          "300": "#f4f5f7",
          "400": "#f2f4f7",
          "500": "#f3f3f5",
          "600": "#f0f0f0",
          "700": "#ebeef2",
          "800": "rgba(242, 242, 242, 0.8)",
        },
        indianred: "#fe5c73",
        aquamarine: "#16dbaa",
        gray: {
          "100": "#808080",
          "200": "#232323",
          "300": "#1e1e1e",
          "400": "#151515",
          "500": "#0f0f0f",
          "600": "#0a0a0a",
          "700": "#070707",
          "800": "#030303",
          "900": "rgba(0, 0, 0, 0.6)",
          "1000": "rgba(255, 255, 255, 0)",
          "1100": "rgba(255, 255, 255, 0.4)",
          "1200": "rgba(0, 0, 0, 0.4)",
          "1300": "rgba(15, 15, 15, 0.64)",
          "1400": "rgba(15, 15, 15, 0.24)",
          "1500": "rgba(0, 0, 0, 0.24)",
          "1600": "rgba(15, 15, 15, 0.72)",
          "1700": "rgba(255, 255, 255, 0.64)",
          "1800": "rgba(255, 255, 255, 0.24)",
          "1900": "rgba(255, 255, 255, 0.7)",
          "2000": "rgba(10, 10, 10, 0.8)",
        },
        steelblue: "#718ebf",
        mistyrose: "#ffe0eb",
        darkslateblue: {
          "100": "#333b69",
          "200": "#123288",
        },
        gainsboro: {
          "100": "#dfe5ee",
          "200": "#e4e3e9",
          "300": "#d9d9d9",
        },
        blue: {
          "100": "#1a16f3",
          "200": "#1814f3",
          "300": "rgba(24, 20, 243, 0.8)",
        },
        darkgray: {
          "100": "#b2b2b2",
          "200": "#b1b1b1",
        },
        lightsteelblue: "#8ba3cb",
        "primary-2": "#343c6a",
        ghostwhite: "#fafbff",
        "gradient-style-3": "rgba(253, 41, 79, 0.8)",
        "label-color-light-primary": "#000",
        turquoise: "#16dbcc",
        lightcyan: "#dcfaf8",
        lavender: {
          "100": "#e7edff",
          "200": "rgba(239, 239, 255, 0.67)",
        },
        cornsilk: "#fff5d9",
        goldenrod: "#ffbb38",
        palevioletred: "#ff82ac",
        royalblue: "#4c78ff",
        orange: "#fcaa0b",
        mediumaquamarine: "#41d4a8",
        tomato: "#ff4b4a",
        "primary-3": "#2d60ff",
        blueviolet: {
          "100": "#9747ff",
          "200": "#6f00c7",
        },
        silver: "#c4c4c4",
        "gradient-style-6": "rgba(0, 255, 71, 0.9)",
        mediumslateblue: "rgba(57, 106, 255, 0.1)",
        dimgray: "#6b6b6b",
      },
      spacing: {},
      fontFamily: {
        "heading-four-semibold-20p": "Inter",
        montserrat: "Montserrat",
        lekton: "Lekton",
        "jetbrains-mono": "'JetBrains Mono'",
        poppins: "Poppins",
        lato: "Lato",
        roboto: "Roboto",
        "default-bold-body": "'SF Pro Text'",
        kurale: "Kurale",
      },
      borderRadius: {
        "6xl": "25px",
        xl: "20px",
        "3xs": "10px",
        "21xl": "40px",
        "181xl": "200px",
        mini: "15px",
        "31xl": "50px",
        "4xs": "9px",
        "8xs": "5px",
        "11xl": "30px",
        "13xl": "32px",
        "22xl": "41px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "1rem",
      mini: "0.938rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      smi: "0.813rem",
      xl: "1.25rem",
      "9xl": "1.75rem",
      "6xl": "1.563rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      "5xs": "0.5rem",
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      mid: "1.063rem",
      xs: "0.75rem",
      sm: "0.875rem",
      "15xl": "2.125rem",
      "8xl": "1.688rem",
      "61xl": "5rem",
      "37xl": "3.5rem",
      "26xl": "2.813rem",
      "4xl": "1.438rem",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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
