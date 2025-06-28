document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Validación simple
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html"; // o la página principal de tu app
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
});
