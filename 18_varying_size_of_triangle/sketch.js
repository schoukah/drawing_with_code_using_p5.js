/*

Varying the size of the triangle

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;
let circleWidth = 100;
let circleHeight = circleWidth;
let circleNewX, circleNewY, circleNewWidth, circleNewHeight;

// variables for rect
let squareX = 175;
let squareY = 225;
let squareWidth = 100;
let squareHeight = squareWidth;
let squareNewX, squareNewY, squareNewWidth, squareNewHeight;

// variables for triangle
let triangleX1 = 150;
let triangleY1 = 25;
let triangleX2 = 290;
let triangleY2 = 100;
let triangleX3 = 150;
let triangleY3 = 175;
let triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
let triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;
let triangleNewCentreX, triangleNewCentreY, triangleNewX1, triangleNewY1, triangleNewX2, triangleNewY2, triangleNewX3, triangleNewY3;
let triangleScalingFactor;

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
  circleNewX = random(circleX);
  circleNewY = random(circleY);
  circleNewWidth = random(circleWidth);
  circleNewHeight = circleNewWidth;
  ellipse(circleNewX, circleNewY, circleNewWidth, circleNewHeight);

  // draw the square
  fill('blue');
  squareNewX = random(squareX);
  squareNewY = random(squareY);
  squareNewWidth = random(squareWidth);
  squareNewHeight = squareNewWidth;
  rect(squareNewX, squareNewY, squareNewWidth, squareNewHeight);

  // draw the triangle
  // generate a random point to be the new centroid
  triangleNewCentreX = random(100,300);
  triangleNewCentreY = random(100,300);
  // calculate the coordinates of the new triangle
  triangleNewX1 = triangleX1 + (triangleNewCentreX - triangleCentreX);
  triangleNewY1 = triangleY1 + (triangleNewCentreY - triangleCentreY);
  triangleNewX2 = triangleX2 + (triangleNewCentreX - triangleCentreX);
  triangleNewY2 = triangleY2 + (triangleNewCentreY - triangleCentreY);
  triangleNewX3 = triangleX3 + (triangleNewCentreX - triangleCentreX);
  triangleNewY3 = triangleY3 + (triangleNewCentreY - triangleCentreY);

  // generate a number to scale the distance between the vertices and the new centroid
  // to be between half as large or twice as large as the original
  triangleScalingFactor = random(0.5,2);

  fill('yellow');
  triangle(triangleNewX1 * triangleScalingFactor, triangleNewY1 * triangleScalingFactor, triangleNewX2 * triangleScalingFactor, triangleNewY2 * triangleScalingFactor, triangleNewX3 * triangleScalingFactor, triangleNewY3 * triangleScalingFactor);
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
