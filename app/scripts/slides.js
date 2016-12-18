(function () {
  'use strict';

  Array
    .from(document.querySelectorAll('.swiper-container'))
    .forEach(swiperContainer => {
      new Swiper(swiperContainer, {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        scrollbarHide: true,
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        direction: 'horizontal',
        mousewheelControl: true,
        preloadImages: false,
        lazyLoading: true,
        keyboardControl: true,
        onScroll(swiper, e) {
          e.stopImmediatePropagation();
        },
        onClick(swiper, e) {
          const elem = swiper.clickedSlide;

          if (elem.classList.contains('youtube-slide')) {
            elem.style.filter = 'none';
            const iframe = e.target.querySelector('iframe');

            if (iframe && iframe.classList.contains('no-select')) {
              iframe.src += '&autoplay=1';
              iframe.classList.remove('no-select');
            }
          }

        }
      });
    });

}());
