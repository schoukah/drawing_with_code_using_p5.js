/*

Varying the size of shapes

*/

// variables for ellipse
var circleX, circleY, circleWidth, circleHeight;

// variables for rect
var squareX, squareY, squareWidth, squareHeight;

// variables for triangle
var triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;

function setup() {
  createCanvas(400, 400);
  fill(255,255,255,128);
  frameRate(1);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  circleWidth = random(200);
  circleHeight = circleWidth;
  circleX = circleWidth/2 + random(400-circleWidth);
  circleY = circleHeight/2 + random(400-circleHeight);
  fill('red');
  ellipse(circleX, circleY, circleWidth, circleHeight);

  // draw the square
  squareWidth = random(200);
  squareHeight = squareWidth;
  squareX = random(400-squareWidth);
  squareY = random(400-squareHeight);
  fill('blue');
  rect(squareX, squareY, squareWidth, squareHeight);

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

  // generate a random point to be the new centroid
  triangleNewCentreX = random(100,300);
  triangleNewCentreY = random(100,300);

  // generate a number to scale the distance between the vertices and the new centroid
  // random value between 0.1 and the shortest distance between the centroid and the four sides
  var triangleScale = random(0.1,2);

  // calculate the coordinates of the new triangle
  triangleX1 = (triangleX1 + (triangleNewCentreX - triangleCentreX)) * triangleScale;
  triangleX2 = (triangleX2 + (triangleNewCentreX - triangleCentreX)) * triangleScale;
  triangleX3 = (triangleX3 + (triangleNewCentreX - triangleCentreX)) * triangleScale;
  triangleY1 = (triangleY1 + (triangleNewCentreY - triangleCentreY)) * triangleScale;
  triangleY2 = (triangleY2 + (triangleNewCentreY - triangleCentreY)) * triangleScale;
  triangleY3 = (triangleY3 + (triangleNewCentreY - triangleCentreY)) * triangleScale;

  // draw the triangle
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
