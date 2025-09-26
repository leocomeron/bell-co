import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#faf7f6",
          100: "#f3ecea",
          200: "#e7dcd9",
          300: "#d9c8c3",
          400: "#cdb7b1",
          500: "#C4AFA9", // primary provided by client
          600: "#a7928c",
          700: "#8c7771",
          800: "#715e59",
          900: "#5a4b46",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
