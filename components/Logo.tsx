import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { cx } from "@/lib/style/cva.config";

export function Logo(props: LinkProps & Pick<React.ComponentPropsWithoutRef<"a">, "className">) {
	return (
		<Link
			{...props}
			className={cx(
				"group relative block size-16 rounded ring-offset-transparent [--logo-1:none] [--logo-2:block] hover:[--logo-1:block] hover:[--logo-2:none] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:[--logo-1:block] focus-visible:[--logo-2:none] motion-safe:transition",
				props.className,
			)}
		>
			<Image
				src="./icon1.svg"
				width={64}
				height={64}
				alt="A logo displayed through a serif font containing the text MAx"
				className="hidden size-16 select-none group-hover:block"
				priority
				loading="eager"
			/>
			<Image
				src="./icon2.svg"
				width={64}
				height={64}
				alt="A logo displayed through a display font containing the text MAx"
				className="block size-16 select-none group-hover:hidden"
				loading="eager"
			/>
		</Link>
	);
}
