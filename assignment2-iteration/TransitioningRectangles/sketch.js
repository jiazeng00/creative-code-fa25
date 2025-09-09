function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  let stepSize = 20;

  for (let x = 50; x < 330; x += stepSize) {
    
    let y = 350;            
    let h = -x * 1
    
    let color = map(x, 50, 330, 80, 200)
    
    fill(color)
    rect(x, y, 20, h)
  }
}