/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode with class-based approach
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      colors: {
        // Moderatere Kontraste für die Farbpalette
        'primary': {
          DEFAULT: '#2D6E7E',
          50: '#EBF3F5',
          100: '#D7E7EC',
          200: '#B0CFD8',
          300: '#89B7C5',
          400: '#629FB1',
          500: '#3B879E',
          600: '#2D6E7E', // Default ist jetzt 600
          700: '#246173',
          800: '#1B5462',
          900: '#124651',
          950: '#0A2F39',
        },
        'slate': {
          DEFAULT: '#475569',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1', 
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      borderRadius: {
        'none': '0',
        'sm': '1px',
        DEFAULT: '1px',
        'md': '1px',
        'lg': '1px',
        'xl': '1px',
        '2xl': '1px',
        '3xl': '1px',
        'full': '9999px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
      height: {
        '50vh': '50vh',
      },
      minHeight: {
        '50vh': '50vh',
      },
    },
  },
  plugins: [],
} 