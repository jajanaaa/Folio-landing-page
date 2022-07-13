const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
