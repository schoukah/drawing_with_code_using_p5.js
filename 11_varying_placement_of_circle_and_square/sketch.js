/*

Varying the placement of the circle and the square

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;

// variables for rect
let squareX = 175;
let squareY = 225;

// variables for triangle
var triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill('red');
  ellipse(random(circleX), random(circleY), 100, 100);

  // draw the square
  fill('blue');
  rect(random(squareX), random(squareY), 115, 125);

  // draw the triangle
  triangle1X = 150;
  triangle1Y = 25;
  triangle2X = 290;
  triangle2Y = 100;
  triangle3X = 150;
  triangle3Y = 175;
  fill('yellow');
  triangle(triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y);

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
