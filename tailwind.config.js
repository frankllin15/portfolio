module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mobile-only": {
          max: "767px",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        wave: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-30%)",
          },
          "100%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-in_out",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-in-out",
        wave: "wave 1s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
