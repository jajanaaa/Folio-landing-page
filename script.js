// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-container");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    logo.src = "./images/logo-light.png";
    logo.style.width = "120px";
  } else {
    logo.src = "./images/logo.png";
  }
});

// STICKY NAV
const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-container");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshhold: 0,
});

navObserver.observe(nav);
