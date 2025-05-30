/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'indy-blue': {
          50: '#e6eaef',
          100: '#b3c1d3',
          200: '#809ab8',
          300: '#4d739c',
          400: '#264d81',
          500: '#0c2340', // Primary Indy blue
          600: '#0a1e36',
          700: '#08172c',
          800: '#061122',
          900: '#030818',
        },
        'indy-gold': {
          50: '#fdf8ed',
          100: '#f9eccc',
          200: '#f5e0aa',
          300: '#f1d488',
          400: '#edc867',
          500: '#ae9142', // Secondary Indy gold
          600: '#937c38',
          700: '#78662e',
          800: '#5e4f24',
          900: '#43391a',
        },
        success: {
          50: '#e8f5e9',
          500: '#4caf50',
          700: '#388e3c',
        },
        warning: {
          50: '#fff8e1',
          500: '#ff9800',
          700: '#f57c00',
        },
        error: {
          50: '#ffebee',
          500: '#f44336',
          700: '#d32f2f',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      boxShadow: {
        'indy': '0 4px 14px 0 rgba(12, 35, 64, 0.1)',
      },
    },
  },
  plugins: [],
};