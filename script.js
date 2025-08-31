document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let message = document.getElementById("message");
    document.querySelectorAll(".error").forEach(err => err.textContent = "");
    if (name.value.trim() === "") {
      setError(name, "Name is required");
      valid = false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      setError(email, "Email is required");
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      setError(email, "Invalid email format");
      valid = false;
    }
    if (password.value.trim() === "") {
      setError(password, "Password is required");
      valid = false;
    } else if (password.value.length < 6) {
      setError(password, "Password must be at least 6 characters");
      valid = false;
    }
    if (confirm.value.trim() === "") {
      setError(confirm, "Please confirm your password");
      valid = false;
    } else if (confirm.value !== password.value) {
      setError(confirm, "Passwords do not match");
      valid = false;
    }
    if (message.value.trim() === "") {
      setError(message, "Message cannot be empty");
      valid = false;
    }
    if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("myForm").reset();
    }
  });
  function setError(input, message) {
    input.nextElementSibling.textContent = message;
  }  