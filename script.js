
function addTask() {
    let task = document.getElementById("task");
    let value = task.value.trim();

    if (value === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = value;

    let edit = document.createElement("button");
    edit.innerHTML = "Edit";

    edit.onclick = function() {
        let newTask = prompt("Edit task", value);

        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask;
            value = newTask;
        }
    };

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(edit);
    li.appendChild(del);

    document.getElementById("list").appendChild(li);

    task.value = "";
}
