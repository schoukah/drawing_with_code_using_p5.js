// variables for ellipse
var circleX, circleY;

// variables for rect
var squareX, squareY;

// variables for triangle
var triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;


function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);

  drawGraph();

  // draw the circle
  circleX = 200/2 + random(400-200);
  circleY = 200/2 + random(400-200);
  ellipse(circleX, circleY, 200, 200);

  // draw the square
  squareX = random(400-100);
  squareY = random(400-100);
  rect(squareX, squareY, 100, 100);

  // draw the triangle
  triangleX1 = 150;
  triangleY1 = 25;
  triangleX2 = 290;
  triangleY2 = 100;
  triangleX3 = 150;
  triangleY3 = 175;

  // find the centroid of the triangle
  triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
  triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;

  triangleNewCentreX = random(400);
  triangleNewCentreY = random(400);
  triangleX1 = triangleX1 + (triangleNewCentreX - triangleCentreX);
  triangleX2 = triangleX2 + (triangleNewCentreX - triangleCentreX);
  triangleX3 = triangleX3 + (triangleNewCentreX - triangleCentreX);
  triangleY1 = triangleY1 + (triangleNewCentreY - triangleCentreY);
  triangleY2 = triangleY2 + (triangleNewCentreY - triangleCentreY);
  triangleY3 = triangleY3 + (triangleNewCentreY - triangleCentreY);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
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
