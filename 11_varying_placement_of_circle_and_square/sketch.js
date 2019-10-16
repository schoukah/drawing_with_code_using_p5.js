/*

Varying the placement of the circle and the square

*/

// declare the variables for ellipse
let circleX;
let circleY;

// declare the variables for rect
let squareX, squareY;

function setup() {
  createCanvas(400, 400);

  // assign values to the variables for ellipse
  circleX = 75;
  circleY = 275;

  // assign values to the variables for rect
  squareX = 175;
  squareY = 225;

//  noLoop();
}

function draw() {
  background('lightgrey');

  drawGrid();

  // don't draw a line around the shapes
  strokeWeight(0);

  // draw the circle
  fill('red');
  ellipse(circleX, circleY,125-25,325-225);
  circleX = random(width);
  circleY = random(height);

  // draw the square
  fill('blue');
  rect(squareX, squareY, 290-175,350-225);
  squareX = random(width);
  squareY = random(height);

  // draw the triangle
  fill('yellow');
  triangle(150,25,290,100,150,175);

  // set the strokeWeight back to the default
  strokeWeight(1);
}

function mouseClicked() {
  redraw();
}

function drawGrid() {
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
