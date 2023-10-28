import "../scss/style.scss";
import * as functions from "./files/functions.js";

functions.isWebp();

document.addEventListener("click", e => {
  const targetElement = e.target;

  if (targetElement.closest('.button__menu')) {
    document.documentElement.classList.toggle('menu-open');
  }

  const planElement = targetElement.closest('.plan');

  if (planElement) {
      let plansArray = Array.from(document.getElementsByClassName('plan'));

      plansArray.forEach(element => {
        if (element !== targetElement) {
          element.classList.remove('selected-plan');
          planElement.classList.add('selected-plan');
        }
      });
    }

  if (targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ?
      document.documentElement.classList.remove('menu-open') : null;

    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - (headerHeight + 10),
        behavior: "smooth"
      })
    }
  }

  e.preventDefault();
})

new Swiper('.slider-reviews__body', {
  observer: true,
  observeParents: true,
  loop: false,
  loopAdditionalSlides: 5,
  slidesPerView: 3,
  spaceBetween: 50,
  speed: 800,
  preloadImages: false,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: '.slider-reviews__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.slider-reviews-button-next',
    prevEl: '.slider-reviews-button-prev',
  },
});