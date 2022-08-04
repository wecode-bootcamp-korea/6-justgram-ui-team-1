//* 1.  inputComments, submitBtn 변수 선언하기
const inputComments = document.querySelector('#comment_input')
const submitBtn = document.querySelector('#posting_box')
// > quertySelector() 를 이용해 변수에 댓글입력창을 할당 해주었다.
// > 게시 버튼이 동작할수 있도록 querySelector()를 이용해 게시 버튼을 할당 해주었다.

//* 2. addEventListener()메소드를 사용하여 text창, 게시 버튼에 이벤트 구현하기

//* 게시 버튼 이벤트 구현
submitBtn.addEventListener("click", (e) => {
    commentsBox();
    inputComments.value = " ";
});
//> submitBtn에 click이벤트가 발생하면, 그 이벤트 자체를 매개변수로 받아서 commentsBox() 함수가 호출되고 (= 게시 버튼 이벤트가 구현되고),
//> 그 이후에 댓글 입력창의 value는 ""; 공백의 값이 되면서 초기화 된다.

inputComments.addEventListener('keydown', (e) => {
    if (e.code === "Enter") {
        commentsBox();
        inputComments.value = " ";
    }
})

//> inputComments에 keydown 이벤트가 일어나고, 그 이벤트 자체를 매개변수로 받는다.
//> 들어온 이벤트의 e.code === enter라면, 즉 엔터키를 누르면 commentsBox() 함수가 호출되고 (=keydown 이벤트 구현), 그 이후에 댓글 입력창의 value는 위와 같이 ""; 공백의 값이 되면서 초기화 된다.

function commentsBox() {
    // 댓글 추가하면 들어갈 공간의 div태그를 가져온다
    const box = document.querySelector('.new_comment_set');
    // 부모요소 역할을 할 div 태그 할당
    const comments = document.createElement('div');
    const likes = document.createElement('div')

    // 사용자의 id가 찍힐 span 태그 할당
    const userId = document.createElement('span')
    // 사용자의 댓글이 찍힐 span 태그 할당
    const commentsText = document.createElement('span')
    // 댓글 오른쪽에 찍힐 작은 하트에 button 태그 할당
    const likesBtn = document.createElement('button')

//* classList.add() 메소드를 사용해서 class츠가
comments.classList.add('comments_title');
likes.classList.add('likes_box')
userId.classList.add('user_id');
commentsText.classList.add('comments_contents');
likesBtn.classList.add('comments_like_btn');

//* .innerHTML 와 .innerText 를 사용해서 div안의 내용 읽어오기
// 닉네임 이름
userId.innerHTML = `<a href="#" class="coment_userid">아이디</a>`
// 댓글 내용
commentsText.innerText = inputComments.value
// 하트 아이콘
likesBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`

//* 자식요소를 부모요소의 순서대로 넣어주는 .appendChild() 메소드로 구조 잡기
comments.appendChild(userId)
comments.appendChild(commentsText)
likes.appendChild(likesBtn)

box.appendChild(comments, likes)
}

//> box 라는 변수에 댓글 추가하면 들어갈 공간의 div 태그를 querySelector()를 이용해 할당한다.
//> 위와 마찬가지로 comments, userId, commentsText, likeBtn 이라는 변수를 선언하여 댓글 구조들에 각각의 태그를 할당한다.
//> 이후 자식요소를 부모요소의 순서대로 넣어주는 .appendChild() 메소드로 구조를 잡는다.
//> 최종적으로 box의 자식요소로 comments를 할당해주면 댓글이 들어갈 공간에 차례대로 넣어진다.
//> 이제는 .classList.add() 메소드를 사용해서 class 를 추가하여 css 를 적용시켜 주어야한다.
//> 이 함수는 기존의 class에 새로운 클래스를 추가해준다.
//> className에 문자열을 추가 <-> element.classList.add() 메소드
//> 이 둘의 다른점은 문자열 앞에 스페이스를 입력하지 않아도 된다는 점
//> 추가하려는 클래스가 이미 class 속성에 포함되어 있다면 추가하지 않는다는 점이다.

//> .innerHTML 이랑 .innerText 를 사용해서 div 안의 내용을 읽어온다.
//> .innerText 는 element 안으 text 값들만을 가져오고,
//> .innerHTML 은 innerText와는 달리 element 안의 HTML이나 XML을 가져온다. 