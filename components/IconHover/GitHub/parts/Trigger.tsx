import Link, { type LinkProps } from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/style/cva.config";

export function IconHoverGitHubTrigger({
	href,
	...props
}: React.ComponentProps<typeof Button> & Pick<LinkProps, "href">) {
	return (
		<Button
			as="child"
			size="icon"
			{...props}
			className={cx("border-2 border-black bg-[#24292F] hover:bg-[#24292F]", props.className)}
		>
			<Link href={href}>
				<FontAwesomeIcon icon={faGithub} className="size-6" />
			</Link>
		</Button>
	);
}
