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
        "light-bg": colors.zinc[50],
        "light-bg-hover": colors.neutral[300],
        "dark-bg": colors.gray[900],
        "dark-bg-hover": colors.slate[700],
      },
      textColor: {
        //custom tailwind text color class
        "light-color": colors.neutral[900],
        "dark-color": colors.neutral[100],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
