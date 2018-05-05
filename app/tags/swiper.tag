<swiper class="swiper-container">

  <style type="text/scss">
    @import "../styles/colors";

    $myBackground: url(../images/background.png);
    $margin-swiper: 24px;
    $swiper-font-size: 18px;

    :scope {
      display: block;
      height: inherit;
    }

    .full-image-cover {
      margin: 0;
      object-fit: contain;
      width: 100%;
      height: 100%;
      max-height: -moz-max-content;
      max-height: -webkit-fill-available;
      max-height: fill-available;
    }
  </style>

  <div class="swiper-wrapper">
    <div class="swiper-slide" each="{val in opts.data}">
      <virtual if="{val.photo}">
        <!-- TODO: need LAZY-->
        <!--<img data-src="{val.photo}"-->
             <!--alt=""-->
             <!--class="full-image-cover scale-up swiper-lazy"/>-->
        <!--<div class="swiper-lazy-preloader"></div>-->
        <img src="{val.photo}"
             alt=""
             class="full-image-cover"/>
      </virtual>
      <virtual if="{val.youtube}">
        <youtube url="{val.youtube}"/>
      </virtual>
    </div>
  </div>
  <div class="swiper-pagination"></div>

  <script>
    import "../../node_modules/swiper/dist/css/swiper.css";
    import Swiper from '../../node_modules/swiper/dist/js/swiper.min';

    this.on('mount', () => {
      new Swiper(this.root, {
        speed: 400,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          clickable: true,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        grabCursor: true,
        mousewheel: true,
        // TODO: need lazy
        // preloadImages: false,
        // lazy: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        /**
         *
         * @param swiper
         * @param e {Event}
         */
        onScroll(swiper, e) {
          e.stopImmediatePropagation();
        }
      });
    });

  </script>

</swiper>
