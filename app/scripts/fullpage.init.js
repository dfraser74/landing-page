(function (fullpage) {

  const sun = new window.Sun();

  fullpage.initialize('#fullpage', {
    anchors: [
      'Play',
      'Arkahold',
      'Botris',
      '1or2',
      'Our Programming Tools',
      'Subscribe'
    ],
    navigationTooltips: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
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

    onLeave() {

      [].forEach.call(document.querySelectorAll('[class*="shake"]'), elem => {
        elem.classList.remove('active');
      });

      [].forEach.call(document.querySelectorAll('[class*="scale"]'), elem => {
        elem.classList.remove('active');
      });

    },

    onSlideLeave(/*anchorLink, index, slideIndex, direction, nextSlideIndex*/) {
      console.log('onSlideLeave');
    },

    afterSlideLoad(/*anchorLink, index, slideAnchor, slideIndex*/) {
      console.log('afterSlideLoad');
    },

    afterRender() {
    },

    afterResize() {
    },

    /**
     * animation text
     * @param anchorLink
     */
    afterLoad(anchorLink, index) {

      if (index === 1) {
        sun.activate();
      } else {
        sun.deactivate();
      }

      const currentSection = getSectionFromAnchorLink(anchorLink);

      [].forEach.call(currentSection.querySelectorAll('[class*="shake"]'), elem => {
        elem.classList.add('active');
      });

      [].forEach.call(currentSection.querySelectorAll('[class*="scale"]'), elem => {
        elem.classList.add('active');
      });

    }

  });

  function getSectionFromAnchorLink(anchorLink) {
    const currentSection = document.querySelector(`[data-anchor="${ anchorLink }"]`);

    if (!currentSection) {
      throw 'currentFunction not find';
    }

    return currentSection;
  }

}(window.fullpage));
