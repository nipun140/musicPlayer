let prevBtn = document.getElementById("prev");
let playBtn = document.getElementById("play");
let forwBtn = document.getElementById("forward");
let singerN = document.querySelector("#singer");
let songN = document.querySelector("#song");
let music = document.querySelector("audio");
let img = document.querySelector("img");
let pauseBtn = document.querySelector(".fa-pause");

let playMusic = () => {
  music.play();
  playBtn.classList.replace("fa-play", "fa-pause");
  img.classList.add("anim_rotate");
  isPlaying = true;
};

let pauseMusic = () => {
  music.pause();
  playBtn.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anim_rotate");
  isPlaying = false;
};

//play pause songs
let isPlaying = false; //initially false not playing
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
});

//change songs

let songs = [
  {
    name: "song1",
    singer: "loyalist",
    song: "lotus lane",
  },
  {
    name: "song2",
    singer: "aurouro",
    song: "saphiones",
  },
  { name: "song3", singer: "david guetta", song: "hit me back" },
];

let loadsongs = (song) => {
  songN.innerHTML = `${song.song}`;
  singerN.innerHTML = `${song.singer}`;
  music.src = `music/${song.name}.mp3`;
  img.src = `img/${song.name}.jpg`;
};

let songIndex = 0;

forwBtn.addEventListener("click", () => {
  songIndex++;
  songIndex = songIndex % songs.length;
  loadsongs(songs[songIndex]);
  playMusic(); //play music if changed while playing the previuos music
});

prevBtn.addEventListener("click", () => {
  songIndex--;
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadsongs(songs[songIndex]);
  playMusic();
});

//keyboard events
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Space":
      if (!isPlaying) {
        playMusic();
      } else {
        pauseMusic();
      }
      break;

    case "ArrowRight":
      songIndex++;
      songIndex = songIndex % songs.length;
      loadsongs(songs[songIndex]);
      playMusic(); //play music if changed while playing the previuos music
      break;

    case "ArrowLeft":
      songIndex--;
      songIndex = (songIndex - 1 + songs.length) % songs.length;
      loadsongs(songs[songIndex]);
      playMusic();
      break;
  }
});
