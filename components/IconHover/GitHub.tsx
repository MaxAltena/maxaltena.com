import { type ComponentProps } from "react";
import Link from "next/link";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconHoverGitHubLastContribution } from "@/components/IconHover/GitHub/LastContribution";
import { IconHoverGitHubStatus } from "@/components/IconHover/GitHub/Status";
import { IconHoverGitHubTrigger } from "@/components/IconHover/GitHub/Trigger";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardArrow,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { clientEnv } from "@/env/client.mjs";
import { getGitHubUser } from "@/lib/getGitHubUser";

export async function IconHoverGitHub({
	openDelay = 250,
	closeDelay = 250,
	...props
}: ComponentProps<typeof HoverCard>) {
	const userResponse = await getGitHubUser(clientEnv.NEXT_PUBLIC_GITHUB_USERNAME);

	if (!userResponse.success) {
		return (
			<IconHoverGitHubTrigger
				href={`https://github.com/${clientEnv.NEXT_PUBLIC_GITHUB_USERNAME}`}
			/>
		);
	}

	const { data: user } = userResponse;

	return (
		<HoverCard openDelay={openDelay} closeDelay={closeDelay} {...props}>
			<HoverCardTrigger asChild>
				<IconHoverGitHubTrigger href={user.url} />
			</HoverCardTrigger>
			<HoverCardContent className="text-sm">
				<IconHoverGitHubStatus status={user.status} />

				<div className="flex w-full flex-col gap-2">
					<Avatar className="h-10 w-10">
						<AvatarImage src={user.avatarUrl} alt={`Avatar of ${user.name}`} />
						<AvatarFallback>{user.name.split(" ").map((word) => word[0])}</AvatarFallback>
					</Avatar>

					<div className="flex flex-col gap-[.125rem]">
						<div className="flex gap-1">
							<Link
								className="rounded-sm font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue motion-safe:transition"
								href={user.url}
							>
								{user.login}
							</Link>
							<span>
								{user.name} · {user.pronouns}
							</span>
						</div>

						<div dangerouslySetInnerHTML={{ __html: user.bioHTML }} />
					</div>

					<div className="flex flex-col gap-1">
						{user.location && (
							<div className="flex items-center gap-1 text-xs">
								<FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
								<span>{user.location}</span>
							</div>
						)}

						<IconHoverGitHubLastContribution
							contributionsCollection={user.contributionsCollection}
						/>
					</div>
				</div>
				<HoverCardArrow width={14} height={7} />
			</HoverCardContent>
		</HoverCard>
	);
}
