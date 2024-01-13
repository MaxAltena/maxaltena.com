import { cx } from "@/lib/style/cva.config";

export function Code(props: React.ComponentPropsWithoutRef<"code">) {
	return (
		<code
			{...props}
			className={cx(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				props.className,
			)}
		/>
	);
}
