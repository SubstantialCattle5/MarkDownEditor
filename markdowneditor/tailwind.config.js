/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest : 'rgb(37, 23, 73)' , 
        darker : 'rgb(38, 49, 89)' , 
        dark : 'rgb(73, 85, 121)',
        light: 'rgb(255, 251, 235)' 
      },
    },
  },
  plugins: [],
};
