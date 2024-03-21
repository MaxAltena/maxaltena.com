import { Fira_Code, Inter, Playfair_Display, Unbounded } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { Background } from "@/app/Background";
import { Mastodon } from "@/app/Mastodon";
import { IconHoverGitHub } from "@/components/IconHover/GitHub/GitHub";
import { IconHoverLinkedIn } from "@/components/IconHover/LinkedIn";
import { Logo } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navigation";
import { Code } from "@/components/ui/typography/code";
import { clientEnv } from "@/env/client.mjs";
import { cx } from "@/lib/style/cva.config";
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
			className={cx(
				inter.variable,
				playfairDisplay.variable,
				firaCode.variable,
				unbounded.variable,
				"font-sans",
			)}
		>
			<body className="min-h-screen">
				<Background />

				<Navbar className="sticky inset-x-0 top-0 z-10 border-b-4 border-black bg-white">
					<Logo href="/" />

					<div className="flex gap-3">
						<IconHoverGitHub login={clientEnv.NEXT_PUBLIC_GITHUB_LOGIN} />
						<IconHoverLinkedIn accountName={clientEnv.NEXT_PUBLIC_LINKEDIN_VANITYNAME} />
					</div>
				</Navbar>

				<Marquee
					className="border-b-4 border-black bg-brand-yellow font-mono text-brand-blue"
					parts={{ inner: { className: "py-4" } }}
					shownIndex={1}
					count={20}
				>
					{(isShown) => (
						<>
							<span>Experienced front-end developer</span>
							<span>
								Works at{" "}
								<Link
									className="rounded-sm font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-safe:transition"
									tabIndex={!isShown ? -1 : undefined}
									href="https://stijlbreuk.nl"
								>
									Stijlbreuk
								</Link>
							</span>
							<span>Mechanical keyboard enthusiast</span>
							<span>All-round learner</span>
							<span>
								Still trying to exit <Code>vim</Code>
							</span>
							<span>
								Improving{" "}
								<Link
									className="rounded-sm font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-safe:transition"
									tabIndex={!isShown ? -1 : undefined}
									href="https://threejs.org/"
								>
									Three.js
								</Link>{" "}
								skills
							</span>
						</>
					)}
				</Marquee>

				{children}

				<Analytics />
				<Mastodon />
				<script defer src="/test-script.js"></script>
			</body>
		</html>
	);
}
