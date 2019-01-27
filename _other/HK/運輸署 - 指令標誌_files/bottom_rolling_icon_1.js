function initBanner1(){
	if(mobile == true){
		var mySwiper = new Swiper ('#banner_type1 .swiper-container', {
			nextButton: '#banner_type1 .swiper-button-next',
			prevButton: '#banner_type1 .swiper-button-prev',
			slidesPerView: 2,
			loop: true,
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
			loopAdditionalSlides: 6,
			spaceBetween: 20,
			'onImagesReady': function(){
			   $('#banner_type1 .swiper-wrapper').outerHeight($('#banner_type1 .swiper-slide').outerHeight());
			}
		});
	}else{
		var mySwiper = new Swiper ('#banner_type1 .swiper-container', {
			nextButton: '#banner_type1 .swiper-button-next',
			prevButton: '#banner_type1 .swiper-button-prev',
			/* width: 140,
			height: 65, */
			slidesPerView: 6,
			loop: true,
			/*autoplay: 5000,*/
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
			loopAdditionalSlides: 6,
			spaceBetween: 10
		});
	}
	
}