const API_KEY = "2991bee554330787fe1d95f91101d645";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(URL)
    .then(response => response.json()
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");

        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        cityContainer.innerText = `\n @ ${data.name}`;
        document.querySelector("#weather").classList.remove("hidden");
    }));
}
function onGeoError() {
    alert("Can't find your lacation, so can't show you weather.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);