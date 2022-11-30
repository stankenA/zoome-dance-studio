var swiper = new Swiper(".teachers__swiper", {
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 30,
  eredSlides: true,
  navigation: {
    nextEl: ".teachers__slide-button-next",
    prevEl: ".teachers__slide-button-prev",
  },
});

var swiper = new Swiper(".feedback__swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".feedback__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".feedback__slide-button-next",
    prevEl: ".feedback__slide-button-prev",
  },
});
