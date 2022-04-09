const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Coiny: ["Coiny", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple": "var(--clr-purple)",
        "brand-blue": "var(--clr-blue)",
        "brand-green": "var(--clr-green)",
        "brand-yellow": "var(--clr-yellow)",
        "brand-pink": "var(--clr-pink)",
        "brand-background": "var(--clr-background)",
        "brand-light": "var(--clr-light)",
      },
    },
  },
  plugins: [],
};
