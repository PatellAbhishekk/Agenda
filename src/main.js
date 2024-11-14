import "./style.css";
import { formEl, inputEl, listEl, yearEl } from "./domSelection";
import Task from "./component/Task"; // MARK: Import the task component

// store the tasks in an array
const tasks = [];

function renderTasks() {
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.isCompletedj);
    fragment.appendChild(taskEl);
  });
  listEl.appendChild(fragment);
}

// Prevent the page from reloading
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //  Checking for empty input
  if (!inputEl.value) {
    return;
  }
  //  Add the task to the array
  tasks.unshift({
    id: crypto.randomUUID(),
    isCompleted: true,
    value: inputEl.value,
  });

  console.log(tasks);

  //  Render the tasks
  renderTasks();

  //  Empty the input field
  inputEl.value = "";
});

// IIFE - Immediately Invoked Function Expression
(function () {
  const year = new Date().getFullYear();

  // MARK: Update the DOM
  yearEl.textContent = `${year}`;
})();
