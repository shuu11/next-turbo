module.exports = {
	extends: [
		'next',
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/order': [
			2,
			{
				alphabetize: {
					order: 'asc',
				},
			},
		],

		'prettier/prettier': [
			'error',
			{
				printWidth: 200,
				tabWidth: 2,
				useTabs: true,
				semi: false,
				singleQuote: true,
				trailingComma: 'all',
				endOfline: 'lf',
			},
		],
	},
}
