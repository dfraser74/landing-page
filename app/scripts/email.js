import {userEmail, userSubmitButton, userFormSubmit} from './primitives';
import {createFirebaseScriptIfNeed, config} from './firebase_script';

loadFormSubmit();

/**
 * @param e {Event}
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
 * @return {void}
 */
function disableSubmit() {
  userEmail.disabled = userSubmitButton.disabled = true;
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
