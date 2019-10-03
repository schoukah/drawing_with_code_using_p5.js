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
var triangleX1Start, triangleY1Start, triangleX2Start, triangleY2Start, triangleX3Start, triangleY3Start;
var triangleX1Stop, triangleY1Stop, triangleX2Stop, triangleY2Stop, triangleX3Stop, triangleY3Stop;
var triangleScale = 1;

// variables for colour
var colours = ['red','yellow','blue'];

var circleIsDone = false;
var squareIsDone = false;
var triangleIsDone = false;

function setup() {
  createCanvas(400, 400);
  fill(255,255,255,128);

  // set the initial parameters for the circle
  circleWidthStart = random(200);
  circleHeightStart = circleWidthStart;
  circleXStart = int(circleWidthStart/2 + random(400-circleWidthStart));
  circleYStart = int(circleHeightStart/2 + random(400-circleHeightStart));
  circleWidthStop = random(200);
  circleHeightStop = circleWidthStop;
  circleXStop = int(circleWidthStop/2 + random(400-circleWidthStop));
  circleYStop = int(circleHeightStop/2 + random(400-circleHeightStop));

  // set the initial parameters for the square
  squareWidthStart = random(200);
  squareHeightStart = squareWidthStart;
  squareXStart = int(squareWidthStart/2 + random(400-squareWidthStart));
  squareYStart = int(squareHeightStart/2 + random(400-squareHeightStart));
  squareWidthStop = random(200);
  squareHeightStop = squareWidthStop;
  squareXStop = int(squareWidthStop/2 + random(400-squareWidthStop));
  squareYStop = int(squareHeightStop/2 + random(400-squareHeightStop));

  // set the initial paramerts for the triangle
  triangleX1Start = 150;
  triangleY1Start = 25;
  triangleX2Start = 290;
  triangleY2Start = 100;
  triangleX3Start = 150;
  triangleY3Start = 175;

  // find the centroid of the triangle
  triangleCentreXStart = (triangleX1Start + triangleX2Start + triangleX3Start)/3;
  triangleCentreYStart = (triangleY1Start + triangleY2Start + triangleY3Start)/3;

  // generate a random point to be the new centroid
  triangleCentreXStop = random(100,300);
  triangleCentreYStop = random(100,300);

  // generate new coordinates that maintain the shape of the original triangle
  // generate a number to scale the distance between the vertices and the new centroid
  // random value between 0.1 and the shortest distance between the centroid and the four sides
  var triangleScale = random(0.1,2);

  // calculate the coordinates of the new triangle
  triangleX1Stop = (triangleX1Start + (triangleCentreXStop - triangleCentreXStart)) * triangleScale;
  triangleX2Stop = (triangleX2Start + (triangleCentreXStop - triangleCentreXStart)) * triangleScale;
  triangleX3Stop = (triangleX3Start + (triangleCentreXStop - triangleCentreXStart)) * triangleScale;
  triangleY1Stop = (triangleY1Start + (triangleCentreYStop - triangleCentreYStart)) * triangleScale;
  triangleY2Stop = (triangleY2Start + (triangleCentreYStop - triangleCentreYStart)) * triangleScale;
  triangleY3Stop = (triangleY3Start + (triangleCentreYStop - triangleCentreYStart)) * triangleScale;
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);

  // draw the circle
  fill(colours[0]);
  ellipse(circleXStart, circleYStart, circleWidthStart, circleHeightStart);
  circleXStart += (circleXStop-circleXStart)/100;
  circleYStart += (circleYStop-circleYStart)/100;
  if (circleXStop - circleXStart < 1 && circleYStop - circleYStart < 1) {
    circleIsDone = true;
  }

  // draw the square
  fill(colours[1]);
  rect(squareXStart, squareYStart, squareWidthStart, squareHeightStart);
  squareXStart += (squareXStop-squareXStart)/100;
  squareYStart += (squareYStop-squareYStart)/100;
  if (squareXStop - squareXStart < 1 && squareYStop - squareYStart < 1) {
    squareIsDone = true;
  }

  // draw the triangle
  fill(colours[2]);
  triangle(triangleX1Start, triangleY1Start, triangleX2Start, triangleY2Start, triangleX3Start, triangleY3Start);
  triangleX1Start += (triangleX1Stop - triangleX1Start)/100 * triangleScale;
  triangleX2Start += (triangleX2Stop - triangleX2Start)/100 * triangleScale;
  triangleX3Start += (triangleX3Stop - triangleX3Start)/100 * triangleScale;
  triangleY1Start += (triangleY1Stop - triangleY1Start)/100 * triangleScale;
  triangleY2Start += (triangleY2Stop - triangleY2Start)/100 * triangleScale;
  triangleY3Start += (triangleY3Stop - triangleY3Start)/100 * triangleScale;


  // if the shapes are in their new positions
  // generate new stop coordinates and start again
  if (circleIsDone === true && squareIsDone === true) {
    circleXStop = int(circleWidthStop/2 + random(400-circleWidthStop));
    circleYStop = int(circleHeightStop/2 + random(400-circleHeightStop));
    squareXStop = int(squareWidthStop/2 + random(400-squareWidthStop));
    squareYStop = int(squareHeightStop/2 + random(400-squareHeightStop));
    triangleX1Stop = (triangleX1Stop+ (triangleCentreXStop - triangleCentreXStart));
    triangleX2Stop = (triangleX2Stop+ (triangleCentreXStop - triangleCentreXStart));
    triangleX3Stop = (triangleX3Stop+ (triangleCentreXStop - triangleCentreXStart));
    triangleY1Stop = (triangleY1Stop+ (triangleCentreYStop - triangleCentreYStart));
    triangleY2Stop = (triangleY2Stop+ (triangleCentreYStop - triangleCentreYStart));
    triangleY3Stop = (triangleY3Stop+ (triangleCentreYStop - triangleCentreYStart));
    circleIsDone = false;
    squareIsDone = false;
  }
  frameRate(24);
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
