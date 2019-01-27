function initBanner3(){
	if(mobile == true){
		var mySwiper2 = new Swiper ('#banner_type3 .swiper-container', {
			nextButton: '#banner_type3 .swiper-button-next',
			prevButton: '#banner_type3 .swiper-button-prev',
			slidesPerView: 3,
			loop: true,
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
			/* width: 85,
			height: 50, */
			spaceBetween: 20,
			'onImagesReady': function(){
			   $('#banner_type3 .swiper-wrapper').outerHeight($('#banner_type3 .swiper-slide').outerHeight());
			}
		});
	}else{
		var mySwiper2 = new Swiper ('#banner_type3 .swiper-container', {
			nextButton: '#banner_type3 .swiper-button-next',
			prevButton: '#banner_type3 .swiper-button-prev',
			slidesPerView: 6,
			loop: true,
			/*autoplay: 5000,*/
			autoplay: 5000,
			autoplayDisableOnInteraction: false,
			/* width: 85,
			height: 50, */
			spaceBetween: 10
		});
	}
	
}