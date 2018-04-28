$('.sl').slick({
	autoplay: false,
	autoplaySpeed: 4000,
	speed:1000,
	arrows: false,
	dots:true,
	fade:false,
	pauseOnHover: false,
});

$('.side-icon').click(function () {
	$('.home').toggle();

});
