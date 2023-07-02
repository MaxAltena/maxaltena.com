import { cache } from "react";
import "server-only";
import { z } from "zod";
import { serverEnv } from "@/env/server.mjs";
import { TIME_UNITS } from "@/lib/time";

export const GitHubUserSchema = z.object({
	avatarUrl: z.string().url().startsWith("https://avatars.githubusercontent.com"),
	bioHTML: z.string(),
	contributionsCollection: z.object({
		contributionCalendar: z.object({
			weeks: z.array(
				z.object({
					contributionDays: z.array(
						z.object({
							contributionCount: z.number(),
							date: z.coerce.date(),
						})
					),
				})
			),
		}),
	}),
	email: z.string().email(),
	location: z.string().nullable(),
	login: z.string(),
	name: z.string(),
	pronouns: z.string(),
	status: z
		.object({
			message: z.string().nullable(),
			emojiHTML: z.string().nullable(),
		})
		.nullable(),
	url: z.string().url().startsWith("https://github.com"),
});

export const preload = (login: string) => {
	void getGitHubUser(login);
};

export const getGitHubUser = cache(async (login: string) => {
	const response = await fetch(serverEnv.GITHUB_GRAPHQL_API_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${serverEnv.GITHUB_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
				{
					user(login: "${login}") {
						avatarUrl
						bioHTML
						contributionsCollection {
							contributionCalendar {
								weeks {
									contributionDays {
										contributionCount
										date
									}
								}
							}
						}
						email
						location
						login
						name
						pronouns
						status {
							message
							emojiHTML
						}
						url
					}
				}
			`,
		}),
		next: {
			tags: ["github", `github-user-${login}`],
			revalidate: TIME_UNITS.hour,
		},
	});

	const result = (await response.json()) as { data?: { user?: unknown } };

	return GitHubUserSchema.safeParse(result?.data?.user);
});
