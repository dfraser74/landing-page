import {userEmail, userSubmitButton, userFormSubmit} from './primitives';
import {createFirebaseScriptIfNeed, config} from './firebase_script';

/**
 * @param e {Event}
 * @return {void}
 */
const onSubmitUserSubmitForm = (e) => {
  e.preventDefault();
  submitDataToServer();
};
/**
 * Загрузка данных на сервер
 * @return {void}
 */
const submitDataToServer = () => {

  if (!(userEmail && userEmail.value && userEmail.value.length)) {
    return;
  }

  createFirebaseScriptIfNeed().then(firebase => {
    firebase.initializeApp(config);
    firebase.database().ref('/users').push({email: userEmail.value});

    return firebase.auth().signOut();
  }).then(() => {
    userSubmitButton.value = 'Thank You!';
    disableSubmit();
    localStorage._mailSended = 'sended';
    userFormSubmit.removeEventListener('submit', onSubmitUserSubmitForm);
  }).catch(error => {
    console.error(error);
  });
};
/**
 * Блокирование кнопок отправки
 * @return {void}
 */
const disableSubmit = () => {
  userEmail.disabled = userSubmitButton.disabled = true;
};
/**
 * @return {void}
 */
const loadFormSubmit = () => {

  if (localStorage._mailSended) {
    disableSubmit();
    userSubmitButton.value = 'Your email is processed';
  } else {
    userFormSubmit.addEventListener('submit', onSubmitUserSubmitForm);
  }

};

loadFormSubmit();
