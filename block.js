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
    return left < x && x < right && top < y && y < bottom;
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
    vel.setMag(3);
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
