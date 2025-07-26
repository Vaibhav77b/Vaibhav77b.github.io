// Add a colorful burst effect on click
document.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.position = "fixed";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    dot.style.pointerEvents = "none";
    document.body.appendChild(dot);

    const dx = (Math.random() - 0.5) * 120;
    const dy = (Math.random() - 0.5) * 120;

    dot.animate(
      [
        { transform: "translate(0, 0)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
      ],
      { duration: 1000, easing: "ease-out" }
    ).onfinish = () => dot.remove();
  }
});
