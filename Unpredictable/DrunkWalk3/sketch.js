let xNoise = 0;   
let yNoise = 100;  
let sizeNoise = 200;
let fade = 2; //I dont know how to make trace go away

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let x = noise(xNoise) * width;
  let y = noise(yNoise) * height;
  let s = noise(sizeNoise) * 50 + 10; // circle size

  fill(0, 0, 50, fade);
  noStroke()
  ellipse(x, y, s, s); 
 
    fill(255);
    noStroke()
    ellipse(x, y, s/2, s/2);  //the newest ellipse



  xNoise = xNoise + 0.01;
  yNoise = yNoise + 0.01;
  sizeNoise = sizeNoise + 0.005;
  fade = fade + 0.1;
}