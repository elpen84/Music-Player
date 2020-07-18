const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const audio = document.querySelector("audio");

// check if playing
let isPlaying = false;

//play function
function playSong() {
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  play.setAttribute("title", "Pause");
  audio.play();
}
//pause

function pauseSong() {
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  play.setAttribute("title", "Play");
  audio.pause();
}

// play or pause listners
play.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
//event listeners

//play.addEventListener("click", playAudio);

// function playAudio() {
//   audio.play();
//   play.className = ".main-button-hidden";
// }
