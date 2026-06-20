/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        primary: '#ffffff',
        secondary: '#a3a3a3',
        accent: '#e11d48', // sharp crimson red
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'], // sharp geometric font
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'sharp': '4px 4px 0px 0px rgba(225, 29, 72, 1)', // solid drop shadow
        'sharp-white': '4px 4px 0px 0px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [],
}
