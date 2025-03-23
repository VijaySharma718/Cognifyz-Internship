document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nameError = name.nextElementSibling;
    const emailError = email.nextElementSibling;
    const passwordError = password.nextElementSibling;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Name Validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Password Validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset(); // Reset form
    }
});
