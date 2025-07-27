document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const container = document.getElementById("container");
  const about = document.getElementById("about");
  const bgVideo = document.getElementById("bgVideo");
  const waveCanvas = document.getElementById("waveCanvas");

  let burst = false;
  let t = 0;
  const canvas = document.getElementById("loaderCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  function drawLoader() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < 5; i++) {
      const r = burst
        ? 20 + (t - 60) * 4 + i * 20
        : 40 + Math.sin(t * 0.1 + i) * 10 + i * 10;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(0, 255, 255, ${burst ? 1 - i * 0.15 : 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    t++;
    requestAnimationFrame(drawLoader);
  }

  drawLoader();

  setTimeout(() => {
    burst = true;

    setTimeout(() => {
      loader.style.display = "none";
      container.classList.remove("hidden");
      document.body.classList.add("fade-in");

      if (about) about.classList.add("show");
      if (bgVideo) bgVideo.classList.add("reveal");
      if (waveCanvas) waveCanvas.classList.add("reveal");
    }, 1200);
  }, 3000);
});
