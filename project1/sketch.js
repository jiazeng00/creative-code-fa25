function setup() {
  createCanvas(500, 500)
  background(220, 0, 0);

}

function draw() {
  //clear()
  
  //red value
  let r = map(mouseX, 0, width, 0, 255)
  let g = map(mouseY, 0, width, 0, 255)
  let size = map(mouseX*mouseY, 0, width*height, 20, 100)
  
  fill(r, g, 120)
  noStroke()
  ellipse(mouseX, mouseY, size, size)
  
  fill(255)
  //text(mouseX, mouseX, mouseY)

  
  
  
}