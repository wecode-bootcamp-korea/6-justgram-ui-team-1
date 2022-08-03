const idInput = document.getElementById("idInput");
const pwdInput = document.getElementById("pwdInput");
const loginBtn = document.getElementById("loginBtn");

idInput.addEventListener("keyup", function (event) {
  if (idInput.value && pwdInput.value) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
});

pwdInput.addEventListener("keyup", function (event) {
  if (idInput.value && pwdInput.value) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
});
