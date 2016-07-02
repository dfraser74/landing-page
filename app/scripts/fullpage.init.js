fullpage.initialize('#fullpage', {
  anchors: ['xxx1', 'xxx2', 'xxx3', 'xxx4', 'xxx5', 'xxx6', 'xxx7', 'xxx8'],
  navigationTooltips: ['__1', '__2', '__3', '__4', '__5', '__6', '__7', '__8'],
  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
  menu: '#menu',
  scrollingSpeed: 600,
  easingcss3: 'ease-in-out',
  continuousVertical: false,
  css3: true,
  keyboardScrolling: true,
  showActiveTooltip: false,
  navigation: true,
  lockAnchors: true,
  animateAnchor: true,
  recordHistory: true,

  onLeave(index, nextIndex, direction) {
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
  afterLoad(anchorLink, index) {
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
//      debugger;
  },

  afterResize() {
//      debugger;
  },
  afterSlideLoad(anchorLink, index, slideAnchor, slideIndex){
//      debugger;
  },
  onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex){
//      debugger;
  }
});

function historyClear() {
  // location.hash = '#';
  history.go(-history.length);
  history.replaceState({}, '#');
}

function getSectionFromAnchorLink(anchorLink) {
  const currentSection = document.querySelector(`[data-anchor="${ anchorLink }"]`);

  return currentSection;
}
