import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // <-- Adds all Node.js globals
      }
    }
  },
  pluginJs.configs.recommended,
  {
    // Configuration for Jest test files
    files: ["**/*.test.js"],
    ...pluginJest.configs['flat/recommended'], // <-- Adds Jest globals & rules
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
      "jest/prefer-expect-assertions": "off" // Optional: relax a strict default rule
    }
  }
];