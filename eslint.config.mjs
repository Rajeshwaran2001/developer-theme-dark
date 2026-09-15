import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'out/**',
      'build/**',
      'node_modules/**',
      '.vscode-test/**',
      'icons/**',
      'Pro-icons/**',
      'themes/**',
      'file_icons/**',
      'product_icons/**',
      'src/scripts/preview/*.html',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase'] },
      ],
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      'no-trailing-spaces': 'error',
      camelcase: 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'smart'],
      'no-eval': 'error',
      'no-underscore-dangle': 'error',
      'no-unsafe-finally': 'error',
      'no-var': 'error',
      'spaced-comment': 'error',
    },
  },
  {
    // Build scripts and config files run in Node, outside the TS program.
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    extends: [tseslint.configs.disableTypeChecked],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: { sourceType: 'module' },
  }
);
