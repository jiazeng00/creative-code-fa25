function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw(){
  for (let x = -1600; x < 2000; x+=50){ 
  line(x, 400, 200, -50)
}

}


// x1
// Number: the x-coordinate of the first point.
// y1
// Number: the y-coordinate of the first point.
// x2
// Number: the x-coordinate of the second point.
// y2
// Number: the y-coordinate of the second point.
// z1
// Number: the z-coordinate of the first point.
// z2
// Number: the z-coordinate of the second point.