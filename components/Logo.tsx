import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, asLink }: { className?: string; asLink?: string }) {
	const Comp = asLink ? Link : "div";

	return (
		<Comp
			href={asLink ? asLink : (undefined as never)}
			className={cn(
				"relative block h-16 w-16 rounded ring-offset-transparent  [--logo-1:none] [--logo-2:block] hover:[--logo-1:block] hover:[--logo-2:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:[--logo-1:block] focus-visible:[--logo-2:none] motion-safe:transition",
				className,
			)}
		>
			<Image
				src="./icon1.svg"
				width={64}
				height={64}
				alt="A logo displayed through a serif font containing the text MAx"
				className="select-none [display:--logo-1]"
				priority
				loading="eager"
			/>
			<Image
				src="./icon2.svg"
				width={64}
				height={64}
				alt="A logo displayed through a display font containing the text MAx"
				className="select-none [display:--logo-2]"
				loading="eager"
			/>
		</Comp>
	);
}
