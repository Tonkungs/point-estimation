import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      container: {
        // center: true,
        // padding: "1rem",
        screens: {
          DEFAULT: "100%",
          // md: "768px",
        },
      },
      // colors: {
      //   "cus-pastel-pink": "#FAEDCB", // สีชมพูอ่อน
      //   "cus-cream-peach": "#C9E4DE", // สีครีมพีช
      //   "cus-pastel-blue": "#C6DEF1", // สีฟ้าอ่อน
      //   "cus-cream": "#DBCDF0", // สีครีม
      //   "cus-peach-pink": "#F2C6DE", // สีชมพูพีช
      //   "cus-cream-yellow": "#F7D9C4", // สีครีมเหลือง
      // },
    },
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
};
export default config;
