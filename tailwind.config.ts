/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    default: "#354739",
                    text: "#19403f",
                },
                secondary: {
                    default: "#ce8624",
                },
            },
            // boxShadow: {
            //     "to-top": "0 -10px 20px 10px",
            // },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default tailwindConfig;
