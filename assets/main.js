let tasks = [];

// Display tasks
function displayTasks() {
  let html = "";

  for (let i = 0; i < tasks.length; i++) {
    html += "<li>" +
      tasks[i] +
      " <button class='i-btn' onclick='editTask(" + i + ")'><span class='material-icons'>edit</span></button>" +
      " <button class='i-btn' onclick='removeTask(" + i + ")'><span class='material-icons'>close</span></button>" +
      "</li>";
  }

  document.getElementById("list").innerHTML = html;
}

// Add task

function addTask() {
  let taskInput = document.getElementById("task");
  let text = taskInput.value.trim();

  // Prevent empty task
  if (text === "") {
    alert("Please enter a task.");
    return;
  }

  // Prevent duplicate tasks
  if (tasks.includes(text)) {
    alert("This task already exists.");
    return;
  }

  tasks.push(text);

  taskInput.value = "";

  saveTasks();
  displayTasks();
}

// Edit task
function editTask(i) {

  let updatedTask = prompt("Edit task:", tasks[i]);

  // User pressed Cancel
  if (updatedTask === null) {
    return;
  }

  updatedTask = updatedTask.trim();

  // Prevent empty task
  if (updatedTask === "") {
    alert("Task cannot be empty.");
    return;
  }

  // Prevent duplicates
  if (tasks.includes(updatedTask) && updatedTask !== tasks[i]) {
    alert("This task already exists.");
    return;
  }

  tasks[i] = updatedTask;

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