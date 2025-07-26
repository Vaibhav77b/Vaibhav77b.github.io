
function toggleMode() {
  document.body.classList.toggle("light-mode");
}
const canvas = document.getElementById("fireflyCanvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const fireflies = [];
for (let i = 0; i < 50; i++) {
  fireflies.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    dx: Math.random() * 1 - 0.5,
    dy: Math.random() * 1 - 0.5,
  });
}

function drawFireflies() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < fireflies.length; i++) {
    let f = fireflies[i];
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
    ctx.fill();
    f.x += f.dx;
    f.y += f.dy;

    if (f.x < 0 || f.x > width) f.dx *= -1;
    if (f.y < 0 || f.y > height) f.dy *= -1;
  }
  requestAnimationFrame(drawFireflies);
}

drawFireflies();
