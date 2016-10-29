document.addEventListener('DOMContentLoaded', function () {
  const userFormSubmit = document.querySelector('#userSubmitForm');
  userFormSubmit.addEventListener('submit', onSubmitUserSubmitForm);

  function onSubmitUserSubmitForm(e) {
    e.preventDefault();
    submitDataToServer();
  }

  /**
   * Загрузка данных на сервер
   */
  function submitDataToServer() {
    const userEmail = document.querySelector('#userEmail');

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
        const userSubmitButton = document.querySelector('#userSubmitButton');
        const userEmail = document.querySelector('#userEmail');
        userSubmitButton.value = 'Done';
        userEmail.disabled = userSubmitButton.disabled = true;
        userFormSubmit.removeEventListener('submit', onSubmitUserSubmitForm);
      })
      .catch(error => {
        console.error(error);
      });
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

});
