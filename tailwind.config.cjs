/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            colors: {
                clr1: "#604F3B",
                clr2: "#FFFFFF",
                clr3: "#25211D",
                clr4: "#C4B29C",
                clr5: "#878787"
            }
        }
    },
    plugins: []
};