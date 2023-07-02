import { clientEnv } from "@/env/client.mjs";

export function Mastodon({ href = clientEnv.NEXT_PUBLIC_MASTODON_LINK }: { href?: string }) {
	return (
		<a className="invisible hidden" rel="me" href={href}>
			Mastodon
		</a>
	);
}
