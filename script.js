const STORAGE_KEY = "simple-task-manager.tasks";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

let tasks = loadTasks();

function loadTasks() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Storage unavailable (e.g. private mode) - app keeps working in memory.
  }
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task-item" + (task.completed ? " completed" : "");
    item.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", "Mark as completed");

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    item.append(checkbox, text, deleteBtn);
    list.appendChild(item);
  });

  emptyMessage.hidden = tasks.length > 0;
}

function update() {
  saveTasks();
  renderTasks();
}

function addTask(text) {
  // Next id = highest existing id + 1, so ids stay unique even for fast adds.
  const id = tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  tasks.push({ id, text, completed: false });
  update();
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    update();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  update();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTask(text);
  input.value = "";
  input.focus();
});

list.addEventListener("click", (event) => {
  const item = event.target.closest(".task-item");
  if (!item) return;
  const id = Number(item.dataset.id);

  if (event.target.matches('input[type="checkbox"]')) {
    toggleTask(id);
  } else if (event.target.matches(".delete-btn")) {
    deleteTask(id);
  }
});

renderTasks();
