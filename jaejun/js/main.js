const commentWriteInput = document.getElementsByClassName("comment-write-input");
const commentWriteButton = document.getElementsByClassName("comment-write-button");
const commentList = document.getElementsByClassName("feed-comment-list");

console.log(Array.from(commentWriteButton));
Array.from(commentWriteButton).forEach((button, index) => {

  button.addEventListener("click", () => {
    const content = commentWriteInput[index].value;
    
    const childElem = document.createElement('div');
    
    const nameSpan = document.createElement('span');
    nameSpan.className = "comment-name";
    nameSpan.textContent = '재준';
  
    childElem.append(nameSpan, content);
  
    commentList[index].appendChild(childElem);
  });
});

// commentWriteButton.addEventListener("click", () => {
//   const content = commentWriteInput.value;
  
//   // 자식요소를 만들고
//   const childElem = document.createElement('div');
  
//   const nameSpan = document.createElement('span');
//   nameSpan.className = "comment-name";
//   nameSpan.textContent = '재준';

//   childElem.append(nameSpan, content);

//   commentList.appendChild(childElem);
// });
