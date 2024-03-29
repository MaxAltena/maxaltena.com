import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva, cx } from "@/lib/style/cva.config";

const buttonVariants = cva({
	base: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-transparent motion-safe:transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-brand-yellow-800 drop-shadow-md hover:drop-shadow active:drop-shadow-sm",
	variants: {
		variant: {
			default:
				"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
			destructive:
				"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
			outline:
				"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
			secondary:
				"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
			ghost:
				"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
			link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "size-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		as?: "child" | "button";
	};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, as = "button", ...props }, ref) => {
		const Comp = as === "child" ? Slot : as;
		return (
			<Comp className={cx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
