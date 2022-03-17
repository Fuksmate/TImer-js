const timer = document.getElementById('stopwatch');

let min = 0;
let sec = 0;
let timerWork = false
let stoptime = true;

localStorage.setItem("workTime", 25);
workTime = localStorage.getItem("workTime");

function startTimer() {
    if (!timerWork || stoptime == true) {
        stoptime = false;
        timerWork = true
        timerCycle();
    }
}

function timerCycle() {
    sec = parseInt(sec);
    min = parseInt(min);
    if (min !== workTime && stoptime == false) {

        sec++

        if (sec == 60) {
            sec = 0;
            min++
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        timer.innerHTML = + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    } else {
        timerWork = false
    }
}

function resetTimer() {
    min = 0;
    sec = 0;
    stoptime = true;
    timer.innerHTML = min + ':0' + sec;
}
