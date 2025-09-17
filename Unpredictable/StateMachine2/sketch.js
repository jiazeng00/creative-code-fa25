let size = 100;
let isBlack = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  stroke(0); strokeWeight(2);
  
if (isBlack) {
  fill(0);   
} else {
  fill(255);    
}  rectMode(CENTER);
  
  rect(width/2, height/2, size, size);
}

function mousePressed() {
  if (mouseY > (height/2) - (size/2) &&
      mouseY < (height/2) + (size/2) &&
      mouseX > (width/2)  - (size/2) &&
      mouseX < (width/2)  + (size/2)) {
    isBlack = !isBlack; 
  }
}