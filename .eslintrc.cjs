/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      processor: "astro/client-side-ts",
      rules: {},
    },
  ],
};
