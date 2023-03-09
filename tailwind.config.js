/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        signature: '#00C1DE',
        'btn-black': '#202020',
      },
      textColor: {
        black: '#111111',
      },
      fontFamily: {
        'suit-100': 'SUIT-Thin',
        'suit-200': 'SUIT-ExtraLight',
        'suit-300': 'SUIT-Light',
        'suit-400': 'SUIT-Regular',
        'suit-500': 'SUIT-Medium',
        'suit-600': 'SUIT-SemiBold',
        'suit-700': 'SUIT-Bold',
        'suit-800': 'SUIT-ExtraBold',
      },
    },
  },
  plugins: [],
};
