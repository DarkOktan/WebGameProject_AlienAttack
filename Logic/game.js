// General
var usernameTxt = document.querySelector("#usernameTxt");
var timeTxt = document.querySelector("#timeTxt");

// time
var startTime;
var currentStopwatch;

//Game variables
var alienX;
var alienY = 20;
var guessX;
var guessY;
var shotsRemaining = 8;
var shotsMade = 0;
var gameState = "";
var gameWon = false;

//The game objects
var cannon = document.querySelector("#cannon");
var alien = document.querySelector("#alien");
var missile = document.querySelector("#missile");

//The input and output fields
var XPostTxt = document.querySelector("#XPostxt");
var YPostTxt = document.querySelector("#YPostxt");

var sliderInputX = document.querySelector("#XRange");
var sliderInputY = document.querySelector("#YRange");

sliderInputX.addEventListener("input", function() {
    XPostTxt.innerHTML = "X Position : " + sliderInputX.value;
}, false);
sliderInputY.addEventListener("input", function(){
    YPostTxt.innerHTML = "Y Position : " + sliderInputY.value;
}, false);

var inputX = document.querySelector("#inputX");
var inputY = document.querySelector("#inputY");
var output = document.querySelector("#output");

// var currentScore;

//The button
var button = document.querySelector("#fireButton");
button.style.cursor = "pointer";
button.addEventListener("click", loginClickHandler, false);

window.onload = function(){
    usernameTxt.innerHTML = "Username: " + window.localStorage.getItem("username");
    alienX = Math.floor(Math.random() * 280);
    render();

    startTime = new Date().getTime();
    currentStopwatch = 0;
};
setInterval(function(){
    Stopwatch();
});

function Stopwatch(){
    currentTime = new Date().getTime();
    currentStopwatch = currentTime - startTime;
    
    var second = Math.floor(currentStopwatch / 1000) % 60;
    var minute = Math.floor(currentStopwatch / 1000 / 60) % 60;

    var displayTimer = pad(minute) + ":" + pad(second);

    timeTxt.innerHTML = displayTimer;
}
function pad (number){
    return (number < 10 ? "0" : "") + number;
}

function render() {
    console.log("render");
    //Position the alien
    alien.style.left = alienX + "px";
    alien.style.top = alienY + "px";
    //Position the cannon
    cannon.style.left = guessX + "px";
    //Position the missile
    missile.style.left = guessX + "px";
    missile.style.top = guessY + "px";
}
function loginClickHandler() {
    playGame();
}
function playGame() {
    shotsRemaining = shotsRemaining - 1;
    shotsMade = shotsMade + 1;
    gameState = " Shots: " + shotsMade + ", Remaining: " + shotsRemaining;
    guessX = parseInt(sliderInputX.value);
    guessY = parseInt(sliderInputY.value);
    //Find out whether the player's x and y guesses are inside
    //The alien's area
    if (guessX >= alienX && guessX <= alienX + 20) {
        //Yes, it's within the X range, so now let's
        //check the Y range
        if (guessY >= alienY && guessY <= alienY + 20) {
            //It's in both the X and Y range, so it's a hit!
            gameWon = true;
            endGame();
        }
    }
    else {
        output.innerHTML = "Miss!" + gameState;
        //Check for the end of the game
        if (shotsRemaining < 1) {
            endGame();
        }
    }
    //Update the alien's position if the
    //game hasn't yet been won
    if (!gameWon) {
        //Update the alien's X position
        alienX = Math.floor(Math.random() * 280);
        //Add 30 to the new Y position so that
        //the alien moves down toward earth
        alienY += 30;
    }
    //Render the new game state
    render();
    console.log("X: " + alienX);
    console.log("Y: " + alienY);
}
function endGame() {
    if (gameWon) {
        // Save Score

        window.location = 'win_gameOver.html';
        
        output.innerHTML
            = "Hit! You saved the earth!" + "<br>"
            + "It only took you " + shotsMade + " shots.";
    }
    else {
        window.location = 'lose_gameOver.html';

        output.innerHTML
            = "You lost!" + "<br>"
            + "The earth has been invaded!";
    }
}