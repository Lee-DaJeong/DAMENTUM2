const clock = document.querySelector(".js-clock"); 
// html에 있는 요소(DOM 도큐먼트 오브젝트 모델?) 가져오기

function setClock(hour, minute, second) {
    clock.innerHTML = `${hour}:${minute}:${second}`; 
    //`베틱? 자바스크립트에서 문자열을 뜻함 ${} 안에 변수를 넣어준다!~
    
}

// refactoring 개발이 다 된 상태에서 조금 더 코드를 보기 좋은 방향으로 바꾸기
// 연산을 덜 하는 방향! 최적화! 

function formatNumber(num) { //10보다 작으면 앞에 0을 붙여주는 함수
    if(num < 10) return `0${num}`;
    return `${num}`;
}


function handleInterval() {
    const date = new Date();
    const hour = date.getHours(); // 자바스크립트에서 지원하는 함수
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const fmHour = formatNumber(hour);
    const fmMinute = formatNumber(minute);
    const fmSecond = formatNumber(second);

    setClock(fmHour, fmMinute, fmSecond);
}


function init() {
    handleInterval();
    setInterval(handleInterval, 1000); // 1000ms=1s, 1초마다 handleInterval 실행
} 

init(); // 최종적으로 실행하는 것은 init 이라는 함수 뿐
