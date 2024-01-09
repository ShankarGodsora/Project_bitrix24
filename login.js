
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const user = existingUsers.find(u => (u.email === email || u.username === email) && u.password === password);

        if (user) {
           
            alert("Login successful!");
            
        localStorage.setItem("isAuth","Authenticated")  

            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } else {
        alert("Please fill in both email/username and password.");
    }
}









function forgotPassword(fromPage) {
    var result = confirm("Have you forgotten your email or password?");
    if (result) {
        // Redirect to the signup page if 'OK' is clicked
        window.location.href = 'signup.html';
    } else {
        // Stay on the current page if 'Cancel' is clicked
        // You can add more specific handling if needed
        if (fromPage === 'signup') {
            window.location.href = 'signup.html';
        }
    }
}





