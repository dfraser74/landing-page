document.addEventListener('DOMContentLoaded', function () {

  const userFormSubmit = document.querySelector('#userSubmitForm');
  userFormSubmit.addEventListener('submit', () => {

    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#userEmail');

    console.log(userName.value, userEmail.value);

  });

});
