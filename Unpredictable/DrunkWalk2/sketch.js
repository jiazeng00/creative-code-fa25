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
  
  let step = int(random(4)); // 1/4 chance
  if (step === 0) {
    x += 2; 
  } else if (step === 1) {
    x -= 2; 
  } else if (step === 2) {
    y += 2; 
  } else {
    y -= 2; 
  }
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}