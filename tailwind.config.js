/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003057',
        secondary: '#cfa200ff',
        accent: '#00A3E0',
        techgold: '#e1ac1bff'
      },
    },
  },
  plugins: [],
}
