<pages>

  <style type="text/scss">
    @import "../vendors/fullPage/javascript.fullPage";

    #main {
      background: url('../images/background.png');
    }
  </style>

  <main id="main">
    <yield></yield>
  </main>

  <script>
    import fullpage from '../vendors/fullPage/javascript.fullPage';

    /**
     *
     * @param anchorLink
     * @return {Element}
     */
    function getSectionFromAnchorLink(anchorLink) {
      const currentSection = document.querySelector(`[data-anchor="${ anchorLink }"]`);

      if (!currentSection) {
        throw 'currentFunction not find';
      }

      return currentSection;
    }

    this.on('mount', () => {
      const pageValues = Object.values(this.tags.page);
      const anchors = pageValues.map(tag => tag.opts.anchor);
      const tooltips = pageValues.map(tag => tag.opts.tooltip);

      fullpage.initialize('#main', {
        anchors: anchors,
        navigationTooltips: tooltips,
        menu: '#menu',
        scrollingSpeed: 800,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 900,
        easingcss3: 'ease-in-out',
        continuousVertical: false,
        css3: true,
        keyboardScrolling: true,
        navigation: true,
        lockAnchors: true,
        animateAnchor: true,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        /**
         * @return {void}
         */
        onLeave() {

        },
        /**
         * animation text
         * @param anchorLink
         * @param index {Number}
         */
        afterLoad(anchorLink, index) {
        }
      });

      const bullets = document.getElementById('fp-nav');
      this.root.appendChild(bullets)
    })
  </script>

</pages>
