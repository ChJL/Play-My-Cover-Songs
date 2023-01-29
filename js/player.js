const song1Button = document.getElementById("song1");
const song2Button = document.getElementById("song2");
const song3Button = document.getElementById("song3");
const audioPlayer = document.getElementById("audio-player");
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");

// if (song1Button){
song1Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=14dJ7HD-8Q80FU62wCwjohxCrRCiRZJIC";
//   songTitle.textContent = "Song 1";
//   songArtist.textContent = "Artist 1";
  audioPlayer.style.display = "block";
  audio.play();
});

song2Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1hwxguzt6I8dFsZev73TaLKI-127Rio9-";
//   songTitle.textContent = "Song 2";
//   songArtist.textContent = "Artist 2";
  audioPlayer.style.display = "block";
  audio.play();
});

song3Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1MNhRo092picC4s_mJhjJTmGQqe62O802";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});
