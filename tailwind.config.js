/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "20px": "20px",
      },
      margin: {
        "35px": "35px",
        "5px": "5px",
      },
      fontSize: {
        "35px": "35px",
      },
      padding: {
        "5px": "5px",
        "7px": "7px",
        "15px": "15px",
      },
      width: {
        35: "35%",
        "100px": "100px",
      },
      height: {
        480: "480px",
      },
      maxHeight: {
        480: "480px",
      },
      maxWidth: {
        70: "70px",
      },
      animation: {
        loader: "loader 3.5s linear forwards",
        button: "button 3.5s linear forwards",
        img: "img 2.5s alternate ease-in",
        sideContent: "1s sideContent linear",
      },
      keyframes: {
        loader: {
          "0%": {
            opacity: 1,
            visibility: "visible",
          },
          "85%": {
            opacity: 1,
            visibility: "visible",
          },
          "100%": {
            opacity: 0,
            visibility: "hidden",
          },
        },
        button: {
          "0%": {
            opacity: 0,
            visibility: "hidden",
          },
          "85%": {
            opacity: 0,
            visibility: "hidden",
          },
          "100%": {
            opacity: 1,
            visibility: "visible",
          },
        },
        img: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
        sideContent: {
          "0%": {
            transform: "translateX(1000px)",
          },
          "25%": {
            transform: "translateX(450px)",
          },
          "50%": {
            transform: "translateX(300px)",
          },
          "75%": {
            transform: "translateX(150px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      colors: {
        cyan_custom: "#85d1ce",
        pink_custom: "#fec7d7",
        gray_custom: "#535353",
        black_custom: "#0e172c",
        tertiary_custom: "#d9d4e7",
        blue_1000: "rgba(14, 23, 44, 1)",
      },
    },
  },
  plugins: [],
};
