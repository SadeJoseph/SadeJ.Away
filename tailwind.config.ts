import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B2DFDB' , 
        secondary: '#28a99e' ,
        tertiary: '#048c7f',
        light: '#fffcf2'
      }
    },
  },
  plugins: [],
};
export default config;
