document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const strengthMsg = document.getElementById("strengthMsg");
  const rememberMe = document.getElementById("rememberMe");
  const errorMsg = document.getElementById("errorMsg");

  // Pre-fill if stored
  if (localStorage.getItem("savedEmail")) {
    email.value = localStorage.getItem("savedEmail");
    rememberMe.checked = true;
  }

  password.addEventListener("input", () => {
    const val = password.value;
    if (val.length < 6) {
      strengthMsg.textContent = "Weak";
      strengthMsg.style.color = "red";
    } else if (val.match(/[0-9]/) && val.match(/[A-Z]/)) {
      strengthMsg.textContent = "Strong";
      strengthMsg.style.color = "green";
    } else {
      strengthMsg.textContent = "Medium";
      strengthMsg.style.color = "orange";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorMsg.textContent = "";

    if (!email.value || !password.value) {
      errorMsg.textContent = "All fields are required!";
      return;
    }

    if (!email.value.includes("@")) {
      errorMsg.textContent = "Enter a valid email!";
      return;
    }

    if (password.value.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters!";
      return;
    }

    if (rememberMe.checked) {
      localStorage.setItem("savedEmail", email.value);
    } else {
      localStorage.removeItem("savedEmail");
    }

    alert("Logged in successfully!");
    form.reset();
    strengthMsg.textContent = "";
  });
});
