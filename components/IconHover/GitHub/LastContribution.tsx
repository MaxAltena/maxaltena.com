import { faCodeCommit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { getRelativeTimeFormatDifference } from "@/lib/getRelativeTimeFormatDifference";

export function IconHoverGitHubLastContribution({
	contributionsCollection,
}: {
	contributionsCollection?: z.infer<typeof GitHubUserSchema>["contributionsCollection"];
}) {
	if (!contributionsCollection) {
		return null;
	}

	const lastContributionDate = contributionsCollection.contributionCalendar.weeks
		.flatMap((week) => week.contributionDays)
		.filter((day) => day.contributionCount > 0)
		.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		.at(-1)?.date;

	if (!lastContributionDate) {
		return null;
	}

	const absolute = lastContributionDate.toLocaleDateString("en", { dateStyle: "long" });

	const relative = new Intl.RelativeTimeFormat("en", { style: "long" }).format(
		...getRelativeTimeFormatDifference(lastContributionDate)
	);

	return (
		<div className="flex items-center gap-1 text-xs">
			<FontAwesomeIcon icon={faCodeCommit} className="h-4 w-4" />
			<span>
				Last activity{" "}
				<time dateTime={lastContributionDate.toISOString()}>
					{relative !== "in 0 seconds" ? relative : `on ${absolute}`}
				</time>
			</span>
		</div>
	);
}
