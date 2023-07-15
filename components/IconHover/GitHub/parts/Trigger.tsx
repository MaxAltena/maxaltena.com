import Link, { type LinkProps } from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IconHoverGitHubTrigger({
	className,
	...props
}: LinkProps & React.ComponentPropsWithoutRef<"a">) {
	return (
		<Link
			className={cn(
				buttonVariants({ size: "icon" }),
				"border-2 border-black bg-[#000000]",
				className,
			)}
			{...props}
		>
			<FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
		</Link>
	);
}
