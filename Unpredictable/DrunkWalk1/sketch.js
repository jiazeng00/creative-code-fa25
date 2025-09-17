let x, y;

function setup() {
  createCanvas(400, 400);
  background(255);
  x = width / 2;
  y = height / 2;
  stroke(0);
  strokeWeight(2);
}

function draw() {
  point(x, y);
  x += random(-5, 5);
  y += random(-6, 6);
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}