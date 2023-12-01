// Primary Products Hover Animation
function productOpenView(hoverObject, changeObject, cssPropertyIn, cssValueIn, cssPropertyOut, cssValueOut, changeBgClass, bgImage) {
	$(hoverObject)
		.mouseover(function () {
			$(changeObject).css(cssPropertyIn, cssValueIn);
			$(changeBgClass).removeClass(bgImage);
		}).mouseout(function () {
			$(changeObject).css(cssPropertyOut, cssValueOut);
			$(changeBgClass).addClass(bgImage);
		});
}

productOpenView('.cbd', '.cbd p', 'color', '#fff', 'color', 'rgba(0,0,0,0)');
productOpenView('.hemp', '.hemp p', 'color', '#fff', 'color', 'rgba(0,0,0,0)');
productOpenView('.thc', '.thc p', 'color', '#fff', 'color', 'rgba(0,0,0,0)');