import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ccdocf",
        secondary: "#9ba8ab",
        accent: "#4d96a6",
        dark: "#253745",
        darker: "#11212d",
        darkest: "#06141b",
      },
    
    },
  },
  plugins: [],
} satisfies Config;
