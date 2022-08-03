// let input = document.querySelector(".input");
// let loginBtn = document.querySelector(".button");
// loginBtn.disabled = true;

// input.addEventListener("click", abled);

// function abled() {
//   loginBtn.disabled = false;
// }

let inputId = document.getElementById("inputId");
let inputPw = document.getElementById("inputPw");
let input = document.getElementsByClassName("input")[0];
let button = document.getElementById("loginBtn");

function onInput() {
  if (!(inputId.value && inputPw.value)) {
    //버튼 활성화
    //button.disabled = false;

    button.style.backgroundColor = "black";
    console.log("input");
  } else {
    //버튼 비활성화
    //button.disabled = true;
    button.style.backgroundColor = "rgba(0, 149, 246, 0.3)";
    console.log("input");
  }
}

inputId.addEventListener("input", onInput);

//inputPw.addEventListener("input", onInput);

// function myfunction() {
//   if () {
//     button.disabled = true;
//     button.style.backgroundColor = "#39bad3";
//   } else {
//     button.disabled = false;
//     button.style.backgroundColor = "black";
//   }
// }
// myfunction();

// let inputId = document.getElementById("inputId");
// let inputPw = document.getElementById("inputPw");
// let button = document.getElementById("loginBtn");
// let input = document.getElementsByClassName("input")[0];

// input.addEventListener("keyup", changeColor);

// function changeColor() {
//   // name과 pw의 값이 모두 undefined 이면
//   if (inputId.value != undefined && inputPw.value != undefined) {
//     button.disabled = false; // 활성화
//   }
//   // 그게 아니면
//   else {
//     button.disabled = true; // 비활성화
//   }
// }
// input.addEventListener("keyup", changeColor);
