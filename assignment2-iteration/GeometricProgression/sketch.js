let r = 10


function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  
}

function draw() {
  
  for (let s = 1; s < 200; s++) {

    
    ellipse(200, 400, r * 2, r * 2)
    r *= 1.3
  strokeWeight (s)

    }
}