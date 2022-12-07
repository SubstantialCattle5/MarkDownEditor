/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkest : 'rgb(34, 40, 49)' , 
        darker : 'rgb(57, 62, 70)' , 
        dark : 'rgb(0, 173, 181)',
        light: 'rgb(238, 238, 238)' 
      },
    },
  },
  plugins: [],
};
