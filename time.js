const clock = document.querySelector(".js-clock"); 

function setClock(hour, minute, second) {
    clock.innerHTML = `${hour}:${minute}:${second}`; 
    
}

function formatNumber(num) { 
    if(num < 10) return `0${num}`;
    return `${num}`;
}


function handleInterval() {
    const date = new Date();
    const hour = date.getHours(); 
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const fmHour = formatNumber(hour);
    const fmMinute = formatNumber(minute);
    const fmSecond = formatNumber(second);

    setClock(fmHour, fmMinute, fmSecond);
}


function init() {
    handleInterval();
    setInterval(handleInterval, 1000);
} 

init(); 
