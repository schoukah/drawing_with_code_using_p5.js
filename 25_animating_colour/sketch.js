/*

Animating the colours

*/

'use strict'
// variables for ellipse
let circleX = 75;
let circleY = 275;
let circleWidth = 100;
let circleHeight = circleWidth;
let circleXNew, circleYNew, circleWidthNew, circleHeightNew;

// variables for rect
let squareX = 175;
let squareY = 225;
let squareWidth = 100;
let squareHeight = squareWidth;
let squareXNew, squareYNew, squareWidthNew, squareHeightNew;

// variables for triangle
let triangleX1 = 150;
let triangleY1 = 25;
let triangleX2 = 290;
let triangleY2 = 100;
let triangleX3 = 150;
let triangleY3 = 175;
let triangleScale = 1;
// calculate the centroid of the triangle
let triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
let triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;
let triangleCentreXNew, triangleCentreYNew, triangleScaleNew;
// express the coordinates for the triangle in relationship to the centroid
triangleX1 = triangleX1 - triangleCentreX;
triangleY1 = triangleY1 - triangleCentreY;
triangleX2 = triangleX2 - triangleCentreX;
triangleY2 = triangleY2 - triangleCentreY;
triangleX3 = triangleX3 - triangleCentreX;
triangleY3 = triangleY3 - triangleCentreY;

// variables for colour
let colours = ['red','yellow', 'blue'];
let alpha;
let coloursNew;

// variables for animation flags
let circleIsDone = false;
let squareIsDone = false;
let triangleIsDone = false;

function setup() {
  createCanvas(400, 400);

  // initialize the parameters for the new circle
  circleXNew = random(width);
  circleYNew = random(height);
  circleWidthNew = random(width);
  circleHeightNew = circleWidthNew;

  // set the initial parameters for the new square
  squareXNew = random(width);
  squareYNew = random(height);
  squareWidthNew = random(width);
  squareHeightNew = squareWidthNew;

  // set the initial centroid for the new triangle
  triangleCentreXNew = random(width);
  triangleCentreYNew = random(height);
  triangleScaleNew = random(.5,3);

  // initialize the array with new colour format
  alpha = random(128,255);
  colours = [ [255,0,0,alpha], [255,255,0,alpha], [0,0,255,alpha] ];
  coloursNew = shuffle(colours);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
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
  if (circleXNew - circleX < 1 && circleYNew - circleY < 1 && circleWidthNew - circleWidth < 1 &&
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
  if (squareXNew - squareX < 1 && squareYNew - squareY < 11 && squareWidthNew - squareWidth < 1 &&
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
  if (triangleCentreXNew - triangleCentreX < 1 && triangleCentreYNew - triangleCentreY && triangleScale - triangleScaleNew < .1 &&
    abs(coloursNew[2][0] - colours[2][0]) < 1 && abs(coloursNew[2][1] - colours[2][1]) < 1 && abs(coloursNew[2][2] - colours[2][2]) < 1 ) {
    triangleIsDone = true;
  }
  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true && triangleIsDone === true) {
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
    colours = coloursNew;
    alpha = random(128,255);
    coloursNew = shuffle([ [255,0,0,alpha], [255,255,0,alpha], [0,0,255,alpha] ]);
    circleIsDone = false;
    squareIsDone = false;
    triangleIsDone = false;
  }
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
