(function () {
  let sun = null;
  let userFormSubmit = null;
  let userSubmitButton = null;
  let userEmail = null;
  document.body.removeAttribute('loading');

  loadSun();
  loadFullpage();
  loadFormSubmit();

  function loadSun() {
    sun = new window.Sun(document.querySelector('h1.text-logo'));
  }

  function loadFormSubmit() {
    userFormSubmit = document.querySelector('#userSubmitForm');
    userSubmitButton = document.querySelector('#userSubmitButton');
    userEmail = document.querySelector('#userEmail');

    if (localStorage._maileSended) {
      disableSubmit();
      userSubmitButton.value = 'Your email is processed';
    } else {
      userFormSubmit.addEventListener('submit', onSubmitUserSubmitForm);
    }

  }

  function loadFullpage() {
    window.fullpage.initialize('#fullpage', {
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
      },
      /**
       * animation text
       * @param anchorLink
       * @param index {Number}
       */
      afterLoad(anchorLink, index) {
        deactivateDownButtons(document, true);
        deactivateDownButtons(document.querySelectorAll('.fp-section')[index - 1], false);

        if (sun) {

          if (index === 1) {
            sun.activate();
          } else {
            sun.deactivate();
          }

        }

        const currentSection = getSectionFromAnchorLink(anchorLink);
        Array
          .from(currentSection.querySelectorAll('[class*="shake"]'))
          .forEach(elem => {
            elem.classList.add('active');
          });
      }
    });
  }

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
   */
  function deactivateDownButtons(document, hidden) {
    Array
      .from(document.querySelectorAll('[downbutton]'))
      .forEach(downBtn => {
        downBtn.hidden = hidden;
      });
  }

  function onSubmitUserSubmitForm(e) {
    e.preventDefault();
    submitDataToServer();
  }

  /**
   * Загрузка данных на сервер
   */
  function submitDataToServer() {

    if (!(userEmail && userEmail.value && userEmail.value.length)) {
      return;
    }

    createFirebaseScriptIfNeed()
      .then(() => {
        const apiKey = 'AIzaSyAJOWQTAeS9YQKCVu59WHeQk3k4K5rZ2P4';
        const databaseURL = 'https://tewst-landing-page.firebaseio.com';
        const config = {
          apiKey,
          databaseURL
        };
        const firebase = window.firebase;
        firebase.initializeApp(config);
        firebase.database().ref('/users').push({email: userEmail.value});
        firebase.auth().signOut();
      })
      .then(() => {
        userSubmitButton.value = 'Thank You!';
        disableSubmit();
        localStorage._maileSended = 'sended';
        userFormSubmit.removeEventListener('submit', onSubmitUserSubmitForm);
      })
      .catch(error => {
        console.error(error);
      });
  }

  /**
   * Блокирование кнопок отправки
   */
  function disableSubmit() {
    userEmail.disabled = userSubmitButton.disabled = true;
  }

  /**
   * Загрузка скрипта Firebase
   * @returns {Promise}
   */
  function createFirebaseScriptIfNeed() {
    const path = 'https://www.gstatic.com/firebasejs/3.1.0/firebase.js';

    return new Promise((resolve, reject) => {
      const scriptExist = document.querySelector('script#firebase');

      if (scriptExist) {
        return reject();
      }

      const firebaseScript = document.createElement('script');
      firebaseScript.src = path;
      firebaseScript.id = 'firebase';
      document.body.appendChild(firebaseScript);
      firebaseScript.onerror = () => {
        return reject();
      };
      firebaseScript.onload = () => {
        return resolve();
      };
    });
  }

}());
