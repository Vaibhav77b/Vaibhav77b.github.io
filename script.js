
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const quoteText = document.getElementById('quoteText');
const quotes = [
  '“Power comes in response to a need, not a desire.” – Goku',
  '“Speed has never killed anyone. Suddenly becoming stationary, that’s what gets you.” – Jeremy Clarkson',
  '“Time spent with cats is never wasted.” – Sigmund Freud'
];

let currentQuote = 0;
setInterval(() => {
  quoteText.innerText = quotes[currentQuote % quotes.length];
  currentQuote++;
}, 1500);

setTimeout(() => {
  loadingScreen.style.display = 'none';
  mainContent.style.display = 'block';
}, 4000);

document.getElementById('playBtn').addEventListener('click', () => {
  document.getElementById('videoOverlay').style.display = 'flex';
});
