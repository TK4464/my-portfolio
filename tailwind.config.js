/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        notoSansJP: ["Noto Sans JP", "sans-serif"],
        times: ["Times,serif"],
        lato: ["Lato", "sans-serif"],
      },
      skew: {
        16: "16deg",
        45: "45deg",
        135: "135deg",
      },
      colors: {
        "white-gray": "#FAFBFC",
        "arrows-beige": "#F6F5F4",
        "arrows-beige-x": "#FBFAF9",
        "blue-gray": "#F0F5F9",
        "sky-blue": "#48FFFF",
        "dark-navy": "#003DCC",
        "deep-gray": "#6B6B6F",
        "deep-sky-blue": "#6d8bbf",
        "dark-blue": "#31495e",
        "black-sky-blue": "#9DC5E3",
        "deep-blue2": "#D0DDEC",
        "white-gray": "#F0F0F0",
        "pale-white-gray": "#F8F8F8",
        "white-blue-gray": "#ECF0F2",
        "basic-gray": "#C1C1C1",
        "indigo-blue": "#4B0082",
        "slate-blue": "#6A5ACD",
        "dark-sky-blue": "#58A5BF",
        "dark-sky-blue2": "#9bbac4",
        "golden-beige": "#F1CDA8",
        "dark-black": "#191919",
        "royal-black": "#212322",
        "gray-blue": "#9BABBC",
        "gray-blue2": "#51677C",
        "white-2": "#FAFBFC",
        "sea-blue": "#34BDDB",
        "deep-blue": "#2FA9E3",
        "pale-gray": "#ECEDED",
        "base-white": "#fafbfc",
        "navy" : "#000080",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "rotate(-45deg) translate(0, 0)",
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "80%": {
            transform: "rotate(-45deg) translate(-30px, 30px)",
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "scroll-animation": "scroll 1.8s infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0px 2px 3px deep-grey",
        },
        ".text-shadow-md": {
          textShadow: "0px 3px 3px deep-grey",
        },
        ".text-shadow-lg": {
          textShadow: "0px 5px 3px deep-grey",
        },
        ".text-shadow-xl": {
          textShadow: "0px 7px 3px deep-grey",
        },
        ".text-shadow-2xl": {
          textShadow: "0px 10px 3px deep-grey",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
