var username;

var inputUsername = document.querySelector("#usernameInput");
var inputPassword = document.querySelector("#passwordInput");
var outputInput = document.querySelector("#inputOutput");

var loginButton = document.querySelector("#loginButton");
if (loginButton) loginButton.addEventListener("click", loginClickHandler, false);
var registerButton = document.querySelector("#registerButton");
if (registerButton) registerButton.addEventListener("click", registerClickHandler, false);

function loginClickHandler()
{
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
    console.log(inputUsername.value);

    window.location = 'mainmenu.html';
}

function registerClickHandler(){
    register();
}
function register(){
    if (inputUsername.value == "" || inputPassword.value == "")
    {
        outputInput.innerHTML = "Fill the Field username or password";

        return;
    }

    console.log("register");
}

