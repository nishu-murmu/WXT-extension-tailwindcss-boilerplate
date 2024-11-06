/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inherit: "inherit",
      },
      animation: {
        "logo-spin": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
