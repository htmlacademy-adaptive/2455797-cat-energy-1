let navMenu = document.querySelector('.main-nav__wrapper');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMenu.classList.contains('main-nav__wrapper--close')) {
    navMenu.classList.remove('main-nav__wrapper--close');
    navMenu.classList.add('main-nav__wrapper--open');
  } else {
    navMenu.classList.add('main-nav__wrapper--close');
    navMenu.classList.remove('main-nav__wrapper--open');
  }
});
