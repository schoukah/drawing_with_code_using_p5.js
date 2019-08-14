function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}

function draw() {
  background('lightgrey');
  
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
  triangle(150,25,290,100,150,175);
  fill('red');
  ellipse(75,275,100);
  fill('blue');
  rect(175,225,290,350);
}