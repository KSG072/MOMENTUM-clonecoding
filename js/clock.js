const clock = document.querySelector("h2#clock");

function paintClock() {
    const date = new Date();
clock.innerText = `${date.getHours().toString().padStart(2, "0")}\
:${date.getMinutes().toString().padStart(2, "0")}\
:${date.getSeconds().toString().padStart(2, "0")}`;
}

paintClock();
setInterval(paintClock, 1000);

