const song1Button = document.getElementById("song1");
const song2Button = document.getElementById("song2");
const song3Button = document.getElementById("song3");
const song4Button = document.getElementById("song4");
const song5Button = document.getElementById("song5");
const song6Button = document.getElementById("song6");
const song7Button = document.getElementById("song7");
const song8Button = document.getElementById("song8");

const audioPlayer = document.getElementById("audio-player");
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");

window.addEventListener("unhandledrejection", (event) => {
  console.log(event.reason);
});
// if (song1Button){
song1Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=14dJ7HD-8Q80FU62wCwjohxCrRCiRZJIC";
//   songTitle.textContent = "Song 1";
//   songArtist.textContent = "Artist 1";
  audioPlayer.style.display = "block";
  // audio.play();
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


song4Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1J5xvKHsza9OLAbhiTy41W2yHP0sepf1t";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});

song5Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1NFxdl7Pt1hyuJ7Bn3ftbzN4pGi4UbP8F";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});

song6Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1NxYngo4T6er4wKVABPIqj0ifBoyqYx-v";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});

song7Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1Mlu9YtpSjA8BIPWMSWWHUp5yJ-QzgmO7";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});

song8Button.addEventListener("click", function() {
  audio.src = "https://drive.google.com/uc?export=download&id=1ShCYb841TbO2dM0f2quZxtpTf0f0espK";
//   songTitle.textContent = "Song 3";
//   songArtist.textContent = "Artist 3";
  audioPlayer.style.display = "block";
  audio.play();
});