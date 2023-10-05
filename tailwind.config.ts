import { Config } from 'tailwindcss';

export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8DD3BB',
        secondary: '#FF8682',
        dark: '#112211',
      },
    },
  },
  plugins: [],
};
