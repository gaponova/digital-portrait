$(document).ready(function () {
  $(".level-owl-carousel").owlCarousel({
    stagePadding: 100,
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