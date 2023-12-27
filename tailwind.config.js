/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        "dark-theme": {
          "primary": "#e2a53f",
          "secondary": "#d1d1d1",
          "accent": "#0f0f0f",
          "neutral": "#800000",
          "base-100": "#ffffff",
        },
      },
      {
        "light-theme": {
          "primary": "#e2a53f",
          "secondary": "#d1d1d1",
          "accent": "#ffffff",
          "neutral": "#800000",
          "base-100": "#0f0f0f",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}

