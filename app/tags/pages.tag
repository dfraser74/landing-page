<pages>

  <style type="text/scss">
    @import "../vendors/fullPage/javascript.fullPage";
    @import "../styles/colors";
    @import "../styles/mixins";

    #main {
      background: url('../images/background.png');
    }

    #fp-nav {

      &.right {
        right: 8px !important;
      }

      a > span {
        @include ball-size;
        @include bullet-border($white-color-light);
        background: hsl(0, 0, 0);
        opacity: .2;

        &:hover {
          opacity: 1;
        }
      }

      a.active > span {
        margin: 0 -2px !important;
        @include bullet-border();
        opacity: 1;
      }

    }

  </style>

  <main id="main">
    <yield/>
  </main>

  <script>
    import fullpage from '../vendors/fullPage/javascript.fullPage';

    this.on('mount', () => {
      const pageValues = Object.values(this.tags.page);
      const anchors = pageValues.map(tag => tag.opts.anchor);
      const tooltips = pageValues.map(tag => tag.opts.tooltip);

      fullpage.initialize('#main', {
        // nav
        menu: '#menu',
        lockAnchors: true,
        anchors: anchors,
        navigation: true,
        navigationTooltips: tooltips,
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: false,

        // scroll
        css3: true,
        easingcss3: 'ease-in-out',
        easing: 'easeInOutCubic',
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 900,
        scrollingSpeed: 800,
        continuousVertical: false,
        continuousHorizontal: false,
        interlockedSlides: false,
        dragAndMove: false,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 3,

        // access
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        // design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        parallax: true,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        lazyLoading: true,
      });

      const bullets = document.getElementById('fp-nav');
      this.root.appendChild(bullets)
    })
  </script>

</pages>
