import React from "react";
import { cx } from "@/lib/style/cva.config";

export type MarqueeProps = {
	children?: (isShown: boolean) => React.ReactNode;
	shownIndex?: number;
	count?: number;
	parts?: {
		inner?: React.ComponentPropsWithoutRef<"div">;
	};
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export function Marquee({ children, parts, shownIndex = 0, count = 5, ...props }: MarqueeProps) {
	return (
		<div
			{...props}
			className={cx("flex w-full overflow-hidden whitespace-nowrap", props?.className)}
		>
			<div
				{...parts?.inner}
				className={cx(
					"flex w-max animate-marquee items-stretch gap-[--gap] [--duration:120s] [--gap:theme(spacing.8)] hover:[animation-play-state:paused] motion-reduce:[--duration:240s]",
					parts?.inner?.className,
				)}
			>
				{Array.from({ length: Math.max(1, count) }, (_, index) => (
					<React.Fragment key={index}>
						{children?.(index === Math.max(0, shownIndex))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
