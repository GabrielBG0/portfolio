import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      header: ['"Nebula Sans"', "sans-serif"],
      titles: ['"Nebula Sans"', "sans-serif"],
      boddy: ['"Nebula Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        bg: "#121212",
        "bg-secondary": "#191919",
      },
    },
  },
  plugins: [],
};
export default config;
