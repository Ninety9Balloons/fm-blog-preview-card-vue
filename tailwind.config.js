/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                figtree: ["Figtree", "sans-serif"],
            },
            colors: {
                "custom-yellow": "hsl(47, 88%, 63%)",
            },
        },
    },
    plugins: [],
};
