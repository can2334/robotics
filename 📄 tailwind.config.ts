import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#6366f1",
                secondary: "#ec4899",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"), // 🪄 Medium tarzı yazılar için
    ],
};

export default config;
