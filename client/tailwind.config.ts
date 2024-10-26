import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        barlow: ['"Barlow"', 'sans-serif'], 
        gilda: ['"Gilda Display"', 'serif'],
      },
      letterSpacing: {
        'custom': '0.8px', 
      },
    },
  },
  plugins: [],
};

export default config;
