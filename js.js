/*$('.sl').slick({
	autoplay: false,
	autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
	speed:1000,
	arrows: false,
	dots:true,
	fade:false,
	pauseOnHover: false,

});*/
if(window.matchMedia('(max-width: 900px)').matches)
{
    $('.sl').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1000,
        arrows: false,
        dots:true,
        fade:false,
        pauseOnHover: false,

    });
} else {
    $('.sl').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed:1000,
        arrows: false,
        dots:true,
        fade:false,
        pauseOnHover: false,

    });
}

$('.side-icon').click(function () {
	$('.side').toggle();

});
$('.side-icon2').click(function () {
    $('.side-2').toggle();

});
$('.li-span11').click(function () {
    $('.sub-1').toggle();

});
$('.li-span12').click(function () {
    $('.sub-2').toggle();

});
/*$('.slider').slick({
    infinite: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed:1000,
    arrows: true,
    dots: false,
    fade:false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1
});*/
