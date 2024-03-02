/**
 * @type {import("prettier").Config &
 * 	import("@trivago/prettier-plugin-sort-imports").PluginConfig &
 * 	import("prettier-plugin-jsdoc").JsdocOptions &
 * 	import("prettier-plugin-tailwindcss").PluginOptions}
 */
export default {
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-astro",
		"prettier-plugin-jsdoc",
		"prettier-plugin-tailwindcss", // MUST come last
	],
	importOrder: [
		"^astro$", // Astro imports
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
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
