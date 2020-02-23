const colorScheme = Object.freeze({
	DARK: "dark",
	LIGHT: "light",
	NO_PREFERENCE: "no-preference",
	NO_SUPPORT: "no-support"
});
const reducedMotion = Object.freeze({
	REDUCE: "reduce",
	NO_PREFERENCE: "no-preference",
	NO_SUPPORT: "no-support"
});
const html = document.documentElement;
const isSupported = !!window.matchMedia;
const hasColorSchemeLS = !!localStorage.getItem("color-scheme");
const hasReducedMotionLS = !!localStorage.getItem("reduced-motion");

const csGet = () => {
	let result = colorScheme.NO_PREFERENCE;

	if (isSupported) {
		if (window.matchMedia(`(prefers-color-scheme: ${colorScheme.LIGHT})`).matches) result = colorScheme.LIGHT;
		if (window.matchMedia(`(prefers-color-scheme: ${colorScheme.DARK})`).matches) result = colorScheme.DARK;
	}
	if (html.dataset.colorScheme === colorScheme.LIGHT) result = colorScheme.LIGHT;
	if (html.dataset.colorScheme === colorScheme.DARK) result = colorScheme.DARK;

	return result;
};

const csSet = type => {
	switch (type) {
		case colorScheme.LIGHT:
		case colorScheme.DARK:
			html.dataset.colorScheme = type;
			localStorage.setItem("color-scheme", type);
			window.appPreferences.colorScheme.current = type;
			break;
		case colorScheme.NO_PREFERENCE:
		case colorScheme.NO_SUPPORT:
		default:
			delete html.dataset.colorScheme;
			localStorage.removeItem("color-scheme");
			window.appPreferences.colorScheme.current = csGet();
			break;
	}
};

const csCheck = type => {
	if (type === window.appPreferences.colorScheme.current) return true;
	else return false;
};

const csReset = () => {
	delete html.dataset.colorScheme;
	localStorage.removeItem("color-scheme");
	window.appPreferences.colorScheme.current = csGet();
};

const csToggle = () => {
	switch (window.appPreferences.colorScheme.current) {
		case colorScheme.LIGHT:
		default:
			html.dataset.colorScheme = colorScheme.DARK;
			localStorage.setItem("color-scheme", colorScheme.DARK);
			window.appPreferences.colorScheme.current = colorScheme.DARK;
			break;
		case colorScheme.DARK:
			html.dataset.colorScheme = colorScheme.LIGHT;
			localStorage.setItem("color-scheme", colorScheme.LIGHT);
			window.appPreferences.colorScheme.current = colorScheme.LIGHT;
			break;
	}
};

const rmGet = () => {
	let result = reducedMotion.NO_PREFERENCE;

	if (isSupported)
		if (window.matchMedia(`(prefers-reduced-motion: ${reducedMotion.REDUCE})`).matches)
			result = reducedMotion.REDUCE;
	if (html.dataset.reducedMotion === reducedMotion.REDUCE) result = reducedMotion.REDUCE;

	return result;
};

const rmSet = type => {
	switch (type) {
		case reducedMotion.REDUCE:
			html.dataset.reducedMotion = type;
			localStorage.setItem("reduced-motion", type);
			window.appPreferences.reducedMotion.current = type;
			break;
		case reducedMotion.NO_PREFERENCE:
		case reducedMotion.NO_SUPPORT:
		default:
			delete html.dataset.reducedMotion;
			localStorage.removeItem("reduced-motion");
			window.appPreferences.reducedMotion.current = rmGet();
			break;
	}
};

const rmCheck = type => {
	if (type === window.appPreferences.reducedMotion.current) return true;
	else return false;
};

const rmReset = () => {
	delete html.dataset.reducedMotion;
	localStorage.removeItem("reduced-motion");
	window.appPreferences.reducedMotion.current = rmGet();
};

const rmToggle = () => {
	switch (window.appPreferences.reducedMotion.current) {
		case reducedMotion.REDUCE:
		default:
			delete html.dataset.reducedMotion;
			localStorage.removeItem("reduced-motion");
			window.appPreferences.reducedMotion.current = rmGet();
			break;
		case reducedMotion.NO_PREFERENCE:
			html.dataset.reducedMotion = reducedMotion.REDUCE;
			localStorage.setItem("reduced-motion", reducedMotion.REDUCE);
			window.appPreferences.reducedMotion.current = reducedMotion.REDUCE;
			break;
	}
};

if (isSupported) {
	window.matchMedia(`(prefers-color-scheme: ${colorScheme.LIGHT})`).addEventListener("change", e => {
		if (e.matches) csSet(colorScheme.LIGHT);
	});
	window.matchMedia(`(prefers-color-scheme: ${colorScheme.DARK})`).addEventListener("change", e => {
		if (e.matches) csSet(colorScheme.DARK);
	});
	window.matchMedia(`(prefers-reduced-motion: ${reducedMotion.REDUCE})`).addEventListener("change", e => {
		if (e.matches) rmSet(reducedMotion.REDUCE);
	});
}

// Attach observer to document
new MutationObserver(mutations =>
	mutations.forEach(mutation => {
		if (mutation.attributeName === "data-color-scheme") csGet();
		if (mutation.attributeName === "data-reduced-motion") rmGet();
	})
).observe(document.documentElement, {
	attributeFilter: ["data-color-scheme", "data-reduced-motion"]
});

// Attach object to window
window.appPreferences = {
	colorScheme: {
		get: csGet,
		set: csSet,
		check: csCheck,
		reset: csReset,
		toggle: csToggle,
		prefers: (function() {
			if (!isSupported) return colorScheme.NO_SUPPORT;
			if (window.matchMedia(`(prefers-color-scheme: ${colorScheme.LIGHT})`).matches) return colorScheme.LIGHT;
			if (window.matchMedia(`(prefers-color-scheme: ${colorScheme.DARK})`).matches) return colorScheme.DARK;
			return colorScheme.NO_PREFERENCE;
		})(),
		current: csGet()
	},
	reducedMotion: {
		get: rmGet,
		set: rmSet,
		check: rmCheck,
		reset: rmReset,
		toggle: rmToggle,
		prefers: (function() {
			if (!isSupported) return reducedMotion.NO_SUPPORT;
			if (window.matchMedia(`(prefers-reduced-motion: ${reducedMotion.REDUCE})`).matches)
				return reducedMotion.REDUCE;
			return reducedMotion.NO_PREFERENCE;
		})(),
		current: rmGet()
	}
};

// Check for Local Storage
if (hasColorSchemeLS) csSet(localStorage.getItem("color-scheme"));
if (hasReducedMotionLS) rmSet(localStorage.getItem("reduced-motion"));
