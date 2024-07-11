/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yourFont: ['YourFont', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playCU: ["Playwrite CU", 'cursive'],
        nunuto: ["Nunito", 'sans-serif'],
      },
    },
  },
  plugins: [],
}