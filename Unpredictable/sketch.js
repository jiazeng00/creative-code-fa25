let t = 0; //time

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noCursor();
}

function draw() {
  for (let i = 0; i < 150; i++) {
    let x = mouseX + map(noise(t + i * 0.05), 0, 1, -150, 150) + random(-15, 15);
    let y = mouseY + map(noise(t * 0.7 + i * 0.05), 0, 1, -150, 150) + random(-15, 15);

    stroke(0, random(40, 180));
    strokeWeight(random(0.5, 3));
    point(x, y);
  }

  t += 0.02;

  noStroke();
  fill(255, 105, 180, 110);
  ellipse(mouseX, mouseY, 30, 30);
}