function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(220);


  stroke(0);
  line(width / 2, 0, width / 2, height/1.5);


  noStroke();
  if (mouseX < width / 2) {
    text("Cursor is on the LEFT", width / 2, height / 1.2);
  } else {
    text("Cursor is on the RIGHT", width / 2, height / 1.2);
  }
}