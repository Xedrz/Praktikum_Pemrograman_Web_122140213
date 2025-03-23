document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (name.length < 3) {
        errors.push("Nama harus lebih dari 3 karakter.");
        nameError.textContent = "Nama harus lebih dari 3 karakter.";
    }

    if (!emailPattern.test(email)) {
        errors.push("Email tidak valid.");
        emailError.textContent = "Email tidak valid.";
    }

    if (password.length < 8) {
        errors.push("Password harus minimal 8 karakter.");
        passwordError.textContent = "Password harus minimal 8 karakter.";
    }

    if (errors.length === 0) {
        alert("Form berhasil dikirim!");
    }
});