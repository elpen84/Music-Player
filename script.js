const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const audio = document.querySelector("audio");

//music
const song = [
  {
    name: "jacinto-1",
    diplayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    diplayName: "Seven Nataion Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    diplayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    diplayName: "Front Row (Remix)",
    artist: "Jacinto Design",
  },
];

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

//update Dom
function loadSong(song) {
  title.textContent = song.diplayName;
  artist.textContent = song.artist;
  audio.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//current song

let songIndex = 0;

//prev song
function prevSong() {
  songIndex--;
  console.log(song[songIndex]);
  playSong();
}

//Next Song
function nextSong() {
  songIndex++;
  console.log(song[songIndex]);
  playSong();
}

//onload -select song

loadSong(song[songIndex]);

//event listeners

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);

//play.addEventListener("click", playAudio);

// function playAudio() {
//   audio.play();
//   play.className = ".main-button-hidden";
// }
