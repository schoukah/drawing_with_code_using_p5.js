// variables for ellipse
var circleX, circleY, circleWidth, circleHeight;

// variables for rect
var squareX, sqaureY, squareWidth, squareHeight;

// variables for triangle
var triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  drawGraph();

  // draw the circle
  circleX = 75;
  circleY = 275;
  circleWidth = 100;
  circleHeight = 100;
  ellipse(circleX, circleY, circleWidth, circleHeight);

// draw the triangle
  triangle1X = 150;
  triangle1Y = 25;
  triangle2X = 290;
  triangle2Y = 100;
  triangle3X = 150;
  triangle3Y = 175;
  triangle(triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y);

  // draw the square
  squareX = 175;
  sqaureY = 225;
  squareWidth = 115;
  squareHeight = 125;
  rect(squareX, sqaureY, squareWidth, squareHeight);
}

function drawGraph() {
  // draw a grid
  line(100, 0, 100, 400);
  line(200, 0, 200, 400);
  line(300, 0, 300, 400);
  line(0, 100, 400, 100);
  line(0, 200, 400, 200);
  line(0, 300, 400, 300);
}
