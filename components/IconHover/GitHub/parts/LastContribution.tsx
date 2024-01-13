import { faCodeCommit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type z } from "zod";
import { type GitHubUserSchema } from "@/lib/getGitHubUser";
import { getRelativeTimeFormatDifference } from "@/lib/getRelativeTimeFormatDifference";
import { cx } from "@/lib/style/cva.config";

export function IconHoverGitHubLastContribution({
	contributionsCollection,
	className,
	...props
}: Pick<z.infer<typeof GitHubUserSchema>, "contributionsCollection"> &
	React.ComponentPropsWithoutRef<"div">) {
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
		...getRelativeTimeFormatDifference(lastContributionDate),
	);

	return (
		<div className={cx("flex items-center gap-1 text-xs", className)} {...props}>
			<FontAwesomeIcon icon={faCodeCommit} className="size-4" />
			<span>
				Last activity{" "}
				<time dateTime={lastContributionDate.toISOString()}>
					{relative !== "in 0 seconds" ? relative : `on ${absolute}`}
				</time>
			</span>
		</div>
	);
}
