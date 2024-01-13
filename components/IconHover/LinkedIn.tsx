import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/style/cva.config";

export function IconHoverLinkedIn({
	accountName,
	...props
}: React.ComponentProps<typeof Button> & { accountName: string }) {
	return (
		<Button
			as="child"
			size="icon"
			{...props}
			className={cx("border-2 border-black bg-[#0077B5] hover:bg-[#0077B5]", props.className)}
		>
			<Link href={`https://linkedin.com/in/${accountName}`}>
				<FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
			</Link>
		</Button>
	);
}
