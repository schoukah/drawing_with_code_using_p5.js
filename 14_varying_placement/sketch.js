console.log('hi');

// variables for ellipse
var circleX, circleY;

// variables for rect
var squareX, squareY;

// variables for triangle
var triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);

  drawGraph();

  // draw the circle
  circleX = 100/2 + random(400-100);
  circleY = 100/2 + random(400-100);
  ellipse(circleX, circleY, 200, 200);

  // draw the square
  squareX = random(400-100);
  squareY = random(400-100);
  rect(squareX, squareY, 100, 100);

  // draw the triangle
  triangle1X = 150;
  triangle1Y = 25;
  triangle2X = 290;
  triangle2Y = 100;
  triangle3X = 150;
  triangle3Y = 175;
  triangle(triangle1X, triangle1Y, triangle2X, triangle2Y, triangle3X, triangle3Y);

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
