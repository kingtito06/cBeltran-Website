let particles = [];
let maxParticles = 130;

function setup() {
  let canvas = createCanvas(windowWidth, document.body.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-99');
  canvas.style('position', 'absolute');

  for (let i = 0; i < maxParticles; i++) {
    addParticle();
  }
}

function addParticle() {
  particles.push({
    baseX: random(width),
    baseY: random(height),
    size: random(2, 8),
    offsetX: random(0, TWO_PI),
    offsetY: random(0, TWO_PI),
    speed: random(0.2, 1),
    floatSpeedX: random(0.005, 0.015),
    floatSpeedY: random(0.005, 0.015)
  });
}

function draw() {
  clear();
  noStroke();
  fill(getParticleColor());

  let scrollOffset = window.scrollY;

  for (let p of particles) {
    let floatX = sin(p.offsetX) * 10;
    let floatY = sin(p.offsetY) * 10;
    p.offsetX += p.floatSpeedX;
    p.offsetY += p.floatSpeedY;

    // Parallax + floating + vertical wrapping
    let y = p.baseY + floatY + scrollOffset * (1 - p.speed * 0.05);

    // Wrap y to canvas height to avoid going offscreen
    let wrappedY = (y + height) % height;

    ellipse(p.baseX + floatX, wrappedY, p.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, document.body.scrollHeight);

  // Add more particles if canvas grew larger
  while (particles.length < maxParticles) {
    addParticle();
  }
}

function getParticleColor() {
  return getComputedStyle(document.body).getPropertyValue('--particle-color').trim();
}
