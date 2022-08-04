const loginFormById = document.getElementById("login-form");
const inputIDById = document.getElementById("id-input");
const inputPWById = document.getElementById("pw-input");
const loginButtonById = document.getElementById("login-btn");
loginButtonById.disabled = true; //버튼 비활성화

function onInput() {
  const id = inputIDById.value;
  const pw = inputPWById.value;

  if (id.length > 1 && pw.length > 1) {
    //버튼을 활성화 하는 로직
    loginButtonById.style.backgroundColor = "#54b5f5";
    loginButtonById.style.cursor = "pointer";
    loginButtonById.disabled = false; //버튼 활성화
  } else {
    //버튼을 비활성화 하는 로직
    loginButtonById.style.backgroundColor = "#b2dffc";
    loginButtonById.style.cursor = "not-allowed";
    loginButtonById.disabled = true; //버튼 비활성화
  }
}

inputIDById.addEventListener("input", onInput);
inputPWById.addEventListener("input", onInput);
loginFormById.addEventListener("submit", (event) => {
  event.preventDefault();
});
