const USER_NAME_KEY = "userName";
const HIDDEN_CLASS = "hidden"

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
let savedUserName = localStorage.getItem(USER_NAME_KEY);

function paintUserName() {
    greeting.innerText = `Hello, ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function loginSubmit(info) {
    info.preventDefault();
    savedUserName = loginInput.value.toString();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USER_NAME_KEY, savedUserName);
    // greeting.innerText = "Hello " + userName;
    paintUserName();
}

if(savedUserName !== null){
    paintUserName();
}
else{
    loginForm.addEventListener("submit", loginSubmit);
    loginForm.classList.remove("hidden");
}