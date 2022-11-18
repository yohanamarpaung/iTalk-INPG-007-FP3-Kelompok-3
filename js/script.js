AOS.init();

// navonscroll
hide_on_scroll({
    nav_id: 'demo1Navbar',
    hide_onscroll_mobile: true,
    nav_offset: 256,
});

// slider
$(document).ready(function() {
    $("#read-more").click((d)=>{
      let currentVal = $(d.currentTarget).html() == "Read More" ? "Read Less" : "Read More"
      $(d.currentTarget).html(currentVal)
    })

    $('.center').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        mobileFirst: true,
        slidesTosScroll: 3,
        infinite: true,
        prevArrow: '<i class="fa-solid fa-angle-left left-arrow">',
        nextArrow: '<i class="fa-solid fa-angle-right right-arrow">',
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              // centerMode: true,
              // centerPadding: '40px',
              slidesTosScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 628,
            settings: {
              arrows: true,
              // centerMode: true,
              // centerPadding: '40px',
              slidesTosScroll: 2,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              // centerMode: true,
              // centerPadding: '40px',
              slidesTosScroll: 1,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 360,
            settings: {
              arrows: false,
              // centerMode: true,
              // centerPadding: '40px',
              slidesTosScroll: 1,
              slidesToShow: 1
            }
          }
        ]
    });
})

// newsletter swal
// var getEmail = document.getElementById('email');
// var getSubject = document.getElementById('subject');
// var getMessage = document.getElementById('message');
// var btnSend = document.getElementById('btnSend');

// btnSend.addEventListener('click', function (e) {
//   e.preventDefault();
//   var setEmail = getEmail.value;
//   var setSubject = getSubject.value;
//   var setMessage = getMessage.value;

//   if((setEmail && setSubject && setMessage) === '') {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: "Input field can't be empty!"
//     });
//   } else {
//     Swal.fire({
//       position: 'top-center',
//       icon: 'success',
//       title: 'Message sent successfully to ' + setEmail,
//       showConfirmButton: false,
//       timer: 1500
//     })
//     getEmail.value = ''
//     getSubject.value = ''
//     getMessage.value = ''
//   }
// })