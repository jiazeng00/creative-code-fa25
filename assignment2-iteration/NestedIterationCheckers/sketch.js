function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  let stepSize = 50;

  for (let x = 0; x < 400; x += stepSize) {
  for (let y = 0; y < 400; y += stepSize) {

    


  let color = map(x, y, x, y, x)

    
    fill(color)
    rect(x, y, 50, 50)
  }
}
}