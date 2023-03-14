/** @type {import("eslint").Linter.Config} */
const config = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"next/core-web-vitals",
		"prettier",
	],
	rules: {
		"@next/next/no-html-link-for-pages": ["error", "app/"],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				prefer: "type-imports",
				fixStyle: "inline-type-imports",
			},
		],
		"import/order": [
			"warn",
			{
				groups: ["builtin", "type", "external", "internal", "parent", "sibling", "index", "object"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"import/no-duplicates": "warn",
		"import/no-named-default": "error",
		"import/no-default-export": "error",
		"react-hooks/exhaustive-deps": "off",
		"max-params": ["error", 3],
		"no-var": "error",
	},
	overrides: [
		{
			/**
			 *	Allow default export only for the following:
			 *	- Next.js pages
			 *	- TypeScript definitions files
			 *	- Config files
			 */
			files: ["pages/**/*", "app/**/*", "middleware.ts", "*.d.ts", "*.config.*", "*.stories.*"],
			rules: {
				"import/no-anonymous-default-export": "off",
				"import/no-default-export": "off",
			},
		},
		{
			/* TypeScript specific */
			files: ["*.ts", "*.tsx"],
			plugins: ["@typescript-eslint"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
	],
};

module.exports = config;
