import { use } from "react";
import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonVariants } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardArrow,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { clientEnv } from "@/env/client.mjs";
import { serverEnv } from "@/env/server.mjs";
import { cn } from "@/lib/utils";

export async function IconHoverGitHub() {
	// const data = use(

	// 		.then((result) => console.log(result))
	// );
	// const data = await getGitHubUserHoverCardData(clientEnv.NEXT_PUBLIC_GITHUB_USERNAME);

	// console.log(data);

	return (
		<HoverCard openDelay={250} closeDelay={250} open>
			<HoverCardTrigger asChild>
				<Link
					href={`https://github.com/${clientEnv.NEXT_PUBLIC_GITHUB_USERNAME}`}
					className={cn(buttonVariants({ size: "icon" }), "border-2 border-black bg-[#000000]")}
				>
					<FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
				</Link>
			</HoverCardTrigger>
			<HoverCardContent>
				The React Framework – created and maintained by @vercel.
				<HoverCardArrow width={14} height={7} />
			</HoverCardContent>
		</HoverCard>
	);
}

async function getGitHubUserHoverCardData(username: string) {
	const response = await fetch(serverEnv.GITHUB_GRAPHQL_API_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${serverEnv.GITHUB_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
				{
					user(login: "${username}") {
						email
						avatarUrl
						name
						url
						bio
						pronouns
						location
						status {
							message
							emoji
						}
					}
				}
			`,
		}),
		next: {
			revalidate:
				// Seconds
				60 *
				// Minutes
				60 *
				// Hours
				12,
		},
		// 	})
		// 		.then((res) => res.json())
	});

	return response.json();
}
