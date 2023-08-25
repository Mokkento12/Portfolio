new WOW().init();
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 1000,
  pagination: {
    el: ".projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet-active",
    clickable: true,
  },
});
