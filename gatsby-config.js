module.exports = {
	siteMetadata: {
		siteUrl: "https://maxaltena.com/",
		title: "Max Altena",
		description: "The website of Max Altena",
		author: "@maxaltena",
	},
	plugins: [
		{
			resolve: "@sentry/gatsby",
			options: {
				dsn: "https://53bbf5138f9a45d2bec1f64daabf0b11@o482180.ingest.sentry.io/5531971",
				sampleRate: 1.0,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Max Altena",
				short_name: "MaxAltena",
				start_url: "/",
				background_color: "#FFFFFF",
				theme_color: "#000000",
				display: "standalone",
				icon: "./src/assets/icons/favicon.png",
				lang: "en-US",
				description: "The website of Max Altena",
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://maxaltena.com/",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: "gatsby-plugin-humans-txt",
			options: {
				team: [
					{
						Developer: "Max Altena",
						GitHub: "MaxAltena",
						LinkedIn: "maxaltena",
					},
				],
				thanks: ["Gatsby", "Node", "Yarn"],
				site: {
					"Last update": "25th of August 2019",
					Standards: "JavaScript, ES6",
					Components: "React",
					Softwares: "Visual Studio Code",
				},
				note: "Made with love by Max Altena",
			},
		},
		{
			resolve: "gatsby-plugin-favicon",
			options: {
				logo: "./src/assets/icons/favicon.png",
				appName: "Max Altena",
				appDescription: "The website of Max Altena",
				developerName: "Max Altena",
				developerURL: "https://maxaltena.com/",
				dir: "auto",
				lang: "en-US",
				background: "#FFFFFF",
				theme_color: "#000000",
				display: "standalone",
				orientation: "any",
				start_url: "/",
				version: "1.0.0",

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: true,
					favicons: true,
					firefox: true,
					yandex: true,
					windows: true,
				},
			},
		},
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-102319824-1",
				head: true,
				anonymize: true,
				respectDNT: true,
			},
		},
		{
			resolve: "gatsby-plugin-html-attributes",
			options: {
				lang: "en",
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Fira Mono"],
				},
			},
		},
		{
			resolve: "gatsby-plugin-canonical-urls",
			options: {
				siteUrl: "https://maxaltena.com/",
			},
		},
		{
			resolve: "gatsby-plugin-preconnect",
			options: {
				domains: ["https://fonts.googleapis.com", "https://api.github.com"],
			},
		},
		{
			resolve: "gatsby-plugin-exclude",
			options: { paths: ["/css/**", "/fonts/**", "/images/**", "/vendors/**"] },
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-KXWS75M",
				includeInDevelopment: false,
				defaultDataLayer: { platform: "gatsby" },
			},
		},
		"gatsby-plugin-sitemap",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		"gatsby-plugin-offline",
		"gatsby-plugin-no-sourcemaps",
	],
};
