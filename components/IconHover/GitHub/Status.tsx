import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";

export function IconHoverGitHubStatus({
	status,
}: {
	status?: z.infer<typeof GitHubUserSchema>["status"];
}) {
	if (!status) {
		return null;
	}

	return (
		<div className="-mx-4 -mt-4 mb-4 flex items-center gap-2 border-b-2 border-black p-2">
			{!!status.emojiHTML && <div dangerouslySetInnerHTML={{ __html: status.emojiHTML }} />}
			{!!status.message && <span>{status.message}</span>}
		</div>
	);
}
