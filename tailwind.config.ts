import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "rose": {
        "800": "#7A284E",
        "50": "#FFF7FB"
      },
      "stone": {
        "900": "#312E2C",
        "600": "#5F564D",
        "150": "#E3DDD7",
        "100": "#F3E5D7"
      },
      "brown": {
        "800": "#854632"
      },
      "white": "#fff"
    },
    extend: {
      spacing: {
        "1600": "128px",
        "600": "48px",
        "500": "40px",
        "400": "32px",
        "300": "24px",
        "200": "16px",
        "150": "12px",
        "100": "8px",
      }
    },
  },
  plugins: [],
};
export default config;
