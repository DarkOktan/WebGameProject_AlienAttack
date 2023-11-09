document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementsByClassName("mainMenuPlayButton");
    if (playButton[0]) playButton[0].addEventListener("click", clickHandler, false);
    
    function clickHandler(){
        console.log(window.localStorage.getItem("username"));
    
        window.location = 'ingame.html';
    } 
});


