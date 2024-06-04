import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          md: "768px",
        },
      },
    },
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
};
export default config;
