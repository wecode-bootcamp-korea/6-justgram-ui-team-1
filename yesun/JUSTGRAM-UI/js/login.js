let inputId = document.getElementById("inputId");
let inputPw = document.getElementById("inputPw");
let input = document.getElementsByClassName("input")[0];
let button = document.getElementById("loginBtn");

//regId - 첫글자는 영문/ 영문 또는 숫자와 @ 조합/ .com으로 끝나게
//regPw - 영문, 숫자, 특수문자(~!@#$) 각각 1개 이상 조합/ 5~13자리

let regId = /^[A-Za-z]+(?=.*\@)(?=.*[a-zA-Z0-9])[a-zA-Z0-9@]+(.com)$/;
let regPw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$])[0-9a-zA-Z~!@#$]{5,13}$/;

inputId.addEventListener("input", submitBtn);
inputPw.addEventListener("input", submitBtn);
button.addEventListener("click", goToMain);
input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    goToMain();
  }
});

function submitBtn() {
  if (regId.test(inputId.value) && regPw.test(inputPw.value)) {
    button.style.backgroundColor = "#0095f6";
    button.className = "abled";
  } else {
    button.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    button.className = "disabled";
  }
}

function goToMain() {
  if (button.className === "abled") {
    location.href = "http://127.0.0.1:5500/yesun/JUSTGRAM-UI/main.html";
  } else {
    alert(
      "이메일과 비밀번호를 확인하세요!\n비밀번호는 영문, 숫자, 특수문자(~!@#$)를 포함한 5~13자리입니다"
    );
  }
}
