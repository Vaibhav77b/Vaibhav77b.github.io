// Loader Quotes
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

// Hide loader, show main
setTimeout(() => {
  clearInterval(interval);
  loader.style.display = "none";
  mainContent.classList.add("show");
}, 4000);

// Play button logic
document.getElementById("playBtn").addEventListener("click", () => {
  mainContent.style.display = "none";

  const overlay = document.getElementById("playerOverlay");
  const video = document.getElementById("editVideo");
  const banner = document.querySelector(".top-banner");
  const about = document.querySelector(".about-me");

  overlay.classList.add("show");

  setTimeout(() => {
    video.classList.add("fade-in-video");
    banner.classList.add("slide-in");
    about.classList.add("slide-in");
  }, 300);
});

// Mute button toggle
const muteToggle = document.getElementById("muteToggle");
const video = document.getElementById("editVideo");
muteToggle.addEventListener("click", () => {
  video.muted = !video.muted;
  muteToggle.textContent = video.muted ? "🔇" : "🔊";
});
