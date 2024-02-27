/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

