var snd = new Audio(
  "./assets/sound/mixkit-basketball-ball-hitting-the-net-2084.wav"
);
var snd2 = new Audio("./assets/sound/referee-whistle-blow-gymnasium-6320.mp3");
var karezet = new Audio("./assets/sound/liwe_karouzi.mp3");

let gameStatus = document.getElementById("start-stop");
let timerVar = document.getElementById("timer");
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let scoreH = 0;
let scoreG = 0;

function nwGameSound() {
  snd2.play();
}
function oskot() {
  karezet.play();
}

function scoreSound() {
  snd.play();
}

function checkWinner() {
  if (scoreG > scoreH) {
    scoreGuest.classList.add("winner-highlight");
    scoreHome.classList.remove("winner-highlight");
  } else if (scoreG < scoreH) {
    scoreHome.classList.add("winner-highlight");
    scoreGuest.classList.remove("winner-highlight");
  } else {
    scoreHome.classList.remove("winner-highlight");
    scoreGuest.classList.remove("winner-highlight");
  }
}

function plusOneHome() {
  scoreH += 1;
  scoreHome.textContent = scoreH;
  checkWinner();
}

function plusTwoHome() {
  scoreH += 2;
  scoreHome.textContent = scoreH;
  checkWinner();
}

function plusThreeHome() {
  scoreH += 3;
  scoreHome.textContent = scoreH;
  checkWinner();
}

function plusOneGuest() {
  scoreG += 1;
  scoreGuest.textContent = scoreG;
  checkWinner();
}

function plusTwoGuest() {
  scoreG += 2;
  scoreGuest.textContent = scoreG;
  checkWinner();
}

function plusThreeGuest() {
  scoreG += 3;
  scoreGuest.textContent = scoreG;
  checkWinner();
}

function newGame() {
  scoreGuest.textContent = 0;
  scoreHome.textContent = 0;
  scoreG = 0;
  scoreH = 0;
  scoreHome.classList.remove("winner-highlight");
  scoreGuest.classList.remove("winner-highlight");
  timerVar.textContent = "0:00:00";
}
let t = true;
function Totoggle(t) {
  return !t;
}
function toggle() {
  t = Totoggle(t);
  console.log(t);
}
// console.log(toggle(t));
//counter
function handleTimer() {
  let hrs = 0;
  let mins = 0;
  let secs = 0;
  let timer = "";
  const Timer = setInterval(() => {
    if (!t) {
      secs += 1;
      if (secs >= 59) {
        secs = 0;
        mins += 1;
      }
      if (mins >= 59) {
        mins = 0;
        hrs += 1;
      }

      if (mins < 10) {
        timer = hrs + ":0" + mins + ":" + secs;
        if (secs < 10) {
          timer = hrs + ":0" + mins + ":0" + secs;
        }
      }

      timerVar.textContent = timer;
      gameStatus.textContent = "Stop Game";
    } else {
      clearInterval(Timer);
      gameStatus.textContent = "New Game";
    }
  }, 1000);
}

// function handleTimer() {
//   let secs = 0;
//   let mins = 0;
//   let hrs = 0;
//   let timer = "";

//   setInterval(() => {
//     console.log("hi");
//     if (secs < 59) secs++;
//     else if (mins < 59) mins++;
//     else {
//       hrs++;
//     }

//     function timerfunc(timer) {
//       timer = timer + toString(hrs);
//       if (secs > 10) timer = timer + ":" + toString(secs);
//       else {
//         timer = timer + ":0" + toString(secs);
//       }
//       if (mins > 10) timer = timer + ":" + toString(mins);
//       else {
//         timer = timer + ":0" + toString(mins);
//       }
//       return timer;
//     }
//     timer = timerfunc(timer, secs, hrs, mins);
//     console.log("timer" + timer);
//     timerVar.textContent = timer;
//   }, 1000);
// }
