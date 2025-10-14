/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
                mono: ['Roboto Mono', ...fontFamily.mono],
            },
        },
    },
    plugins: [],
}
