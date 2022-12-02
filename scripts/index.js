//Табы

const childrenSchedule = document.querySelector('.schedule__block_children');
const childrenWeekdays = childrenSchedule.querySelectorAll('.schedule__weekday');
const allSlidesChildren = childrenSchedule.querySelector('.schedule__slides');
const adultSchedule = document.querySelector('.schedule__block_adult');
const adultWeekdays = adultSchedule.querySelectorAll('.schedule__weekday');

function openSlide(slide) {
  slide.classList.add('schedule__slide_active');
};

function closeSlide(slide) {
  slide.classList.remove('schedule__slide_active');
}

childrenWeekdays.forEach((item) => {
  item.addEventListener('click', (evt) => {
    childrenSchedule.querySelector('.schedule__weekday_active').classList.remove('schedule__weekday_active');
    evt.target.classList.add('schedule__weekday_active');
    closeSlide(allSlidesChildren.querySelector('.schedule__slide_active'));
    openSlide(allSlidesChildren.querySelector(`#${evt.target.id}`));
  });
});

const childrenBtnPrev = childrenSchedule.querySelector('.schedule__slide-btn_prev');
const childrenBtnNext = childrenSchedule.querySelector('.schedule__slide-btn_next');

childrenBtnPrev.addEventListener('click', () => {
  childrenSchedule.querySelector('.schedule__weekday_active').classList.remove('schedule__weekday_active');
  console.log(childrenSchedule.querySelector('.schedule__weekday').previousSibling);
});

// adultWeekdays.forEach((item) => {
//   item.addEventListener('click', (evt) => {
//     adultSchedule.querySelector('.schedule__weekday_active').classList.remove('schedule__weekday_active');
//     evt.target.classList.add('schedule__weekday_active');
//   });
// });

//Swipers

var swiper = new Swiper(".teachers__swiper", {
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 60,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: ".teachers__slide-button_next",
    prevEl: ".teachers__slide-button_prev",
  },
});

var swiper = new Swiper(".feedback__swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  grabCursor: true,
  pagination: {
    el: ".feedback__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".feedback__slide-btn_next",
    prevEl: ".feedback__slide-btn_prev",
  },
});

