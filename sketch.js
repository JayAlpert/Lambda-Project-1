
let mySound, amplitude;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('music.mp3');
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(2);
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400)
  fill('red');
  ellipse(150,150,diam,diam);
}
function mousePressed() {
  if (mySound.isPlaying()) {  
    mySound.stop() 
    } else {
    mySound.play()
    }
}


