import "../scss/style.scss";
import * as functions from "./files/functions.js";

functions.isWebp();

document.addEventListener("click", e => {
  const targetElement = e.target;

  if (targetElement.closest('.button__menu')) {
    document.documentElement.classList.toggle('menu-open');
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