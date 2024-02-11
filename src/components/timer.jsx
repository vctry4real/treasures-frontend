import React from "react"
const StartTimer=(limit) => {
const timeLimitInMinutes = limit;
var timeLimitInSeconds = timeLimitInMinutes * 60;
var timerElement = document.getElementById('timer');

  timeLimitInSeconds--;
  var minutes = Math.floor(timeLimitInSeconds / 60);
  var seconds = timeLimitInSeconds % 60;
  
  if (timeLimitInSeconds < 0) {
    timerElement.textContent = '00:00';
    clearInterval(timerInterval);
    return;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  timerElement.textContent = minutes + ':' + seconds;

  return (<div>
    <p>Time left = <span id="timer">{timeLimitInMinutes}:00</span></p>
  </div>)
}

var timerInterval = setInterval(StartTimer, 1000);

export default StartTimer;