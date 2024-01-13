import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				serif: ["var(--font-playfair-display)", ...defaultTheme.fontFamily.serif],
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				mono: ["var(--font-fira-code)", ...defaultTheme.fontFamily.mono],
				display: ["var(--font-unbounded)", ...defaultTheme.fontFamily.sans],
			},
			dropShadow: {
				sm: "1px 1px 0px rgb(0 0 0 / 1)",
				DEFAULT: "2px 2px 0 rgb(0 0 0 / 1)",
				md: "4px 4px 0 rgb(0 0 0 / 1)",
				lg: "6px 6px 0 rgb(0 0 0 / 1)",
				xl: "8px 8px 0 rgb(0 0 0 / 1)",
				"2xl": "10px 10px 0 rgb(0 0 0 / 1)",
			},
			colors: {
				"brand-yellow": {
					DEFAULT: "#ffff00",
					"50": "#fbffe7",
					"100": "#f4ffc1",
					"200": "#eeff86",
					"300": "#ecff41",
					"400": "#f2ff0d",
					"500": "#ffff00",
					"600": "#d1bf00",
					"700": "#a68b02",
					"800": "#896c0a",
					"900": "#74580f",
					"950": "#443004",
				},
				"brand-blue": {
					DEFAULT: "#0000ff",
					"50": "#f0f3ff",
					"100": "#e4e9ff",
					"200": "#cdd6ff",
					"300": "#a6b4ff",
					"400": "#7382ff",
					"500": "#3b44ff",
					"600": "#1614ff",
					"700": "#0000ff",
					"800": "#0101d6",
					"900": "#0303af",
					"950": "#000577",
				},
				muted: "hsl(210 40% 96.1%)",
				"muted-foreground": "hsl(215.4 16.3% 46.9%)",
			},
			backgroundImage: {
				"grid-pattern":
					"linear-gradient(currentColor var(--bg-size, theme(spacing.1)), transparent var(--bg-size, theme(spacing.1))), linear-gradient(to right, currentColor var(--bg-size, theme(spacing.1)), transparent var(--bg-size,theme(spacing.1)))",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				marquee: {
					from: { translate: "0 0" },
					to: { translate: "calc(-50% - var(--gap) / 2) 0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				marquee: "marquee var(--duration, 10s) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
