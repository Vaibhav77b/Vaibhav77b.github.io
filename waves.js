const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawWaves() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const time = Date.now() * 0.002;

  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = 200 + Math.sin(x * 0.01 + time) * 20;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)';
  ctx.lineWidth = 2;
  ctx.stroke();

  requestAnimationFrame(drawWaves);
}

drawWaves();
