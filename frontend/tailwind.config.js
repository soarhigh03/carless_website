/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fcd32a',   // yellow accent used in design mockup
        secondary: '#0052a4', // deep blue accent
    },
  },
  plugins: [],
}
}
