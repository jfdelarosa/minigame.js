class Food {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.radius = floor(random(4, 7));
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);
  }
  show() {
    fill(this.r, this.g, this.b);
    circle(this.pos.x, this.pos.y, this.radius);
  }
}
