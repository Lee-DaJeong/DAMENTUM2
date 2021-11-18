const nameText = document.querySelector(".js-name");
const nameForm = document.querySelector(".js-name-form");
const nameInput = document.querySelector(".js-name-input");

const CN_HIDE = "hide"; // class name hide  변수로 설정해주면 쉽게 바꿀 수 있다.
const LS_NAME = "name"; // local storage name

function storeName(name) {
    localStorage.setItem(LS_NAME, name) // localStorage : 새로고침해도 그대로 저장
}

function deleteStoreName() {
    localStorage.removeItem(LS_NAME);
    nameText.classList.add(CN_HIDE);
    nameForm.classList.remove(CN_HIDE);
}

function setName(name) {
    nameText.innerHTML = "Hi, " + name;
    nameText.classList.remove(CN_HIDE);
    nameForm.classList.add(CN_HIDE); // css의 class들 안에 클래스를 새로 추가하는 것

    // 이름 삭제 만들기 / 자바스크립트로 html 요소 만들 수 잇음
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", deleteStoreName);
    nameText.appendChild(deleteButton);
}

function handleSubmit(event) {
    event.preventDefault();
    // preventDefault 기본적으로 실행되는 것들, ex)submit은 화면이 저절로 refrest 이걸 방지!! 하는 역할
    setName(nameInput.value); // value: 입력 값
    storeName(nameInput.value);
}

function checkStoreName() {
    const lsName = localStorage.getItem(LS_NAME);
    
    if (lsName !== null) {
        setName(lsName);
    } 

}

function init() {
    nameForm.addEventListener("submit", handleSubmit); 
    // setInterver이랑 비슷 어떤 이벤트인지들어가는지 (이벤트, 함수)
    // addEventListener굉장히 유명하고 많이 쓰이는 속성이라고 합니다. 
    // 무슨 이벤트를 실행했는지!~
    // 엔터를 눌렀을 때나 완료버튼을 눌렀을 때 감지하는 것 submit 
    checkStoreName();
}

init();
