import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sansSerif: [
        "ui-rounded",
        "Hiragino Maru Gothic ProN",
        "Quicksand",
        "Comfortaa",
        "Manjari",
        "Arial Rounded MT",
        "Arial Rounded MT Bold",
        "Calibri",
        "source-sans-pro",
        "sans-serif",
      ],
      mono: [
        "ui-monospace",
        "Cascadia Code",
        "Source Code Pro",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace",
      ],
      handwriting: [
        "Segoe Print",
        "Bradley Hand",
        "Chilanka",
        "TSCu_Comic",
        "casual",
        "cursive",
      ],
    },
    extend: {
      backgroundImage: {
        bg: "url('/images/bg.webp')",
      },

      colors: {
        blueGem: "#3813a0",
        caribbeanGreen: "#00ca9e",
        daisyBush: "#4714a5",
        fog: "#decaec",
        gallery: "#efeaf2",
        goldenFizz: "#feff40",
        lavenderIndigo: "#8657e1",
        monsoon: "#777878",
        pastelPurple: "#b2a1bb",
        prim: "#ede6ef",
        purple: "#7209b7",
        robinEggBlue: "#00e9c0",
        scarlet: "#f72f45",
        silver: "#c0c0c0",
        whisper: "#f9f4f9",
      },
    },
  },
  plugins: [],
};
export default config;
