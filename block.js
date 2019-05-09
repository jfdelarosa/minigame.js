class Block {
  constructor(x, y, w) {
    this.xDir = 0;
    this.yDir = 0;
    this.pos = createVector(x, y);
    this.w = w;
    this.h = w;
    this.hardTurn = true;
  }
  show() {
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
  eat(food) {
    let x = food.pos.x;
    let y = food.pos.y;
    let left = this.pos.x - this.w / 2;
    let right = this.pos.x + this.w / 2;
    let top = this.pos.y - this.h / 2;
    let bottom = this.pos.y + this.h / 2;
    if (left < x && x < right && top < y && y < bottom) {
      this.w = this.w + (6 * ((PI * food.radius) ^ 2)) / this.w / 2;
      this.h = this.h + (6 * ((PI * food.radius) ^ 2)) / this.h / 2;
      return true;
    }
  }
  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }
  setPos(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  update() {
    var vel = createVector(this.xDir, this.yDir);
    vel.setMag(3 - map(this.w * this.h, 400, 100000, 0, 2.5));
    this.pos.add(vel);
    if (
      this.pos.x - this.w / 2 <= -width ||
      this.pos.x + this.w / 2 >= width ||
      this.pos.y - this.h / 2 <= -width ||
      this.pos.y + this.h / 2 >= width
    ) {
      this.pos.sub(vel);
    }
  }
}
