 // Navigation Height Increaser.
 window.onscroll = function () {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".navbar").addClass("resize-navbar");
		$("#main-logo").addClass("resize-logo");
		$(".nav-link").addClass("resize-nav-link");
		$(".burger").addClass("resize-burger");
	} else {
		$(".navbar").removeClass("resize-navbar");
		$("#main-logo").removeClass("resize-logo");
		$(".nav-link").removeClass("resize-nav-link");
		$(".burger").removeClass("resize-burger");
	}
};