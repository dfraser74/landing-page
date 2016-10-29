(function (fullpage) {
  const sun = new window.Sun(document.querySelector('h1.text-logo'));

  fullpage.initialize('#fullpage', {
    anchors: [
      'Play',
      'Arkahold',
      'Botris',
      '1or2',
      'To Do List',
      'Prosto Diary',
      'Our Programming Tools',
      'Subscribe'
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
    touchSensitivity: 5,
    normalScrollElementTouchThreshold: 5,

    onLeave() {
      Array
        .from(document.querySelectorAll('[class*="shake"]'))
        .forEach(elem => {
          elem.classList.remove('active');
        });
      Array
        .from(document.querySelectorAll('[class*="scale"]'))
        .forEach(elem => {
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
     * @param index
     */
    afterLoad(anchorLink, index) {

      if (index === 1) {
        sun.activate();
      } else {
        sun.deactivate();
      }

      const currentSection = getSectionFromAnchorLink(anchorLink);
      Array
        .from(currentSection.querySelectorAll('[class*="shake"]'))
        .forEach(elem => {
          elem.classList.add('active');
        });
      Array
        .from(currentSection.querySelectorAll('[class*="scale"]'))
        .forEach(elem => {
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
