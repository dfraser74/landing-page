document.addEventListener('DOMContentLoaded', function () {

  const userFormSubmit = document.querySelector('#userSubmitForm');
  userFormSubmit.addEventListener('submit', () => {

    var userName = document.querySelector('#userName');
    var userEmail = document.querySelector('#userEmail');

    console.log(userName.value, userEmail.value);

  });
  
});
