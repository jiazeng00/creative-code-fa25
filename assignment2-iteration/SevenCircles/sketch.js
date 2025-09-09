function setup() {
  createCanvas(400, 400);
  background(220);
  
  let stepSize = width/9;
  
  for (let x = 1; x < width; x+=stepSize){
    ellipse(x+25, 150, stepSize/2, stepSize/2)
  }
}

