import js from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['dist', 'docs', 'node_modules', '.tmp', 'playwright-report', 'test-results'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}', 'tests/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        AbortController: 'readonly',
        fetch: 'readonly',
        HTMLElement: 'readonly'
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
]
