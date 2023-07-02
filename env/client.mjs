import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
	client: {
		NEXT_PUBLIC_GITHUB_LOGIN: z.string(),
		NEXT_PUBLIC_MASTODON_LINK: z.string(),
	},
	shared: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
	runtimeEnv: process.env,
});
