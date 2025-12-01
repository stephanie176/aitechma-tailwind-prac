/* Prevent page reload when clicking buttons inside forms */
function stopReload(event) {
  if (event) event.preventDefault();
}

// signup funtion
function signup(event) {
  stopReload(event);

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!email || !password) {
      alert("Please fill all fields");
      return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("isLoggedIn", "true");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 200);
}

// login function
function login(event) {
  stopReload(event);

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 200);
  } else {
      alert("Incorrect email or password");
  }
}

// forgot password function
function forgotPassword(event) {
    stopReload(event);

    const email = document.getElementById("forgot-email").value.trim();
    const storedEmail = localStorage.getItem("userEmail");

    if (email === storedEmail) {
        document.getElementById("reset-link").classList.remove("hidden");
    } else {
        alert("Email not found");
    }
}

// reset password function
function resetPassword(event) {
    stopReload(event);

    const newPass = document.getElementById("reset-password").value.trim();

    if (!newPass) {
        alert("Enter a new password");
        return;
    }

    localStorage.setItem("userPassword", newPass);

    alert("Password reset successful!");
    window.location.href = "login.html";
}

// dashboard access protection
if (window.location.pathname.includes("dashboard.html")) {
    localStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 200); 
}

// logout function
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
}
