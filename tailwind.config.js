/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "modal": "rgb(31, 41, 55, 0.7)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

