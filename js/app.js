// Logik für das Mini Taskboard

const STATUSES = [
  { value: "open", label: "Offen" },
  { value: "in-progress", label: "In Bearbeitung" },
  { value: "done", label: "Erledigt" },
];

const tasks = [];
let nextTaskId = 1;

const taskForm = document.getElementById("task-form");
const taskTitleInput = document.getElementById("task-title");

function createStatusSelect(task) {
  const select = document.createElement("select");
  select.className = "task-status";
  select.setAttribute("aria-label", `Status von „${task.title}“`);

  STATUSES.forEach((status) => {
    const option = document.createElement("option");
    option.value = status.value;
    option.textContent = status.label;
    option.selected = status.value === task.status;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    changeTaskStatus(task.id, select.value);
  });

  return select;
}

function renderTasks() {
  document.querySelectorAll(".column").forEach((column) => {
    const list = column.querySelector(".task-list");
    list.innerHTML = "";

    tasks
      .filter((task) => task.status === column.dataset.status)
      .forEach((task) => {
        const item = document.createElement("li");
        item.className = "task";

        const title = document.createElement("span");
        title.className = "task-title";
        title.textContent = task.title;

        item.appendChild(title);
        item.appendChild(createStatusSelect(task));
        list.appendChild(item);
      });
  });
}

function addTask(title) {
  tasks.push({
    id: nextTaskId++,
    title: title,
    status: "open",
  });
  renderTasks();
}

function changeTaskStatus(taskId, newStatus) {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return;
  }

  task.status = newStatus;
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskTitleInput.value.trim();
  if (title === "") {
    return;
  }

  addTask(title);
  taskTitleInput.value = "";
  taskTitleInput.focus();
});
