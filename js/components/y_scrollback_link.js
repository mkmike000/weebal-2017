window.addEventListener("hashchange", function () {
	window.scrollTo(window.scrollX, window.scrollY - 150);
});

// The function actually applying the offset
function offsetAnchor() {
	if (location.hash.length !== 0) {
		window.scrollTo(window.scrollX, window.scrollY - 100);
	}
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[class^="y-scrollback-link"]', function () {
	// Click events are captured before hashchanges. Timeout
	// causes offsetAnchor to be called after the page jump.
	window.setTimeout(function () {
		offsetAnchor();
	}, 0);
});