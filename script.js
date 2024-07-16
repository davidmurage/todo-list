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
})