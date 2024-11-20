import localforage from "localforage";
import "./style.css";
import { formEl, inputEl, listEl, yearEl } from "./domSelection";
import Task from "./component/Task"; // Import the task component

// store the state in an array
// state is dependencies
let state = [];

localforage.getItem("tasks").then((tasks) => {
  if (tasks) {
    state = tasks;
  }
  renderTask();
});

// this function will be called when the user clicks on the task
function toggleTask(id) {
  state = state.map((task) => {
    if (task.id === id) {
      // (...spread operator) is used to create a new object
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  // show the incompleted state first
  state.sort((a, b) => a.isCompleted - b.isCompleted);
  localforage.setItem("tasks", state);
}

function renderTask() {
  listEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  state.forEach((task) => {
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
  state.unshift({
    id: crypto.randomUUID(),
    isCompleted: false,
    value: inputEl.value,
  });

  console.log(state);
  localforage.setItem("tasks", state);

  //  Render the state
  renderTask();

  //  Empty the input field
  inputEl.value = "";
});

listEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    // closest method returns the closest parent element
    console.log(e.target.closest("label").id);
    console.log(state);
    toggleTask(e.target.closest("label").id);
    console.log(state);
    renderTask();
  }
});

// IIFE - Immediately Invoked Function Expression
(function () {
  const year = new Date().getFullYear();

  //  Update the year in the DOM
  yearEl.textContent = `${year}`;
})();
