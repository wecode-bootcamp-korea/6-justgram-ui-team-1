const commentWriteInput = document.getElementsByClassName(
  "comment-write-input"
);
const commentWriteButton = document.getElementsByClassName(
  "comment-write-button"
);
const commentList = document.getElementsByClassName("feed-comment-list");

fetch("./data/comments.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    //데이터를 받아서 배열로 다시 할당하기
    let commentArray = data.comments;
    //배열에 담긴 댓글을 하나하나 반복문 돌기
    commentArray.forEach((comment) => {
      //먼저 commentList 반복문 돌면서 피드 하나하나에 댓글 하나씩 넣어주기
      for (let i = 0; i < commentArray.length; i++) {
        //댓글 넣을 div
        const commentElem = document.createElement("div");
        //댓글 닉네임을 넣을 span
        const nameSpan = document.createElement("span");
        nameSpan.className = "comment-name";
        nameSpan.textContent = comment.userName;
        //댓글 내용 넣어주기
        const content = comment.content;
        commentElem.append(nameSpan, content);
        //피드 하나하나에 댓글 넣기
        commentList[i].append(commentElem);
      }
    });
  });

// console.log(Array.from(commentWriteButton));
Array.from(commentWriteButton).forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = commentWriteInput[index].value;

    const childElem = document.createElement("div");

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "재준";

    childElem.append(nameSpan, content);

    commentList[index].appendChild(childElem);
  });
});
