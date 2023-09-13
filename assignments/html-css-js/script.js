// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Event listener for adding a task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new task item
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;

        // Add task to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';

        // Add event listener for completing a task
        const completeButton = taskItem.querySelector('.complete');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Add event listener for deleting a task
        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
