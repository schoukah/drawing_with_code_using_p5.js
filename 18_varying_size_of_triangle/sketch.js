/*

Varying the size of the triangle

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;
let circleWidth = 100;
let circleHeight = circleWidth;

// variables for rect
let squareX = 175;
let squareY = 225;
let squareWidth = 100;
let squareHeight = squareWidth;

// variables for triangle
let triangleX1 = 150;
let triangleY1 = 25;
let triangleX2 = 290;
let triangleY2 = 100;
let triangleX3 = 150;
let triangleY3 = 175;
// calculate the centroid of the triangle
let triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
let triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;
let triangleCentreXNew, triangleCentreYNew;

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
  circleWidth = random(width);
  circleHeight = circleWidth;
  ellipse(circleX, circleY, circleWidth, circleHeight);

  // draw the square
  fill('blue');
  squareX = random(width);
  squareY = random(height);
  squareWidth = random(width);
  squareHeight = squareWidth;
  rect(squareX, squareY, squareWidth, squareHeight);

  // draw the triangle
  fill('yellow');
  // generate random coordinates for the new centroid
  triangleCentreXNew = random(width);
  triangleCentreYNew = random(height);
  // calculate new x and y coordinates based on the new centroid
  triangleX1 = triangleX1 + (triangleCentreXNew - triangleCentreX);
  triangleY1 = triangleY1 + (triangleCentreYNew - triangleCentreY);
  triangleX2 = triangleX2 + (triangleCentreXNew - triangleCentreX);
  triangleY2 = triangleY2 + (triangleCentreYNew - triangleCentreY);
  triangleX3 = triangleX3 + (triangleCentreXNew - triangleCentreX);
  triangleY3 = triangleY3 + (triangleCentreYNew - triangleCentreY);
  triangleCentreX = triangleCentreXNew;
  triangleCentreY = triangleCentreYNew;
  push();
  translate(triangleCentreX,triangleCentreY);
  scale(random(.25,3));
  triangle(triangleX1 - triangleCentreX, triangleY1 - triangleCentreY, triangleX2 - triangleCentreX, triangleY2 - triangleCentreY, triangleX3 - triangleCentreX, triangleY3 - triangleCentreY);
  pop();
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
