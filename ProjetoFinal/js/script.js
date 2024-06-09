document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('taskModal');
    const editModal = document.getElementById('editTaskModal');
    const deleteModal = document.getElementById('deleteTaskModal');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const closeBtns = document.querySelectorAll('.modal .close');
    const taskForm = document.getElementById('taskForm');
    const editTaskForm = document.getElementById('editTaskForm');
    const closeEditBtn = document.getElementById('closeEditModal');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    const deleteTaskMessage = document.getElementById('deleteTaskMessage');
    let taskToDelete = null;

    const clearTaskForm = () => {
        taskForm.reset();
    };

    const clearEditTaskForm = () => {
        editTaskForm.reset();
    };

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const loadTasks = () => {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    const renderTasks = () => {
        const tasks = loadTasks();
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';

        let groupedTasks = {};

        tasks.forEach(task => {
            if (!groupedTasks[task.category]) {
                groupedTasks[task.category] = [];
            }
            groupedTasks[task.category].push(task);
        });

        Object.keys(groupedTasks).forEach(category => {
            const categoryRow = document.createElement('tr');
            categoryRow.classList.add('category-row');
            categoryRow.innerHTML = `<td colspan="6">${category}</td>`;
            tableBody.appendChild(categoryRow);

            groupedTasks[category].forEach((task, index) => {
                const row = document.createElement('tr');
                const dueDate = new Date(task.dueDate);
                dueDate.setMinutes(dueDate.getMinutes() + dueDate.getTimezoneOffset()); // Corrigindo o problema da data
                const formattedDueDate = `${dueDate.getDate().toString().padStart(2, '0')}/${(dueDate.getMonth() + 1).toString().padStart(2, '0')}/${dueDate.getFullYear()}`;

                row.innerHTML = `
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>${formattedDueDate}</td>
                    <td><span class="priority">${task.priority}</span></td>
                    <td><span class="status">${task.status}</span></td>
                    <td>
                        <button class="edit-btn" data-index="${index}">✏️</button>
                        <button class="delete-btn" data-index="${index}">🗑️</button>
                    </td>
                `;

                const prioritySpan = row.querySelector('.priority');
                const statusSpan = row.querySelector('.status');
                prioritySpan.classList.add(getPriorityClass(task.priority));
                statusSpan.classList.add(getStatusClass(task.status));

                tableBody.appendChild(row);
            });
        });

        attachEventListeners();
    }

    const addTask = (task) => {
        const tasks = loadTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks();
    }

    const editTask = (index, updatedTask) => {
        const tasks = loadTasks();
        tasks[index] = updatedTask;
        saveTasks(tasks);
        renderTasks();
    }

    const deleteTask = (index) => {
        const tasks = loadTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    }

    taskForm.onsubmit = (event) => {
        event.preventDefault();
        const task = {
            title: taskForm.title.value,
            description: taskForm.description.value,
            dueDate: taskForm.dueDate.value,
            priority: taskForm.priority.value,
            status: 'pendente',
            category: taskForm.category.value
        };
        addTask(task);
        checkTasks();
        modal.style.display = 'none';
        clearTaskForm();
    }

    addTaskBtn.onclick = () => {
        modal.style.display = 'block';
    }

    closeBtns.forEach(btn => {
        btn.onclick = () => {
            modal.style.display = 'none';
            editModal.style.display = 'none';
            deleteModal.style.display = 'none';
        }
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
        if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    }

    const openEditModal = (index) => {
        const tasks = loadTasks();
        const task = tasks[index];

        document.getElementById('editTitle').value = task.title;
        document.getElementById('editDescription').value = task.description;
        document.getElementById('editDueDate').value = task.dueDate;
        document.getElementById('editPriority').value = task.priority;
        document.getElementById('editStatus').value = task.status; // Adicionando o status no modal de edição
        document.getElementById('editCategory').value = task.category; // Adicionando a categoria no modal de edição
        editTaskForm.setAttribute('data-index', index);

        editModal.style.display = 'block';
    }

    editTaskForm.onsubmit = (event) => {
        event.preventDefault();
        const index = editTaskForm.getAttribute('data-index');
        const updatedTask = {
            title: editTaskForm.editTitle.value,
            description: editTaskForm.editDescription.value,
            dueDate: editTaskForm.editDueDate.value,
            priority: editTaskForm.editPriority.value,
            status: editTaskForm.editStatus.value,
            category: editTaskForm.editCategory.value // Corrigido
        };
        editTask(index, updatedTask);
        editModal.style.display = 'none';
        checkTasks();
        clearEditTaskForm();
    }

    const openDeleteModal = (index) => {
        const tasks = loadTasks();
        const task = tasks[index];

        taskToDelete = index;
        deleteTaskMessage.innerText = `Você tem certeza que vai excluir a tarefa "${task.title}"?`;
        deleteModal.style.display = 'block';
    }

    confirmDeleteBtn.onclick = () => {
        if (taskToDelete !== null) {
            deleteTask(taskToDelete);
            taskToDelete = null;
            deleteModal.style.display = 'none';
        }
    }

    cancelDeleteBtn.onclick = () => {
        taskToDelete = null;
        deleteModal.style.display = 'none';
    }

    const attachEventListeners = () => {
        const editBtns = document.querySelectorAll('.edit-btn');
        const deleteBtns = document.querySelectorAll('.delete-btn');

        editBtns.forEach((editBtn, index) => {
            editBtn.onclick = () => {
                openEditModal(index);
            };
        });

        deleteBtns.forEach((deleteBtn, index) => {
            deleteBtn.onclick = () => {
                openDeleteModal(index);
            };
        });
    }

    renderTasks();
});

