import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
	client: {
		NEXT_PUBLIC_GITHUB_USERNAME: z.string(),
	},
	shared: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
	runtimeEnv: process.env,
});
