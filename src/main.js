import "./style.css";

const Years = document.querySelector(".year");
const formElement = document.querySelector("form");
// IIFE - Immediately Invoked Function Expression
(function () {
  const date = newDate.Date().getFullYear();
  Years.textContent = `${date}`;
})();

formElement.addEventListener("submit", (e) => {
  // Prevent the default form submit
  e.preventDefault();
  console.log("Form submitted");
});
