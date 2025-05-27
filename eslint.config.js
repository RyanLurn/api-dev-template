// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  // tseslint.configs.strict
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Disable type-checked rules for config files
    files: ["*.config.js", "*.config.ts"],
    ...tseslint.configs.disableTypeChecked,
  }
);
