/*

Animating the placement of shapes

*/

// variables for ellipse
var circleXStart, circleYStart, circleWidthStart, circleHeightStart;
var circleXStop, circleYStop, circleWidthStop, circleHeightStop;

// variables for rect
var squareXStart, squareYStart, squareWidthStart, squareHeightStart;
var squareXStop, squareYStop, squareWidthStop, squareHeightStop;

// variables for triangle
var triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;

// variables for colour
var colours = ['red','yellow','blue'];
shuffleArray(colours);

var circleIsDone = false;
var squareIsDone = false;
var triangleIsDone = false;

function setup() {
  createCanvas(400, 400);
  fill(255,255,255,128);

  circleWidthStart = random(200);
  circleHeightStart = circleWidthStart;
  circleXStart = int(circleWidthStart/2 + random(400-circleWidthStart));
  circleYStart = int(circleHeightStart/2 + random(400-circleHeightStart));
  circleWidthStop = random(200);
  circleHeightStop = circleWidthStop;
  circleXStop = int(circleWidthStop/2 + random(400-circleWidthStop));
  circleYStop = int(circleHeightStop/2 + random(400-circleHeightStop));

  squareWidthStart = random(200);
  squareHeightStart = squareWidthStart;
  squareXStart = int(squareWidthStart/2 + random(400-squareWidthStart));
  squareYStart = int(squareHeightStart/2 + random(400-squareHeightStart));
  squareWidthStop = random(200);
  squareHeightStop = squareWidthStop;
  squareXStop = int(squareWidthStop/2 + random(400-squareWidthStop));
  squareYStop = int(squareHeightStop/2 + random(400-squareHeightStop));

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
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleXStart, circleYStart, circleWidthStart, circleHeightStart);
  circleXStart += (circleXStop-circleXStart)/10;
  circleYStart += (circleYStop-circleYStart)/10;
  if (circleXStop - circleXStart < 1 && circleYStop - circleYStart < 1) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareXStart, squareYStart, squareWidthStart, squareHeightStart);
  squareXStart += (squareXStop-squareXStart)/10;
  squareYStart += (squareYStop-squareYStart)/10;
  if (squareXStop - squareXStart < 1 && squareYStop - squareYStart < 1) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  triangle(triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3);

  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true) {
    circleXStop = int(circleWidthStop/2 + random(400-circleWidthStop));
    circleYStop = int(circleHeightStop/2 + random(400-circleHeightStop));
    squareXStop = int(squareWidthStop/2 + random(400-squareWidthStop));
    squareYStop = int(squareHeightStop/2 + random(400-squareHeightStop));
    circleIsDone = false;
    squareIsDone = false;
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

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
