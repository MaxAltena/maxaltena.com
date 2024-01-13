/** @type {import("eslint").Linter.Config} */
const config = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"next/core-web-vitals",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		// Always include curly braces everywhere for better readability
		curly: ["warn", "all"],
		// Prefer inline over general type imports
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		// Allow some unassigning of variables
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
		// Disable useEffect exhaustive deps
		"react-hooks/exhaustive-deps": "off",
		"no-restricted-imports": [
			"error",
			{
				paths: [
					{
						/* Error when trying to import `cva` instead of `@/lib/style/cva.config` to allow tailwind merging by default */
						name: "cva",
						message: "Please use '@/lib/style/cva.config' instead.",
					},
					{
						/* Error when trying to import `tailwind-merge` instead of `@/lib/style/twMerge.config` to allow tailwind merging by default */
						name: "tailwind-merge",
						message: "Please use '@/lib/style/twMerge.config' instead.",
					},
				],
			},
		],
		"@next/next/no-html-link-for-pages": ["error", "app/"],
	},
	overrides: [
		{
			/** ESLint config */
			env: {
				node: true,
			},
			files: [".eslintrc.(c)js"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
};

module.exports = config;
