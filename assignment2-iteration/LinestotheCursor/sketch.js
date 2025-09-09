function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw(){
  
    background(220);
  
let cursor = map(mouseX, movedX, mouseX, mouseX, mouseY)


  for (let x = 100; x < 400; x+=20){ 
  line(x, 100, mouseX, cursor)
}

}

