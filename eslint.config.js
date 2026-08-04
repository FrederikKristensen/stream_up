import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettierConfig from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: { 
      'prettier/prettier': [
        'error', 
        { 
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          semi: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          endOfLine: 'lf'
        }],
    },
  },
])
