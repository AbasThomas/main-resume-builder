 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
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