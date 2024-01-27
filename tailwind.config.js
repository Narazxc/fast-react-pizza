/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      colors: {
        pizza: "#123456",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
