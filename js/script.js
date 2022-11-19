AOS.init();

hide_on_scroll({
    nav_id: 'demo1Navbar',
    hide_onscroll_mobile: true,
    nav_offset: 256,
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
              slidesTosScroll: 3,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 628,
            settings: {
              arrows: true,
              slidesTosScroll: 2,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesTosScroll: 1,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 360,
            settings: {
              arrows: true,
              slidesTosScroll: 1,
              slidesToShow: 1
            }
          }
        ]
    });
})