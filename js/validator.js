(function () {
  'use strict';

  let emailSignUpListener = document.getElementById('email');
  let getSubject = document.getElementById('subject');
  let getMessages = document.getElementById('message');
  emailSignUpListener.onkeyup = (e) => {
    let validateEmail = emailSignUpListener.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let invalidComp = emailSignUpListener.nextElementSibling;

    let message = validateEmail ? '' : 'Email not valid!';
    if (message) {
      emailSignUpListener.setCustomValidity(message);
      invalidComp.innerHTML = message;
    } else {
      emailSignUpListener.setCustomValidity('');
      invalidComp.innerHTML = '';
    }
  };

  const forms = document.querySelectorAll('.subscribe-form');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add('was-validated');

        } else {
          const email = emailSignUpListener.value;
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Message sent successfully to ' + email,
            showConfirmButton: false,
            timer: 1500,
          });
          emailSignUpListener.value = '';
          getSubject.value = '';
          getMessages.value = '';
          form.classList.remove('was-validated');
        }
      },
      false
    );
  });
})();