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

// Function to clear all tasks
function clearAllTasks() {
  // Clear the state (set it to an empty array)
  state = [];

  // Remove tasks from local storage
  localforage.setItem("tasks", state);

  // Re-render the task list (which will now be empty)
  renderTask();
}

// Prevent the page from reloading
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //  Checking for empty input and trimming the input
  const inputValue = inputEl.value.trim().toLowerCase();

  // If the input is "clear all", clear all tasks
  if (inputValue === "clear all") {
    clearAllTasks();
  } else if (inputValue) {
    const capitalizedValue = inputEl.value
      .toLowerCase() // Make the input lowercase first
      .split(" ") // Split into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join words back together

    // If the input is not empty and not "clear all", add the task
    state.unshift({
      id: crypto.randomUUID(),
      isCompleted: false,
      value: capitalizedValue,
    });

    // Save the tasks to localforage
    localforage.setItem("tasks", state);

    // Render the tasks
    renderTask();
  }

  // Clear the input field after submission
  inputEl.value = "";
});

// event delegation
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
