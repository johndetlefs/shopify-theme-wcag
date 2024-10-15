/** @type {import('tailwindcss').Config} */
export default {
    content:
        [
            './frontend/**/*.{js,ts,liquid,jsx,tsx}',
            './layout/**/*.{js,ts,liquid,jsx,tsx}',
            './sections/**/*.{js,ts,liquid,jsx,tsx}',
            './snippets/**/*.{js,ts,liquid,jsx,tsx}',
            './templates/**/*.{js,ts,liquid,jsx,tsx}'
        ],
    theme: {
        extend: {
            colors: {
                primary: {
                    0: '#ffb5b5', // lightest
                    25: '#fc7b7b', // lighter
                    50: 'red',   // Regular red
                    75: '#c10000',
                    100: '#690000', // Darkest
                },
            },
        },
    },
    plugins: [],

};