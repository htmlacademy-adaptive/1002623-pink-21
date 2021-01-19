var navMain = document.querySelector('.main-nav');
var navQwe = document.querySelector('.page__main-nav');
var navToggle = document.querySelector('.page__main-nav');
var navMain1 = document.querySelector('.page__body');
var navMain2 = document.querySelector('.page-header__logo-and-button');

//navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }

  if (navQwe.classList.contains('page__main-nav--close')) {
    navQwe.classList.remove('page__main-nav--close');
    navQwe.classList.add('page__main-nav--opened');
  } else {
    navQwe.classList.add('page__main-nav--close');
    navQwe.classList.remove('page__main-nav--opened');
  }

if (navMain1.classList.contains('page__body-bg-position')) {
  navMain1.classList.remove('page__body-bg-position');
  navMain1.classList.add('main-nav--opened');
}
else {
  navMain1.classList.add('page__body-bg-position');
  navMain1.classList.remove('main-nav--opened');
}


if (navMain2.classList.contains('bg-color-header')) {
  navMain2.classList.remove('bg-color-header');
  navMain2.classList.add('main-nav--opened');
}
else {
  navMain2.classList.add('bg-color-header');
  navMain2.classList.remove('main-nav--opened');
}
});
