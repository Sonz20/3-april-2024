/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%' : { transform: 'rotate(-3deg)' }, '50%': {transform: 'rotate(3deg)' },
        }
      },
    },
  },
  plugins: [],
}