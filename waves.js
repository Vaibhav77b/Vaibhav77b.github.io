const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

let offset = 0;

function drawWaveLayer(amplitude, frequency, speed, color, alpha, offsetShift) {
  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = 0; x <= width; x++) {
    let y = height / 2 + Math.sin((x + offset * speed + offsetShift) * frequency) * amplitude;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();

  ctx.fillStyle = `rgba(${color}, ${alpha})`;
  ctx.fill();
}

function animateWaves() {
  ctx.clearRect(0, 0, width, height);

  // Layer 1: big soft background wave
  drawWaveLayer(25, 0.015, 1.2, '0,255,255', 0.04, 0);

  // Layer 2: middle wave
  drawWaveLayer(18, 0.02, 1.8, '0,255,255', 0.06, 50);

  // Layer 3: smaller detail wave
  drawWaveLayer(12, 0.03, 2.2, '0,255,255', 0.08, 100);

  offset++;
  requestAnimationFrame(animateWaves);
}

animateWaves();
