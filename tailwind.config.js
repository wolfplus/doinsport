/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SourceSansPro: ["Source Sans Pro"],
        SourceSansProBold: ["Source Sans Pro Bold"],
        Poppins: ["Poppins"],
        PoppinsSemiBold: ["Poppins semiBold"],
        Roboto: ["Roboto"],
      },
      colors: {
        primaryBlue: "#052b80",
        primaryGrey: "#4d4f5c",
        secondGrey: "#808495",
        logoGrey: "#44444F",
        bodyGrey: "#fafafb"
      },
    },
  },
  plugins: [],
};
