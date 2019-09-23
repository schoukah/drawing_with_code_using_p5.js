/*

Adding variables

*/

// variables for ellipse
var circleX, circleY, circleWidth, circleHeight;

// variables for rect
var squareX, sqaureY, squareWidth, squareHeight;

// variables for triangle
var triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  circleX = 75;
  circleY = 275;
  circleWidth = 100;
  circleHeight = 100;
  fill('red');
  ellipse(circleX, circleY, circleWidth, circleHeight);

  // draw the square
  squareX = 175;
  sqaureY = 225;
  squareWidth = 115;
  squareHeight = 125;
  fill('blue');
  rect(squareX, sqaureY, squareWidth, squareHeight);

  // draw the triangle
  triangleX1 = 150;
  triangleY1 = 25;
  triangleX2 = triangleX1 + (290 - triangleX1);
  triangleY2 = triangleY1 + (100 - triangleY1);
  triangleX3 = triangleX1 + (150 - triangleX1);
  triangleY3 = triangleY1 + (175 - triangleY1);
  fill('yellow');
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
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
