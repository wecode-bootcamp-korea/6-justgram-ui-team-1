const commentWrite = document.getElementsByClassName("comment-write-box")[0];
const commentPost = document.getElementsByClassName("comment-post-button")[0];

const commentList = document.getElementsByClassName("feed-comment-list")[0];


commentPost.addEventListener("click", () => {
  const content = commentWrite.value;


  //console.log(content);

  // 자식요소 만들고
  const commentDiv = document.createElement("div");
  const nameSpan = document.createElement("span");
  nameSpan.className = "comment-name";
  nameSpan.textContent = "onhaeye";


  //댓글 내용 붙이고
  commentDiv.append(nameSpan, content);
  commentList.appendChild(commentDiv);

  commentWrite.value = null;
});



commentWrite.addEventListener("keyup", function (e) {
  if (e.key === 'Enter') {
    const content = commentWrite.value;
    //console.log(content);

    // 자식요소 만들고
    const commentDiv = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "onhaeye";


    //댓글 내용 붙이고
    commentDiv.append(nameSpan, content);
    commentList.appendChild(commentDiv);

    commentWrite.value = null;
  }
});



// const cmdBox = document.getElementById("cmd-box");
// const cmdUpload = document.getElementById("comment-upload");


// // function onInput(event) {
// //   input = alert("gkdl")
// // }

// input.addEventListener("keyup", (e) => {
//   if (e.key === 'Enter') {
//     alert("sdf)");
//   }
// });



// function writeComment() {

//   const divtag = document.createElement("div");
//   divtag.textContent = "i_hate_cucumber"
//   document.querySelector(".up-comments1").append(divtag);

//   const divtag1 = document.createElement("div");
//   divtag1.textContent = cmdBox.value;
//   document.querySelector(".up-commens2").append(divtag1);


// };

// 엔터키 눌렀을 때 댓글 추가
// cmdBox.addEventListener('keyup', function (e) {
//   if (e.key === 'Enter') {
//     writeComment();
//     cmdBox.value = null;
//   }
// });

// // 게시버튼눌렀을때댓글추가
// cmdUpload.addEventListener('Click', function () {
//   writeComment();
// });