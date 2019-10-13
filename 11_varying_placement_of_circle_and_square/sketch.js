/*

Varying the placement of the circle and the square

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;

// variables for rect
let squareX = 175;
let squareY = 225;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill('red');
  circleX = random(width);
  circleY = random(height);
  ellipse(circleX, circleY, 100, 100);

  // draw the square
  fill('blue');
  squareX = random(width);
  squareY = random(height);
  rect(squareX, squareY, 115, 125);

  // draw the triangle
  fill('yellow');
  triangle(150,25,290,100,150,175);
}

function drawGraph() {
  stroke('grey');
  strokeWeight(1);
  // draw a grid
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 200, 400, 200);
  line(0, 300, 400, 300);
}
