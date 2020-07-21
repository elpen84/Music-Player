const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const audio = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

//music
const song = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nataion Army (Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
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
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audio.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//current song

let songIndex = 1;

//prev song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = song.length - 1;
  }
  loadSong(song[songIndex]);
  playSong();
}

//Next Song
function nextSong() {
  songIndex++;
  if (songIndex > song.length - 1) {
    songIndex = 0;
  }

  loadSong(song[songIndex]);
  playSong();
}

//onload -select song

loadSong(song[songIndex]);

// Update progress bar & Time
function updateProgessBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // Updaate progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display  for duration
    const durationMinutes = Math.floor(duration / 60);
    //delay switching duation element to avoid nan
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    //calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}
// Set Progress Bar
function setProgressBar(e) {
  console.log(e);
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = audio;
  audio.currentTime = (clickX / width) * duration;
}

//event listeners

prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgessBar);
progressContainer.addEventListener("click", setProgressBar);
//play.addEventListener("click", playAudio);

// function playAudio() {
//   audio.play();
//   play.className = ".main-button-hidden";
// }
