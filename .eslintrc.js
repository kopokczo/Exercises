module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error", // Makes Prettier errors visible in ESLint
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unstable-nested-components": "warn",
    "consistent-return": "error",
    "no-unused-vars": "error",
  },
};
