(function () {
  'use strict';

  Array
    .from(document.querySelectorAll('.youtube-slide'))
    .forEach(elem => {
      elem.onclick = (e) => {
        elem.style.filter = 'none';
        const iframe = e.target.querySelector('iframe');

        if (iframe && iframe.classList.contains('no-select')) {
          iframe.src += '&autoplay=1';
          iframe.classList.remove('no-select');
        }

      };
    });

  Array
    .from(document.querySelectorAll('.swiper-container'))
    .forEach(swiperContainer => {
      new Swiper(swiperContainer, {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        loop: false,
        grabCursor: true
      });
    });

}());
