import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // <-- bu yoksa dark mode çalışmaz
    theme: {
        extend: {
            colors: {
                primary: "#6366f1",
                secondary: "#ec4899",
            },
        },
    },
    plugins: [],
};

export default config;
