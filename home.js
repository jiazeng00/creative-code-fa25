let imgs = [];
let objects = [];
let scaleFactor;

function preload() {
  imgs[1] = loadImage('png/1.PNG');
  imgs[2] = loadImage('png/2.png');
  imgs[7] = loadImage('png/7.png');
  imgs[9] = loadImage('png/9.png');
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
  
    // Find the first object that is hovered
    let hovered = null;
    for (let obj of objects) {
      if (obj.isOver()) {
        hovered = obj;
        break; // stop at the first one
      }
    }
  
    // Update & display objects
    for (let obj of objects) {
      obj.update(hovered === obj); // tell it whether it is the hovered one
      obj.display();
    }
  }
  
  // Update method of Bouncer
  update(isHovered) {
    if (!isHovered) {
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
  