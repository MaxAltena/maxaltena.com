/*
scrollConverter 1.0.4
https://github.com/koggdal/scroll-converter
Copyright 2011–2020 Johannes Koggdal (http://koggdal.com/)
Developed for BombayWorks (http://bombayworks.com/)
Released under MIT license
*/

window.scrollConverter = (function (window, document, undefined) {

	// Private vars
	var docElem = document.documentElement,
		active = false,
		hasDeactivated = false,
		eventsBound = false;

	var mouseWheelHandler;
	var scrollHandler;

	// Private methods
	var scrollCallback = function (offset, event, callback) {

			// Abort the scrolling if it's inactive
			if (!active) {
				return true;
			}

			var delta, numPixelsPerStep, change, newOffset,
				docOffset, scrollWidth, winWidth, maxOffset;

			// Set scrolling parameters
			delta = 0;
			numPixelsPerStep = 10;

			// Find the maximum offset for the scroll
			docOffset = (docElem ? docElem.offsetWidth : 0) || 0;
			scrollWidth = document.body.scrollWidth || 0;
			winWidth = docElem ? docElem.clientWidth : 0;
			maxOffset = Math.max(docOffset, scrollWidth) - winWidth;

			// Chrome and Safari seem to get interference when scrolling horizontally
			// with a trackpad, so if the scroll is horizontal we just ignore it here
			// and let the browser scroll like normal. These properties don't exist in
			// all browsers, but it also seems to work fine in other browsers, so this
			// is fine.
			if (Math.abs(event.wheelDeltaX) >= Math.abs(event.wheelDeltaY)) {
				return true;
			}
			if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
				return true;
			}

			// "Normalize" the wheel value across browsers
			//  The delta value after this will not be the same for all browsers.
			//  Instead, it is normalized in a way to try to give a pretty similar feeling in all browsers.
			//
			// Standard API
			if ("deltaY" in event) {
				delta = event.deltaY * -10;
			}
			// Old Firefox and Opera
			else if (event.detail) {
				delta = event.detail * -240;
			}
			// Old IE, Safari and Chrome
			else if (event.wheelDelta) {
				delta = event.wheelDelta * 5;
			}

			// Get the real offset change from the delta
			//  A positive change is when the user scrolled the wheel up (in regular scrolling direction)
			//  A negative change is when the user scrolled the wheel down
			change = delta / 120 * numPixelsPerStep;
			newOffset = offset.x - change;

			// Do the scroll if the new offset is positive
			if (newOffset >= 0 && newOffset <= maxOffset) {
				offset.x = newOffset;
				offset.setByScript = true;
				window.scrollTo(offset.x, offset.y);
			}
			// Keep the offset within the boundaries
			else if (offset.x !== 0 && offset.x !== maxOffset) {
				offset.x = newOffset > maxOffset ? maxOffset : 0;
				offset.setByScript = true;
				window.scrollTo(offset.x, offset.y);
			}

			// Fire the callback
			if (typeof callback === "function") {
				callback(offset);
			}

			return false;
		},

		supportsEventListenerPassiveOption = function () {
			var supportsPassiveOption = false;
			try {
				var options = Object.defineProperty({}, 'passive', {
					get: function() {
						supportsPassiveOption = true;
					}
				});
				window.addEventListener('test', null, options);
				window.removeEventListener('test', null, options);
			} catch (error) {}
			return supportsPassiveOption;
		},

		getOffset = function (axis) {
			axis = axis.toUpperCase();
			var pageOffset = "page" + axis + "Offset",
				scrollValue = "scroll" + axis,
				scrollDir = "scroll" + (axis === "X" ? "Left" : "Top");

			// Get the scroll offset for all browsers
			return window[pageOffset] || window[scrollValue] || (function () {
				var rootElem = document.documentElement || document.body.parentNode;
				return ((typeof rootElem[scrollDir] === "number") ? rootElem : document.body)[scrollDir];
			}());
		},

		bindEvents = function (offset, cb) {

			var callback = function (e) {

					// Fix event object for IE8 and below
					e = e || window.event;

					// Trigger the scroll behavior
					var shouldPreventDefault = scrollCallback(offset, e, cb) === false;

					// Prevent the normal scroll action to happen
					if (shouldPreventDefault) {
						if (e.preventDefault && e.stopPropagation) {
							e.preventDefault();
							e.stopPropagation();
						} else {
							return false;
						}
					}
				},

				updateOffsetOnScroll = function () {

					// Update the offset variable when the normal scrollbar is used
					if (!offset.setByScript) {
						offset.x = getOffset("x");
						offset.y = getOffset("y");
					}
					offset.setByScript = false;
				};

			mouseWheelHandler = callback;
			scrollHandler = updateOffsetOnScroll;

			// Safari, Chrome, Opera, IE9+
			if (window.addEventListener) {
				var useCaptureOrOptions = supportsEventListenerPassiveOption()
					? { capture: false, passive: false }
					: false;

				// Standard API
				if ("onwheel" in window) {
					window.addEventListener("wheel", mouseWheelHandler, useCaptureOrOptions);
				}
				// Old browsers
				else if ("onmousewheel" in window) {
					window.addEventListener("mousewheel", mouseWheelHandler, useCaptureOrOptions);
				}
				// Old Firefox
				else {
					window.addEventListener("DOMMouseScroll", mouseWheelHandler, useCaptureOrOptions);
				}

				window.addEventListener("scroll", scrollHandler, useCaptureOrOptions);
			}
			// IE8 and below
			else {
				document.attachEvent("onmousewheel", mouseWheelHandler);
				window.attachEvent("onscroll", scrollHandler);
			}
		},

		unbindEvents = function () {
			if (!mouseWheelHandler && !scrollHandler) return;

			if (window.removeEventListener) {
				var useCaptureOrOptions = supportsEventListenerPassiveOption()
					? { capture: false, passive: false }
					: false;

				// Standard API
				if ("onwheel" in window) {
					window.removeEventListener("wheel", mouseWheelHandler, useCaptureOrOptions);
				}
				// Old browsers
				else if ("onmousewheel" in window) {
					window.removeEventListener("mousewheel", mouseWheelHandler, useCaptureOrOptions);
				}
				// Old Firefox
				else {
					window.removeEventListener("DOMMouseScroll", mouseWheelHandler, useCaptureOrOptions);
				}

				window.removeEventListener("scroll", scrollHandler, useCaptureOrOptions);
			}
			// IE8 and below
			else {
				document.detachEvent("onmousewheel", mouseWheelHandler);
				window.detachEvent("onscroll", scrollHandler);
			}
		},

		deactivateScrolling = function (e) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		};

	// Return a public API
	return {

		// Activate the scrolling switch
		//  An optional callback can be passed in, which will fire at every scroll update
		activate: function (callback) {

			// Set state
			active = true;

			// Bind events if it hasn't been done before
			if (!eventsBound) {
				var offset = { x: 0, y: 0 };
				bindEvents(offset, callback);
				eventsBound = true;
			}

			// Remove event handlers if it was previously deactivated
			if (hasDeactivated) {
				if (window.addEventListener) {
					var useCaptureOrOptions = supportsEventListenerPassiveOption()
						? { capture: true, passive: false }
						: true;
					window.removeEventListener("scroll", deactivateScrolling, useCaptureOrOptions);
				} else {
					window.detachEvent("onscroll", deactivateScrolling);
				}
				hasDeactivated = false;
			}
		},

		deactivate: function () {
			active = false;

			if (eventsBound) {
				unbindEvents();
				eventsBound = false;
			}
		},

		deactivateAllScrolling: function () {

			// Set state
			active = false;
			hasDeactivated = true;

			// Bind event handlers to disable the scroll
			if (window.addEventListener) {
				var useCaptureOrOptions = supportsEventListenerPassiveOption()
					? { capture: true, passive: false }
					: true;
				window.addEventListener("scroll", deactivateScrolling, useCaptureOrOptions);
			} else {
				window.attachEvent("onscroll", deactivateScrolling);
			}
		}
	};
}(window, document));
