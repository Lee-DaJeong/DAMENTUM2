const weatherText = document.querySelector(".js-weather");

function setWeatherText(temp) {
    const flooredTemp = Math.round(temp);
    weatherText.innerHTML = `${flooredTemp}℃`;
} 

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=003e227425d9d73f54ef80ac036d515c&units=metric`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                setWeatherText(result.main.temp);
    });
}


function handleGetGeo(position) {
    console.log(position);
    getWeather(position.coords.latitude, position.coords.longitude);   
}

function handleErrorGetGeo() {
    console.log("찾을 수 없습니다.");
}
function init() {
    navigator.geolocation.getCurrentPosition(handleGetGeo, handleErrorGetGeo);
}

init();