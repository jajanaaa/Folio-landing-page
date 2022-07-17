// SEND MESSAGE

const contactBefore = document.querySelector(".contact-before");
const contactAfter = document.querySelector(".contact-after");
const buttonSend = document.querySelector(".btn-send");
const contactContainer = document.querySelector(".contact-container");
const message = document.querySelector("textarea");

buttonSend.addEventListener("click", () => {
  if (message.value.length == 0) {
    alert("Fields cannot be empty");
  } else {
    contactBefore.style.display = "none";
    contactAfter.style.display = "flex";
    contactContainer.style.height = "100vh";
  }
});
