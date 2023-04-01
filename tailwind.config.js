/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#881dba",

          secondary: "#fcd4bd",

          accent: "#ef5b56",

          neutral: "#212B36",

          "base-100": "#F0EFF5",

          info: "#7192F4",

          success: "#146640",

          warning: "#CB9D06",

          error: "#E0526C",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
