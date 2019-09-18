/*

Varying the colour of shapes

*/

// variables for ellipse
var circleXOld, circleYOld, circleWidthOld, circleHeightOld;
var circleXNew, circleYNew, circleWidthNew, circleHeightNew;

// variables for rect
var squareX, squareY, squareWidth, squareHeight;

// variables for triangle
var triangleX1, triangleY1, triangleX2, triangleY2, triangleX3, triangleY3;

// variables for colour
var colours = ['red','yellow','blue'];
shuffleArray(colours);

var isDone = 0;

function setup() {
  createCanvas(400, 400);
  fill(255,255,255,128);
//  frameRate(1);
  circleWidthOld = random(200);
  circleHeightOld = circleWidthOld;
  circleXOld = int(circleWidthOld/2 + random(400-circleWidthOld));
  circleYOld = int(circleHeightOld/2 + random(400-circleHeightOld));
  circleWidthNew = random(200);
  circleHeightNew = circleWidthNew;
  circleXNew = int(circleWidthNew/2 + random(400-circleWidthNew));
  circleYNew = int(circleHeightNew/2 + random(400-circleHeightNew));
  squareWidth = random(200);
  squareHeight = squareWidth;
  squareX = random(400-squareWidth);
  squareY = random(400-squareHeight);
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
    ellipse(circleXOld, circleYOld, circleWidthOld, circleHeightOld);
  circleXOld += (circleXNew-circleXOld)/10;;
  circleYOld += (circleYNew-circleYOld)/10;
  console.log(circleXOld, circleYOld);


  // draw the square
  fill(colours[1]);
  rect(squareX, squareY, squareWidth, squareHeight);

  // draw the triangle

  fill(colours[2]);
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

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
