let block;
let foods = [];
let score = 0;
let w = 20;
let fps = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  block = new Block(
    random(-width + w, width - w),
    random(-height + w, height - w),
    w
  );
  for (let i = 0; i < 10; i++) {
    foods[i] = createFood();
  }
}
function createFood() {
  return new Food(random(-width, width), random(-height, height));
}
function draw() {
  fps[frameCount % 100] = frameRate();
  background(0);
  fill(255);
  text("SCORE: " + (block.w * block.h).toFixed(0) + "px^2", 10, 15);
  text(floor(frameRate()), width - 20, 15);
  translate(width / 2, height / 2);
  scale(w / block.w);
  translate(-block.pos.x, -block.pos.y);
  if (frameCount % 120 == 0) {
    foods.push(createFood());
  }
  for (let i = foods.length - 1; i >= 0; i--) {
    foods[i].show();
    if (block.eat(foods[i])) {
      foods.splice(i, 1);
      score++;
    }
  }
  block.show();
  block.update();
  stroke(50);
  line(-width, -height, width, -height); // top
  line(-width, -height, -width, height); // left
  line(-width, height, width, height); // bottom
  line(width, -height, width, height); // right
}

function keyPressed() {
  switch (keyCode) {
    case DOWN_ARROW:
      block.setDir(0, 1);
      break;
    case UP_ARROW:
      block.setDir(0, -1);
      break;
    case LEFT_ARROW:
      block.setDir(-1, 0);
      break;
    case RIGHT_ARROW:
      block.setDir(1, 0);
      break;
  }
}
