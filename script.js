let diplay = document.querySelector("#display");
let startBtn = document.querySelector("#start");
let stopBtn  = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

let mint = 0;
let sec = 0;
let miliSec = 0;

let timerId = null;


startBtn.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId)
    }
    console.log("start button is clicked");
    
    timerId = setInterval(startTime, 10)
});

stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
    console.log("stop button is clicked");

});

resetBtn.addEventListener("click", function () {
    clearInterval(timerId);
    miliSec = sec = mint = 0;
    //own code
    diplay.innerText = `00 : 00 : 00`;
    console.log("reset button is clicked");

});

function startTime () {
    miliSec++;
    if (miliSec == 100) {
        miliSec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            mint++;
        }
    }
    let mlisecString = miliSec < 10 ? `0${miliSec}`: miliSec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let mintString = mint < 10 ? `0${mint}` : mint;
    diplay.textContent = `${mintString} : ${secString} : ${mlisecString}`;
}







































































































































































