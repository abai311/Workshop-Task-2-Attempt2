var x = 0;

function setup() {
  createCanvas(200, 200);
}

function mousePressed() {
  setTimeout(rainbow,2000);
}

function rainbow() {
  createP ('rAiNbOw');
}

function draw() {
  background(220);
  stroke(255);
  line(x,0,x,height);
  
  x = x + 3;
  if (x>width) {
    x = 0
  }
}