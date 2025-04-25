/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'hero-image': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'hero-image-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      },
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8'
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed'
        }
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: []
}