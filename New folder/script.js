document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('clearAllButton').addEventListener('click', clearAllTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
}

function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}
