// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";

import("./env/server.mjs");
import("./env/client.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const withBundleAnalyzer = bundleAnalyzer({
	enabled: !!process.env.ANALYZE,
});

export default withBundleAnalyzer(nextConfig);
