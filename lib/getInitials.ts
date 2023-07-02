export function getInitials(string: string) {
	const names = string.split(" ");
	const initials = names.map((name) => name.substring(0, 1).toUpperCase());

	const first = initials.at(0);
	const last = initials.length > 1 ? initials.at(-1) : undefined;

	return [first, last].join("");
}
