var speed = 0.5;

function setup() {
  createCanvas(980, 920);
  noStroke();
}

function draw() {
  background(0);

  for (var y = 0; y <= height; y += 40) {
    for (var x = 0; x <= width; x += 40) {

      fill(255, 180);
      ellipse(x, y, 40, 40);
      fill(140, 140, 0);
      ellipse(x, y, 20, 20);
      fill(140, 190, 140);
      x += speed;
      ellipse(x, y, 10, 10);
    }
  }
}