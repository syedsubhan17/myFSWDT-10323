// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the add button by its ID
    const addButton = document.getElementById('add');
    // Select the input field by its ID
    const inputField = document.getElementById('input');
    // Select the container for tasks by its ID
    const tasksContainer = document.getElementById('tasks');

    // Function to create a task element
    const createTaskElement = (taskText) => {
        // Create a div for the task
        const taskDiv = document.createElement('div');
        // Add various CSS classes to style the task div
        taskDiv.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'border-slate-200', 'py-3', 'px-2', 'border-l-4', 'border-l-transparent', 'bg-gradient-to-r', 'from-transparent', 'to-transparent', 'hover:from-slate-100', 'transition', 'ease-linear', 'duration-150');

        // Create a div for the task content (icon and text)
        const taskContentDiv = document.createElement('div');
        taskContentDiv.classList.add('inline-flex', 'items-center', 'space-x-2');

        // Create an SVG icon for the task
        const taskIcon = document.createElement('svg');
        taskIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        taskIcon.setAttribute('fill', 'none');
        taskIcon.setAttribute('viewBox', '0 0 24 24');
        taskIcon.setAttribute('stroke-width', '1.5');
        taskIcon.setAttribute('stroke', 'currentColor');
        taskIcon.classList.add('w-6', 'h-6', 'text-slate-500');
        // Define the SVG path for the check mark icon
        taskIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />';

        // Create a div to hold the task text
        const taskTextDiv = document.createElement('div');
        taskTextDiv.classList.add('text-slate-500');
        // Set the text of the task
        taskTextDiv.textContent = taskText;

        // Append the icon and text to the task content div
        taskContentDiv.appendChild(taskIcon);
        taskContentDiv.appendChild(taskTextDiv);

        // Create a button for editing the task
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.classList.add('text-blue-500', 'hover:text-blue-700', 'ml-2');
        editButton.addEventListener('click', () => {
            // Create an input field for editing
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskTextDiv.textContent;
            editInput.classList.add('text-slate-500', 'border', 'border-gray-300', 'rounded', 'px-2');

            // Replace the text div with the edit input
            taskContentDiv.replaceChild(editInput, taskTextDiv);

            // Change the edit button to a save button
            editButton.textContent = 'Save';
            editButton.removeEventListener('click', saveEdit);
            editButton.addEventListener('click', saveEdit);

            // Function to save the edited text
            function saveEdit() {
                taskTextDiv.textContent = editInput.value;
                taskContentDiv.replaceChild(taskTextDiv, editInput);
                editButton.textContent = 'Edit';
                editButton.removeEventListener('click', saveEdit);
                editButton.addEventListener('click', () => {
                    // Re-add the edit event listener to the button
                    taskContentDiv.replaceChild(editInput, taskTextDiv);
                    editButton.textContent = 'Save';
                    editButton.removeEventListener('click', saveEdit);
                    editButton.addEventListener('click', saveEdit);
                });
            }
        });

        // Create a button for deleting the task
        const deleteButton = document.createElement('button');
        // Define the SVG for the delete icon inside the button
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>';
        // Add an event listener to the delete button to remove the task
        deleteButton.addEventListener('click', () => {
            taskDiv.remove();
        });

        // Append the task content, edit button, and delete button to the task div
        taskDiv.appendChild(taskContentDiv);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        return taskDiv;
    };

    // Event listener for the add button click event
    addButton.addEventListener('click', () => {
        // Get the task text from the input field and trim whitespace
        const taskText = inputField.value.trim();
        // If the input is not empty, create and append a new task
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            tasksContainer.appendChild(taskElement);
            // Clear the input field
            inputField.value = '';
        }
    });

    // Optional: Add an event listener to add the task on Enter key press
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});

 /*

    multi line comment

 */