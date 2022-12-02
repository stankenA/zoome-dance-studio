//Tabs

var currentTab = 1;
$("#contetn1").show();

$(document).on('click', 'nav.multiTabs>a',
  function () {
    var TabId = $(this).attr('data-trigger');
    $('div#' + TabId + ' ').show();

    console.log("Current Tab: " + TabId);
    currentTab = parseInt(TabId.replace("content", ""));

    $('.tabcontent:not(#' + TabId + ')').hide()

  });

function next() {
  if (currentTab < 5) {
    $(".tabcontent").hide();
    currentTab++;
    $("#content" + (currentTab)).show();
  }
}

function prev() {
  if (currentTab > 1) {
    $(".tabcontent").hide();
    currentTab--;
    $("#content" + (currentTab)).show();
  }
}

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

