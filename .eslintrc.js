module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-plugin-eslint-plugin", "filenames"],
  rules: {
    "arrow-body-style": ["error", "always"],
    "eslint-plugin-eslint-plugin/variable-name-case": ["error", "snake_case"],
    "eslint-plugin-eslint-plugin/function-name-case": ["error", "camelCase"],
    "filenames/match-regex": ["error", "^[a-z]+([A-Z][a-z]*)*$"],
  },
};
