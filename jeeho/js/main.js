const inputComments = document.getElementsByClassName("input-comment");

Array.from(inputComments).forEach(commentInput, index => {
  commentInput.addEventListener("keyup", (event) => {
    if(event.code === "Enter") {
      writeComment(index);
    }
  });
});


const writeCommentButtons = document.getElementsByClassName("submit-comment");

Array.from(writeCommentButtons).forEach((commentButtonWrite), index => {
  commentButtonWrite.addEventListener("click", (e) => {
    writeComment(index);
  });
});


function writeComment(index) {
  const commentInput = document.getElementsByClassName("input_comment")[index].value;
  const commentDiv = createcCommentDiv("hojee", commentInput.value);
  const commentGroup = document.getElementsByClassName("comment-section")[index];
  commentGroup.appendChild(commentDiv);
  commentInput.value ="";
};


function createcCommentDiv(writer, content) {
  const commentDiv = document.createElement("div");
  
  const writerSpan = document.createElement("span");
  const writerText = document.createTextNode(writer);
  writerSpan.appendChild(writerText); 

  const commentSpan = document.createElement("span");
  const commentText = document.createTextNode(content);
  commentSpan.appendChild(commentText);
  
  commentDiv.append(writerSpan, " ", commentSpan);

  return commentDiv;

};








/*
const inputComments = document.querySelector(".input-comment");
const submitBtn = document.querySelector(".submit-comment");
const newComment = document.querySelector(".new-comment");

  function writeComment() {
    const comments = document.createElement("div");
    const userId = document.createElement("span");
    const commentsText = document.createElement("span");
    
    userId.classList.add("userID");
    commentsText.classList.add("comment-info");
    
    userId.innerHTML = '<span>hojee</span>';
    commentsText.innerText = inputComments.value;


    newComment.appendChild(comments);
    comments.appendChild(userId);
    comments.appendChild(commentsText);

  }

inputComments.addEventListener("keydown", (event) => {

  if (event.code === "Enter") {
    writeComment();
    inputComments.value = "";
  }
  
});

submitBtn.addEventListener("click", (event) => {

  writeComment();
  inputComments.value = "";

});
*/
