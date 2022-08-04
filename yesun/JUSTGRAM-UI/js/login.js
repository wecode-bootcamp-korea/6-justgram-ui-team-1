let inputId = document.getElementById("inputId");
let inputPw = document.getElementById("inputPw");
let input = document.getElementsByClassName("input")[0];
let button = document.getElementById("loginBtn");

function onInput() {
  if (!(inputId.value && inputPw.value)) {
    //버튼 활성화
    button.disabled = false;
    button.style.backgroundColor = "black";
  } else {
    //버튼 비활성화
    button.disabled = true;
    button.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
  }
}

inputId.addEventListener("input", onInput);
