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
const navContainer = document.querySelector(".nav-container");
const navheight = navContainer.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshhold: 0,
  rootMargin: `-${navheight}px`,
});

navObserver.observe(header);
