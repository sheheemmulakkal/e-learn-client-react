import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbar, daisyui],
  variants: {
    scrollbar: ["dark"],
  },
};
