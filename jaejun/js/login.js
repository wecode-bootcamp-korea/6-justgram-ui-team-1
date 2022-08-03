const inputIDById = document.getElementById("id-input");
const inputPWById = document.getElementById("pw-input");
const loginButtonById = document.getElementById("login-btn");
loginButtonById.disabled = true;
// getElementById, getElementByClassname,

function onInput() {
  const id = inputIDById.value;
  const pw = inputPWById.value;

  if (id.length > 1 && pw.length > 1) {
    // 버튼을 활성화 하는 로직
    loginButtonById.style.backgroundColor = "#4ec5f4";
    loginButtonById.style.cursor = "pointer";
    loginButtonById.disabled = false;
  } else {
    // 버튼을 비활성화 하는 로직
    loginButtonById.style.backgroundColor = "#cde9f4";
    loginButtonById.style.cursor = "not-allowed;";
    loginButtonById.disabled = true;
  }
}

inputIDById.addEventListener("input", onInput);

inputPWById.addEventListener("input", onInput);

loginButtonById.addEventListener("click", () => {
  // 로그인했을때 로직
});
