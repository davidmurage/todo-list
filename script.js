document.addEventListener('DOMContentLoaded', () =>{ 
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-button');
    const loginForm = document.getElementById('login-form');

    function validateForm() {
        const email = emailInput.value;
        const password = passwordInput.value;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordValid = password.length>8;
        submitButton.disabled = !(emailValid && passwordValid);
    }

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = 'dashboard.html';
    });
});

function addTask(){
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.onclick = () => {
        const newTaskText = prompt('Update Task', taskText);
        if (newTaskText !== null) {
            span.textContent = newTaskText;
        }
    };
    li.appendChild(updateButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';

}