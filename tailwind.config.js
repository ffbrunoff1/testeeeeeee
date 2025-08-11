/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        wine: {
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f9d3d7',
          300: '#f4b1b8',
          400: '#ec8894',
          500: '#e05a71',
          600: '#d94f36',
          700: '#9b1c16',
          800: '#7d1a15',
          900: '#681b17',
          950: '#380c09',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        italian: ['Georgia', 'serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-wine': 'linear-gradient(135deg, #9b1c16 0%, #d94f36 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-text':
          'linear-gradient(135deg, #9b1c16 0%, #d94f36 50%, #f97316 100%)',
      },
    },
  },
  plugins: [],
};
