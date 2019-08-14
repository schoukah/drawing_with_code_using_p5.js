function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}

function draw() {
  background('lightgrey');
  
  // move this into a function to introduce functions
  stroke('grey');
  strokeWeight(1);
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  line(0,100,400,100);
  line(0,200,400,200);
  line(0,300,400,300);
  
  stroke('black');
  strokeWeight(0);
  fill('yellow');
  triangle(random(400),random(400),random(400),random(400),random(400),random(400));
  fill('red');
  ellipse(random(400),random(400),random(400));
  fill('blue');
  rect(random(400),random(400),random(400),random(400));
  
  frameRate(1);
}