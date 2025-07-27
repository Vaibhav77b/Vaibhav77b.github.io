const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
let w, h, t = 0;
function resize(){ w=canvas.width=canvas.offsetWidth; h=canvas.height=canvas.offsetHeight; }
window.addEventListener('resize', resize);
resize();

function draw(){
  ctx.clearRect(0,0,w,h);
  const cx = w * 0.5;
  const cy = h * 0.5;
  const maxR = Math.hypot(cx, cy);
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 2;
  for(let i=0;i<8;i++){
    const r = maxR * (i+1)/8;
    ctx.beginPath();
    const phase = t*0.002 + i*0.3;
    const amp = Math.sin(phase)*20;
    ctx.arc(cx, cy, r+amp, 0, 2*Math.PI);
    ctx.stroke();
  }
  t++;
  requestAnimationFrame(draw);
}
draw();