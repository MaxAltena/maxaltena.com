import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { cx } from "@/lib/style/cva.config";

export function IconHoverGitHubLocation({
	location,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "location"> & React.ComponentPropsWithoutRef<"div">) {
	if (!location) {
		return null;
	}

	return (
		<div className={cx("flex items-center gap-1 text-xs", className)} {...props}>
			<FontAwesomeIcon icon={faLocationDot} className="size-4" />
			<span>{location}</span>
		</div>
	);
}
