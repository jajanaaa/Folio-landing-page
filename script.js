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
