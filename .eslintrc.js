module.exports = {
  parser: "vue-eslint-parser",
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/recommended",
    "plugin:testing-library/vue",
  ],
  env: {
    "jest/globals": true
  }
};
