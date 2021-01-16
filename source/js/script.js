var navMain = document.querySelector('.main-nav');
var navQwe = document.querySelector('.page__main-nav');
var navToggle = document.querySelector('.page__main-nav');
//navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
  if (navQwe.classList.contains('page__main-nav--close')) {
    navQwe.classList.remove('page__main-nav--close');
    navQwe.classList.add('page__main-nav--opened');
  }
  else {
    navQwe.classList.add('page__main-nav--close');
    navQwe.classList.remove('page__main-nav--opened');
  }
});
