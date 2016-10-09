(function () {
  'use strict';

  [].forEach.call(document.querySelectorAll('.iframe-container'), elem => {
    elem.onclick = (e) => {
      const iframe = e.target.querySelector('iframe');
      if (iframe) {
        iframe.classList.remove('no-select');
      }
    };
  });

  new Swiper('.section1 .swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: false,
    grabCursor: true
  });

// swiper 1
  new Swiper('.section2 .swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true
  });

  new Swiper('.section3 .swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true
  });

  new Swiper('.section4 .swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true
  });

  new Swiper('.section5 .swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: true
  });

}());
