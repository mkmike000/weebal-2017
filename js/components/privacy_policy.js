// Imprint Toggle
$('.imprint-button').on('click', function () {

	if ($('#privacy_policy').css('display') === 'none') {
		$('html, body').animate({
			scrollTop: $(window).scrollTop() + 300
		});
	}

	($('#privacy_policy').slideToggle('2000'));
});