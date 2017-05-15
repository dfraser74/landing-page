import Swiper from '../vendors/swiper/swiper.min.js';
import {swiperContainers} from './primitives';

Array
  .from(swiperContainers)
  .forEach(swiperContainer => {
    new Swiper(swiperContainer, {
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationType: 'progress',
      scrollbarHide: true,
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 8,
      grabCursor: true,
      mousewheelControl: true,
      preloadImages: false,
      lazyLoading: true,
      keyboardControl: true,
      /**
       *
       * @param swiper
       * @param e {Event}
       */
      onScroll(swiper, e) {
        e.stopImmediatePropagation();
      },
      /**
       *
       * @param swiper
       * @param slide {HTMLElement}
       */
      onLazyImageReady(swiper, slide) {
        const loadingElem = slide.querySelector('.loading');

        if (loadingElem) {
          loadingElem.parentElement.removeChild(loadingElem);
        }

      }
    });
  });
