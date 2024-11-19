import "./style.css";
import { formEl, inputEl, listEl, yearEl } from "./domSelection";
import Task from "./component/Task"; // Import the task component

// store the tasks in an array
let tasks = [];

// this function will be called when the user clicks on the task
function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      // (...spread operator) is used to create a new object
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  // show the incompleted tasks first
  tasks.sort((a, b) => a.isCompleted - b.isCompleted);
}

function renderTasks() {
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  tasks.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted, task.id);
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
    isCompleted: false,
    value: inputEl.value,
  });

  console.log(tasks);

  //  Render the tasks
  renderTasks();

  //  Empty the input field
  inputEl.value = "";
});

listEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    // closest method returns the closest parent element
    console.log(e.target.closest("label").id);
    console.log(tasks);
    toggleTask(e.target.closest("label").id);
    console.log(tasks);
    renderTasks();
  }
});

// IIFE - Immediately Invoked Function Expression
(function () {
  const year = new Date().getFullYear();

  //  Update the year in the DOM
  yearEl.textContent = `${year}`;
})();
