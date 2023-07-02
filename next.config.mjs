// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";

import("./env/server.mjs");
import("./env/client.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
	compiler: {
		...(process.env.NODE_ENV === "production" && {
			reactRemoveProperties: {
				/* Remove any `data-test` property to clean the properties on components */
				properties: ["^data-test"],
			},
			removeConsole: {
				/* Only include `error`, `warn` and `info` console messages and suppress any `log` usage which should primarly be used for debugging */
				exclude: ["error", "warn", "info"],
			},
		}),
	},
	modularizeImports: {
		/* Makes fontawesome icons tree-shakable */
		"@fortawesome/?(((\\w*)?/?)*)-icons": {
			transform: "@fortawesome/{{ matches.[1] }}-icons/{{member}}",
			preventFullImport: true,
		},
	},
};

const withBundleAnalyzer = bundleAnalyzer({
	enabled: !!process.env.ANALYZE,
});

export default withBundleAnalyzer(nextConfig);
