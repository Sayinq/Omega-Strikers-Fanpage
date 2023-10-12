const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/HeroArt.jpg')",
        'pattern-bg': "url('./src/assets/Pattern-BG.png')",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

