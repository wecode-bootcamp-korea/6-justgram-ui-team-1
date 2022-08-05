const commentWriteInput = document.getElementsByClassName("comment-input");
const commentWriteButton = document.getElementsByTagName("button");
const commentList = document.getElementsByClassName("commentList");

//인풋에 값들어가면 게시버튼 활성화
Array.from(commentWriteButton).forEach((value, index) => {
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
      const li = document.createElement("li");
      const commentUserId = document.createElement("div");
      const div = document.createElement("div");

      li.classList.add("comment");
      commentUserId.innerText = "kim_code";
      commentUserId.classList.add("feedTextId");

      if (commentWriteInput[index].value) {
        div.innerText = commentWriteInput[index].value;
        div.classList.add("feedTextContent");
      }

      li.appendChild(commentUserId);
      li.appendChild(div);

      commentList[index].appendChild(li);

      commentWriteInput[index].value = "";

      commentWriteButton[index].classList.remove("comment-btn");
      commentWriteButton[index].disabled = true;
    }
  });
});

//게시버튼 누른 후 게시버튼 다시 비활성화
Array.from(commentWriteButton).forEach((value, index) => {
  commentWriteButton[index].addEventListener("click", () => {
    const gesi = commentWriteInput[index].value;

    if (gesi) {
      commentWriteButton[index].classList.remove("comment-btn");
      commentWriteButton[index].disabled = true;
    }
  });
});

//게시버튼 누르면 인풋에 입력된 값대로 댓글달기
Array.from(commentWriteInput).forEach((value, index) => {
  commentWriteButton[index].addEventListener("click", () => {
    const li = document.createElement("li");
    const commentUserId = document.createElement("div");
    const div = document.createElement("div");

    li.classList.add("comment");
    commentUserId.innerText = "kim_code";
    commentUserId.classList.add("feedTextId");

    if (commentWriteInput[index].value) {
      div.innerText = commentWriteInput[index].value;
      div.classList.add("feedTextContent");
    }

    li.appendChild(commentUserId);
    li.appendChild(div);

    commentList[index].appendChild(li);

    commentWriteInput[index].value = "";
  });
});
