/*

Varying the placment of the triangle

*/

// variables for ellipse
let circleX = 75;
let circleY = 275;

// variables for rect
let squareX = 175;
let squareY = 225;

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


function setup() {
  createCanvas(400, 400);
}

function draw() {
  frameRate(1);
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
  triangleNewCentreX = int(random(400));
  triangleNewCentreY = int(random(400));
  console.log(triangleNewCentreX,triangleNewCentreY, triangleCentreX, triangleCentreY);
  triangleNewX1 = triangleX1 + (triangleNewCentreX - triangleCentreX);
  triangleNewY1 = triangleY1 + (triangleNewCentreY - triangleCentreY);
  triangleNewX2 = triangleX2 + (triangleNewCentreX - triangleCentreX);
  triangleNewY2 = triangleY2 + (triangleNewCentreY - triangleCentreY);
  triangleNewX3 = triangleX3 + (triangleNewCentreX - triangleCentreX);
  triangleNewY3 = triangleY3 + (triangleNewCentreY - triangleCentreY);
  fill('yellow');
  triangle(triangleNewX1, triangleNewY1, triangleNewX2, triangleNewY2, triangleNewX3, triangleNewY3);
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
