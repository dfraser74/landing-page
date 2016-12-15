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
        onScroll(swiper, e) {
          e.stopImmediatePropagation();
        }
      });
    });
  Array
    .from(document.querySelectorAll('.youtube-slide'))
    .forEach(elem => {
      elem.addEventListener('click', e => {
        elem.style.filter = 'none';
        const iframe = e.target.querySelector('iframe');

        if (iframe && iframe.classList.contains('no-select')) {
          iframe.src += '&autoplay=1';
          iframe.classList.remove('no-select');
        }

      });
    });
}());
