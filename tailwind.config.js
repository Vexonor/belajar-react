/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik' : ['Rubik' ,'ui-sans-serif', 'system-ui']
      },
      colors: {
        'alabaster': '#FAFAFA',
        'charcoal': '#323232'
      },
      backgroundImage: {
        'background': "url('/img/background.png')",
        'mentor-bg': "url('/img/mentor-bg.jpg')"
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
      require('preline/plugin'),
      require('@tailwindcss/forms'),
  ],
}

