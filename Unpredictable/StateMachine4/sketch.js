let isBlack = false;     
let size = 100;          

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(200);   
  stroke(0);
  strokeWeight(2);

  let inside = 
    mouseX > width/2  - size/2 &&
    mouseX < width/2  + size/2 &&
    mouseY > height/2 - size/2 &&
    mouseY < height/2 + size/2;

  if (inside && mouseIsPressed) {
    fill(0);              //black
  } else if (inside) {
    fill(255, 238, 0);    //yellow
  } else {
    fill(255);            //white
  }

  rect(width/2, height/2, size, size);
}