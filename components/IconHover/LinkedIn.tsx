import Link from "next/link";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IconHoverLinkedIn() {
	return (
		<Link
			href="https://linkedin.com/in/MaxAltena"
			className={cn(
				buttonVariants({ size: "icon" }),
				"border-2 border-black bg-[#0077B5] hover:bg-[#0077B5]"
			)}
		>
			<FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
		</Link>
	);
}
