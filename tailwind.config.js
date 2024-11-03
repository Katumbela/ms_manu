/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "5px 5px 10px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        primary: "#6C5F8D",
        dark: "#0D0E11",
        violet: "#6c63ff",
        yellow: "#F9D048",
        secondary: "#C5A4DB",
        'status-yellow': '#FFC107',
        'status-green': '#28A745',
        'status-red': '#DC3545',
        'status-teal': '#17A2B8',
        'status-gray': '#6c757d',
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "776px",
          md: "968px",
          lg: "1200px",
          xl: "1300px",
          "2xl": "1350px",
        },
      },
      boxShadow: {
        brutal: "-4px 4px 0 0 #DFAE00",
      },
    },
  },
  plugins: [],
}

