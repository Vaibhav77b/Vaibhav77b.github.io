const quotes = [
  '“A lesson without pain is meaningless.” – Fullmetal Alchemist',
  '“It’s not the car you drive, it’s the driver.” – Fast & Furious',
  '“The smallest feline is a masterpiece.” – Leonardo da Vinci',
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  let quoteIndex = 0;

  const rotateQuotes = setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteText.textContent = quotes[quoteIndex];
  }, 1500);

  setTimeout(() => {
    clearInterval(rotateQuotes);
    document.getElementById("loadingScreen").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loadingScreen").style.display = "none";
      document.getElementById("mainContent").style.display = "flex";
    }, 500);
  }, 4000);
});

function playRandomEdit() {
  const videos = [
    'assets/edit1.mp4',
    'assets/edit2.mp4',
    'assets/edit3.mp4',
  ];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  window.location.href = randomVideo;
}
