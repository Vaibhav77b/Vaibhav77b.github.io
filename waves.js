
const canvas = document.getElementById('waves');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 150,
  frequency: 0.02
};

let increment = wave.frequency;

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
  }
  ctx.strokeStyle = '#0ff';
  ctx.stroke();
  increment += wave.frequency;
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
