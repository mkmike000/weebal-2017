// Commitment Dropdown
$('.commit-dropdown').on('click', function () {

	if ($('.about-text').css('display') === 'none') {
		$('html, body').animate({
			scrollTop: $(window).scrollTop() + 150
		});
	}

	($('.about-text').slideToggle('slow'));
});

// $('.title-hover-event, .text-hover-event').hover(function () {
// 	$('.title-hover-event').css('display', 'none');
// 	$('.text-hover-event').css('display', 'none');
// });

