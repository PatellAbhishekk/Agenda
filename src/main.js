import "./style.css";
import { formEl, inputEl, yearEl } from "./domSelection";

//
const tasks = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the page from reloading

  //  Checking for empty input
  if (!inputEl.value) {
    return;
  }
  //  Add the task to the array
  tasks.push({
    title: inputEl.value,
    isCompleted: false,
    id: crypto.randomUUID(),
  });

  console.log(tasks);

  //  Empty the input field
  inputEl.value = "";
});

// IIFE - Immediately Invoked Function Expression
(function () {
  const year = new Date().getFullYear();

  // MARK: Update the DOM
  yearEl.textContent = `${year}`;
})();
