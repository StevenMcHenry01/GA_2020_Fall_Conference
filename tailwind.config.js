// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      colors: {
        'main': '#3ca3d8'
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
