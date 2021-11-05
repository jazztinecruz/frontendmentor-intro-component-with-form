module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightPink: '#FFEFEF',
        blue: '#5D54A3',
        lightGray: '#DEDEDE',
        darkGray: '#6F6E73',
        green: '#37CC8A',
        lightGreen: '#77E2B4',
        maroon: '#D18585',
        bgPink: '#FF7978'
      },

      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        mobile: "url('/bg-intro-mobile.png')",
        desktop: "url('/bg-intro-desktop.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
