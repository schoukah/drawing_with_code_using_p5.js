/*

Varying the placment of the triangle

*/

'use strict'

// declare the variables for ellipse
let circleX, circleY, circleWidth, circleHeight;
let circleXNew, circleYNew, circleWidthNew, circleHeightNew, circleIsDone;

// declare the variables for rect
let squareX, squareY, squareWidth, squareHeight;
let squareXNew, squareYNew, squareWidthNew, squareHeightNew, squareIsDone;


// declare the variables for the parameters to triangle
let triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;
let triangleCentreX, triangleCentreY;

// declare the variables for colour
let colours;

function setup() {
  createCanvas(400, 400);

  // assign initial values to the variables for ellipse
  circleX = 75;
  circleY = 275;
  circleWidth = 100;
  circleHeight = circleWidth;
  circleXNew = random(width);
  circleYNew = random(height);
  circleWidthNew = random(width);
  circleHeightNew = circleWidthNew;
  circleIsDone = false;

  // assign initial values to the variables for rect
  // adjust squareX and squareY to be the coordinates of the centre
  squareX = 175 + 100/2;
  squareY = 225 + 100/2;
  squareWidth = 100;
  squareHeight = squareWidth;
  squareXNew = random(width);
  squareYNew = random(height);
  squareWidthNew = random(width);
  squareHeightNew = squareWidthNew;
  squareIsDone = false;

  // assign initial values to the variables for triangle
  triangleX1 = 150;
  triangleY1 = 25;
  triangleX2 = 290;
  triangleY2 = 100;
  triangleX3 = 150;
  triangleY3 = 175;
  // calculate the centroid of the triangle
  triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
  triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;
  // express the coordinates for the triangle in relationship to the centroid
  triangleX1 = triangleX1 - triangleCentreX;
  triangleY1 = triangleY1 - triangleCentreY;
  triangleX2 = triangleX2 - triangleCentreX;
  triangleY2 = triangleY2 - triangleCentreY;
  triangleX3 = triangleX3 - triangleCentreX;
  triangleY3 = triangleY3 - triangleCentreY;

  // assign values to the variables for colour
  colours = ['red','yellow','blue'];

  rectMode(CENTER);
}

function draw() {
  background('lightgrey');

  drawGrid();

  // don't draw a line around the shapes
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleX += (circleXNew-circleX)/100;
  circleY += (circleYNew-circleY)/100;
  circleWidth += (circleWidthNew - circleWidth)/100;
  circleHeight = circleWidth;
  if (abs(circleXNew - circleX) < 1 && abs(circleYNew - circleY) < 1 && abs(circleWidthNew - circleWidth < 1)) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);
  squareX += (squareXNew-squareX)/100;
  squareY += (squareYNew-squareY)/100;
  squareWidth += (squareWidthNew - squareWidth)/100;
  squareHeight = squareWidth;
  if (abs(squareXNew - squareX) < 1 && abs(squareYNew - squareY < 1) && abs(circleWidthNew - circleWidth < 1)) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  push();
  translate(triangleCentreX,triangleCentreY);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  pop();

  // if the shapes are in their new positions and sizes
  if (circleIsDone === true && squareIsDone === true) {
    // generate new values for the parameters and start again
    circleXNew = random(width);
    circleYNew = random(height);
    circleWidthNew = random(width);
    circleHeightNew = circleWidthNew;
    squareXNew = random(width);
    squareYNew = random(height);
    squareWidthNew = random(width);
    squareHeightNew = squareWidthNew;
    triangleCentreX = random(width);
    triangleCentreY = random(height);
    colours = shuffle(colours);
    // reset the flags so the shapes will move to the new positions
    circleIsDone = false;
    squareIsDone = false;
  }
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
