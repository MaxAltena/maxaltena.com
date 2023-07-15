import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { cn } from "@/lib/utils";

export function IconHoverGitHubStatus({
	status,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "status"> & React.ComponentPropsWithoutRef<"div">) {
	if (!status) {
		return null;
	}

	return (
		<div
			className={cn(
				"-mx-4 -mt-4 mb-4 flex items-center gap-2 border-b-2 border-black p-2",
				className,
			)}
			{...props}
		>
			{!!status.emojiHTML && <div dangerouslySetInnerHTML={{ __html: status.emojiHTML }} />}
			{!!status.message && <span>{status.message}</span>}
		</div>
	);
}
