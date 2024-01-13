/** @lends https://buildui.com/recipes/await-component */

export async function Await<T>({
	promise,
	children,
}: {
	promise: Promise<T>;
	children: (result: T) => JSX.Element;
}) {
	const result = await promise;

	return children(result);
}
