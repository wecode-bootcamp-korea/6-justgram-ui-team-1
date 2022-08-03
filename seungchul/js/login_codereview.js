// 로그인 버튼 활성화 기능 코드리뷰

//> **getElements** 를 사용하면 배열구조에 들어간다
const inputID = document.getElementById('inputId');
const inputPW = document.getElementById('inputPw');
const loginBtn = document.getElementById('login-button');

function onInput(event) {
    const id = inputID.Value;
    const pw = inputPW.Value;

    if (id.length > 1 && pw.length > 1) {
        // 버튼을 활성화 하는 로식
        console.log("버튼 활성화");
    } else {
        // 버튼을 비활성화 하는 로직
        console.log("버튼 비활성화");
    }

}


// ID Event
inputID.addEventListener('input', onInput)

// PW Event
inputPW.addEventListener('input', onInput)


