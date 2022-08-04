
const cmdBox = document.getElementById("cmd-box");
const cmdUpload = document.getElementById("comment-upload");


// // function onInput(event) {
// //   input = alert("gkdl")
// // }

// input.addEventListener("keyup", (e) => {
//   if (e.key === 'Enter') {
//     alert("sdf)");
//   }
// });



function writeComment() {

  const divtag = document.createElement("div");
  divtag.textContent = "i_hate_cucumber"
  document.querySelector(".up-comment1").append(divtag);

  const divtag1 = document.createElement("div");
  divtag1.textContent = cmdBox.value;
  document.querySelector(".up-comment2").append(divtag1);


};

// 엔터키 눌렀을 때 댓글 추가
cmdBox.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    writeComment();
    cmdBox.value = null;
  }
});

// 게시버튼눌렀을때댓글추가
cmdUpload.addEventListener('Click', function () {
  writeComment();
});