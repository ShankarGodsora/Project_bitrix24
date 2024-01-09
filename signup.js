
function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.email === email);

        if (!userExists) {
            existingUsers.push({ email, password });

            localStorage.setItem('users', JSON.stringify(existingUsers));

            alert("Signup successful!");
            window.location.href = 'login.html';
        } else {
            alert('User with this email/username already exists. Please choose a different email/username.');
        }
    } else {
        alert("Please fill in both email/username and password.");
    }
}

function forgotPassword(fromPage) {
    var result = confirm("Have you forgotten your email or password?");
    if (result) {
        window.location.href = 'signup.html';
    } else {
        if (fromPage === 'signup') {
            window.location.href = 'signup.html';
        }
    }
}









