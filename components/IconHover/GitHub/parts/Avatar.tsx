import { type z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { getInitials } from "@/lib/getInitials";
import { cx } from "@/lib/style/cva.config";

export function IconHoverGitHubAvatar({
	avatarUrl,
	name,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "avatarUrl" | "name"> &
	React.ComponentPropsWithoutRef<typeof Avatar>) {
	const initials = getInitials(name);

	return (
		<Avatar className={cx("size-10", className)} {...props}>
			<AvatarImage src={avatarUrl} alt={`Avatar of ${name}`} />
			<AvatarFallback>{initials}</AvatarFallback>
		</Avatar>
	);
}
