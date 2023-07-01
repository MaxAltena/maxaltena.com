import { cn } from "@/lib/utils";

export function Navbar({ children, className, ...props }: React.ComponentPropsWithoutRef<"div">) {
	return (
		<nav className={cn("h-20 w-full", className)} {...props}>
			<div className="container flex h-full items-center justify-between">{children}</div>
		</nav>
	);
}