const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
        case 'pouco importante':
            return 'priority-low';
        case 'importante':
            return 'priority-medium';
        case 'urgente':
            return 'priority-high';
        default:
            return '';
    }
}

const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
        case 'concluída':
            return 'status-completed';
        case 'pendente':
            return 'status-pending';
        default:
            return '';
    }
}

function getTasksNearDeadline() {
    const currentDate = new Date();
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(currentDate.getDate() + 2);

    const formattedCurrentDate = formatDate(currentDate);
    const formattedTwoDaysAhead = formatDate(twoDaysAhead);

    return tasks.filter(task => {
        const taskDueDate = new Date(task.dueDate);
        return taskDueDate <= twoDaysAhead;
    });
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    return year + '-' + month + '-' + day;
}

function getTasks() {
    const tasksString = localStorage.getItem('tasks');
    return tasksString ? JSON.parse(tasksString) : [];

}

const tasks = getTasks();

document.addEventListener('DOMContentLoaded', () => {
    checkTasks();

    document.getElementById('alertOkButton').addEventListener('click', () => {
        closeAlert();
    });

    document.getElementById('closeAlert').addEventListener('click', () => {
        closeAlert();
    });
});

function checkTasks() {
    const tasksNearDeadline = getTasksNearDeadline();

    if (tasksNearDeadline.length > 0) {
        showAlert(tasksNearDeadline);
    }
}

function showAlert() {
    const tasksNearDeadline = getTasksNearDeadline(); // Obtém apenas as tarefas próximas do vencimento

    if (tasksNearDeadline.length > 0) {
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.innerHTML = `Você tem ${tasksNearDeadline.length} tarefa(s) próxima(s) do vencimento: <br><br>`;
        tasksNearDeadline.forEach(task => {
            alertMessage.innerHTML += `<strong>${task.title}</strong> (Categoria: ${task.category})<br>`;
        });

        const alertModal = document.getElementById('alertModal');
        alertModal.style.display = 'block';
    }
}


function closeAlert() {
    const alertModal = document.getElementById('alertModal');
    alertModal.style.display = 'none';
}