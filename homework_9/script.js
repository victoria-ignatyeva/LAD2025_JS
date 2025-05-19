const header = document.createElement("header");
header.textContent = "To Do List";
document.body.appendChild(header);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const input = document.createElement("input");
container.appendChild(input);

const toDoButton = document.createElement("button");
toDoButton.textContent = "To Do";
container.appendChild(toDoButton);

const taskList = document.createElement("ol");
container.appendChild(taskList);

// Загружаем задачи из localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
});

// Функция обновления localStorage
function saveTasks() {
    const items = [];
    taskList.querySelectorAll("li").forEach((li) => items.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(items));
}

toDoButton.addEventListener("click", () => {
    const task = input.value.trim();
    if (task !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
        input.value = "";

        saveTasks();
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
        saveTasks();
    }
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        toDoButton.click();
    }
});
