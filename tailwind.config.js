/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#707070",
      skyblue: "#399CC8",
      blue: "#612ADB",
      DarkSkyblue: "#3ECEF1",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "30px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["35px", "43px"],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    extend: {},
  },
  plugins: [],
};
