const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const particlArray = [];
const colors = [
  "orange",
  "red",
  "blue",
  "brown",
  "lightblue",
  "darkblue",
  "lightbrown",
  "darkbrown",
  "yellow",
  "purpule",
  "violet",
  "magenta",
  "steelblue",
  "chartreuse green",
  "green",
  "spring green",
  "cyan",
  "azure",
  "rose",
];
class particle {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.directionX = Math.random() * 5 - 2.5;
    this.directionY = Math.random() * 5 - 2.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.radius = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x += this.directionX;
    this.y += this.directionY;
    this.radius += 0.015;
    this.draw();
  }
}

init = () => {
  setInterval(() => {
    for (let i = 0; i < 20; i++) {
      particlArray.push(new particle());
    }
  }, 500);
};
animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlArray.length; i++) {
    particlArray[i].update();
  }
};
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
init();
animate();
