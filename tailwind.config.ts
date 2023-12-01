import { Config } from 'tailwindcss';

export const primaryColor = {
  lighter: '#CDEAE1',
  light: '#9BE0C8',
  DEFAULT: '#8DD3BB',
  dark: '#82CBB2',
};

const grayColor = {
  DEFAULT: '#79747E',
  light: '#8F8C91',
  lighter: '#D2D1D3',
};

export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: 'clamp(2rem, min(6vw, 6vh), 5rem)',
      },
      colors: {
        primary: primaryColor,
        secondary: '#FF8682',
        dark: '#112211',
        label: '#1C1B1F',
        gray: grayColor,
      },
      boxShadow: {
        light: '0 4px 16px rgba(141, 211, 187, 0.15)',
      },
    },
  },
  plugins: [],
};
