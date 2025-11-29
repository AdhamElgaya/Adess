/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          50: '#fafafa',
          100: '#f5f5f0',
          200: '#e8e8e3',
          300: '#d4d4cf',
          400: '#c4c4bf',
          500: '#a8a8a3',
          600: '#8d8d88',
          700: '#6d6d68',
          800: '#4d4d48',
          900: '#2d2d28',
        },
        'cream': '#f5f5f0',
        'warm-beige': '#e8e8e3',
        'charcoal': '#1a1a1a',
        'stone': '#fafafa',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'seasons': ['The Seasons', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

