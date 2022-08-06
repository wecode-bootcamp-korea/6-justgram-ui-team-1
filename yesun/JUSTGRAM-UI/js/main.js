const commentWriteInput = document.getElementsByClassName("comment-input");
const commentWriteButton = document.getElementsByTagName("button");
const commentList = document.getElementsByClassName("commentList");

//댓글입력 함수
function writeComment(index) {
  const li = document.createElement("li");
  const userName = document.createElement("div");
  const userComment = document.createElement("div");

  userComment.innerText = commentWriteInput[index].value;
  userName.innerText = "kim_code";

  li.classList.add("comment");
  userName.classList.add("feedTextId");
  userComment.classList.add("feedTextContent");

  li.append(userName, userComment);
  commentList[index].append(li);

  commentWriteInput[index].value = "";

  commentWriteButton[index].classList.remove("comment-btn");
  commentWriteButton[index].disabled = true;
}

//인풋에 값들어가면 게시버튼 활성화
Array.from(commentWriteInput).forEach((value, index) => {
  commentWriteInput[index].addEventListener("keyup", (e) => {
    const gesi = commentWriteInput[index].value;

    if (gesi) {
      commentWriteButton[index].classList.add("comment-btn");
      commentWriteButton[index].disabled = false;
    }
  });
});

//인풋에서 엔터치면 댓글달기
Array.from(commentWriteInput).forEach((value, index) => {
  commentWriteInput[index].addEventListener("keyup", (e) => {
    if (e.keyCode === 13 && commentWriteInput[index].value) {
      writeComment(index);
    }
  });
});

//게시버튼 누르면 댓글달기
Array.from(commentWriteInput).forEach((value, index) => {
  commentWriteButton[index].addEventListener("click", () => {
    writeComment(index);
  });
});

//mokdata 받아와서 fetch로 연결 후 forEach로 매 피드에 댓글작성
fetch("./data/commentsData.json")
  .then((res) => res.json())
  .then((data) => {
    let commentArray = data.comments;

    commentArray.forEach((comment) => {
      for (let i = 0; i < commentList.length; i++) {
        let liElement = document.createElement("li");
        let userName = document.createElement("div");
        let userComment = document.createElement("div");

        userName.innerText = comment.userName;
        userComment.innerText = comment.content;
        userName.className = "feedTextId";
        userComment.className = "feedTextContent";
        liElement.className = "comment";

        liElement.append(userName, userComment);

        commentList[i].append(liElement);
      }
    });
  });
