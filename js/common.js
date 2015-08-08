var slide1 = $('swiper-slide.theme-1');
var slide2 = $('swiper-slide.theme-2');
var slide3 = $('swiper-slide.theme-3');
var pagination = $('.swiper-pagination-bullet-active');
if (slide1.classList.contains('swiper-slide-active')) {
	pagination.classList.add('theme-1');
}