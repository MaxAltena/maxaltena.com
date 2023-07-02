import { type ComponentProps } from "react";
import Link from "next/link";
import {
	HoverCard,
	HoverCardArrow,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { clientEnv } from "@/env/client.mjs";
import { getGitHubUser } from "@/lib/getGitHubUser";
import { Avatar, LastContribution, Location, Status, Trigger } from "./parts";

export async function IconHoverGitHub({
	openDelay = 250,
	closeDelay = 250,
	login,
	...props
}: { login: string } & ComponentProps<typeof HoverCard>) {
	const userResponse = await getGitHubUser(login);

	if (!userResponse.success) {
		return <Trigger href={`https://github.com/${clientEnv.NEXT_PUBLIC_GITHUB_LOGIN}`} />;
	}

	const { data: user } = userResponse;

	return (
		<HoverCard openDelay={openDelay} closeDelay={closeDelay} {...props}>
			<HoverCardTrigger asChild>
				<Trigger href={user.url} />
			</HoverCardTrigger>
			<HoverCardContent className="text-sm">
				<Status status={user.status} />

				<div className="flex w-full flex-col gap-2">
					<Avatar avatarUrl={user.avatarUrl} name={user.name} />

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
						<Location location={user.location} />

						<LastContribution contributionsCollection={user.contributionsCollection} />
					</div>
				</div>
				<HoverCardArrow width={14} height={7} />
			</HoverCardContent>
		</HoverCard>
	);
}
