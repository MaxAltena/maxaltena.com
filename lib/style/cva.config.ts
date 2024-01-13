/* eslint-disable no-restricted-imports */
import { defineConfig } from "cva";
import { twMerge } from "./twmerge.config";

export const { cva, cx, compose } = defineConfig({
	hooks: {
		onComplete: (className) => twMerge(className),
	},
});

export const cn = cx;
export type * from "cva";
