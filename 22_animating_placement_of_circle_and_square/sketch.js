/*

Animating the placement of the circle and square

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
let triangleCentreXNew, triangleCentreYNew, triangleX1New, triangleY1New, triangleX2New, triangleY2New, triangleX3New, triangleY3New;
let triangleScalingFactor = 1;

// variables for colour
let colours = ['red','yellow','blue'];

// variables for animation flags
let circleIsDone = false;
let squareIsDone = false;

function setup() {
  createCanvas(400, 400);
  fill(255,255,255,128);

  // initialize the parameters for the new circle
  circleXNew = random(circleX);
  circleYNew = random(circleY);
  circleWidthNew = random(circleWidth);
  circleHeightNew = circleWidthNew;

  // set the initial parameters for the new square
  squareXNew = random(squareX);
  squareYNew = random(squareY);
  squareWidthNew = random(squareWidth);
  squareHeightNew = squareWidthNew;

  shuffleArray(colours);
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
  if (circleXNew - circleX < 1 && circleYNew - circleY < 1) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);
  squareX += (squareXNew-squareX)/100;
  squareY += (squareYNew-squareY)/100;
  if (squareXNew - squareX < 1 && squareYNew - squareY < 1) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  triangle(triangleX1 * triangleScalingFactor, triangleY1 * triangleScalingFactor, triangleX2 * triangleScalingFactor, triangleY2 * triangleScalingFactor, triangleX3 * triangleScalingFactor, triangleY3 * triangleScalingFactor);

  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true) {
    circleXNew = int(circleWidthNew/2 + random(400-circleWidthNew));
    circleYNew = int(circleHeightNew/2 + random(400-circleHeightNew));
    squareXNew = int(squareWidthNew/2 + random(400-squareWidthNew));
    squareYNew = int(squareHeightNew/2 + random(400-squareHeightNew));
    // set the initial parameters for the new triangle
    // generate a random point to be the new centroid
    triangleCentreXNew = random(100,300);
    triangleCentreYNew = random(100,300);
    // calculate the coordinates of the new triangle
    triangleX1New = triangleX1 + (triangleCentreXNew - triangleCentreX);
    triangleY1New = triangleY1 + (triangleCentreYNew - triangleCentreY);
    triangleX2New = triangleX2 + (triangleCentreXNew - triangleCentreX);
    triangleY2New = triangleY2 + (triangleCentreYNew - triangleCentreY);
    triangleX3New = triangleX3 + (triangleCentreXNew - triangleCentreX);
    triangleY3New = triangleY3 + (triangleCentreYNew - triangleCentreY);
    // generate a number to scale the distance between the vertices and the new centroid
    // to be between half as large or twice as large as the original
//    triangleScalingFactor = random(0.5,2);

    circleIsDone = false;
    squareIsDone = false;
  }
//  frameRate(24);
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

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
