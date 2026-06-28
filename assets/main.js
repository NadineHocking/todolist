// To do list script

let tasks = [];

// Display tasks
function displayTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" + tasks[i] +  " <button class='s-btn' onclick='removeTask(" + i + ")';><span class='material-icons'>close</span></button></li>";
  }
  document.getElementById("list").innerHTML = html;
}

// Add task
function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value;
  if (text === "") {
    return;
  }
  tasks.push(text);
  taskInput.value = "";
  saveTasks();
  displayTasks();
}

// Remove task
function removeTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  displayTasks();
}

// Clear all tasks
function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}

// Save tasks
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks
function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }
}

// Load and display tasks when page loads 
loadTasks();
displayTasks();