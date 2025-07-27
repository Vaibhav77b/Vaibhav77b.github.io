const quotes = [
  "Anime: Believe in the edit!",
  "Cars: Speed meets precision.",
  "Cats: Cutest edits incoming!"
];
let i = 0;
const quoteEl = document.getElementById("quote");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("mainContent");

const interval = setInterval(() => {
  quoteEl.textContent = quotes[i % quotes.length];
  i++;
}, 1200);

setTimeout(() => {
  clearInterval(interval);
  loader.style.display = "none";
  mainContent.style.display = "block";
}, 4000);

document.getElementById("playBtn").addEventListener("click", () => {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("playerOverlay").style.display = "flex";
});

const muteToggle = document.getElementById("muteToggle");
const video = document.getElementById("editVideo");
muteToggle.addEventListener("click", () => {
  video.muted = !video.muted;
  muteToggle.textContent = video.muted ? "🔇" : "🔊";
});
