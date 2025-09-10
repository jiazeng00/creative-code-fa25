function setup() {
  createCanvas(400, 400);
  background(255);

  let spacing = 350 / 8;

  for (let i = 0; i <= 8; i++) {
    let x1 = 50
    let y1 = i * spacing 
    let x2 = i * spacing +50

    line(x1, y1, x2, 350)
  }
}

