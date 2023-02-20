const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navItem = document.querySelectorAll(".nav__item");

/* Open navigation menu */
navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

/* Close navigation menu */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

// Header scroll
const header = document.getElementById("l-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("l-header--scroll");
  } else {
    header.classList.remove("l-header--scroll");
  }
});

// Swiper
const testimonialSwiper = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 1250,
  reset: false,
});

sr.reveal(".home__image", {});
sr.reveal(".home__body", { distance: "20px", delay: 50, interval: 100 });
sr.reveal(".section__header", { distance: "40px", delay: 50, interval: 100 });
sr.reveal(".stats__card", {
  origin: "left",
  distance: "100px",
  delay: 50,
  interval: 100,
});
sr.reveal(".service__card", {
  origin: "left",
  distance: "100px",
  delay: 50,
  interval: 100,
});
sr.reveal(".portfolio__card", {
  origin: "top",
  distance: "100px",
  delay: 50,
  interval: 100,
});
sr.reveal(".contact__item", {
  origin: "bottom",
  distance: "100px",
  delay: 50,
  interval: 100,
});
sr.reveal(".form__group", {
  origin: "bottom",
  distance: "25px",
  delay: 50,
  interval: 100,
});
sr.reveal(".about__body", { distance: "40px", delay: 50, interval: 100 });
sr.reveal(".project", { distance: "40px", delay: 50, interval: 100 });
