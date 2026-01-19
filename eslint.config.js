import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores([
        'dist',
        'vite.config.ts',
        'src/components/ui/**/*.tsx',
        'src/components/tanstack-form/**/*.tsx',
        'src/components/blocks/**/*.tsx',
        'src/components/editor/**/*.tsx',
    ]),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'max-lines': ['error', { max: 500 }],
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },
])