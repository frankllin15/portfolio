module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-only": {
          max: "767px",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
