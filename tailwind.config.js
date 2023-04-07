/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                landscape: "url('./src/assets/profile_images/landscape.png')",
            },
            gridTemplateAreas: {
                mobile: ['about', 'work', 'skills', 'projects'],
                tablet: ['about skills', 'work work', 'projects projects'],
                desktop: ['about projects projects projects skills', 'work projects projects projects .', '. projects projects projects .'],
            },
            gridTemplateRows: {
                desktop: 'auto auto 1fr'
            }
        },
    },
    plugins: [require('tailwind-scrollbar'), require('@savvywombat/tailwindcss-grid-areas')],
}
