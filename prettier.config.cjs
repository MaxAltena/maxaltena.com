/** @type {import('prettier').Config} */
const prettierConfig = {
	plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
	importOrder: [
		"^node:(.*)$", // Node imports
		"^react$", // React
		"^next$", // Next imports
		"^next/(.*)$", // Next imports
		"^react-(.*)$", // React-related imports
		"^next-(.*)$", // Next-related imports
		"<THIRD_PARTY_MODULES>", // Third party modules
		"^@/(.*)$", // App imports
		"^[./]", // Other imports
	],
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	useTabs: true,
	printWidth: 100,
	overrides: [
		{
			files: "*.yml",
			options: {
				useTabs: false,
			},
		},
	],
};

module.exports = prettierConfig;
