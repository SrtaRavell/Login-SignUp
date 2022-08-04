function showPassword() {
  const btn = document.querySelector(".btnShowPassword");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  btn.addEventListener("click", () => {
    if (password.type == "password") {
      password.setAttribute("type", "text");
      confirmPassword.setAttribute("type", "text");
      btn.classList.remove("bi-eye-slash-fill");
      btn.classList.add("bi-eye-fill");
    } else {
      password.setAttribute("type", "password");
      confirmPassword.setAttribute("type", "password");
      btn.classList.remove("bi-eye-fill");
      btn.classList.add("bi-eye-slash-fill");
    }
  });
}
showPassword();
