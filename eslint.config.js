import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sonarjs from 'eslint-plugin-sonarjs'
import sort from 'eslint-plugin-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules
		}
	},
	{
		plugins: {
			'unused-imports': unusedImports
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'off',
			'no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					vars: 'all',
					varsIgnorePattern: '^_'
				}
			]
		}
	},
	{
		...eslintReact.configs.flat.recommended,
		rules: {
			'react/jsx-sort-props': [
				'error',
				{
					callbacksLast: true,
					multiline: 'last',
					reservedFirst: ['key', 'ref'],
					shorthandLast: true
				}
			]
		}
	},
	eslintReact.configs.flat['jsx-runtime'],
	sort.configs['flat/recommended'],
	eslintPluginPrettier,
	eslintConfigPrettier,
	sonarjs.configs.recommended
)
