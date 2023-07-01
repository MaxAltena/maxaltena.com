import { Fira_Code, Inter, Playfair_Display, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-playfair-display",
});

const firaCode = Fira_Code({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fira-code",
});

const unbounded = Unbounded({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-unbounded",
});

export const metadata = {
	title: "Max Altena",
	description: "The personal website of Max Altena",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${playfairDisplay.variable} ${firaCode.variable} ${unbounded.variable} font-sans`}
		>
			<body className="min-h-screen bg-brand-blue">{children}</body>
		</html>
	);
}
