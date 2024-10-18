/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './frontend/**/*.{js,ts,liquid,jsx,tsx}',
    './layout/**/*.{js,ts,liquid,jsx,tsx}',
    './sections/**/*.{js,ts,liquid,jsx,tsx}',
    './snippets/**/*.{js,ts,liquid,jsx,tsx}',
    './templates/**/*.{js,ts,liquid,jsx,tsx}',
  ],
  theme: {
    extend: {
      ringWidth: {
        3: '3px',
      },
      colors: {
        primary: {
          0: '#aed9f4', // Lightest
          25: '#619ec5', // Lighter
          50: '#2e78a6', // Regular
          75: '#1c628d', // darker
          100: '#1f3e52', // darkest
        },
        secondary: {
          0: '#f4d8ae', // Lightest
          25: '#c5a961', // Lighter
          50: '#a62e78', // Regular
          75: '#8d1c62', // darker
          100: '#523e1f', // darkest
        },
      },
    },
  },
  plugins: [],
};
