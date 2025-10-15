let wormhole;
let gifs = {};
let transitions = {};
let transitionSounds = {}; //sounds
let movers = []; //current object

let wormholeSize;
let gifSize;
let noiseSpeed = 0.02;

// Transition animation duration
const TRANSITION_FRAMES = 10;
const TRANSITION_FPS = 15;
const TRANSITION_DURATION = (TRANSITION_FRAMES / TRANSITION_FPS) * 1000;


//images
function preload() {
  wormhole = loadImage("wormhole.GIF");

  let states = ["A", "B", "C"];   //3gifs in total, add more later

  for (let s of states) {
    gifs[s] = loadImage(s + ".GIF");
  }

  for (let i = 0; i < states.length; i++) {
    for (let j = 0; j < states.length; j++) {
      if (i !== j) {
        let key = states[i] + "to" + states[j];
        transitions[key] = loadImage(key + ".GIF");

        transitionSounds[key] = loadSound(key + ".wav");
      }
}
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  wormholeSize = windowWidth * 0.35;
  gifSize = windowWidth * 0.05;

  
  
  //spawn one
  movers.push(new Mover("A", width / 2, height / 2));
}


//full screen if screen changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
   wormholeSize = windowWidth * 0.35;
    gifSize = windowWidth * 0.055;
}




function draw() {
  background(0);

image(wormhole, width / 2, height / 2, wormholeSize, wormholeSize);

  for (let m of movers) {
    m.update();
    m.display();
  }
}


//click
function mousePressed() {
  let options = ["A", "B", "C"];
  movers.push(new Mover(random(options), mouseX, mouseY));
}

class Mover {
  constructor(startState, startX, startY) {
    this.state = startState;   //current state
    this.currentGif = gifs[startState];
    this.x = startX;
    this.y = startY;
    this.xoff = random(1000);
    this.yoff = random(2000);
    this.inWormhole = false;
    this.transitioning = false;
    this.lastTransitionTime = 0;
    this.cooldown = 2000; 
  }

  update() {
    if (!this.isTransition()) {
      let angle = noise(this.xoff, this.yoff) * TWO_PI * 2; 
      //circular range
      

      //movements
      let speed = 2.5;
      this.x += cos(angle) * speed;
      this.y += sin(angle) * speed;

      if (this.x < -50) this.x = width + 50;
      if (this.x > width + 50) this.x = -50;
      if (this.y < -50) this.y = height + 50;
      if (this.y > height + 50) this.y = -50;
//perlins
      this.xoff += noiseSpeed;
      this.yoff += noiseSpeed;
    }

    let dx = (this.x - width / 2) / (wormholeSize / 2);
    let dy = (this.y - height / 2) / (wormholeSize / 2);
    
//transition area measurements
    let inside = sqrt(dx * dx + dy * dy) < 0.8; 

 //cool down
    let now = millis();
    if (!this.inWormhole && inside && !this.transitioning && (now - this.lastTransitionTime > this.cooldown)) {
      this.startTransition();
    }

    this.inWormhole = inside;
  }

  display() {
    image(this.currentGif, this.x, this.y, gifSize, gifSize);
  }

  isTransition() {
    return this.state.includes("to");    // if the current Mover is in transition state
  }

  startTransition() {
    this.transitioning = true;

    let possibleNext = Object.keys(gifs).filter(s => s !== this.state);
    let next = random(possibleNext);
    let key = this.state + "to" + next;

    if (transitions[key]) {
      this.state = key;
      this.currentGif = transitions[key];

      
      
      
      
      
//sounds
if (transitionSounds[key]) {
if (transitionSounds[key].isPlaying()) {
      transitionSounds[key].stop();
        }
              transitionSounds[key].play();
        }

      
      // => arrow function
 setTimeout(() => {
        this.state = next;
        this.currentGif = gifs[next];
        this.xoff = random(1000);
        this.yoff = random(2000);
        this.inWormhole = true;
        this.transitioning = false;
        this.lastTransitionTime = millis();
      }, TRANSITION_DURATION);
   }
}
}
