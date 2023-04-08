/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{jsx,js}'],
    purge: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                landscape: "url('./src/assets/profile_images/landscape.png')",
            },
            gridTemplateAreas: {
                mobile: ['about', 'work', 'skills', 'projects'],
                tablet: ['about skills', 'work work', 'projects projects'],
                desktop: ['about projects skills', 'work projects .', '. projects .'],
            },
            gridTemplateColumns: {
                desktop: '.5fr 1fr .5fr',
                'desktop-wide': '.33fr 1fr .33fr'
            },
            gridTemplateRows: {
                desktop: 'auto auto 1fr'
            }
        },
    },
    plugins: [require('tailwind-scrollbar'), require('@savvywombat/tailwindcss-grid-areas')],
}
