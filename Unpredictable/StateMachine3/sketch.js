let size = 100;
let isBlack = false; 
let clickCount = 0;   
let clicks = 2; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);

  if (isBlack) {
    fill(0);
  } else {
    fill(255);
  }

  rect(width/2, height/2, size, size);
}

function mousePressed() {
  if (mouseX > width/2 - size/2 &&
      mouseX < width/2 + size/2 &&
      mouseY > height/2 - size/2 &&
      mouseY < height/2 + size/2) {

    clickCount++;

    if (clickCount >= clicks) {
      isBlack = !isBlack;  //white

      // Reset click count and update needed clicks
      clickCount = 0;
      if (isBlack) {
        clicks = 3; 
      } else {
        clicks = 2; 
      }
    }
  }
}