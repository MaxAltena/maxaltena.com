import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
	client: {},
	shared: {
		NODE_ENV: z.enum(["development", "test", "production"]),
	},
	runtimeEnv: process.env,
});
