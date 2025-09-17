let isBlack = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  stroke(0); 
  strokeWeight(2);
if (isBlack) {
  fill(0);     
} else {
  fill(255);    
}
  rectMode(CENTER);
  rect(width/2, height/2, 100, 100);
}

function mousePressed() {
  if (mouseY > (height/2) - (100) &&
      mouseY < (height/2) + (100) &&
      mouseX > (width/2)  - (100) &&
      mouseX < (width/2)  + (100)) {
    if (!isBlack) isBlack = true;
  }
}