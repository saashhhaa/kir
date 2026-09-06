import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ['**/*.vue'],
    extends: [
      ...pluginVue.configs['flat/essential'],
    ],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
      globals: globals.browser,
    },
  },
]);