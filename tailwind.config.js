/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FDD16E',
          blue: '#0DAFDB',
          red: '#F04720',
          black: '#050707',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
} 