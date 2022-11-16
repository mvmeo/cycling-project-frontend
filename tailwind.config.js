/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      fullWhite: '#ffffff',
      white: '#F2F0EB',
      yellow: '#F2A444',
      red: '#F25749',
      redDarker: '#C9483C',
      green: '#3FBF77',
      beige: '#D9B384',
      grayDarker: '#64748b',
      grayLighter: '#f1f5f9',
    }
  },
  plugins: [],
}
