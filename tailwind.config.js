/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A4F53',
          DEFAULT: '#2D3134',
          dark: '#1B1E20',
        },
        secondary: {
          light: '#DE3B42',
          DEFAULT: '#C22026',
          dark: '#9E1A1F',
        },
        accent: '#FDF2F2',
        gray: {
          50: '#F5F7F8',
          100: '#EAEFF1',
          200: '#DCE3E6',
          400: '#939CA3',
          500: '#69737A',
          600: '#4A545A',
          800: '#2D3134',
          900: '#1B1E20',
          950: '#0F1112',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
