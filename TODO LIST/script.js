let taskInput = document.querySelector(".task-input"); // Matches the class from your input
let button = document.querySelector("button");
let ul = document.getElementById("list-container"); // Matches the ID in your <ul>

button.addEventListener("click", function () {
    if (taskInput.value.trim() === "") return; // prevent adding empty tasks

    let newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    ul.appendChild(newTask);
    taskInput.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete-button");
    newTask.appendChild(delBtn);

    delBtn.addEventListener("click", function () {
        ul.removeChild(newTask);
    });
});

ul.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

