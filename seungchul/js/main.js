const inputComments = document.querySelectorAll('.comment_input')
const submitBtn = document.querySelectorAll('.posting_box')
const commentList = document.querySelectorAll('.new_comment_set')
const commentSet = document.getElementsByClassName('comment_set')

const likeButton = document.querySelectorAll('.comments_like_btn')


// 댓글BOX 제작 콜백함수
const commentSeting = (button, index) => {
    const comments = document.createElement('div');
    const userId = document.createElement('span')
    const commentsText = document.createElement('span')
    const likesBtn = document.createElement('button')

    comments.classList.add('comments_set');
    userId.classList.add('user_id');
    commentsText.classList.add('comments_contents');
    likesBtn.classList.add('comments_like_btn');

    userId.innerHTML = `<a href="#" class="coment_userid">아이디</a>`
    commentsText.innerText = inputComments[index].value;
    likesBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`

    comments.appendChild(userId)
    comments.appendChild(commentsText)
    comments.appendChild(likesBtn)

    commentList[index].appendChild(comments)

    // 이벤트가 이루어지고 input 초기화
    inputComments[index].value = "";
}

// 버튼 클릭했을때 댓글 등록
submitBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        commentSeting(button, index)
    })
});

// 엔터 쳤을때 댓글 등록
inputComments.forEach((button, index) => {
    button.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
            commentSeting(button, index)
        }
    })
});


// JSON 데이터 가져오기
fetch('../data/feeds.json', {
})
    .then(res => res.json())
    .then(data => {
        let commentArray = data.comments;
        commentArray.forEach((comment) => {
            for (let i = 0; i < commentArray.length; i++) {
                const divElement = document.createElement('div');
                const userId = document.createElement('a')
                const commentsText = document.createElement('span')
                const likesBtn = document.createElement('button')

                divElement.classList.add('comments_set');
                userId.classList.add('user_id');
                commentsText.classList.add('comments_contents');
                likesBtn.classList.add('comments_like_btn');

                userId.innerText = comment.id;
                commentsText.innerText = comment.content;
                likesBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`

                divElement.append(userId, commentsText)

                commentSet[i].append(divElement, likesBtn);
            }

        }
        )

    })



// 좋아요 버튼 클릭시 이벤트