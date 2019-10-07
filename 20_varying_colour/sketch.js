/*

Varying the colour of shapes

*/

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
let triangleCentreX = (triangleX1 + triangleX2 + triangleX3)/3;
let triangleCentreY = (triangleY1 + triangleY2 + triangleY3)/3;
let triangleCentreXNew, triangleCentreYNew, triangleX1New, triangleY1New, triangleX2New, triangleY2New, triangleX3New, triangleY3New;
let triangleScalingFactor;

// variables for colour
let colours = ['red','yellow','blue'];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightgrey');

  drawGraph();

  stroke('black');
  strokeWeight(0);
  shuffleArray(colours);

  // draw the circle
  fill(colours[0]);
  circleXNew = random(circleX);
  circleYNew = random(circleY);
  circleWidthNew = random(circleWidth);
  circleHeightNew = circleWidthNew;
  ellipse(circleXNew, circleYNew, circleWidthNew, circleHeightNew);

  // draw the square
  fill(colours[1]);
  squareXNew = random(squareX);
  squareYNew = random(squareY);
  squareWidthNew = random(squareWidth);
  squareHeightNew = squareWidthNew;
  rect(squareXNew, squareYNew, squareWidthNew, squareHeightNew);

  // draw the triangle
  fill(colours[2]);
  // draw the triangle
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
  triangleScalingFactor = random(0.5,2);
  triangle(triangleX1New * triangleScalingFactor, triangleY1New * triangleScalingFactor, triangleX2New * triangleScalingFactor, triangleY2New * triangleScalingFactor, triangleX3New * triangleScalingFactor, triangleY3New * triangleScalingFactor);

frameRate(1);
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
        const j = floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
