module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['alloy', 'alloy/typescript'],
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
	},
	root: true,
	rules: {
		'no-duplicate-imports': false,
		'for-direction': 'error',
		'getter-return': [
			'error',
			{
				allowImplicit: false,
			},
		],
		'no-await-in-loop': 'off',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'except-parens'],
		'no-console': 'off',
		'no-constant-condition': [
			'error',
			{
				checkLoops: false,
			},
		],
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	},
};
