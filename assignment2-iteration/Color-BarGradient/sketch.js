let lowCol = 80
let highCol = 200

function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw() {
  
  let stepSize = 23;

  for (let x = 5; x < 380; x += stepSize) {
    
    let y = 395;            
    
    
    
    let c = map(x, 200, 330, lowCol, highCol);

    
    noStroke()
    fill(c, 130, 90)
    rect(x, y, 20, -380)
  }
}

function mousePressed() {
  lowCol = random(255);
  highCol = random(255);
  
}
