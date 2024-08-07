/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-15': '#fbfbfc', // Custom light gray color
      }
    },
  },
  plugins: [],
}
