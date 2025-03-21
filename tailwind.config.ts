import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "main-columns": "200px 1fr",
      },
      gridRow: {
        "rows-full": "1/-1",
      },
      backgroundColor: {
        //custom tailwind bg color class
        "light-bg": colors.zinc[100],
        "light-bg-hover": colors.neutral[400],
        "dark-bg": colors.gray[900],
        "dark-bg-hover": colors.slate[700],
        "accent": colors.neutral[200],
        "accent-dark": colors.slate[800],
      },
      textColor: {
        //custom tailwind text color class
        "light-color": colors.neutral[800],
        "dark-color": colors.neutral[100],
      },
      borderColor:{
        'light-color': colors.neutral[800],
        'dark-color': colors.neutral[500],
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 0.3s ease-out forwards",
      },
    },
    screens: {
      xs: "450px",
      sm: "800px",
      md: "1000px",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
