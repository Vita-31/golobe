import { Config } from 'tailwindcss';

export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: 'clamp(2rem, min(6vw, 6vh), 5rem)',
      },
      colors: {
        primary: '#8DD3BB',
        secondary: '#FF8682',
        dark: '#112211',
        label: '#1C1B1F',
        gray: '#79747E',
        'primary-light': '#CDEAE1',
      },
      boxShadow: {
        light: '0 4px 16px rgba(141, 211, 187, 0.15)',
      },
    },
  },
  plugins: [],
};
