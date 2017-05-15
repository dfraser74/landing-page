const apiKey = 'AIzaSyAJOWQTAeS9YQKCVu59WHeQk3k4K5rZ2P4';
const databaseURL = 'https://tewst-landing-page.firebaseio.com';

/**
 * Загрузка скрипта Firebase
 * @return {Promise}
 */
export function createFirebaseScriptIfNeed() {
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

export const config = {
  apiKey,
  databaseURL
};
