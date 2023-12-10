function validateRegistration() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorDisplay = document.getElementById('register-error-display');

    errorDisplay.innerHTML = '';

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorDisplay.innerHTML = 'All fields are required';
        return false;
    }

    if (password !== confirmPassword) {
        errorDisplay.innerHTML = 'Passwords do not match';
        return false;
    }

    // Add additional validation as needed

    alert('Account created successfully!');
    return true;
}

function validateLogin() {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginErrorDisplay = document.getElementById('login-error-display');

    loginErrorDisplay.innerHTML = '';

    if (loginEmail === '' || loginPassword === '') {
        loginErrorDisplay.innerHTML = 'Both email and password are required';
        return false;
    }

    // Perform additional validation as needed

    alert('Login successful!');
    return true;
}