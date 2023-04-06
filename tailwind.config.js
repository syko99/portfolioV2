/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'landscape': "url('./src/assets/profile_images/landscape.png')"
            }
        },
    },
    plugins: [require('tailwind-scrollbar')],
}
