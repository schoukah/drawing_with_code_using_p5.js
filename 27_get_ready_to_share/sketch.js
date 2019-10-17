/*

Animating the colours

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
let triangleCentreX, triangleCentreY, triangleScale;
let triangleCentreXNew, triangleCentreYNew, triangleIsDone, triangleScaleNew;


// variables for colour
let colours, coloursNew;

function setup() {
  createCanvas(windowWidth,windowHeight);

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
  // set the initial size
  triangleScale = 1;
  // set the centroid and scale for the new triangle
  triangleCentreXNew = random(width);
  triangleCentreYNew = random(height);
  triangleScaleNew = random(.1,3);
  triangleIsDone = false;

  // assign values to the variables for colour
  colours = ['red','yellow','blue'];
  // initialize the array with new colour format
  colours = [ [255,0,0,196], [255,255,0,196], [0,0,255,196] ];
  coloursNew = shuffle([ [255,0,0,196], [255,255,0,196], [0,0,255,196] ]);

  rectMode(CENTER);
}

function draw() {
  background('white');

  // drawGrid();

  // don't draw a line around the shapes
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleX, circleY, circleWidth, circleHeight);
  circleX += (circleXNew-circleX)/100;
  circleY += (circleYNew-circleY)/100;
  circleWidth += (circleWidthNew - circleWidth)/100;
  circleHeight = circleWidth;
  colours[0][0] += (coloursNew[0][0] - colours[0][0])/100;
  colours[0][1] += (coloursNew[0][1] - colours[0][1])/100;
  colours[0][2] += (coloursNew[0][2] - colours[0][2])/100;
  if (abs(circleXNew - circleX) < 1 && abs(circleYNew - circleY) < 1 && abs(circleWidthNew - circleWidth) < 1 &&
    abs(coloursNew[0][0] - colours[0][0]) < 1 && abs(coloursNew[0][1] - colours[0][1]) < 1 && abs(coloursNew[0][2] - colours[0][2]) < 1 ) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);
  squareX += (squareXNew-squareX)/100;
  squareY += (squareYNew-squareY)/100;
  squareWidth += (squareWidthNew - squareWidth)/100;
  squareHeight = squareWidth;
  colours[1][0] += (coloursNew[1][0] - colours[1][0])/100;
  colours[1][1] += (coloursNew[1][1] - colours[1][1])/100;
  colours[1][2] += (coloursNew[1][2] - colours[1][2])/100;
  if (abs(squareXNew - squareX) < 1 && abs(squareYNew - squareY) < 1 && abs(circleWidthNew - circleWidth) < 1 &&
    abs(coloursNew[1][0] - colours[1][0]) < 1 && abs(coloursNew[1][1] - colours[1][1]) < 1 && abs(coloursNew[1][2] - colours[1][2]) < 1 ) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  push();
  translate(triangleCentreX,triangleCentreY);
  scale(triangleScale);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);
  pop();
  triangleCentreX += (triangleCentreXNew - triangleCentreX)/100;
  triangleCentreY += (triangleCentreYNew - triangleCentreY)/100;
  triangleScale += (triangleScaleNew - triangleScale)/100;
  colours[2][0] += (coloursNew[2][0] - colours[2][0])/100;
  colours[2][1] += (coloursNew[2][1] - colours[2][1])/100;
  colours[2][2] += (coloursNew[2][2] - colours[2][2])/100;
  if (abs(triangleCentreXNew - triangleCentreX) < 1 && abs(triangleCentreYNew - triangleCentreY) < 1 && abs(triangleScale - triangleScaleNew) < .1 &&
    abs(coloursNew[2][0] - colours[2][0]) < 1 && abs(coloursNew[2][1] - colours[2][1]) < 1 && abs(coloursNew[2][2] - colours[2][2]) < 1 ) {
    triangleIsDone = true;
  }

  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true && triangleIsDone === true) {
    // generate new parameter values and start again
    circleXNew = random(width);
    circleYNew = random(height);
    circleWidthNew = random(width);
    circleHeightNew = circleWidthNew;
    squareXNew = random(width);
    squareYNew = random(height);
    squareWidthNew = random(width);
    squareHeightNew = squareWidthNew;
    triangleCentreXNew = random(width);
    triangleCentreYNew = random(height);
    triangleScaleNew = random(.25,3);
    coloursNew = shuffle([ [255,0,0,196], [255,255,0,196], [0,0,255,196] ]);
    // reset the flags so the shapes will move to the new positions
    circleIsDone = false;
    squareIsDone = false;
    triangleIsDone = false;
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
