import type { Config } from 'tailwindcss';

const config: Config = {
    theme: {
        extend: {
            keyframes: {
                fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
                slideUp: { "0%": { transform: "translateY(20px)", opacity: 0 }, "100%": { transform: "translateY(0)", opacity: 1 } }
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-out",
                slideUp: "slideUp 0.3s ease-out"
            }
        },
    },
    plugins: [],
};

export default config;
