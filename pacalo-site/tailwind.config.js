/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e4e7ec',
          100: '#bbc3d0',
          200: '#8e9bb0',
          300: '#627491',
          400: '#3f567b',
          500: '#173672',
          600: '#132f64',
          700: '#102653',
          800: '#0c1d42',
          900: '#08142f',
        },
        accent: {
          50: '#f9f7ed',
          100: '#f1ecd6',
          200: '#e5dbb0',
          300: '#d6c889',
          400: '#c7b562',
          500: '#b8a23b',
          600: '#a08a32',
          700: '#887229',
          800: '#705a20',
          900: '#584217',
        },
        'pacalo-blue': '#000080',
        'pacalo-dark-blue': '#0f3664f2',
        'pacalo-gold': '#f2ba14',
        'pacalo-teal': '#A0ECE6',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
