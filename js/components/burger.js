
$('.burger, .overlay, .r-nav-item').click(function () {
	$('.burger').toggleClass('clicked');
	$('.overlay').toggleClass('show');
	$('nav').toggleClass('show');
	$('body').toggleClass('overflow');
});