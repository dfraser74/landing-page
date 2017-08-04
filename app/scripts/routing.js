import fullpage from '../vendors/fullPage/javascript.fullPage';
import {sun, userEmail, subscribeSection, downbuttons, fpSections} from './primitives';

document.body.removeAttribute('loading');

loadFullpage();
bindDownbuttonClick();
/**
 * @return {void}
 */
function loadFullpage() {
  fullpage.initialize('#fullpage', {
    anchors: [
      'Play',
      'Qweeto',
      'Arkahold',
      'Botris',
      '1or2',
      'To Do List',
      'Prosto Diary',
      'Our Programming Tools',
      'About Us',
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
    /**
     * @return {void}
     */
    onLeave() {
      disableUserEmail();

      Array
        .from(document.querySelectorAll('[class*="shake"]'))
        .forEach(elem => {
          elem.classList.remove('active');
        });
    },
    /**
     * animation text
     * @param anchorLink
     * @param index {Number}
     */
    afterLoad(anchorLink, index) {
      const currentFPSection = fpSections[index - 1];
      deactivateDownButtons(document, true);
      deactivateDownButtons(currentFPSection, false);

      if (sun) {

        if (index === 1) {
          sun.activate();
        } else {
          sun.deactivate();
        }

      }

      const currentSection = getSectionFromAnchorLink(anchorLink);
      {
        Array
          .from(currentSection.querySelectorAll('[class*="shake"]'))
          .forEach(elem => {
            elem.classList.add('active');
          });
      }

      {
        const isSubscribe = currentSection === subscribeSection;

        try {

          if (!localStorage._maileSended) {
            disableUserEmail(!isSubscribe);
          }

        } catch (error) {
          console.error(error);
        }
      }
    }
  });
}
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
/**
 *
 * @param document {HTMLDocument}
 * @param hidden {Boolean}
 * @return {void}
 */
function deactivateDownButtons(document, hidden) {
  Array
    .from(downbuttons)
    .forEach(downBtn => {
      downBtn.hidden = hidden;
    });
}
/**
 * @return {void}
 */
function bindDownbuttonClick() {
  Array
    .from(downbuttons)
    .forEach(downBtn => {
      downBtn.addEventListener('click', () => {
        fullpage.moveSectionDown();
      });
    });
}
/**
 *
 * @param disabled {Boolean}
 */
function disableUserEmail(disabled = true) {
  userEmail.disabled = disabled;
}
