// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-container");
const logo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  changeLogo();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    changeLogo();
  });
});

const changeLogo = function () {
  if (navbar.classList.contains("active")) {
    logo.src = "./images/logo-light.png";
    logo.style.width = "120px";
  } else {
    logo.src = "./images/logo.png";
  }
};

// STICKY NAV
const header = document.querySelector("header");
const navheight = navbar.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshhold: 0,
  rootMargin: `-${navheight}px`,
});

headerObserver.observe(header);
