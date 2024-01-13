import { forwardRef } from "react";
import { cx } from "@/lib/style/cva.config";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cx(
				"rounded-lg border-4 border-black bg-white text-slate-950 drop-shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
				className,
			)}
			{...props}
		/>
	),
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("flex flex-col space-y-1.5 p-6", className)} {...props} />
	),
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cx("text-2xl font-semibold leading-none tracking-tight", className)}
			{...props}
		/>
	),
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cx("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("p-6 pt-0", className)} {...props} />
	),
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cx("flex items-center p-6 pt-0", className)} {...props} />
	),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
