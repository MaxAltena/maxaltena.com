export const TIME_UNITS = {
	year: 31536000,
	month: 2592000,
	week:
		// Seconds
		60 *
		// Minutes
		60 *
		// Hours
		24 *
		// Days
		7,
	day:
		// Seconds
		60 *
		// Minutes
		60 *
		// Hours
		24,
	hour:
		// Seconds
		60 *
		// Minutes
		60,
	minute: 60,
	second: 1,
} as const satisfies Partial<Record<Intl.RelativeTimeFormatUnit, number>>;
