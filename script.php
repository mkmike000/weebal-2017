<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
				$('.customer-logos').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
					arrows: false,
					dots: false,
						pauseOnHover: true,
						responsive: [{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
								autoplaySpeed: 300
						}
					}, {
						breakpoint: 520,
						settings: {
							slidesToShow: 1,
							autoplaySpeed: 300
						}
					}]
				});
			});

	$( ".cbs-button" ).click(function() {
  		$( "#contact-form" ).slideToggle( "slow" );
	});
</script>
