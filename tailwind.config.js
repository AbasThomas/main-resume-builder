/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- add this line
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // add jsx, tsx if using React + TS
  theme: {
    extend: {
      colors: {
        'almost-black': '#0A0A0A',
        'material-dark': '#121212',
        'deep-charcoal': '#181818',
        'night-sky': '#1A1A2E',
      },
    },
  },
  plugins: [],
}
