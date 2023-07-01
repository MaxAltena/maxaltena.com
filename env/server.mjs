import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
	server: {
		ANALYZE: z.coerce.boolean().default(false),
		GITHUB_ACCESS_TOKEN: z.string().startsWith("github_pat_"),
		GITHUB_GRAPHQL_API_URL: z.string(),
	},
	shared: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
	experimental__runtimeEnv: process.env,
});
