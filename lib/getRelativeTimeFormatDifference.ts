import { TIME_UNITS } from "@/lib/time";

export function getRelativeTimeFormatDifference(
	date: string | number | Date,
	compareTo: string | number | Date = Date.now()
): [number, Intl.RelativeTimeFormatUnit] {
	const dateToCompare = new Date(date),
		compareToDate = new Date(compareTo);

	let differenceInSeconds = Math.floor((dateToCompare.valueOf() - compareToDate.valueOf()) / 1000);

	const isNegative = differenceInSeconds < 0;
	if (isNegative) {
		differenceInSeconds = differenceInSeconds * -1;
	}

	for (const [unit, seconds] of Object.entries(TIME_UNITS) as [
		Intl.RelativeTimeFormatUnit,
		number
	][]) {
		const value = Math.floor(differenceInSeconds / seconds);

		if (value >= 1) {
			return [value * (isNegative ? -1 : 1), unit];
		}
	}

	return [0, "second"];
}
