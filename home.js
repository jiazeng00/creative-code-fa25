let imgs = [];
let objects = [];
let scaleFactor;

function preload() {
  imgs[1] = loadImage('project1/png/1.PNG');
  imgs[2] = loadImage('project1/png/2.png');
  imgs[7] = loadImage('project1/png/7.png');
  imgs[9] = loadImage('project1/png/9.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Scale relative to canvas (e.g., 10% of canvas width)
  scaleFactor = width * 0.1;

  // Create image objects
  objects.push(new Bouncer(imgs[1], "Project 1", "project1/index.html"));
  objects.push(new Bouncer(imgs[2], "Project 2", "project2/index.html"));
  objects.push(new Bouncer(imgs[7], "Project 7", "project7/index.html"));
  objects.push(new Bouncer(imgs[9], "Project 9", "project9/index.html"));

  textAlign(CENTER, CENTER);
  textSize(15);
  fill(0);
}

function draw() {
  background(255);

  for (let obj of objects) {
    obj.update();
    obj.display();
  }
}

function mousePressed() {
  for (let obj of objects) {
    if (obj.isOver()) {
      window.location.href = obj.url;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = width * 0.1; // adjust on resize
}

// Class for bouncing image objects
class Bouncer {
  constructor(img, label, url) {
    this.img = img;
    this.label = label;
    this.url = url;

    // Use natural image size, scaled proportionally
    this.w = (this.img.width / this.img.height) * scaleFactor;
    this.h = scaleFactor;

    this.x = random(width - this.w);
    this.y = random(height - this.h);
    this.dx = random([-3, 3]);
    this.dy = random([-2, 2]);
  }

  update() {
    if (!this.isOver()) {
      this.x += this.dx;
      this.y += this.dy;

      // Bounce off edges
      if (this.x <= 0 || this.x + this.w >= width) {
        this.dx *= -1;
      }
      if (this.y <= 0 || this.y + this.h >= height) {
        this.dy *= -1;
      }
    }
  }

  display() {
    image(this.img, this.x, this.y, this.w, this.h);

    if (this.isOver()) {
      text(this.label, this.x + this.w / 2, this.y - 20);
    }
  }

  isOver() {
    return mouseX > this.x && mouseX < this.x + this.w &&
           mouseY > this.y && mouseY < this.y + this.h;
  }
}
