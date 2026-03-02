/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    neon: "#39FF14",
                    orange: "#FF5F1F",
                },
                dark: {
                    DEFAULT: "#000000",
                    card: "#121212",
                    surface: "#1a1a1a",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
