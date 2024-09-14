/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textIndent: {
        '1': '1px', 
        '2': '2px', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color0:"#e8e8e8",
        color1: '#051522',
        color2: '#304d62',
        color3: '#c2a893',
        color4: '#cac3a4',
        color5: '#e7e7d4',
        color6:"#bda248",
      },
      boxShadow: {
        'custom-shadow': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-indent-1': {
          textIndent: '1px',
        },
        '.text-indent-2': {
          textIndent: '5px',
        },
      });
    },
  ],
};
