function showPassword() {
  const btn = document.querySelector(".btnShowPassword");
  const inputs = document.querySelectorAll("input[type='password']");
  for (let e = 0; e in inputs; e++) {
    btn.addEventListener("click", () => {
      if (inputs[e].type == "password") {
        inputs[e].setAttribute("type", "text");
        btn.classList.remove("bi-eye-slash-fill");
        btn.classList.add("bi-eye-fill");
      } else if (inputs[e].type == "text") {
        inputs[e].attributes[0].value = "password";
        btn.classList.remove("bi-eye-fill");
        btn.classList.add("bi-eye-slash-fill");
      }
    });
  }
}
showPassword();
