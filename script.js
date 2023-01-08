let startTitle = document.getElementById("start");
let stopTitle = document.getElementById("stop");

let startTime = 25;
let stopTime = 5;

let seconds = "00";

window.onload = () => {
  document.getElementById("minutes").innerHTML = startTime;
  document.getElementById("seconds").innerHTML = seconds;

  startTitle.classList.add("active");
};

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("reset").style.display = "block";

  seconds = 59;

  let startMinutes = startTime - 1;
  let stopMinutes = stopTime - 1;

  stopCount = 0;

  let timerFunction = () => {
    document.getElementById("minutes").innerHTML = startMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

    if (seconds === 0) {
      startMinutes = startMinutes - 1;
      if (startMinutes === -1) {
        if (stopCount % 2 === 0) {
          startMinutes = stopMinutes;
          stopCount++;

          startTitle.classList.remove("active");
          stopTitle.classList.add("active");
        } else {
          workMinutes = workTime;
          stopCount++;

          stopTitle.classList.remove("active");
          startTitle.classList.add("active");
        }
      }
      seconds = 59;
    }
  };

  setInterval(timerFunction, 1000);
}