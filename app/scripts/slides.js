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
        }
      });
    });

}());
