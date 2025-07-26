const canvas = document.getElementById('waves');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let increment = 0;

function animateWaves() {
  requestAnimationFrame(animateWaves);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let j = 0; j < 3; j++) {
    ctx.beginPath();
    for (let i = 0; i < canvas.width; i++) {
      let x = i;
      let y = canvas.height / 2 +
              Math.sin(i * 0.01 + increment + j) * 20 * (j + 1) +
              Math.cos(i * 0.02 + increment) * 15;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + j * 0.2})`;
    ctx.lineWidth = 1 + j;
    ctx.stroke();
  }

  increment += 0.02;
}

animateWaves();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 🔊 Load splash sound
const splashSound = new Audio("splash.mp3");

// 💧 Water drop every second
function createSplash() {
  const drop = document.createElement('div');
  drop.classList.add('water-drop');
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.top = Math.random() * 80 + 'vh';

  document.body.appendChild(drop);
  splashSound.currentTime = 0;
  splashSound.play();

  createRipple(drop.style.left, drop.style.top);

  setTimeout(() => drop.remove(), 3000);
}

setInterval(createSplash, 1000);

// 🌊 Ripple effect
function createRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = x;
  ripple.style.top = y;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

// 🖱️ Ripple on mouse move
document.addEventListener("mousemove", e => {
  createRipple(`${e.clientX}px`, `${e.clientY}px`);
});
