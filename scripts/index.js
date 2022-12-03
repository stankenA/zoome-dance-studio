//Кнопка меню

const menuButton = document.querySelector('.header__hamburger');

menuButton.addEventListener('click', (evt) => {
  evt.target.classList.toggle('header__hamburger_active');
})

//Табы

const childrenSchedule = document.querySelector('.schedule__block_children');
const childrenWeekdays = childrenSchedule.querySelectorAll('.schedule__weekday');
const allSlidesChildren = childrenSchedule.querySelector('.schedule__slides_children');
const childrenBtnPrev = childrenSchedule.querySelector('.schedule__slide-btn_prev');
const childrenBtnNext = childrenSchedule.querySelector('.schedule__slide-btn_next');

const adultSchedule = document.querySelector('.schedule__block_adult');
const adultWeekdays = adultSchedule.querySelectorAll('.schedule__weekday');
const allSlidesAdult = adultSchedule.querySelector('.schedule__slides_adults');
const adultBtnPrev = adultSchedule.querySelector('.schedule__slide-btn_prev');
const adultBtnNext = adultSchedule.querySelector('.schedule__slide-btn_next');

//Функции открытия/закрытия слайдов

function openSlide(slide) {
  slide.classList.add('schedule__slide_active');
};

function closeSlide(slide) {
  slide.classList.remove('schedule__slide_active');
}

//Присваивание табу активного состояния при клике на него и открытие соответствующего ему слайда

childrenWeekdays.forEach((item) => {
  item.addEventListener('click', (evt) => {
    childrenSchedule.querySelector('.schedule__weekday_active').classList.remove('schedule__weekday_active');
    evt.target.classList.add('schedule__weekday_active');
    closeSlide(allSlidesChildren.querySelector('.schedule__slide_active'));
    openSlide(allSlidesChildren.querySelector(`#${evt.target.id}`));
  });
});

adultWeekdays.forEach((item) => {
  item.addEventListener('click', (evt) => {
    adultSchedule.querySelector('.schedule__weekday_active').classList.remove('schedule__weekday_active');
    evt.target.classList.add('schedule__weekday_active');
    closeSlide(allSlidesAdult.querySelector('.schedule__slide_active'));
    openSlide(allSlidesAdult.querySelector(`#${evt.target.id}`));
  });
});

//Функции обработки табов при клике на кнопки prev/next

function handleTabsPrev(block, humanString) {
  const activeTab = block.querySelector('.schedule__weekday_active');
  activeTab.classList.remove('schedule__weekday_active');
  let currentTabIdString = activeTab.id + '';
  let currentTabIdNumber = parseInt((currentTabIdString.split('_').pop()), 10);
  if (currentTabIdNumber > 1) {
    block.querySelector(`#${humanString}_${currentTabIdNumber - 1}`).classList.add('schedule__weekday_active');
  } else {
    block.querySelector(`#${humanString}_7`).classList.add('schedule__weekday_active');
  }
};

function handleTabsNext(block, humanString) {
  const activeTab = block.querySelector('.schedule__weekday_active');
  activeTab.classList.remove('schedule__weekday_active');
  let currentTabIdString = activeTab.id + '';
  let currentTabIdNumber = parseInt((currentTabIdString.split('_').pop()), 10);
  if (currentTabIdNumber < 7) {
    block.querySelector(`#${humanString}_${currentTabIdNumber + 1}`).classList.add('schedule__weekday_active');
  } else {
    block.querySelector(`#${humanString}_1`).classList.add('schedule__weekday_active');
  }
};

//Функции обработки слайдов при клике на кнопки prev/next

function handleSlidesPrev(block, allSlides, humanString) {
  const activeSlide = block.querySelector('.schedule__slide_active');
  closeSlide(allSlides.querySelector('.schedule__slide_active'));
  let currentIdString = activeSlide.id + '';
  let currentIdNumber = parseInt((currentIdString.split('_').pop()), 10);
  if (currentIdNumber > 1) {
    openSlide(allSlides.querySelector(`#${humanString}_${currentIdNumber - 1}`));
  } else {
    openSlide(allSlides.querySelector(`#${humanString}_7`));
  }
};

function handleSlidesNext(block, allSlides, humanString) {
  const activeSlide = block.querySelector('.schedule__slide_active');
  closeSlide(allSlides.querySelector('.schedule__slide_active'));
  let currentIdString = activeSlide.id + '';
  let currentIdNumber = parseInt((currentIdString.split('_').pop()), 10);
  if (currentIdNumber < 7) {
    openSlide(allSlides.querySelector(`#${humanString}_${currentIdNumber + 1}`));
  } else {
    openSlide(allSlides.querySelector(`#${humanString}_1`));
  }
}

//Слушатели событий на кнопки

childrenBtnPrev.addEventListener('click', () => {
  handleTabsPrev(childrenSchedule, 'children');
  handleSlidesPrev(childrenSchedule, allSlidesChildren, 'children');
});

childrenBtnNext.addEventListener('click', () => {
  handleTabsNext(childrenSchedule, 'children');
  handleSlidesNext(childrenSchedule, allSlidesChildren, 'children');
});

adultBtnPrev.addEventListener('click', () => {
  handleTabsPrev(adultSchedule, 'adults');
  handleSlidesPrev(adultSchedule, allSlidesAdult, 'adults');
});

adultBtnNext.addEventListener('click', () => {
  handleTabsNext(adultSchedule, 'adults');
  handleSlidesNext(adultSchedule, allSlidesAdult, 'adults');
});

//Свайперы

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

