/**
 * `useHydration` hook based on:
 * https://francoisbest.com/posts/2023/displaying-local-times-in-nextjs
 */
import { useEffect, useState } from "react";

export function useHydration() {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, []);

	return hydrated;
}
