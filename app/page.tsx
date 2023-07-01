import Link from "next/link";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "@/components/Logo";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navigation";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar className="sticky inset-x-0 top-0 z-10 border-b-4 border-black bg-white">
				<Logo asLink="/" />

				<div className="flex gap-3">
					<Link
						href="https://github.com/MaxAltena"
						className={cn(buttonVariants({ size: "icon" }), "border-2 border-black bg-[#000000]")}
					>
						<FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
					</Link>
					<Link
						href="https://linkedin.com/in/MaxAltena"
						className={cn(
							buttonVariants({ size: "icon" }),
							"border-2 border-black bg-[#0077B5] hover:bg-[#0077B5]"
						)}
					>
						<FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
					</Link>
				</div>
			</Navbar>

			<Marquee
				className="border-b-4 border-black bg-brand-yellow py-4 font-mono text-brand-blue"
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

			<main className="flex flex-1 flex-col items-center justify-center gap-4">
				<Card className="bg-brand-yellow px-6 py-4 text-brand-blue sm:px-12 sm:py-8">
					<CardTitle className="font-display text-3xl font-black">Max Altena</CardTitle>
					<CardDescription className="mt-2 text-brand-blue">
						I guess there will be something here soon.
					</CardDescription>
				</Card>
			</main>
		</div>
	);
}
