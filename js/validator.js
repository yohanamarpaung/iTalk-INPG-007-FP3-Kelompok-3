(function () {
  'use strict';

  let emailSignUpListener = document.getElementById('email');
  emailSignUpListener.onkeyup = (e) => {
    let validateEmail = emailSignUpListener.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    let invalidComp = emailSignUpListener.nextElementSibling;
    console.log(invalidComp);

    let message = validateEmail ? '' : 'Email not valid!';
    if (message) {
      emailSignUpListener.setCustomValidity(message);
      invalidComp.innerHTML = message;
    } else {
      emailSignUpListener.setCustomValidity('');
      invalidComp.innerHTML = '';
    }
  };

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.subscribe-form');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
        } else {
          const email = emailSignUpListener.value;
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Message sent successfully to ' + email,
            showConfirmButton: false,
            timer: 1500,
          });
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
