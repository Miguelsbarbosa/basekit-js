// Reglas base ESLint + globals + preset para no chocar con Prettier
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  // Ignorados globales
  { ignores: ["node_modules", "dist", "build", "coverage"] },

  // Navegador / JSX
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["**/*.{config,setup}.{js,cjs,mjs}", "scripts/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrors: "none",
        },
      ],
      "no-undef": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-var": "error",
      "prefer-const": "warn",
      curly: ["error", "all"],
      "no-console": ["warn", { allow: ["warn", "error", "log"] }],
    },
  },

  // Node ESM (configs y scripts .js/.mjs)
  {
    files: [
      "**/*.{config,setup}.js",
      "**/*.{config,setup}.mjs",
      "scripts/**/*.js",
      "scripts/**/*.mjs",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
    rules: { ...js.configs.recommended.rules, "no-console": "off" },
  },

  // Node CJS (configs .cjs)
  {
    files: ["**/*.{config,setup}.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: { ...js.configs.recommended.rules, "no-console": "off" },
  },

  // Desactiva choques de formato con Prettier
  prettier,

  // Reaplica reglas clave
  { rules: { curly: ["error", "all"], eqeqeq: ["error", "always", { null: "ignore" }] } },

  // (Opcional) Tests: relaja consola
  // {
  //   files: ["**/*.{test,spec}.js?(x)"],
  //   rules: { "no-console": "off" }
  // }
];
