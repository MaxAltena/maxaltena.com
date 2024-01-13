// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";

await import("./env/server.mjs");
await import("./env/client.mjs");

/** @type {import("next").NextConfig} */
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
		}),
	},
};

const withBundleAnalyzer = bundleAnalyzer({
	enabled: !!process.env.ANALYZE,
});

export default withBundleAnalyzer(nextConfig);
