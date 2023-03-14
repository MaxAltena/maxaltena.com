// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./lib/env.mjs"));

import bundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		appDir: true,
	},
};

const withBundleAnalyzer = bundleAnalyzer({
	enabled: !!process.env.ANALYZE,
});

export default withBundleAnalyzer(nextConfig);
