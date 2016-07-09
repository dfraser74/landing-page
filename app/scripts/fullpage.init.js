(function (fullpage) {

  fullpage.initialize('#fullpage', {
    anchors: [
      'Main',
      'Flights',
      'Rental Cars',
      'Hotels',
      'Convenient Tools',
      'Unlimited Benefits',
      'Guarantee',
      'Join Free'
    ],
    navigationTooltips: [
      '',
      '',
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

    touchSensitivity: 10,
    normalScrollElementTouchThreshold: 5,

    onLeave(/*index, nextIndex, direction*/) {
      historyClear();

      [].forEach.call(document.querySelectorAll('[class*="shake"]'), elem => {
        elem.classList.remove('active');
      });

      [].forEach.call(document.querySelectorAll('[class*="scale"]'), elem => {
        elem.classList.remove('active');
      });

    },

    /**
     * animation text
     * @param anchorLink
     * @param index
     */
    afterLoad(anchorLink/*, index*/) {
      historyClear();

      const currentSection = getSectionFromAnchorLink(anchorLink);

      [].forEach.call(currentSection.querySelectorAll('[class*="shake"]'), elem => {
        elem.classList.add('active');
      });

      [].forEach.call(currentSection.querySelectorAll('[class*="scale"]'), elem => {
        elem.classList.add('active');
      });

    },

    afterRender() {
    },

    afterResize() {
    },

    afterSlideLoad(/*anchorLink, index, slideAnchor, slideIndex*/) {
    },

    onSlideLeave(/*anchorLink, index, slideIndex, direction, nextSlideIndex*/) {
    }

  });

  function historyClear() {
    // location.hash = '#';
    // history.go(-history.length);
    // history.replaceState({}, '#');
  }

  function getSectionFromAnchorLink(anchorLink) {
    const currentSection = document.querySelector(`[data-anchor="${ anchorLink }"]`);

    if (!currentSection) {
      throw 'currentFunction not find';
    }

    return currentSection;
  }

}(window.fullpage));
