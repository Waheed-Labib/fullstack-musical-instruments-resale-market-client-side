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
          "neutral": "#7e7e7e",
          "base-100": "#ffffff",
        },
      },
      {
        "light-theme": {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}

