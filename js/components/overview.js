// Overview Hover Animation
function innerColorChange(hoverObject, changeObject, cssPropertyIn, cssValueIn, cssPropertyOut, cssValueOut, changeBgClass, bgImage) {
	$(hoverObject)
		.mouseover(function () {
			$(changeObject).css(cssPropertyIn, cssValueIn);
			$(changeBgClass).removeClass(bgImage);
		}).mouseout(function () {
			$(changeObject).css(cssPropertyOut, cssValueOut);
			$(changeBgClass).addClass(bgImage);
		});
}

// TEXT	
innerColorChange(
	'.award', '.award h1', 'color', '#133100',
	'color', '#ffffff',
	'.award', 'one-bg'
);

innerColorChange(
	'.interest', '.interest h1', 'color', '#133100',
	'color', '#ffffff',
	'.interest', 'three-bg'
);

innerColorChange(
	'.medal', '.medal h1', 'color', '#133100',
	'color', '#ffffff',
	'.medal', 'four-bg'
);

innerColorChange(
	'.leaf', '.leaf h1', 'color', '#133100',
	'color', '#ffffff',
	'.leaf', 'five-bg'
);

innerColorChange(
	'.expand', '.expand h1', 'color', '#133100',
	'color', '#ffffff',
	'.expand', 'six-bg'
);

innerColorChange(
	'.conveyor', '.conveyor h1', 'color', '#133100',
	'color', '#ffffff',
	'.conveyor', 'seven-bg'
);

// Overview Hover Animation
function innerTextChange(hoverObject, changeObject, cssPropertyIn, cssValueIn, cssPropertyOut, cssValueOut) {
	$(hoverObject)
		.mouseover(function () {
			$(changeObject).css(cssPropertyIn, cssValueIn);
		}).mouseout(function () {
			$(changeObject).css(cssPropertyOut, cssValueOut);
		});
}

innerTextChange(
	'.award', '.award p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

innerTextChange(
	'.interest', '.interest p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

innerTextChange(
	'.medal', '.medal p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

innerTextChange(
	'.leaf', '.leaf p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

innerTextChange(
	'.expand', '.expand p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

innerTextChange(
	'.conveyor', '.conveyor p', 'color', '#133100',
	'color', 'rgba(0,0,0,0)'
);

// SVG ICONS
innerColorChange('.award', '.award-svg', 'fill', '#133100', 'fill', '#fff');
innerColorChange('.interest', '.save-svg', 'fill', '#133100', 'fill', '#fff');
innerColorChange('.medal', '.medal-svg', 'fill', '#133100', 'fill', '#fff');

innerColorChange('.leaf', '.leaf-svg', 'fill', '#133100', 'fill', '#fff');
innerColorChange('.expand', '.expand-svg', 'fill', '#133100', 'fill', '#fff');
innerColorChange('.conveyor', '.conveyor-svg', 'fill', '#133100', 'fill', '#fff');