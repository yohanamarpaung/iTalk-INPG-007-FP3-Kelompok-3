// navonscroll
hide_on_scroll({
    nav_id: 'demo1Navbar',
    hide_onscroll_mobile: true,
    nav_offset: 256,
});




// newsletter swal
var getEmail = document.getElementById('email');
var getSubject = document.getElementById('subject');
var getMessage = document.getElementById('message');
var btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', function (e) {
  e.preventDefault();
  var setEmail = getEmail.value;
  var setSubject = getSubject.value;
  var setMessage = getMessage.value;

  if((setEmail && setSubject && setMessage) === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Input field can't be empty!"
    });
  } else {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Message sent successfully to ' + setEmail,
      showConfirmButton: false,
      timer: 1500
    })
  }
})