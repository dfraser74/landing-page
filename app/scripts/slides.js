(function () {
  'use strict';

  Array.from(document.querySelectorAll('.iframe-container'), elem => {
    elem.onclick = (e) => {
      const iframe = e.target.querySelector('iframe');

      if (iframe) {
        iframe.classList.remove('no-select');
      }

    };
  });

  Array.from(document.querySelectorAll('.swiper-container'), swiperContainer => {
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
