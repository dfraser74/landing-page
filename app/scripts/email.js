import {userEmail, userSubmitButton, userFormSubmit} from './primitives';

loadFormSubmit();

/**
 * @param e
 * @return {void}
 */
function onSubmitUserSubmitForm(e) {
  e.preventDefault();
  submitDataToServer();
}
/**
 * Загрузка данных на сервер
 * @return {void}
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

      return firebase.auth().signOut();
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
 * @return {Promise}
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
/**
 * @return {void}
 */
function loadFormSubmit() {

  if (localStorage._maileSended) {
    disableSubmit();
    userSubmitButton.value = 'Your email is processed';
  } else {
    userFormSubmit.addEventListener('submit', onSubmitUserSubmitForm);
  }

}
