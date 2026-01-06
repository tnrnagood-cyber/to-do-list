// Function to add a new task
const addTask = (task) => {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");

  li.className = "min-h-[120px]";

  li.innerHTML = `
    <div class="group h-full rounded-2xl p-5 bg-white
                ring-1 ring-slate-900/5 shadow-lg
                flex flex-col justify-between
                hover:bg-purple-500 hover:ring-purple-500
                transition">

      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-purple-500 group-hover:text-white">
          things_to_do
        </span>
        <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">
          ${task}
        </h3>
      </div>

      <div class="flex justify-end gap-2 mt-4">
        <button class="check-btn text-green-500 hover:text-green-700">
          <span class="material-symbols-outlined">task_alt</span>
        </button>
        <button class="delete-btn text-red-500 hover:text-red-700">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  `;

  todoList.appendChild(li);
};

// Default tasks
const defaultTasks = [
  "Supervised Learning Project",
  "Software Design Project",
  "Activity 5"
];
defaultTasks.forEach(task => addTask(task));

// Form submit
document.getElementById("todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task !== "") {
    addTask(task);
    input.value = "";
  }
});

// Click actions (check / delete)
document.getElementById("todo-list").addEventListener("click", (e) => {

  if (e.target.closest(".check-btn")) {
    const card = e.target.closest(".group");
    card.className =
      "group h-full rounded-2xl p-5 bg-emerald-100 ring-1 ring-emerald-500/5 shadow-lg flex flex-col justify-between hover:bg-emerald-400 transition";
  }

  if (e.target.closest(".delete-btn")) {
    e.target.closest("li").remove();
  }
});
