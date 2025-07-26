// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // if you’re using the new App router under src/app:
    "./src/app/**/*.{js,ts,jsx,tsx}",

    // any shared components you put in src/components
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // (optional) pages folder if you still have any in src/pages
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ui: ["Montserrat", "sans‑serif"],
      },
    },
  },
  plugins: [],
};
