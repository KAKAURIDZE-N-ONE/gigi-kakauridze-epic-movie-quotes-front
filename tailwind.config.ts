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
        white2: "#CED4DA",
        skin: "#DDCCAA",
        gray: "#6C757D",
        gray2: "#9C9A9A",
        red: "#E31221",
        red2: "#CC0E10",
        red3: "#B80D0F",
        red4: "#E33812",
        blue: "#0D6EFD",
        normalBlue: "#24222F",
        darkBlue: "#222030",
        darkerBlue: "#11101A",
        darkestBlue: "#12101A",
        green: "#198754",
      },
    },
  },
  plugins: [],
} satisfies Config;
