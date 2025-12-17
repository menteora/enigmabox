/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./constants.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffff8',
          100: '#f9f7f2', // Main bg
          200: '#efeadd',
          300: '#e0d8c0',
        },
        ink: {
          900: '#1a1a1a', // Main text
          800: '#2d2d2d',
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
}