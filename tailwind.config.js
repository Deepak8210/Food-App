/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ,],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: "Open Sans",
        Questrial: "Questrial",
        Roboto: "Roboto",
        Poppins: "Poppins",
        Norican: "Norican",
        Montserrat: "Montserrat",
        Monteserrat2: ["Montserrat", "sans-serif"],
      },
      colors: {
        body: "#010103",
        foodYellow: "#FFC222",
        foodGreen: "#00a149",
        yellowFlash: "#ffc107",
      },
      padding: {
        "x-7percent": "0 7%",
      },
    },
  },
  plugins: [],
};
