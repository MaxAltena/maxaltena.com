import { cn } from "@/lib/utils";

export type MarqueeProps = {
	children?: (isShown: boolean) => React.ReactNode;
	shownIndex?: number;
	count?: number;
	parts?: { item?: React.ComponentPropsWithoutRef<"div"> };
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export function Marquee({
	children,
	className,
	parts,
	shownIndex = 0,
	count = 5,
	...props
}: MarqueeProps) {
	return (
		<div className={cn("flex w-full overflow-hidden whitespace-nowrap", className)} {...props}>
			{Array.from({ length: Math.max(1, count) }).map((_, index) => (
				<MarqueeItem
					key={index}
					{...parts?.item}
					{...(index !== Math.max(0, shownIndex) && {
						"aria-hidden": true,
						tabIndex: -1,
					})}
				>
					{children?.(index === Math.max(0, shownIndex))}
				</MarqueeItem>
			))}
		</div>
	);
}

function MarqueeItem({
	children,
	className,
	...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>) {
	return (
		<div
			className={cn(
				"inline-flex animate-marquee gap-8 pe-8 [--duration:15s] motion-reduce:[--duration:30s]",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}
