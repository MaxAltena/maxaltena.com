import { type z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { getInitials } from "@/lib/getInitials";
import { cn } from "@/lib/utils";

export function IconHoverGitHubAvatar({
	avatarUrl,
	name,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "avatarUrl" | "name"> &
	React.ComponentPropsWithoutRef<typeof Avatar>) {
	const initials = getInitials(name);

	return (
		<Avatar className={cn("h-10 w-10", className)} {...props}>
			<AvatarImage src={avatarUrl} alt={`Avatar of ${name}`} />
			<AvatarFallback>{initials}</AvatarFallback>
		</Avatar>
	);
}
