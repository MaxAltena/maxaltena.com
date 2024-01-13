/**
 * @type {import("prettier").Config &
 * 	import("@trivago/prettier-plugin-sort-imports").PluginConfig &
 * 	import("prettier-plugin-jsdoc").Options &
 * 	import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-jsdoc",
		"prettier-plugin-tailwindcss", // MUST come last
	],
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
			files: "package*.json",
			options: { printWidth: 1000 },
		},
		{
			files: "*.{yml,yaml}",
			options: { useTabs: false },
		},
	],
};

export default config;
