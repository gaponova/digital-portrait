$(document).ready(function () {
  $(".level-owl-carousel").owlCarousel({
    items: 4,
    margin: 60,
    loop: true,
    autoWidth: true,
    stagePadding: 100,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
    dots: false,
    center: true
  });

  $(".reviews-owl-carousel").owlCarousel({
   items: 1,
   autoHeight:true,
   loop: true,
    nav: true,
    autoplayTimeout: 5000,
    navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
    dots: true,
  });

  $(".homework1-owl-carousel").owlCarousel({
    items: 4,
    margin: 60,
    loop: true,
    autoWidth: true,
    stagePadding: 100,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
    dots: false,
    center: true
  });
  
});