module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      // postcss({
      //   config: {
      //     path: '../postcss.config.js',
      //   },
      //   extensions: ['.css'],
      //   minimize: true,
      //   inject: {
      //     insertAt: 'top',
      //   },
      // }),
    ],
  },
};
