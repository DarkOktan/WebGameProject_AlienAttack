var username;

// Login
var inputUsername = document.querySelector("#usernameInput");
var inputPassword = document.querySelector("#passwordInput");

var registerInputUsername = document.querySelector("#registerUsernameInput");
var registerInputPassword = document.querySelector("#registePasswordInput");

var outputInput = document.querySelector("#inputOutput");

var loginButton = document.querySelector("#loginButton");
if (loginButton) loginButton.addEventListener("click", loginClickHandler, false);
var registerButton = document.querySelector("#registerButton");
if (registerButton) registerButton.addEventListener("click", registerClickHandler, false);

function loginClickHandler()
{
    console.log("Login");
    login();
}
function login()
{
    if (inputUsername.value == "" || inputPassword.value == "")
    {
        outputInput.innerHTML = "Fill the Field username or password";

        return;
    }

    window.localStorage.setItem("username", inputUsername.value);
}

function registerClickHandler(){
    console.log("register");
    register();
}
function register(){
    if (registerInputUsername.value == "" || registerInputPassword.value == "")
    {
        outputInput.innerHTML = "Fill the Field username or password";

        return;
    }

    window.localStorage.setItem("username", registerInputUsername.value);
    console.log("Register");
}

