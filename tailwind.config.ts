import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#D9D9D9",
        skin: "#DDCCAA",
        red: "#E31221",
        red2: "#CC0E10",
        red3: "#B80D0F",
      },
    },
  },
  plugins: [],
} satisfies Config;
