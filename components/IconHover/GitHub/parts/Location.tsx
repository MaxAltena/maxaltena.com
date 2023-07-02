import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { cn } from "@/lib/utils";

export function IconHoverGitHubLocation({
	location,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "location"> & React.ComponentPropsWithoutRef<"div">) {
	if (!location) {
		return null;
	}

	return (
		<div className={cn("flex items-center gap-1 text-xs", className)} {...props}>
			<FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
			<span>{location}</span>
		</div>
	);
}
