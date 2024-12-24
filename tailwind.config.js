/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Custom breakpoint for 375px
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
    variants: {
      extend: {
        textColor: ['hover'],
      },
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scroll: 'scroll 10s linear infinite',
    },
  },
  plugins: [],
}